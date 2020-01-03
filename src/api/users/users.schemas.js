import * as Joi from '@hapi/joi';

import { custom } from '../utils/joiextends.utils';


const params = Joi.object({
  id: Joi.number().required()
});

export const payload = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  name: Joi.string().required(),
  document: custom.document()
})

const paylogin = Joi.object({
  email: Joi.string().email().required(),
  senha: Joi.string().min(6).required()
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

export const login = {
  payload: paylogin
};