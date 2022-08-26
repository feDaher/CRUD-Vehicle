import connect from 'next-connect'
import mongooseMiddleware from './mongoose'

export default function createHandler() {
  return connect().use(mongooseMiddleware)
}
