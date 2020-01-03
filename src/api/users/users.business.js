import UsersDAO from './users.dao';
import * as Auth from './../utils/auth.utils';
import { isValidCpf, isValidCnpj } from '@brazilian-utils/validators';
import Boom from '@hapi/boom';

const usersDAO = new UsersDAO();

export default class UsersBusiness {

    async list({ params }) {
        return usersDAO.findAll(params);
    }

    async detail({ params }) {
        const { id } = params;

        return usersDAO.findByID(id);
    }

    async create({ payload }) {
        const { email, document } = payload;

        const user = await usersDAO.findOne({ document });

        if (user)
            throw Boom.notAcceptable(
                'Documento já cadastrado!',
            );

        const emailExists = await usersDAO.findOne({ email });

        if (emailExists)
            throw Boom.notAcceptable(
                'Email já cadastrado.',
            );

        return usersDAO.create(payload);
    }

    async update({ params, payload }) {
        const { id } = params;

        return usersDAO.update(id, payload);
    }

    async destroy({ params }) {
        const { id } = params;

        return usersDAO.destroy(id);
    }

    async login(params) {
        const { payload } = params;
        const user = await Auth.authenticate(payload);
        const token = Auth.getToken({
            id: user.id,
            email: user.email,
        });

        return { user, token };
    }
}