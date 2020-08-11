import React from 'react'
import { Fn } from '../../../types'

export const useEffectOnMount = (effect: () => void | Fn) => {
  React.useEffect(effect, []) // eslint-disable-line react-hooks/exhaustive-deps
}
