import { splice } from './splice'

export const spliceIndeces = <V extends unknown>(
  arr: V[],
  start: number,
  end: number,
  ...items: V[]
) => splice(arr, start, end - start + 1, ...items)
