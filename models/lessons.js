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

const ideas = {
  getById,
  getAll,
};

export default ideas;
