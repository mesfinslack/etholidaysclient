
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { TourPackagesService } from 'src/app/services/tour-packages.service';

@Component({
  selector: 'app-tour-package-result',
  templateUrl: './tour-package-result.component.html',
  styleUrls: ['./tour-package-result.component.css']
})
export class TourPackageResultComponent implements OnInit {
private PackageDetails:any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private TourPackagesService: TourPackagesService
  ) { }

  ngOnInit() {
    this.getPackageDetails();
  }

  getPackageDetails(){
    var id = this.route.snapshot.params['id'];
    this.TourPackagesService.getPackageDetails(id).subscribe(PackageDetails =>
      {
       this.PackageDetails = PackageDetails[0];
      })
  };

  goBack(){
        this.router.navigate(['/']);
     }
}
