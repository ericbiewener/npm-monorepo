import React from 'react'
import { HtmlDivProps } from './types'
import { cxp } from './utils/cxp'

export type CardProps = HtmlDivProps

export const Card: React.FC<CardProps> = props => (
  <div {...cxp(props, 'shadow overflow-scroll bg-white rounded-md')} />
)

export const CardContent: React.FC<HtmlDivProps> = props => <div {...cxp(props, 'p-4')} />
