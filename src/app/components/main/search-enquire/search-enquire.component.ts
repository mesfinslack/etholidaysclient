  
  import { Component, OnDestroy, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { Subscription } from 'rxjs';
// import { SearchEnquireService } from 'src/app/services/search-enquire.service';


@Component({
  selector: 'app-search-enquire',
  templateUrl: './search-enquire.component.html',
  styleUrls: ['./search-enquire.component.css']
})
export class SearchEnquireComponent implements OnInit {
  checkboxSubscription: Subscription;
  searchEnquireForm: FormGroup;
  // serachEnquireres:any;
  submitted = false;
  date:any;

  constructor(
    private fb: FormBuilder, 
    // private searchEnquireser:SearchEnquireService
     ) {

    this.searchEnquireForm = this.fb.group({
        personalInformation:fb.group({
          firstName:['',Validators.required],
          lastName:['',Validators.required],
          nationality:['',Validators.required],
          email:['',Validators.required],
          telephone:['',Validators.required],
          passengers:['',Validators.required],
        }),
        departureInformation:fb.group({
          intialDate:[],
          flexibleDate:[],
          airport:['',Validators.required]  
        }),
        extraInformation:fb.group({
          comment:[],
          specialRequirement:[]
        }),
});
}

ngOnInit() {
}

get personalInformation(){
return this.searchEnquireForm.get('personalInformation');
}

get departureInformation(){
  return this.searchEnquireForm.get('departureInformation');
}

get extraInformation(){
    return this.searchEnquireForm.get('extraInformation');
}

  get firstName(){ return this.searchEnquireForm.get('personalInformation.firstName');}
  get lastName(){ return this.searchEnquireForm.get('personalInformation.lastName');}  
  get nationality(){ return this.searchEnquireForm.get('personalInformation.nationality');}  
  get email(){ return this.searchEnquireForm.get('personalInformation.email');}  
  get telephone(){ return this.searchEnquireForm.get('personalInformation.telephone');}  
  get passengers(){ return this.searchEnquireForm.get('personalInformation.passengers');}  

  get intialDate(){ return this.searchEnquireForm.get('departureInformation.intialDate');}  
  get flexibleDate(){ return this.searchEnquireForm.get('departureInformation.flexibleDate');}  
  get airport(){ return this.searchEnquireForm.get('departureInformation.airport');}  
  
  get comment(){ return this.searchEnquireForm.get('extraInformation.comment');} 
  get specialRequirement(){ return this.searchEnquireForm.get('extraInformation.specialRequirement');} 

onSubmit(){
  // this.searchEnquireser.searchEnquire(this.searchEnquireForm.value).subscribe(res=>{
  //   this.serachEnquireres=res;
  // });

// console.log(this.searchEnquireForm.value);
// console.log(this.personalInformation.valid);
}







next(x:string){
//this.currentProgress = x;

}



}
