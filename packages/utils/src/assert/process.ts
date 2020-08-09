import { log } from '@ericbiewener/log'

export function assert(value: any, message: string): asserts value {
  if (value) return
  log.error()(message)()
  process.exit(1)
}
