import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: String = 'robson';
  public idade: number = 19;

  constructor() { }

  public checkedDisable: boolean = false;
  public imgSrc: String = "https://th.bing.com/th/id/OIP.uW4diYUncZvsq0DJJC1DvQHaFj?w=249&h=187&c=7&r=0&o=5&dpr=1.25&pid=1.7";
  public imgTitle: String = "Property";
  public position: {x: number, y: number} = {x: 0, y: 0}
  ngOnInit(): void {
  }

  public alertaInfo(valor: MouseEvent) {
    console.log(valor)
  }

  public mouseMoveTeste(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
