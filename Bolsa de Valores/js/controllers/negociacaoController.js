import { Negociacao } from "../models/negociacao.js";
import { ListaNegociacoes } from "../models/listaNegociacoes";

export class NegociacaoController {
    #campoData;
    #campoQuantidade;
    #campoValor;
    #listaNegociacoes = new ListaNegociacoes();

    constructor(){
        this.#campoData = document.getElementById('data');
        this.#campoQuantidade = document.getElementById('quantidade');
        this.#campoValor = document.getElementById('valor');
    }

    criarNegociacao(){
        let data = new Date(this.#campoData.value  + "T00:00:00-03:00").toLocaleDateString();
        let quantidade = parseInt(this.#campoQuantidade.value);
        let valor = parseFloat(this.#campoValor.value);
        let negociacao = new Negociacao(data, quantidade, valor);
        
        this.#listaNegociacoes.adiciona(negociacao);
        console.log(this.#listaNegociacoes.negociacoes);
    }
}