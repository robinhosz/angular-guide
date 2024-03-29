import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: FoodList | any;

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe(
      res => this.foodList = res,
      error => error
    );
    this.foodListService.emitEvent.subscribe(
      res => alert(`Você adicionou um item ${res}`)
    );
    this.foodListService.foodListAdd(this.foodList).subscribe(res => {
      console.log(res);
    }, ex => {
      console.log(ex);
    });
  }

}
