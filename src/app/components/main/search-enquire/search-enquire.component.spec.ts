import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEnquireComponent } from './search-enquire.component';

describe('SearchEnquireComponent', () => {
  let component: SearchEnquireComponent;
  let fixture: ComponentFixture<SearchEnquireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEnquireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEnquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
