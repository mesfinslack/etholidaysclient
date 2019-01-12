import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlimpseOfKenyaSafariComponent } from './glimpse-of-kenya-safari.component';

describe('GlimpseOfKenyaSafariComponent', () => {
  let component: GlimpseOfKenyaSafariComponent;
  let fixture: ComponentFixture<GlimpseOfKenyaSafariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlimpseOfKenyaSafariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlimpseOfKenyaSafariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
