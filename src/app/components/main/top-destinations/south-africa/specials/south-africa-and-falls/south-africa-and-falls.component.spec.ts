import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthAfricaAndFallsComponent } from './south-africa-and-falls.component';

describe('SouthAfricaAndFallsComponent', () => {
  let component: SouthAfricaAndFallsComponent;
  let fixture: ComponentFixture<SouthAfricaAndFallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouthAfricaAndFallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthAfricaAndFallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
