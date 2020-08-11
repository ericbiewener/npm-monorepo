import React from 'react'
import { HtmlDivProps } from '../types/misc'
import { cxp } from '../utils'

export const Badge: React.FC<HtmlDivProps> = props => (
  <div {...cxp(props, 'rounded uppercase text-xs text-white px-1 text-center')} />
)
