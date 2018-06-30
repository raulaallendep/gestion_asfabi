import Debug from 'debug'
import { CL, CCL } from '../models'

const debug = new Debug('gestion-asfabi:db-api:client')

export default {
  findAll: () => {
    debug('Finding all clients')
    return CL.find()
  },

  findById: (_id) => {
    debug(`Finding client with id ${_id}`)
    return CL.findOne({ _id }).populate('contacts').populate('scs')
  },

  create: (cl) => {
    debug(`Creating new client ${cl}`)
    const client = new CL(cl)
    return client.save()
  },

  createContact: async (cl, cc) => {
    debug(`Creating new contact ${cc}`)
    const contact = new CCL(cc)
    const savedContact = await contact.save()
    cl.contacts.push(savedContact)
    await cl.save()
    return savedContact
  }
}
