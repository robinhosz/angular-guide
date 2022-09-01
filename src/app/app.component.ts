import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {}

  public addValue: number = 0;

  public getDados: {nome: string, idade: number} | undefined;

  ngOnInit(): void { }
  
  public add() {
    this.addValue +=1;
  }

  public setDados(event: { nome: string, idade: number}) {
    this.getDados = event;
  }
}
