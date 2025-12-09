import database from "models/database";

async function getById(lessonId) {
  const ideas = await runSelectQuery(lessonId);

  return ideas;

  async function runSelectQuery(lessonId) {
    const response = await database.query({
      query: `
        SELECT
          *
        FROM
          aula
        WHERE
          aula.id = $1
      ;`,
      values: [lessonId],
    });

    return response.rows[0];
  }
}

async function getAll(courseId) {
  const ideas = await runSelectQuery(courseId);

  return ideas;

  async function runSelectQuery(courseId) {
    const response = await database.query({
      query: `
        SELECT
          *
        FROM
          aula
        WHERE
          aula.curso_id = $1
      ;`,
      values: [courseId],
    });

    return response.rows;
  }
}

async function create(courseId, titulo, descricao, conteudo) {
  const response = await database.query({
    query: `
      INSERT INTO 
        aula (curso_id, titulo, descricao, conteudo)
      VALUES 
        ($1, $2, $3, $4)
      RETURNING *
    ;`,
    values: [courseId, titulo, descricao, conteudo],
  });

  return response.rows[0];
}

async function update(id, titulo, descricao, conteudo) {
  const response = await database.query({
    query: `
      UPDATE 
        aula
      SET 
        titulo = COALESCE($2, titulo),
        descricao = COALESCE($3, descricao),
        conteudo = COALESCE($4, conteudo)
      WHERE 
        id = $1
      RETURNING *
    ;`,
    values: [id, titulo, descricao, conteudo],
  });

  const lesson = response.rows[0];

  if (!lesson) throw Error("Aula não encontrada");

  return lesson;
}

async function remove(id) {
  const response = await database.query({
    query: `
      DELETE FROM 
        aula
      WHERE 
        id = $1
      RETURNING *
    ;`,
    values: [id],
  });

  const lesson = response.rows[0];

  if (!lesson) throw Error("Aula não encontrada");

  return lesson;
}

const lessons = {
  getById,
  getAll,
  create,
  update,
  remove,
};

export default lessons;
