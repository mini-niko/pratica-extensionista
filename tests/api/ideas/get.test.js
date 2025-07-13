describe("GET /api/course", () => {
  test("Without id", async () => {
    const response = await fetch("http://localhost:3000/api/ideas");

    expect(response.status).toBe(200);

    const body = await response.json();

    expect(body.length).toBe(5);
  });

  test("With id", async () => {
    const response = await fetch("http://localhost:3000/api/ideas?id=1");

    expect(response.status).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body.titulo).not.toBeUndefined();
    expect(body.conteudo).not.toBeUndefined();
  });
});
