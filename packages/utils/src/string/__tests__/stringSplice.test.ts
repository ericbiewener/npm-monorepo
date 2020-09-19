import { stringSplice } from '../stringSplice'

test('stringSplice', async () => {
  expect(stringSplice('01234', 1, 2, 'a')).toEqual('0a34')
})
