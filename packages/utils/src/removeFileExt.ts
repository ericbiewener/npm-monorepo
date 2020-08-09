import path from 'path'

export const removeFileExt = (filepath: string, extensions?: string[]) => {
  const ext = path.extname(filepath)

  if (!ext) return filepath

  return !extensions || extensions.includes(ext.slice(1))
    ? filepath.slice(0, -ext.length)
    : filepath
}
