import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceTheFireComponent } from './face-the-fire.component';

describe('FaceTheFireComponent', () => {
  let component: FaceTheFireComponent;
  let fixture: ComponentFixture<FaceTheFireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceTheFireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceTheFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
