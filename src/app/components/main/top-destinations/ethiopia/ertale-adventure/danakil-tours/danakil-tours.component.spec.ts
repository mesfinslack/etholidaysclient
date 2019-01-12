import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanakilToursComponent } from './danakil-tours.component';

describe('DanakilToursComponent', () => {
  let component: DanakilToursComponent;
  let fixture: ComponentFixture<DanakilToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanakilToursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanakilToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
