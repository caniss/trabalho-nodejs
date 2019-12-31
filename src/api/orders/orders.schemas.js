import * as Joi from '@hapi/joi';

const params = Joi.object({
    id: Joi.number().required()
});

const payload = Joi.object({
    userId: Joi.number().required(),
    cart: Joi.array().items(Joi.object({
        productId: Joi.number().required(),
        quantity: Joi.number().required()
    }))
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