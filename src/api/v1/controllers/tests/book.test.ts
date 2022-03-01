import request from "supertest";
import app from "../../../index";

describe("Test Book Controllers", () => {
  let bookId: string = "";
  it("POST /addBook --> add book and return the book object", async () => {
    const response = await request(app)
      .post("/api/v1/addBook")
      .send({
        title: "JEST TEST",
        author: "TEST JEST",
        description: "TEST JEST WITH SUPERTEST",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201);
    bookId = response.body.book._id;
  });
  it("PUT /updateBook --> update book and return the book object", async () => {
    const response = await request(app)
      .put(`/api/v1/updateBook/${bookId}`)
      .send({
        title: "JEST TEST",
        author: "TEST JEST",
        description: "TEST JEST WITH SUPERTEST",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });
  it("GET /getBooks --> get all of books and return as object", async () => {
    const response = await request(app)
      .get("/api/v1/getBooks")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect((res) => (res.body.success = true));
  });
  it("GET /getBook --> get a book and return as object", async () => {
    const response = await request(app)
      .get(`/api/v1/getBook/${bookId}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .expect((res) => (res.body.success = true));
  });
  it("DELETE /deleteBook --> delete book and return the deleted book object", async () => {
    const response = await request(app)
      .delete(`/api/v1/deleteBook/${bookId}`)
      .expect(200);
  });
});
