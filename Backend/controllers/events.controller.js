import boom from '@hapi/boom'
import { catchAsync } from '../helpers/catchAsync.js'
import { successResponse } from '../helpers/response.js'
import EventTable from '../models/Event.model.js'

export const getEvents = catchAsync(async (req, res) => {
  const events = await EventTable
    .find()
    .populate('user', 'name') // trae la info de la tabla que especifiquemos que esta vinculada a ese usuario

  successResponse(res, 200, events)
})

export const createEvent = catchAsync(async (req, res) => {
  const event = new EventTable({ ...req.body, user: req.uid })
  const eventDB = await event.save()

  successResponse(res, 200, eventDB)
})

export const updateEvent = catchAsync(async ({ body, params, uid }, res) => {
  const eventId = params.id

  const event = await EventTable.findById(eventId)

  if (!event) throw boom.notFound("Event doesn't exist")
  if (event.user.toString() !== uid) throw boom.unauthorized("you don't have edit privileges")

  const newEvent = { ...body, user: uid }
  const update = await EventTable.findByIdAndUpdate(eventId, newEvent, { new: true })
  // El tercer argumento del la fn findByIdAndUpdate es que nos retorne el dato ya actualizado

  successResponse(res, 200, update)
})

export const deleteEvent = catchAsync(async ({ params, uid }, res) => {
  const eventId = params.id

  const event = await EventTable.findById(eventId)

  if (!event) throw boom.notFound("Event doesn't exist")
  if (event.user.toString() !== uid) throw boom.unauthorized("you don't have delete privileges")

  await EventTable.findByIdAndDelete(eventId)
  successResponse(res, 200, 'deleted')
})
