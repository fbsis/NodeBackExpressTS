import { Request, Response } from "express";

import Contato from "../Schemas/Contato";

import contatoService from "../Services/ContatoService";

class ContatoController {
  public async index(request: Request, response: Response) {
    const allContatos = await contatoService.getAllContatos();

    response.json(allContatos);
  }

  public async detail(request: Request, response: Response) {
    const allContatos = await contatoService.getOne(request.params.id);

    response.json(allContatos);
  }

  public async Create(request: Request, response: Response) {
    const create = await contatoService.CreateContatos(request.body);
    response.json(create);
  }

  public async Update(request: Request, response: Response) {
    const allContatos = await contatoService.UpdateContatos(
      request.params.id,
      request.body
    );

    response.json(allContatos);
  }

  public async Delete(request: Request, response: Response) {
    const allContatos = await contatoService.RemoveContatos(request.params.id);

    response.json(allContatos);
  }
}

export default new ContatoController();
