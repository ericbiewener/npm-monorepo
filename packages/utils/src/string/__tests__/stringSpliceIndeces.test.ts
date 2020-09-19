import { stringSpliceIndeces } from '../stringSpliceIndeces'

test('stringSpliceIndeces', async () => {
  expect(stringSpliceIndeces('01234', 2, 3, 'a')).toEqual('01a4')
})
