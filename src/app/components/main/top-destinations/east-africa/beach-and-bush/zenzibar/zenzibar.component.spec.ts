import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenzibarComponent } from './zenzibar.component';

describe('ZenzibarComponent', () => {
  let component: ZenzibarComponent;
  let fixture: ComponentFixture<ZenzibarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenzibarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenzibarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
