import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HawassaComponent } from './hawassa.component';

describe('HawassaComponent', () => {
  let component: HawassaComponent;
  let fixture: ComponentFixture<HawassaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HawassaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HawassaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
