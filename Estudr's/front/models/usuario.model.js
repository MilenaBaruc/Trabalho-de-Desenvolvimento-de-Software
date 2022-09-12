import connection from './mongoconnection';

const getAll = async () => {
    const db = await connection();
    return db.collection('usuarios').find().toArray();
};


const newUser = async ({ email, senha }) =>{
    const db = await connection();
    const uuid = newUuid();
    await db.collection('usuarios').insertOne({ email, senha, uuid }); //Inserindo um arquivo,já que é somente um usuário
    return {email, uuid};
};

const userExists = async ({ email, uuid }) => {    //Verificando o cadastro, pra saber se o email e usuário já existem
    const db = await connection();
    let user= null;
    if(uuid) {
        user = await db.collection('usuarios').findOne({uuid}); //Verificando o cadastro através do uuid gerado
  } else {
    user = await db.collection('usuarios').findOne({email});
  }

  return user;
};

const login = async () => null;

export {getAll, login, newUser, userExists};
