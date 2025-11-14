import { Servico } from "./servico";

export class Clientes {

  	id! : number;
	nome! : string;
	contato! : string;
	endereco! : string;
	servico! : Servico[];


}

export interface ClienteMenssagem {
	menssagem: string;
}

