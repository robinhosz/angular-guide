import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  foodList: FoodList = {

    nome: ''
  }

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
  }

  public listAddItem() {
    return this.foodListService.foodListAdd(this.foodList).subscribe(res => {
      console.log(res);
    }, ex => {
      console.log(ex);
    });
  }
}
