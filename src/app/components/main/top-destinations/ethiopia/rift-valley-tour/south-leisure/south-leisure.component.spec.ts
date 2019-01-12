import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthLeisureComponent } from './south-leisure.component';

describe('SouthLeisureComponent', () => {
  let component: SouthLeisureComponent;
  let fixture: ComponentFixture<SouthLeisureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouthLeisureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthLeisureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
