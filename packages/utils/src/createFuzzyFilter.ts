import { Obj } from '@ericbiewener/types'
import fuzzy from 'fuzzy'

export const createFuzzyFilter = <T>(items: T[], extract?: (item: T) => string) => (input: string) =>
  fuzzy.filter(input, items, extract ? { extract } : undefined)
