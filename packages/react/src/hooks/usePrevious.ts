import React from 'react'

/**
 * Retain access to the previous value of a variable (most likely a prop).
 */
const usePrevious = <V>(value: V) => {
  const ref = React.useRef<V>()

  React.useEffect(() => {
    ref.current = value
  })

  return ref.current
}

export default usePrevious
