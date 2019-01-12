import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamibiaComponent } from './namibia.component';

describe('NamibiaComponent', () => {
  let component: NamibiaComponent;
  let fixture: ComponentFixture<NamibiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamibiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamibiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
