import { createRouter } from "next-connect";
import users from "models/users";

export default createRouter()
  .use(setCORS)
  .get(GET)
  .handler({
    onError: (_, __, res) => {
      res.status(401).json({ error: "Credenciais Incorretas." });
    },
  });

async function GET(req, res) {
  const query = req.query;

  const user = await users.getByEmail(query.email);

  if (user?.senha !== query.senha) throw new Error("Credenciais incorretas");

  res.status(200).json(user);
}

async function setCORS(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  return next();
}
