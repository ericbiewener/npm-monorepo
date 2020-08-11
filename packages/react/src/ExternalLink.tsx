import React from 'react'
import { HtmlAnchorProps } from './types'

export const ExternalLink: React.FC<HtmlAnchorProps> = props => (
  <a {...props} target="_blank" rel="noopener noreferrer" />
)
