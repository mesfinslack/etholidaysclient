import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AvaliabilityService {

  searchContextApiRelativePath: string = "/ETIOPIANAGENCYPORTAL/BookingAPI/V2.0/api/Availability/SearchContext";
  submitApiRelativePath: string = "/ETIOPIANAGENCYPORTAL/BookingAPI/V2.0/api/Availability/SelectFlight";
  constructor(private _httpService: HttpService) { }
  searchContext(data: any) {
    debugger;
    return this._httpService.postService(this.searchContextApiRelativePath, data);
  }
  submitSelectedFlight(data: any) {
    debugger;
    return this._httpService.postService(this.submitApiRelativePath, data);
  }
}
