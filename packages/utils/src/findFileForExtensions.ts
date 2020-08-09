import { isFile } from './isFile'
import { removeFileExt } from './removeFileExt'

export const findFileForExtensions = (filepath: string, extensions: string[]) => {
  const filepathRoot = removeFileExt(filepath)
  for (const ext of extensions) {
    const newPath = `${filepathRoot}.${ext}`
    if (isFile(newPath)) return newPath
  }
}
