import { createRouter } from "next-connect";
import { setCORS } from "models/controller";
import ideas from "models/ideas";

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
  const { id } = req.query;

  if (id) {
    const idea = await ideas.getById(id);
    return res.status(200).json(idea);
  }

  const ideasList = await ideas.getAll();
  res.status(200).json(ideasList);
}

async function POST(req, res) {
  const { usuario_id, titulo, descricao, conteudo } = req.body;

  if (!usuario_id || !titulo) {
    return res
      .status(400)
      .json({ error: "usuario_id e título são obrigatórios" });
  }

  const idea = await ideas.create(
    usuario_id,
    titulo,
    descricao || null,
    conteudo || null
  );
  res.status(201).json(idea);
}
