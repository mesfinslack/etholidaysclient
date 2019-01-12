import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineAndGardenComponent } from './wine-and-garden.component';

describe('WineAndGardenComponent', () => {
  let component: WineAndGardenComponent;
  let fixture: ComponentFixture<WineAndGardenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineAndGardenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineAndGardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
