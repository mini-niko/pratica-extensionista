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

const users = {
  getByEmail,
};

export default users;
