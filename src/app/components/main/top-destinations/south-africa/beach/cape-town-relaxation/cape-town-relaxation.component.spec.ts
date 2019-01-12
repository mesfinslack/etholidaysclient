import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapeTownRelaxationComponent } from './cape-town-relaxation.component';

describe('CapeTownRelaxationComponent', () => {
  let component: CapeTownRelaxationComponent;
  let fixture: ComponentFixture<CapeTownRelaxationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapeTownRelaxationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapeTownRelaxationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
