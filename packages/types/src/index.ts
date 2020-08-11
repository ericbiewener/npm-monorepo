export type Obj<V = any> = Record<string, V>
export type Fn = () => void

export type Comparator<V> = (a: V, b: V) => number
