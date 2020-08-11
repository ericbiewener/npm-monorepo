import React from 'react'

type ReturnValue<S> = [
  S,
  (setStateAction: React.SetStateAction<S>) => void,
  React.MutableRefObject<S>
]

export const useStateAndRef = <S extends any>(initialState: S): ReturnValue<S> => {
  const [state, setState] = React.useState(initialState)
  const stateRef = React.useRef<S>(initialState)

  const wrappedSetState = (setStateAction: React.SetStateAction<S>) => {
    if (typeof setStateAction === 'function') {
      setState(prevState => {
        // @ts-ignore
        const newState = setStateAction(prevState)
        stateRef.current = newState
        return newState
      })
      return
    }

    stateRef.current = setStateAction
    setState(setStateAction)
  }

  return [state, wrappedSetState, stateRef]
}
