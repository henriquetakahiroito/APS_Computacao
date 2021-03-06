import { Component } from '@angular/core';


interface Cartao{
  nome: String;
  saldo: number;
}
@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.page.html',
  styleUrls: ['./cartao.page.scss'],
})
export class CartaoPage{

  public valorSaldo = 0;
  public listCartoes : Cartao[] = [
    {
      nome: "Credito",
      saldo: 75.0
    },
    {
      nome: "Debito",
      saldo: 500.0
    },
    {
      nome: "Nubank",
      saldo: 80.0
    },
  ];
  public selectedCartao = -1;
  public iptValor = 0;

  constructor() { }

  public refreshList(){
    this.listCartoes[this.selectedCartao].saldo = this.valorSaldo;
    this.iptValor = 0;
  }

  public increment(){
    this.valorSaldo += this.iptValor;
    this.refreshList();
  }
  public decrement(){
    this.valorSaldo -= this.iptValor;
    this.refreshList();
  }

  public selectCartao(cartao){
    this.iptValor = 0;
    this.valorSaldo = cartao.saldo;
    this.selectedCartao = this.listCartoes.indexOf(cartao);
  }

  public removeCartao(toRemove : Cartao) {
    const index = this.listCartoes.indexOf(toRemove)
    this.listCartoes.splice(index, 1);
  }

}
