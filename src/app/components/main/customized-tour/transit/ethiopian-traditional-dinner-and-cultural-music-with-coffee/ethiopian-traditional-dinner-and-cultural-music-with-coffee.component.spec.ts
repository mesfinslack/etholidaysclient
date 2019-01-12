import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthiopianTraditionalDinnerAndCulturalMusicWithCoffeeComponent } from './ethiopian-traditional-dinner-and-cultural-music-with-coffee.component';

describe('EthiopianTraditionalDinnerAndCulturalMusicWithCoffeeComponent', () => {
  let component: EthiopianTraditionalDinnerAndCulturalMusicWithCoffeeComponent;
  let fixture: ComponentFixture<EthiopianTraditionalDinnerAndCulturalMusicWithCoffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthiopianTraditionalDinnerAndCulturalMusicWithCoffeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthiopianTraditionalDinnerAndCulturalMusicWithCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
