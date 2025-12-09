import { createRouter } from "next-connect";
import { setCORS } from "models/controller";
import lessons from "models/lessons";

export default createRouter()
  .use(setCORS)
  .get(GET)
  .put(PUT)
  .delete(DELETE)
  .handler({
    onError: (err, _, res) => {
      res
        .status(400)
        .json({ error: err.message || "Erro ao processar requisição" });
    },
  });

async function GET(req, res) {
  const { id } = req.query;

  const lesson = await lessons.getById(id);
  res.status(200).json(lesson);
}

async function PUT(req, res) {
  const { id } = req.query;
  const { titulo, descricao, conteudo } = req.body;

  const lesson = await lessons.update(id, titulo, descricao, conteudo);
  res.status(200).json(lesson);
}

async function DELETE(req, res) {
  const { id } = req.query;

  const lesson = await lessons.remove(id);
  res.status(200).json({ message: "Aula deletada com sucesso", lesson });
}
