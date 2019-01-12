import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MountKilimanjaroComponent } from './mount-kilimanjaro.component';

describe('MountKilimanjaroComponent', () => {
  let component: MountKilimanjaroComponent;
  let fixture: ComponentFixture<MountKilimanjaroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountKilimanjaroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MountKilimanjaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
