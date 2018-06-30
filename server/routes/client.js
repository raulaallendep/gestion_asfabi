import express from 'express'
import { clMiddleware } from '../middlewares'
import { client } from '../db-api'
import { handleError } from '../utils'

const app = express.Router()

// obtener clientes
app.get('/', async (req, res) => {
  try {
    const clients = await client.findAll()
    res.status(200).json(clients)
  } catch (error) {
    handleError(error, res)
  }
})

// obtener cliente
app.get('/:id', clMiddleware, (req, res) => {
  try {
    res.status(200).json(req.client)
  } catch (error) {
    handleError(error, res)
  }
})

// agregar cliente
app.post('/', async (req, res) => {
  const { name, description } = req.body
  const cl = {
    name,
    description
  }
  try {
    const saveClient = await client.create(cl)
    res.status(201).json(saveClient)
  } catch (error) {
    handleError(error, res)
  }
})

// agregar contacto
app.post('/:id/contacts', clMiddleware, async (req, res) => {
  const cc = req.body
  const cl = req.client
  try {
    const saveContact = await client.createContact(cl, cc)
    res.status(201).json(saveContact)
  } catch (error) {
    handleError(error, res)
  }
})

export default app
