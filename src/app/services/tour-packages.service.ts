import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})



export class TourPackagesService  {
  // currentuser = JSON.parse(localStorage.getItem('login'));
  PackageDetails:any;

  constructor(private http: HttpClient) {
   }

  getPackageDetails(data){
    
    console.log("get PackageDetails" );
    return this.http.post("http://localhost/server/api2/selectone.php/",{'id':data}).pipe(map(res=>{
      this.PackageDetails = res;
      console.log(res);
      if(this.PackageDetails._body !== "0"){
         return res
         console.log(res);
      }
    }));
      };















}

