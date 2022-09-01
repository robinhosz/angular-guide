import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private list: Array<string> = [
    "x Bacon",
    "Feijão",
    "Ovo"
  ];

  private url: string = "http://localhost:3000/"; //list-food
  constructor(private http: HttpClient) { }

  public foodList(): Observable<FoodList> {
    return this.http.get<FoodList>(`${this.url}list-food`).pipe(
      res => res,
      error => error
    )
  }

  public foodListAdd(foodList: FoodList): Observable<FoodList> {
    return this.http.post<FoodList>(`${this.url}list-food`, foodList);
    
  }

  public foodListAlert(value: string) {
    return this.emitEvent.emit(value);
  }
}
