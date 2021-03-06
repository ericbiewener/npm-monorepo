import { Obj } from '@ericbiewener/types'

export const dump = (obj: Obj, prettify = true) => JSON.stringify(obj, null, prettify ? 2 : 0)
