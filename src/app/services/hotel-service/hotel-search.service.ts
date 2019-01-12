import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchHotelService {
  public broadcastsearchHotelData = new BehaviorSubject<any>("intial");
  public searchHotelDataBC = this.broadcastsearchHotelData.asObservable();
  constructor() { }
}
