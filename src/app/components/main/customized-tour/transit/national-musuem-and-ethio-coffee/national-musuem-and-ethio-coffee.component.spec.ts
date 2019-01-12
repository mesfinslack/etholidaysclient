import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalMusuemAndEthioCoffeeComponent } from './national-musuem-and-ethio-coffee.component';

describe('NationalMusuemAndEthioCoffeeComponent', () => {
  let component: NationalMusuemAndEthioCoffeeComponent;
  let fixture: ComponentFixture<NationalMusuemAndEthioCoffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalMusuemAndEthioCoffeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalMusuemAndEthioCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
