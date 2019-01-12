import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaSeviceWithEthioCoffeeComponent } from './spa-sevice-with-ethio-coffee.component';

describe('SpaSeviceWithEthioCoffeeComponent', () => {
  let component: SpaSeviceWithEthioCoffeeComponent;
  let fixture: ComponentFixture<SpaSeviceWithEthioCoffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaSeviceWithEthioCoffeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaSeviceWithEthioCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
