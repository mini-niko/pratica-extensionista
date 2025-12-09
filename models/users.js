import database from "models/database.js";

async function getByEmail(email) {
  const user = await runSelectQuery(email);

  return user;

  async function runSelectQuery(email) {
    const response = await database.query({
      query: `
        SELECT 
          * 
        FROM 
          usuario 
        WHERE 
          email = $1
      ;`,
      values: [email],
    });

    const user = response.rows[0];

    if (!user) throw Error("Credenciais incorretas");

    return user;
  }
}

async function getById(id) {
  const response = await database.query({
    query: `
      SELECT 
        * 
      FROM 
        usuario 
      WHERE 
        id = $1
    ;`,
    values: [id],
  });

  const user = response.rows[0];

  if (!user) throw Error("Usuário não encontrado");

  return user;
}

async function getAll() {
  const response = await database.query({
    query: `
      SELECT 
        * 
      FROM 
        usuario
    ;`,
  });

  return response.rows;
}

async function create(email, nome, senha) {
  const response = await database.query({
    query: `
      INSERT INTO 
        usuario (email, nome, senha)
      VALUES 
        ($1, $2, $3)
      RETURNING *
    ;`,
    values: [email, nome, senha],
  });

  return response.rows[0];
}

async function update(id, email, nome, senha) {
  const response = await database.query({
    query: `
      UPDATE 
        usuario
      SET 
        email = COALESCE($2, email),
        nome = COALESCE($3, nome),
        senha = COALESCE($4, senha)
      WHERE 
        id = $1
      RETURNING *
    ;`,
    values: [id, email, nome, senha],
  });

  const user = response.rows[0];

  if (!user) throw Error("Usuário não encontrado");

  return user;
}

async function remove(id) {
  const response = await database.query({
    query: `
      DELETE FROM 
        usuario
      WHERE 
        id = $1
      RETURNING *
    ;`,
    values: [id],
  });

  const user = response.rows[0];

  if (!user) throw Error("Usuário não encontrado");

  return user;
}

const users = {
  getByEmail,
  getById,
  getAll,
  create,
  update,
  remove,
};

export default users;
