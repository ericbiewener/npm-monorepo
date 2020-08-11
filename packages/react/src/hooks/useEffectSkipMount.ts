import React from 'react'

export const useEffectSkipMount = (effect: () => void, deps: unknown[]) => {
  const didMount = React.useRef(false)

  React.useEffect(() => {
    if (!didMount.current) {
      didMount.current = true
      return
    }
    effect()
  }, deps) // eslint-disable-line react-hooks/exhaustive-deps
}
