import React from 'react'

export const useMemoOnMount = <V>(fn: () => V) => React.useMemo(fn, [])
