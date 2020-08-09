import fs from 'fs'
import path from 'path'
import { createDir } from './createDir'
import { isFile } from './isFile'

export const writeFileIfNew = (filepath: string, data = '') => {
  if (isFile(filepath)) return false
  createDir(path.dirname(filepath))
  fs.writeFileSync(filepath, data)
  return true
}
