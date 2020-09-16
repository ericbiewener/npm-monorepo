import { splice } from './splice'

export const spliceIndeces = <V extends unknown>(arr: V[], start: number, end: number, ...items) =>
  splice(arr, start, end - start + 1, ...items)
