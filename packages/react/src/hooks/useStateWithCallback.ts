import React from 'react'

type Callback<S> = (state: S) => void

export type ReactSetStateWithCallback<S> = (
  setStateAction: React.SetStateAction<S>,
  cb?: Callback<S>
) => void

type ReturnValue<S> = [S, ReactSetStateWithCallback<S>]

export const useStateWithCallback = <S extends any>(initialState: S): ReturnValue<S> => {
  const [state, setState] = React.useState(initialState)
  const callbacks = React.useRef<Set<Callback<S>>>(new Set([]))

  const wrappedSetState: ReactSetStateWithCallback<S> = (setStateAction, cb) => {
    if (cb) callbacks.current.add(cb)
    setState(setStateAction)
  }

  React.useLayoutEffect(() => {
    for (const cb of callbacks.current) cb(state)
    callbacks.current.clear()
  }, [state])

  return [state, wrappedSetState]
}
