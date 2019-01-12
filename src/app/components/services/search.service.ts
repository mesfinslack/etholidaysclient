import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public broadcastsearchData = new BehaviorSubject<any>("intial");
  public searchDataBC = this.broadcastsearchData.asObservable();
  public broadcastSearchParameter = new BehaviorSubject<any>("intial");
  public searchParameterBC = this.broadcastSearchParameter.asObservable();
  public broadcastFlightId = new BehaviorSubject<any>("intial");
  public flightIdBC = this.broadcastFlightId.asObservable();
  public  apiRelativePath: string = "/ETIOPIANAGENCYPORTAL/BookingAPI/V2.0/api/Availability/Search";
  constructor(private _httpServe: HttpService)
  {
  }
  search(searchData: any)
  {
    debugger;
    return this._httpServe.postService(this.apiRelativePath, searchData);
  }
}
