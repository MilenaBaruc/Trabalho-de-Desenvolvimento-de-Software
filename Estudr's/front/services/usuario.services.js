import { getAll, newUser, userExists } from '../models/usuario.model';

const todos = async () => {
    const users = await getAll();
    return users;
};

const criar = async({email, senha}) => {
    const usuario = await userExists({ email }); //Busca a resposta que teve na função "UserExists" e manda para essa constante usuario criada agora

    if(usuario) return usuario; //Se for verdade, ele retorna usuario, mas se não for verdade ela continua o código

    const user = await newUser({email , senha});//Ele cria um novo usuário e retorna pra função "criar"
    return user;
};

const login = async () => null;

export {todos, login, criar};
