import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private logo:string;

  constructor() { }

  ngOnInit() {
    this.logo='assets/images/holidays.png'
  }

}
