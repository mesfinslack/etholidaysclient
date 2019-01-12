import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachAndBushComponent } from './beach-and-bush.component';

describe('BeachAndBushComponent', () => {
  let component: BeachAndBushComponent;
  let fixture: ComponentFixture<BeachAndBushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeachAndBushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachAndBushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
