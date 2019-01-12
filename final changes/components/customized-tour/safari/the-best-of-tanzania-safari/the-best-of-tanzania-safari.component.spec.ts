import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBestOfTanzaniaSafariComponent } from './the-best-of-tanzania-safari.component';

describe('TheBestOfTanzaniaSafariComponent', () => {
  let component: TheBestOfTanzaniaSafariComponent;
  let fixture: ComponentFixture<TheBestOfTanzaniaSafariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBestOfTanzaniaSafariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBestOfTanzaniaSafariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
