import Contato from "../Schemas/Contato";
import { ContatoInterface } from "../Interfaces/ContatoInterface";

class ContatoService {
  async getAllContatos() {
    return await Contato.find();
  }

  async CreateContatos(body: any) {
    return await Contato.create(body);
  }

  async getOne(id: String) {
    return await Contato.findById(id);
  }

  async UpdateContatos<ContatoInterface>(id: String, body: ContatoInterface) {
    return await Contato.findOneAndUpdate(id, body);
  }

  async RemoveContatos(id: String) {
    return await Contato.findByIdAndDelete(id);
  }

  //Some dummy actions
  async CallContatos(id?: Number) {}
  async SendEmailsToContact(id?: Number) {}
  async BlockContact(id?: Number) {}
}

export default new ContatoService();
