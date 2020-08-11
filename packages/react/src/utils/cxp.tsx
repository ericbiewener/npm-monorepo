import cx from 'classnames'
import { Obj } from '@ericbiewener/types'

export const cxp = <P extends Obj>(props: P, ...className: Parameters<typeof cx>) => ({
  ...props,
  className: cx(props.className, ...className),
})
