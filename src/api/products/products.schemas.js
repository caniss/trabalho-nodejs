import * as Joi from '@hapi/joi';

const params = Joi.object({
  id: Joi.number().required()
});

const payload = Joi.object({
  description: Joi.string().min(3).max(100).required(),
  value: Joi.number().required(),
  quantity: Joi.number().required()
});

export const detail = {
  params
};

export const create = {
  payload
};

export const update = {
  params,
  payload
};