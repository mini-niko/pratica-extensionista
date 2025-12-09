import { createRouter } from "next-connect";
import { setCORS } from "models/controller";
import courses from "models/courses";

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

async function GET(_, res) {
  const coursesList = await courses.getAll();

  res.status(200).json(coursesList);
}

async function POST(req, res) {
  const { nome, descricao } = req.body;

  if (!nome) {
    return res.status(400).json({ error: "Nome do curso é obrigatório" });
  }

  const course = await courses.create(nome, descricao || null);
  res.status(201).json(course);
}
