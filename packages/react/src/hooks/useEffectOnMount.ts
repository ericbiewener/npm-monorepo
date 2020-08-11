import React from 'react'
import { Fn } from '@ericbiewener/types'

export const useEffectOnMount = (effect: () => void | Fn) => {
  React.useEffect(effect, []) // eslint-disable-line react-hooks/exhaustive-deps
}
