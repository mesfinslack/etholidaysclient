import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimpseComponent } from './climpse.component';

describe('ClimpseComponent', () => {
  let component: ClimpseComponent;
  let fixture: ComponentFixture<ClimpseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimpseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimpseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
