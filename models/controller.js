export async function setCORS(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  return next();
}
