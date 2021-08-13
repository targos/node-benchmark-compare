import Summary from 'summary';
import ttest from 'ttest';

import { parseCsvLine } from './parseCsvLine.js';

export function analyseCsv(contents) {
  // Parse the CSV file.
  const rawData = contents
    .split('\n')
    .filter((line) => line.trim() !== '')
    .map(parseCsvLine);

  // Transform the data into objects.
  const [headers] = rawData;
  const data = rawData
    .slice(1)
    .map((line) =>
      Object.fromEntries(headers.map((header, i) => [header, line[i]])),
    );

  const names = new Set();
  data.forEach((line) => {
    line.name = `${line.filename} ${line.configuration}`;
    names.add(line.name);
  });

  // Calculate the statistics table.
  const statistics = Array.from(names, (name) => {
    const subData = data.filter((line) => line.name === name);

    const oldRate = subData
      .filter((line) => line.binary === 'old')
      .map((line) => line.rate);
    const oldSummary = new Summary(oldRate);

    const newRate = subData
      .filter((line) => line.binary === 'new')
      .map((line) => line.rate);
    const newSummary = new Summary(newRate);

    const improvementValue =
      ((newSummary.mean() - oldSummary.mean()) / oldSummary.mean()) * 100;
    const improvement = `${improvementValue.toFixed(2)} %`;

    // Check if there is enough data to calculate the p-value.
    if (oldSummary.size() <= 1 && newSummary.size() <= 1) {
      return {
        name,
        confidence: 'NA',
        improvement,
        'accuracy (*)': 'NA',
        'accuracy (**)': 'NA',
        'accuracy (***)': 'NA',
      };
    }

    const w = ttest(oldSummary, newSummary, {
      varEqual: false,
    });
    const pValue = w.pValue();
    let confidence = '';
    if (pValue < 0.001) {
      confidence = '***';
    } else if (pValue < 0.01) {
      confidence = '**';
    } else if (pValue < 0.05) {
      confidence = '*';
    }

    return {
      name,
      confidence,
      improvement,
      'accuracy (*)': getConfidence(w, oldSummary, 0.05),
      'accuracy (**)': getConfidence(w, oldSummary, 0.01),
      'accuracy (***)': getConfidence(w, oldSummary, 0.001),
    };
  });

  statistics.sort((stat1, stat2) => stat1.name.localeCompare(stat2.name));

  const table = statistics.map((line) => [
    line.name,
    line.confidence,
    line.improvement,
    line['accuracy (*)'],
    line['accuracy (**)'],
    line['accuracy (***)'],
  ]);
  table.unshift([
    '',
    'confidence',
    'improvement',
    'accuracy (*)',
    '(**)',
    '(***)',
  ]);

  const max = Array(table[0].length).fill(0);
  table.forEach((line) => {
    for (let i = 0; i < max.length; i++) {
      max[i] = Math.max(max[i], line[i].length);
    }
  });

  // Format the results

  const out = [];

  // Table
  for (const line of table) {
    let renderedLine = '';
    for (let i = 0; i < line.length; i++) {
      renderedLine += line[i][i === 0 ? 'padEnd' : 'padStart'](max[i], ' ');
      if (i < line.length - 1) {
        // Add a space between columns
        renderedLine += ' ';
      }
    }
    out.push(renderedLine);
  }

  // Empty line
  out.push('');

  // False-positive disclaimer
  out.push(
    'Be aware that when doing many comparisons the risk of a false-positive result increases.',
  );
  out.push(
    `In this case, there are ${statistics.length} comparisons, you can thus expect the following amount of false-positive results:`,
  );
  out.push(
    `  ${(statistics.length * 0.05).toFixed(
      2,
    )} false positives, when considering a   5% risk acceptance (*, **, ***),`,
  );
  out.push(
    `  ${(statistics.length * 0.01).toFixed(
      2,
    )} false positives, when considering a   1% risk acceptance (**, ***),`,
  );
  out.push(
    `  ${(statistics.length * 0.001).toFixed(
      2,
    )} false positives, when considering a 0.1% risk acceptance (***)`,
  );

  return out.join('\n');
}

function getConfidence(w, oldSummary, alpha) {
  w._options.alpha = alpha;
  const confidence = w.confidence();
  const interval = (confidence[1] - confidence[0]) / 2;
  const diff = (interval / oldSummary.mean()) * 100;
  return `±${diff.toFixed(2)}%`;
}
