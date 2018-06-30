import { client } from '../db-api'
import { handleError } from '../utils'

export const clMiddleware = async (req, res, next) => {
  try {
    req.client = await client.findById(req.params.id)
    next()
  } catch (error) {
    handleError(error, res)
  }
}
