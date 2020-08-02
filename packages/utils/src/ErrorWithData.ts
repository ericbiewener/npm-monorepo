export class ErrorWithData<D> extends Error {
  name = 'ErrorWithData'
  data: D | undefined

  constructor(message: string, data?: D) {
    super(message)
    this.data = data
  }
}
