import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildlifeAndCultureComponent } from './wildlife-and-culture.component';

describe('WildlifeAndCultureComponent', () => {
  let component: WildlifeAndCultureComponent;
  let fixture: ComponentFixture<WildlifeAndCultureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildlifeAndCultureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildlifeAndCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
