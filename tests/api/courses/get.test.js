test("GET /api/course", async () => {
  const response = await fetch("http://localhost:3000/api/courses");

  expect(response.status).toBe(200);

  const body = await response.json();

  expect(body.length).toBe(3);
});
