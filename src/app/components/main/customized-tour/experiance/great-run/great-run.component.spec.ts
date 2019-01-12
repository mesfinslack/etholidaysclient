import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatRunComponent } from './great-run.component';

describe('GreatRunComponent', () => {
  let component: GreatRunComponent;
  let fixture: ComponentFixture<GreatRunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreatRunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreatRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
