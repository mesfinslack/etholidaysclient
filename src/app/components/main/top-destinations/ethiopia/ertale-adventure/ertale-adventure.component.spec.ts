import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErtaleAdventureComponent } from './ertale-adventure.component';

describe('ErtaleAdventureComponent', () => {
  let component: ErtaleAdventureComponent;
  let fixture: ComponentFixture<ErtaleAdventureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErtaleAdventureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErtaleAdventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
