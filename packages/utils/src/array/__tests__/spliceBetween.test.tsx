import { spliceIndeces } from '../spliceBetween'

test('spliceIndeces', async () => {
  const a = [0, 1, 2, 3, 4]
  const b = spliceIndeces(a, 2, 3, 9)
  expect(b).toEqual([0, 1, 9, 4])
  expect(a).toEqual([0, 1, 2, 3, 4])
})
