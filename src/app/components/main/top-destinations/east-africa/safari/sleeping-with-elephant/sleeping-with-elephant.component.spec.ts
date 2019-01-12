import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepingWithElephantComponent } from './sleeping-with-elephant.component';

describe('SleepingWithElephantComponent', () => {
  let component: SleepingWithElephantComponent;
  let fixture: ComponentFixture<SleepingWithElephantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepingWithElephantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepingWithElephantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
