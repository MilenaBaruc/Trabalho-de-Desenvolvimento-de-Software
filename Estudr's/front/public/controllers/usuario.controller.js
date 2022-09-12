import { todos, criar } from '../services/usuario.services';

const getAll = async (req, res) => {
    const users = await todos();
    return res.status(200).json(users);
}

const createUser = async ({req, res}) => {
    const { email, senha } = req.body;

    const { email: mail, _id } = await criar({email, senha}); // Passa a resposta dada na função "criar" para a constante user
    return res.status(200).json({ mail, _id }); // Caso ocorreu tudo certo, ele envia a resposta que está na constante user através desse ".json(user)"
};

const login = async () => null;

export { getAll, login, createUser };

