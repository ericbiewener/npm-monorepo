/**
 * Capture stdout & stderr in variables, while also allowing it to flow through to the parent
 * process's stdout (e.g. a terminal window).
 *
 * Also provides some sensible error handling. Will throw if there is any stderr.
 */
import execa from 'execa'
import { ErrorWithData } from './ErrorWithData'

export const exe = async (cmd: string, args: string[], options?: execa.SyncOptions<null>) => {
  const child = execa(cmd, args.filter(Boolean), {
    ...options,
    stdio: 'pipe',
  })

  // Catch the error and exit the process. This is an irrecoverable crash.
  child.on('error', e => {
    console.error(`CRASH: ${e.message}`)
    process.exit(1)
  })

  // Let the ouput flow through to the main process's stdout
  child.stdout?.pipe(process.stdout)
  child.stderr?.pipe(process.stderr)

  let stdout = ''
  let stderr = ''

  child.stdout?.on('data', buffer => {
    stdout += buffer.toString()
  })

  child.stderr?.on('data', buffer => {
    stderr += buffer.toString()
  })

  // Wait for both stdout and stderr to close
  await Promise.all([
    new Promise(res => child.stdout?.on('close', res)),
    new Promise(res => child.stderr?.on('close', res)),
  ])

  if (stderr) throw new ErrorWithData('stderr has data', { stdout, stderr })
  return stdout
}
