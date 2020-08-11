import { Fn } from '../../../types'
import { useEffectOnMount } from './useEffectOnMount'

export const useEffectOnWindowFocus = (onFocusListener: Fn, immediate = true) => {
  useEffectOnMount(() => {
    if (immediate && document.hasFocus()) onFocusListener()

    window.addEventListener('focus', onFocusListener)

    return () => window.removeEventListener('focus', onFocusListener)
  })
}
