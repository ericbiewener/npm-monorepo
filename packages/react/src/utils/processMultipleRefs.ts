type Ref<E> = { current: E | null } | ((el: E | null) => void) | null

export const processMultipleRefs = <E extends unknown>(...args: Ref<E>[]) => (el: E | null) => {
  for (const ref of args) {
    if (typeof ref === 'function') {
      ref(el)
    } else if (ref) {
      ref.current = el
    }
  }
}
