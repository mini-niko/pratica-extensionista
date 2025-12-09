import { createRouter } from "next-connect";
import { setCORS } from "models/controller";
import ideas from "models/ideas";

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

  const idea = await ideas.getById(id);
  res.status(200).json(idea);
}

async function PUT(req, res) {
  const { id } = req.query;
  const { titulo, descricao, conteudo } = req.body;

  const idea = await ideas.update(id, titulo, descricao, conteudo);
  res.status(200).json(idea);
}

async function DELETE(req, res) {
  const { id } = req.query;

  const idea = await ideas.remove(id);
  res.status(200).json({ message: "Ideia deletada com sucesso", idea });
}
