import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeToursComponent } from './coffee-tours.component';

describe('CoffeeToursComponent', () => {
  let component: CoffeeToursComponent;
  let fixture: ComponentFixture<CoffeeToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeToursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
