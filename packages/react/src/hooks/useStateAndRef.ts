import React from 'react'

type WrappedSetState<S> = (setStateAction: React.SetStateAction<S>) => void
type ReturnValue<S> = [S, WrappedSetState<S>, React.MutableRefObject<S>]

export const useStateAndRef = <S extends any>(initialState: S): ReturnValue<S> => {
  const [state, setState] = React.useState(initialState)
  const stateRef = React.useRef<S>(initialState)

  const wrappedSetState: WrappedSetState<S> = (setStateAction) => {
    if (typeof setStateAction === 'function') {
      setState((prevState) => {
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
