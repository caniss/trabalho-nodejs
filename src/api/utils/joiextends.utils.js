const Joi = require('@hapi/joi');
import { isValidCpf, isValidCnpj } from '@brazilian-utils/validators';

export const custom = Joi.extend((joi) => {

    return {
        type: 'document',
        base: joi.string(),
        messages: {
            'document.cpf': 'Cpf invalido',
            'document.cnpj': 'Cnpj invalido',
            'document.base': 'Documento invalido'
        }, validate(value, helpers) {
            if (value.length == 11) {
                if (!isValidCpf(value))
                    return { value, errors: helpers.error('document.cpf') };

            } else if (value.length == 14) {

                if (!isValidCnpj(value))
                    return { value, errors: helpers.error('document.cnpj') };


            } else {
                return { value, errors: helpers.error('document.base') };
            }

        }
    }
});