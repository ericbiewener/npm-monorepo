import inquirer from 'inquirer'
import inquirerAutocomplete from 'inquirer-autocomplete-prompt'
import fuzzy from 'fuzzy'
import path from 'path'
import yargs, { Argv } from 'yargs'
import { readDirSync, ReadDirSyncResult } from '@ericbiewener/utils/src/readDirSync'
import { createFuzzyFilter } from '@ericbiewener/utils/src/createFuzzyFilter'

const { argv }: Argv<{ input?: string }> = yargs.command('* [input]', '', (builder) =>
  builder.alias('h', 'help').version(false),
)

inquirer.registerPrompt('autocomplete', inquirerAutocomplete)

const packages = readDirSync(path.join(__dirname, '../packages'), 'DIR')
const filter = createFuzzyFilter(packages, (item) => item.name)

const ouputResultPath = (result: fuzzy.FilterResult<ReadDirSyncResult>) => {
  console.log(`cd ${path.join('packages', result.string)}`)
}

const branchAutocomplete = async () => {
  if (argv.input) {
    const topResult = filter(argv.input)[0]
    if (topResult) {
      ouputResultPath(topResult)
      return
    }
  }

  // const { branch } = await inquirer.prompt([
  //   {
  //     type: 'autocomplete',
  //     pageSize: '30',
  //     name: 'branch',
  //     message: 'Select a branch',
  //     source: (answersSoFar, input) => fuzzyFilterBranches(input),
  //   },
  // ])

  // return branch
}

branchAutocomplete()
