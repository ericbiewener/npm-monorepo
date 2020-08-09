import path from 'path'
import { isFile } from '../isFile'
import { sleep } from '../sleep'

test('sleep', async () => {
  expect(await sleep()).toBe(undefined)
  expect(await sleep(0, 1)).toBe(1)
})

test('isFile', () => {
  expect(isFile('blah')).toBe(false)
  expect(isFile(path.join(__dirname, 'index.test.ts'))).toBe(true)
})
