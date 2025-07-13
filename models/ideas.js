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

const ideas = {
  getById,
  getAll,
};

export default ideas;
