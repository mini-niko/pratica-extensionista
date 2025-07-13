import database from "models/database";

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

const courses = {
  getAll,
};

export default courses;
