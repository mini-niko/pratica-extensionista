import { createRouter } from "next-connect";
import { setCORS } from "models/controller";
import courses from "models/courses";

export default createRouter().use(setCORS).get(GET).handler();

async function GET(_, res) {
  const coursesList = await courses.getAll();

  res.status(200).json(coursesList);
}
