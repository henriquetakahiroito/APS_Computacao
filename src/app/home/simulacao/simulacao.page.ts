import {Component} from '@angular/core';

interface Simulacao{
  nome: String;
  percentual: number;
}
@Component({
  selector: 'app-simulacao',
  templateUrl: './simulacao.page.html',
  styleUrls: ['./simulacao.page.scss'],
})

export class SimulacaoPage{

  public simulacoes : Simulacao[] = [];

  public newInvestName = "";
  public newPercentYear = 0.0;

  constructor() { }

  public addNewSimulacao(){
    if (this.newInvestName.trim().length == 0) {
      return;
    }
    if (this.newPercentYear <= 0) {
      return;
    }

    this.simulacoes.push({
      nome: this.newInvestName.trim(),
      percentual: this.newPercentYear
    })

    this.newInvestName = '';
    this.newPercentYear = 0.0;
  }

  public removeSimulacao(toRemove: Simulacao) {
    const index = this.simulacoes.indexOf(toRemove)
    this.simulacoes.splice(index, 1);
  }
}
