
import { Context } from './Context'


class ZiptasticError extends Error {

  isZiptasticError = true

  sdk = 'Ziptastic'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  ZiptasticError
}

