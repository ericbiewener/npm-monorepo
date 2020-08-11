import React from 'react'
import { HtmlDivProps } from './types'
import { cxp } from './utils/cxp'

export const Badge: React.FC<HtmlDivProps> = props => (
  <div {...cxp(props, 'rounded uppercase text-xs text-white px-1 text-center')} />
)
