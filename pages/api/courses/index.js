import { createRouter } from "next-connect";
import { setCORS } from "models/controller";
import courses from "models/courses";

export default createRouter()
  .use(setCORS)
  .get(GET)
  .post(POST)
  .handler({
    onError: (err, _, res) => {
      console.error("Error processing request:", err);
      res
        .status(400)
        .json({ error: err.message || "Erro ao processar requisição" });
    },
  });

async function GET(_, res) {
  console.log("Fetching all courses");
  const coursesList = await courses.getAll();

  console.log("Fetched courses:", coursesList);
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
