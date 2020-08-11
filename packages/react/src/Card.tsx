import React from 'react'
import { HtmlDivProps } from '../types/misc'
import { cxp } from '../utils'

export type CardProps = HtmlDivProps

export const Card: React.FC<CardProps> = props => (
  <div {...cxp(props, 'shadow overflow-scroll bg-white rounded-md')} />
)

export const CardContent: React.FC<HtmlDivProps> = props => <div {...cxp(props, 'p-4')} />
