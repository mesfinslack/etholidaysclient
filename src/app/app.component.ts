import { Component, OnInit } from '@angular/core';
declare var M: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ETHolidays-client';

ngOnInit(){
this.initialize();
}

initialize(){
 
  document.addEventListener('DOMContentLoaded', function() {
      var elems9 = document.querySelectorAll('.modal');
      var instances9 = M.Modal.init(elems9, {});
  
      var elems11 = document.querySelectorAll('.sidenav');
      var instances11 = M.Sidenav.init(elems11, {});
      

      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {});

      var elemsem = document.querySelectorAll('.slider');
      var instancesem = M.Slider.init(elemsem,  {});

      var elemsem = document.querySelectorAll('.homeslider');
      var instancesem = M.Slider.init(elemsem,  {
       indicators: false,
       height: 500,
       transition: 500,
       interval: 8000
            });

      var elemsem = document.querySelectorAll('.holidaystypeslider');
      var instancesem = M.Slider.init(elemsem,  {
       indicators: false,
       height: 450,
       transition: 500,
       interval: 8000
            });

      var elemseof = document.querySelectorAll('.sliderspecialoffers');
      var instanceseof = M.Slider.init(elemseof, {});

      var elems34 = document.querySelectorAll('.materialboxed');
      var instances34 = M.Materialbox.init(elems34, {});

      var ele = document.querySelectorAll('.dropdown');
      var instancems = M.Dropdown.init(ele, {});

      var elems3r = document.querySelectorAll('.parallax');
      var instances3r = M.Parallax.init(elems3r, {});

      var elems35 = document.querySelectorAll('.dropdown-triggeraction');
      var instances35 = M.Dropdown.init(elems35, {});
      
      var elemsnav = document.querySelectorAll('.dropdown-trigger');
      var instancesnav = M.Dropdown.init(elemsnav, {coverTrigger:false,hover:false});
      
      var elemstab = document.querySelectorAll('.tabs');
      var instancestab = M.Tabs.init(elemstab, {});

  var elemss = document.querySelectorAll('select');
  var instancess = M.FormSelect.init(elemss, {});
  
  var elemsdate = document.querySelectorAll('.datepicker');
  var instancesdate = M.Datepicker.init(elemsdate, {});

    });
  
  //dropdown
  const tabs =document.querySelectorAll('.tabs');
  M.Tabs.init(tabs,{});
  
  //dropdown
//    document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.dropdown-trigger');
//   var instances = M.Dropdown.init(elems, {});
//  });
 
 document.addEventListener('DOMContentLoaded', function() {
     var elemsn = document.querySelectorAll('.modal');
     var instances = M.Modal.init(elemsn, {});
   });
 
   document.addEventListener('DOMContentLoaded', function() {
     var elemsnl = document.querySelectorAll('.collapsible');
     var instances = M.Collapsible.init(elemsnl, {});
   });
 
   document.addEventListener('DOMContentLoaded', function() {
   
   var elems5 = document.querySelectorAll('.tabs');
   var instance5 = M.Tabs.init(elems5, {});
 
   var elemss = document.querySelectorAll('.tabs');
   var instance5 = M.Tabs.init(elemss, {});
 });
    

}











}
