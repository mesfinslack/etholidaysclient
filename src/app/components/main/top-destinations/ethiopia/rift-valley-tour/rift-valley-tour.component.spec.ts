import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiftValleyTourComponent } from './rift-valley-tour.component';

describe('RiftValleyTourComponent', () => {
  let component: RiftValleyTourComponent;
  let fixture: ComponentFixture<RiftValleyTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiftValleyTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiftValleyTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
