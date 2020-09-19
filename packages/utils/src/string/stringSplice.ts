import { stringSpliceIndeces } from './stringSpliceIndeces'

export const stringSplice = (str: string, start: number, count: number, insertStr = '') =>
  stringSpliceIndeces(str, start, start + count - 1, insertStr)
