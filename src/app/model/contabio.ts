export class Saida{

    id!: number;
	fator!: string;
	valor!: number;
	data!: string;

}

export class Entrada{

    id!: number;
	fator!: string;
	valor!: number;
	data!: string;

}

export class CaixaData {
	data!: string;
	entrada!: number;
	saida!: number;
	total!: number;
}

export class ContabioMenssagem {
    menssagem!: string;
}