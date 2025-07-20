import { createRouter } from "next-connect";
import { setCORS } from "models/controller";
import lessons from "models/lessons";

export default createRouter().use(setCORS).get(GET).handler();

async function GET(req, res) {
  const { course_id, lesson_id } = req.query;

  const lesson = lesson_id
    ? await lessons.getById(lesson_id)
    : await lessons.getAll(course_id);

  res.status(200).json(lesson);
}
