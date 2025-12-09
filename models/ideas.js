import database from "models/database";

async function getById(id) {
  const ideas = await runSelectQuery(id);

  return ideas;

  async function runSelectQuery(id) {
    const response = await database.query({
      query: `
        SELECT
          *
        FROM
          ideia
        WHERE
          ideia.id = $1
      ;`,
      values: [id],
    });

    return response.rows[0];
  }
}

async function getAll() {
  const ideas = await runSelectQuery();

  return ideas;

  async function runSelectQuery() {
    const response = await database.query({
      query: `
        SELECT
          *
        FROM
          ideia
      ;`,
    });

    return response.rows;
  }
}

async function create(usuarioId, titulo, descricao, conteudo) {
  const response = await database.query({
    query: `
      INSERT INTO 
        ideia (usuario_id, titulo, descricao, conteudo)
      VALUES 
        ($1, $2, $3, $4)
      RETURNING *
    ;`,
    values: [usuarioId, titulo, descricao, conteudo],
  });

  return response.rows[0];
}

async function update(id, titulo, descricao, conteudo) {
  const response = await database.query({
    query: `
      UPDATE 
        ideia
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

  const idea = response.rows[0];

  if (!idea) throw Error("Ideia não encontrada");

  return idea;
}

async function remove(id) {
  const response = await database.query({
    query: `
      DELETE FROM 
        ideia
      WHERE 
        id = $1
      RETURNING *
    ;`,
    values: [id],
  });

  const idea = response.rows[0];

  if (!idea) throw Error("Ideia não encontrada");

  return idea;
}

const ideas = {
  getById,
  getAll,
  create,
  update,
  remove,
};

export default ideas;
