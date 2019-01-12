import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafariAndFallsComponent } from './safari-and-falls.component';

describe('SafariAndFallsComponent', () => {
  let component: SafariAndFallsComponent;
  let fixture: ComponentFixture<SafariAndFallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafariAndFallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafariAndFallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
