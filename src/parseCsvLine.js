const State = {
  NONE: 0,
  STRING: 1,
  NUMBER: 2,
};

export function parseCsvLine(data) {
  let state = State.NONE;
  let escaped = false;
  let tmp = '';
  const items = [];

  let i = 0;
  for (const char of data) {
    if (
      char === '\\' &&
      (state !== State.STRING || data[i + 1] === '"') &&
      (escaped = !escaped)
    ) {
      i++;
      continue;
    }

    if (state !== State.STRING && char.trim() === '') {
      // ignore whitespaces
    } else if (state === State.NONE && char === '"') {
      state = State.STRING;
    } else if (state === State.STRING && char === '"') {
      if (escaped) {
        tmp += '"';
      } else {
        state = State.NONE;
      }
    } else if (state !== State.STRING && char === ',') {
      items.push(state === State.NUMBER ? Number(tmp) : tmp);
      state = State.NONE;
      tmp = '';
    } else if (state === State.NONE) {
      state = State.NUMBER;
      tmp = char;
    } else {
      tmp += char;
    }

    escaped = false;
    i++;
  }

  if (tmp) {
    items.push(state === State.NUMBER ? Number(tmp) : tmp);
  }

  return items;
}
