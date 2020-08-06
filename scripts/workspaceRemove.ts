import yargs from 'yargs'
import { exe, ExeArg } from '@ericbiewener/utils/dist/exe'
import { buildWorkspaceYargs } from './utils'

function assert(value: any, message: string): asserts value {
  if (value) return
  console.error()
  console.error(message)
  console.error()
  process.exit(1)
}

const { argv } = buildWorkspaceYargs(builder =>
  builder.options({
    dev: { type: 'boolean' },
  })
)

assert(argv.workspace, 'Must provide a workspace name.')
assert(argv.pkg, 'Must provide a package name.')

const args: ExeArg[] = [
  'workspace',
  `@ericbiewener/${argv.workspace}`,
  argv.remove ? 'remove' : 'add',
  argv.pkg,
]

if (!argv.remove) {
  args.push('--exact', argv.dev && '--dev')
}

exe('yarn', args)
