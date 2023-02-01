import Joi from 'joi'

const title = Joi.string().min(3)
const start = Joi.date()
const end = Joi.date()

export const createEventSchema = Joi.object({
  title: title.required(),
  start: start.required(),
  end: end.required()
})

export const updateEventSchema = Joi.object({
  title, start, end
})
