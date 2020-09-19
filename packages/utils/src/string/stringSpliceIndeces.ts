export const stringSpliceIndeces = (str: string, start: number, end: number, insertStr = '') =>
  `${str.slice(0, start)}${insertStr}${str.slice(end + 1)}`
