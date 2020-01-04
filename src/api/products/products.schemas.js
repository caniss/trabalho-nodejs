import * as Joi from '@hapi/joi';

const params = Joi.object({
  id: Joi.number().required()
});

const failAction = function (request, h, err) {
  delete err.output.payload.validation;
  return err;
}

const payload = Joi.object({
  categoryId: Joi.number().required(),
  description: Joi.string().min(3).max(100).required(),
  value: Joi.number().required(),
  quantity: Joi.number().required()
});



export const detail = {
  params
};

export const create = {
  payload,
  failAction
};

export const update = {
  params,
  payload
};