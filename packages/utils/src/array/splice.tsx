export const splice = <V extends unknown>(
  arr: V[],
  start: number,
  count: number,
  ...items: V[]
) => {
  const a = [...arr]
  a.splice(start, count, ...items)
  return a
}
