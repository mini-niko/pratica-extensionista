import { createRouter } from "next-connect";
import users from "models/users";

export default createRouter()
  .use(setCORS)
  .get(GET)
  .post(POST)
  .handler({
    onError: (err, _, res) => {
      res
        .status(400)
        .json({ error: err.message || "Erro ao processar requisição" });
    },
  });

async function GET(req, res) {
  const { email } = req.query;

  if (email) {
    const user = await users.getByEmail(email);
    return res.status(200).json(user);
  }

  const usersList = await users.getAll();
  res.status(200).json(usersList);
}

async function POST(req, res) {
  const { email, nome, senha } = req.body;

  if (!email || !nome || !senha) {
    return res
      .status(400)
      .json({ error: "Email, nome e senha são obrigatórios" });
  }

  const user = await users.create(email, nome, senha);
  res.status(201).json(user);
}

async function setCORS(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  return next();
}
