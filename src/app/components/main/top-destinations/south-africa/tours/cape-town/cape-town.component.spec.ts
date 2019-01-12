import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapeTownComponent } from './cape-town.component';

describe('CapeTownComponent', () => {
  let component: CapeTownComponent;
  let fixture: ComponentFixture<CapeTownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapeTownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapeTownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
