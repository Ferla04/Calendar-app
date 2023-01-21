// Auth routes /api/events
import express from 'express'
import { createEvent, deleteEvent, getEvents, updateEvent } from '../controllers/events.controller.js'
import { validatorHandler } from '../middlewares/validator.handler.js'
import { ValidateJwt } from '../middlewares/validatorJwt.js'
import { createEventSchema, updateEventSchema } from '../schemas/events.schema.js'

const router = express.Router()

router
  .use(ValidateJwt)
  .get('/', getEvents)
  .post('/', validatorHandler(createEventSchema), createEvent)
  .put('/:id', validatorHandler(updateEventSchema), updateEvent)
  .delete('/:id', deleteEvent)

export default router
