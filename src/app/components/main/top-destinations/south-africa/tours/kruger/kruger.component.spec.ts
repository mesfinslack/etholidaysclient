import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KrugerComponent } from './kruger.component';

describe('KrugerComponent', () => {
  let component: KrugerComponent;
  let fixture: ComponentFixture<KrugerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KrugerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KrugerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
