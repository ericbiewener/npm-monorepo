export const getIndexInRange = (newIdx: number, min: number, max: number, cycle = true) => {
  if (newIdx > max) return cycle ? min : max
  if (newIdx < min) return cycle ? max : min
  return newIdx
}
