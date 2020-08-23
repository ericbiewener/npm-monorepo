import fs from 'fs'

export const isDirectory = (filepath: string) => {
  try {
    return fs.statSync(filepath).isDirectory()
  } catch (e) {
    if (e.code !== 'ENOENT') throw e // Directory might exist, but something else went wrong (e.g. permissions error)
    return false
  }
}
