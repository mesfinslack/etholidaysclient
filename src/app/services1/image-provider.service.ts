import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/map';
//import {observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ImageProviderService {
private homeImages:any;
private topDestinationsImages:any;
  constructor(private http:HttpClient) { }


getHomeImages(){
  return this.http.get("homeimages").pipe(map(res=>{
    this.homeImages=res;
    return this.homeImages;
  }));
}
getTopDestinationsImages(){
  return this.http.get("homeimages").pipe(map(res=>{
    this.topDestinationsImages=res;
    return this.topDestinationsImages;
  }));
}



}
