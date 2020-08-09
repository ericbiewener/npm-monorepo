import { exe, ExeArg } from '@ericbiewener/utils/dist/exe'
import { assert } from '@ericbiewener/utils/dist/assert/process'
import { workspaceYargs } from './utils'

const { argv } = workspaceYargs

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
