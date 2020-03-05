import request from "supertest";
import app from "../../index";

afterEach(() => app.close());

describe("Post Endpoints", () => {
  it("Create one contatos and retrieve the same and delete it", async done => {
    let data = { nome: "nome", canal: "canal", valor: "valor", obs: "obs" };

    let res = await request(app)
      .post("/")
      .send(data);

    expect(res.status).toEqual(200);
    expect(res.body.nome).toEqual(data.nome);
    expect(res.body.canal).toEqual(data.canal);
    expect(res.body.valor).toEqual(data.valor);
    expect(res.body.obs).toEqual(data.obs);

    const deleteData = await request(app).delete("/" + res.body._id);
    expect(deleteData.status).toEqual(200);

    done();
  });

  it("Create one contatos and update the same and delete it in the end", async done => {
    let data = { nome: "nome", canal: "canal", valor: "valor", obs: "obs" };

    let res = await request(app)
      .post("/")
      .send({ ...data, nome: "editado" });

    expect(res.status).toEqual(200);
    expect(res.body.nome).toEqual("editado");
    expect(res.body.canal).toEqual(data.canal);
    expect(res.body.valor).toEqual(data.valor);
    expect(res.body.obs).toEqual(data.obs);

    data.nome = "editado";
    let update = await request(app)
      .put("/" + res.body._id)
      .send(data);

    expect(update.status).toEqual(200);
    expect(update.body.nome).toEqual(data.nome);
    expect(update.body.canal).toEqual(data.canal);
    expect(update.body.valor).toEqual(data.valor);
    expect(update.body.obs).toEqual(data.obs);

    const deleteData = await request(app).delete("/" + update.body._id);
    expect(deleteData.status).toEqual(200);

    done();
  });

  it("List all contatos and check if it is ok", async done => {
    let listAll = await request(app).get("/");

    expect(listAll.status).toEqual(200);

    done();
  });
});
