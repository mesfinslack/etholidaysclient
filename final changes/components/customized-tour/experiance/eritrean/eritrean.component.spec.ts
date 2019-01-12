import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EritreanComponent } from './eritrean.component';

describe('EritreanComponent', () => {
  let component: EritreanComponent;
  let fixture: ComponentFixture<EritreanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EritreanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EritreanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
