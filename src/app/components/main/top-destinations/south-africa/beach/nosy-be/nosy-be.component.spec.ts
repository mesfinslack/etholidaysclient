import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosyBeComponent } from './nosy-be.component';

describe('NosyBeComponent', () => {
  let component: NosyBeComponent;
  let fixture: ComponentFixture<NosyBeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosyBeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosyBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
