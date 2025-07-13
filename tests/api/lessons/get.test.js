describe("GET /api/lessons", () => {
  test("Without lesson id", async () => {
    const response = await fetch(
      "http://localhost:3000/api/lessons?course_id=1"
    );

    expect(response.status).toBe(200);

    const body = await response.json();

    expect(body.length).toBe(5);
  });

  test("With lesson id", async () => {
    const response = await fetch(
      "http://localhost:3000/api/lessons?lesson_id=1"
    );

    expect(response.status).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body.curso_id).toBe(1);
    expect(body.titulo).not.toBeUndefined();
    expect(body.video_url).not.toBeUndefined();
  });
});
