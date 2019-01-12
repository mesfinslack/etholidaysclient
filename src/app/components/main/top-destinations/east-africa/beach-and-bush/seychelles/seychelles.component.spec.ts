import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeychellesComponent } from './seychelles.component';

describe('SeychellesComponent', () => {
  let component: SeychellesComponent;
  let fixture: ComponentFixture<SeychellesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeychellesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeychellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
