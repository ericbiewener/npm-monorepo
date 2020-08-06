import yargs, { BuilderCallback } from 'yargs'

export function assert(value: any, message: string): asserts value {
  if (value) return
  console.error()
  console.error(message)
  console.error()
  process.exit(1)
}

export const buildWorkspaceYargs = <T, R>(customBuilder: BuilderCallback<T, R>) =>
  yargs.command('* [workspace] [pkg]', '', (builder: yargs.Argv<any>) => {
    customBuilder(
      builder
        .alias('h', 'help')
        .version(false)
        .positional('workspace', {
          describe: 'Workspace',
          type: 'string',
        })
        .positional('pkg', {
          describe: 'npm package',
          type: 'string',
        })
    )
  })
