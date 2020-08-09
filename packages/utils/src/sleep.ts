export const sleep = <T = void>(ms = 0, value?: T): Promise<T> =>
  new Promise(resolve => setTimeout(() => resolve(value), ms))
