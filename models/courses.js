import database from "models/database";

async function getById(id) {
  const response = await database.query({
    query: `
      SELECT
        *
      FROM
        curso
      WHERE
        id = $1
    ;`,
    values: [id],
  });

  const course = response.rows[0];

  if (!course) throw Error("Curso não encontrado");

  return course;
}

async function getAll() {
  const courses = await runSelectQuery();

  return courses;

  async function runSelectQuery() {
    const response = await database.query({
      query: `
        SELECT
          *
        FROM
          curso
      ;`,
    });

    return response.rows;
  }
}

async function create(nome, descricao) {
  const response = await database.query({
    query: `
      INSERT INTO 
        curso (nome, descricao)
      VALUES 
        ($1, $2)
      RETURNING *
    ;`,
    values: [nome, descricao],
  });

  return response.rows[0];
}

async function update(id, nome, descricao) {
  const response = await database.query({
    query: `
      UPDATE 
        curso
      SET 
        nome = COALESCE($2, nome),
        descricao = COALESCE($3, descricao)
      WHERE 
        id = $1
      RETURNING *
    ;`,
    values: [id, nome, descricao],
  });

  const course = response.rows[0];

  if (!course) throw Error("Curso não encontrado");

  return course;
}

async function remove(id) {
  const response = await database.query({
    query: `
      DELETE FROM 
        curso
      WHERE 
        id = $1
      RETURNING *
    ;`,
    values: [id],
  });

  const course = response.rows[0];

  if (!course) throw Error("Curso não encontrado");

  return course;
}

const courses = {
  getById,
  getAll,
  create,
  update,
  remove,
};

export default courses;
