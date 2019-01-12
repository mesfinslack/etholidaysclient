import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPackageResultComponent } from './tour-package-result.component';

describe('TourPackageResultComponent', () => {
  let component: TourPackageResultComponent;
  let fixture: ComponentFixture<TourPackageResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourPackageResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourPackageResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
