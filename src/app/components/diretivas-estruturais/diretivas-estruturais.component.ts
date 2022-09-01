import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public list: Array<{ nome: string, idade: number}> = [
    {nome: 'José Robson', idade: 19},
    {nome: 'Dener', idade: 29},
    {nome: 'Gustavo', idade: 20},
    {nome: 'Joao', idade: 15},
];

  public nome: string = 'robson';

  public idade: number = 0;

  public condition: boolean = true;

  public conditionClick: boolean = true;

  constructor() { }

  ngOnInit(): void {

    setInterval(() =>{
      if(this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000)
  }

  public onClick() {
    if(this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickList(nome: string, idade: number) {
    this.list.push({nome, idade});
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1)
  }

}
