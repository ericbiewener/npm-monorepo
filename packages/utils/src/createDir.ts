import fs from 'fs'

export const createDir = (dirpath: string, options?: fs.MakeDirectoryOptions) => {
  try {
    fs.mkdirSync(dirpath, { recursive: true, ...options })
  } catch (e) {
    if (e.code !== 'EEXIST') throw e
    return false
  }

  return true
}
