import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiftValleyComponent } from './rift-valley.component';

describe('RiftValleyComponent', () => {
  let component: RiftValleyComponent;
  let fixture: ComponentFixture<RiftValleyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiftValleyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiftValleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
