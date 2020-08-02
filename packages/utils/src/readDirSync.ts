import fs from 'fs'
import path from 'path'
import { isFile } from './'

export type ReadDirSyncResult = { name: string; itemPath: string; isFile: boolean }

export const readDirSync = (
  dir: string,
  type: 'FILE' | 'DIR' | 'ALL' = 'ALL'
): ReadDirSyncResult[] => {
  const items = []

  for (const name of fs.readdirSync(dir)) {
    if (name === '.DS_Store') continue
    const itemPath = path.join(dir, name)
    const itemIsFile = isFile(itemPath)
    if (type === 'FILE' && !itemIsFile) continue
    if (type === 'DIR' && itemIsFile) continue
    items.push({ name, itemPath, isFile: itemIsFile })
  }

  return items
}
