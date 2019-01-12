import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';
@Injectable()
export class HoldReservationService {
  requestData: any;
  flightId: any;
  public paymentOptions = new BehaviorSubject<any>("intial");
  public paymentOptionsBC = this.paymentOptions.asObservable();
  constructor(private _httpService: HttpService) {


  }
  apiRelativePath1: string = "/ETIOPIANAGENCYPORTAL/BookingAPI/V2.0/api/Booking/GetBNPLOption";
  apiRelativePath2: string = "/ETIOPIANAGENCYPORTAL/BookingAPI/V2.0/api/Booking/GetPNRBNPL";
  holdReservation() {
    this.flightId = localStorage.getItem("flightId");
    this.requestData =
      {
        "id": parseInt(this.flightId)
      }
    debugger;
    return this._httpService.postService(this.apiRelativePath1, this.requestData);
  }
  getReservationByPnr(pnr: any) {
    this.apiRelativePath2 = this.apiRelativePath2 + "?PNR=" + pnr;
    return this._httpService.getService(this.apiRelativePath2);
  }

}
