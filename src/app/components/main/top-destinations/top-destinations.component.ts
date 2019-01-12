import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { ImageProviderService } from '../../services/image-provider.service';

@Component({
  selector: 'app-top-destinations',
  templateUrl: './top-destinations.component.html',
  styleUrls: ['./top-destinations.component.css']
})
export class TopDestinationsComponent implements OnInit {
   bkimg1:string;
   bkimg2:string;
   bkimg3:string;
   video:string;
   topDestinationsImages:any;
   Destination:string;

   constructor(private imageprovider:ImageProviderService,
    private router: Router,
    private route: ActivatedRoute,) { }
   
  
   ngOnInit() { 
     console.log(this.route.snapshot.params['id']);
      this.Destination='southern africa';
    this.getDestination();
     this.video="https://www.youtube.com/watch?v=YHuw1u4mptg&list=RDYHuw1u4mptg&start_radio=1";
     this.bkimg1="assets/images/g.jpg";
     this.bkimg2="assets/images/g2.jpg";
     this.bkimg3="assets/images/g3.jpg";
   }
    getDestination(){
    var id = this.route.snapshot.params['id'];
    if(id=='1'){
      this.Destination='southern africa';
    }
    if(id=='3'){
      this.Destination='Ethiopia';
    }
    if(id=='2'){
      this.Destination='Eastern Africa';
    }
  
  };
 getTopDestinationsImages1(){
    this.imageprovider.getTopDestinationsImages().subscribe(res=>{
      this.topDestinationsImages=res;
    })
    }
    
}
