import { splice } from '../splice'

test('splice', async () => {
  const a = [0, 1, 2, 3, 4]
  const b = splice(a, 1, 3, 9)
  expect(b).toEqual([0, 9, 4])
  expect(a).toEqual([0, 1, 2, 3, 4])
})
