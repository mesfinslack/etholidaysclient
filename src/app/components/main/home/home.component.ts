import { Component, OnInit } from '@angular/core';
import { ImageProviderService } from '../../services/image-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bkimg1:string;
  bkimg2:string;
  bkimg3:string;
  video:string;
  enquireclicked:boolean;

 private homeImages:any;
  constructor( private imageprovider:ImageProviderService) { }
// 
  ngOnInit() { 
    this.video="https://www.ethiopianholidays.com/Cms_Data/Contents/ETHD/Media/video/Land-of-Origin-with.mp4";
   // https://www.youtube.com/watch?v=YHuw1u4mptg&list=RDYHuw1u4mptg&start_radio=1 
    this.bkimg1="assets/images/g.jpg";
    this.bkimg2="assets/images/g2.jpg";
    this.bkimg3="assets/images/g3.jpg";

    this.enquireclicked=false;
    this.getHomeImages1();

  }
  
  getHomeImages1(){
 this.imageprovider.getHomeImages().subscribe(res=>{
   this.homeImages=res;
})
}
enquireOnclicked(){
  if(this.enquireclicked==false){
    this.enquireclicked=true;
  }
  else {
    this.enquireclicked=false;
  }
}








}
