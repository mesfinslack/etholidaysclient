import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EastAfricaComponent } from './east-africa.component';

describe('EastAfricaComponent', () => {
  let component: EastAfricaComponent;
  let fixture: ComponentFixture<EastAfricaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EastAfricaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EastAfricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
