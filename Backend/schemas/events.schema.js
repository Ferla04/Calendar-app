import Joi from 'joi'

const title = Joi.string().min(3)
const notes = Joi.string()
const start = Joi.date()
const end = Joi.date()
const id = Joi.allow()

export const createEventSchema = Joi.object({
  title: title.required(),
  notes,
  start: start.required(),
  end: end.required()
})

export const updateEventSchema = Joi.object({
  title, notes, start, end, id
})
