import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public listComidas: Array<{comida: string}> = [
    { comida: "X-salada"},
    { comida: "X-bacon"},
    { comida: "X-tudo"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(form: NgForm) {
    if(form.valid) {
      console.log(form.value);
    }
  }
}
