import { createRouter } from "next-connect";
import { setCORS } from "models/controller";
import lessons from "models/lessons";

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
  const { course_id, lesson_id } = req.query;

  if (lesson_id) {
    const lesson = await lessons.getById(lesson_id);
    return res.status(200).json(lesson);
  }

  if (course_id) {
    const lessonsList = await lessons.getAll(course_id);
    return res.status(200).json(lessonsList);
  }

  res
    .status(400)
    .json({ error: "Parâmetro 'course_id' ou 'lesson_id' é obrigatório" });
}

async function POST(req, res) {
  const { course_id, titulo, descricao, conteudo } = req.body;

  if (!course_id || !titulo) {
    return res
      .status(400)
      .json({ error: "course_id e título são obrigatórios" });
  }

  const lesson = await lessons.create(
    course_id,
    titulo,
    descricao || null,
    conteudo || null
  );
  res.status(201).json(lesson);
}
