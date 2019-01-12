import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GorillaTrekkingComponent } from './gorilla-trekking.component';

describe('GorillaTrekkingComponent', () => {
  let component: GorillaTrekkingComponent;
  let fixture: ComponentFixture<GorillaTrekkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GorillaTrekkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GorillaTrekkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
