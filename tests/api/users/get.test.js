test("GET /api/users", async () => {
  const response = await fetch(
    "http://localhost:3000/api/users?email=joao.silva@email.com&senha=joao.silva"
  );

  expect(response.status).toBe(200);

  const body = await response.json();

  expect(body).toEqual({
    id: 1,
    nome: "João da Silva",
    email: "joao.silva@email.com",
    senha: "joao.silva",
  });
});
