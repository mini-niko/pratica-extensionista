import { createRouter } from "next-connect";
import { setCORS } from "models/controller";
import ideas from "models/ideas";

export default createRouter().use(setCORS).get(GET).handler();

async function GET(req, res) {
  const { id } = req.query;

  const idea = id ? await ideas.getById(id) : await ideas.getAll();

  res.status(200).json(idea);
}
