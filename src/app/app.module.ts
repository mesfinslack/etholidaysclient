import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/main/home/home.component';
import { NavComponent } from './components/main/nav/nav.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { TopDestinationsComponent } from './components/main/top-destinations/top-destinations.component';
import { SearchEnquireComponent } from './components/main/search-enquire/search-enquire.component';
import { CustomizedTourComponent } from './components/main/customized-tour/customized-tour.component';
import { EthiopiaComponent } from './components/main/top-destinations/ethiopia/ethiopia.component';
import { EastAfricaComponent } from './components/main/top-destinations/east-africa/east-africa.component';
import { SafarisComponent } from './components/main/customized-tour/safari/safari.component';
import { RomanticComponent } from './components/main/customized-tour/romantic/romantic.component';
import { TransitComponent } from './components/main/customized-tour/transit/transit.component';
import { ExperianceComponent } from './components/main/customized-tour/experiance/experiance.component';
import { SouthAfricaComponent } from './components/main/top-destinations/south-africa/south-africa.component';
import { TimketComponent } from './components/main/customized-tour/experiance/timket/timket.component';
import { BalloonComponent } from './components/main/customized-tour/experiance/balloon/balloon.component';
import { GreatRunComponent } from './components/main/customized-tour/experiance/great-run/great-run.component';
import { EritreanComponent } from './components/main/customized-tour/experiance/eritrean/eritrean.component';
import { BirdComponent } from './components/main/customized-tour/experiance/bird/bird.component';
import { BikeComponent } from './components/main/customized-tour/experiance/bike/bike.component';
import { BeachComponent } from './components/main/top-destinations/south-africa/beach/beach.component';
import { NamibiaComponent } from './components/main/top-destinations/south-africa/tours/namibia/namibia.component';
import { KrugerComponent } from './components/main/top-destinations/south-africa/tours/kruger/kruger.component';
import { CapeTownComponent } from './components/main/top-destinations/south-africa/tours/cape-town/cape-town.component';
import { VictoriaComponent } from './components/main/top-destinations/south-africa/beach/victoria/victoria.component';
import { NosyBeComponent } from './components/main/top-destinations/south-africa/beach/nosy-be/nosy-be.component';
import { CapeTownRelaxationComponent } from './components/main/top-destinations/south-africa/beach/cape-town-relaxation/cape-town-relaxation.component';
import { SafariAndFallsComponent } from './components/main/top-destinations/south-africa/specials/safari-and-falls/safari-and-falls.component';
import { SouthAfricaAndFallsComponent } from './components/main/top-destinations/south-africa/specials/south-africa-and-falls/south-africa-and-falls.component';
import { WineAndGardenComponent } from './components/main/top-destinations/south-africa/specials/wine-and-garden/wine-and-garden.component';
import { TanzaniaLuxuryComponent } from './components/main/top-destinations/east-africa/safari/tanzania-luxury/tanzania-luxury.component';
import { SleepingWithElephantComponent } from './components/main/top-destinations/east-africa/safari/sleeping-with-elephant/sleeping-with-elephant.component';
import { KenyaSafariHolidayComponent } from './components/main/top-destinations/east-africa/safari/kenya-safari-holiday/kenya-safari-holiday.component';
import { MountKilimanjaroComponent } from './components/main/top-destinations/east-africa/specials/mount-kilimanjaro/mount-kilimanjaro.component';
import { GorillaTrekkingComponent } from './components/main/top-destinations/east-africa/specials/gorilla-trekking/gorilla-trekking.component';
import { WildlifeAndCultureComponent } from './components/main/top-destinations/east-africa/specials/wildlife-and-culture/wildlife-and-culture.component';
import { BeachAndBushComponent } from './components/main/top-destinations/east-africa/beach-and-bush/beach-and-bush.component';
import { SeychellesComponent } from './components/main/top-destinations/east-africa/beach-and-bush/seychelles/seychelles.component';
import { ZenzibarComponent } from './components/main/top-destinations/east-africa/beach-and-bush/zenzibar/zenzibar.component';
import { MombasaComponent } from './components/main/top-destinations/east-africa/beach-and-bush/mombasa/mombasa.component';
import { ErtaleAdventureComponent } from './components/main/top-destinations/ethiopia/ertale-adventure/ertale-adventure.component';
import { DanakilToursComponent } from './components/main/top-destinations/ethiopia/ertale-adventure/danakil-tours/danakil-tours.component';
import { FaceTheFireComponent } from './components/main/top-destinations/ethiopia/ertale-adventure/face-the-fire/face-the-fire.component';
import { NorthAdventureTourComponent } from './components/main/top-destinations/ethiopia/ertale-adventure/north-adventure-tour/north-adventure-tour.component';
import { CoffeeToursComponent } from './components/main/top-destinations/ethiopia/coffee-tours/coffee-tours.component';
import { ClassicComponent } from './components/main/top-destinations/ethiopia/coffee-tours/classic/classic.component';
import { ClimpseComponent } from './components/main/top-destinations/ethiopia/coffee-tours/climpse/climpse.component';
import { DiscoverComponent } from './components/main/top-destinations/ethiopia/coffee-tours/discover/discover.component';
import { RiftValleyTourComponent } from './components/main/top-destinations/ethiopia/rift-valley-tour/rift-valley-tour.component';
import { HawassaComponent } from './components/main/top-destinations/ethiopia/rift-valley-tour/hawassa/hawassa.component';
import { SouthLeisureComponent } from './components/main/top-destinations/ethiopia/rift-valley-tour/south-leisure/south-leisure.component';
import { RiftValleyComponent } from './components/main/top-destinations/ethiopia/rift-valley-tour/rift-valley/rift-valley.component';
import { SpecialsComponent } from './components/main/top-destinations/south-africa/specials/specials.component';



import { ToursComponent } from './components/main/top-destinations/south-africa/tours/tours.component';
import { SafariComponent } from './components/main/top-destinations/east-africa/safari/safari.component';
import { TheBestOfTanzaniaSafariComponent } from './components/main/customized-tour/safari/the-best-of-tanzania-safari/the-best-of-tanzania-safari.component';
import { GlimpseOfKenyaSafariComponent } from './components/main/customized-tour/safari/glimpse-of-kenya-safari/glimpse-of-kenya-safari.component';
import { MaraExperianceSafariComponent } from './components/main/customized-tour/safari/mara-experiance-safari/mara-experiance-safari.component';
import { EthiopianTraditionalDinnerAndCulturalMusicWithCoffeeComponent } from './components/main/customized-tour/transit/ethiopian-traditional-dinner-and-cultural-music-with-coffee/ethiopian-traditional-dinner-and-cultural-music-with-coffee.component';
import { SpaSeviceWithEthioCoffeeComponent } from './components/main/customized-tour/transit/spa-sevice-with-ethio-coffee/spa-sevice-with-ethio-coffee.component';
import { NationalMusuemAndEthioCoffeeComponent } from './components/main/customized-tour/transit/national-musuem-and-ethio-coffee/national-musuem-and-ethio-coffee.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TourPackageResultComponent } from './components/main/tour-package-result/tour-package-result.component';












@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    TopDestinationsComponent,
    SearchEnquireComponent,
    CustomizedTourComponent,
    EthiopiaComponent,
    EastAfricaComponent,
    SafarisComponent,
    RomanticComponent,
    TransitComponent,
    ExperianceComponent,
    SouthAfricaComponent,
    TimketComponent,
    BalloonComponent,
    GreatRunComponent,
    EritreanComponent,
    BirdComponent,
    BikeComponent,
    BeachComponent,
    NamibiaComponent,
    KrugerComponent,
    CapeTownComponent,
    VictoriaComponent,
    NosyBeComponent,
    SpecialsComponent,
    CapeTownRelaxationComponent,
    SafariAndFallsComponent,
    SouthAfricaAndFallsComponent,
    WineAndGardenComponent,
    TanzaniaLuxuryComponent,
    SleepingWithElephantComponent,
    KenyaSafariHolidayComponent,
    MountKilimanjaroComponent,
    GorillaTrekkingComponent,
    WildlifeAndCultureComponent,
    BeachAndBushComponent,
    SeychellesComponent,
    ZenzibarComponent,
    MombasaComponent,
    ErtaleAdventureComponent,
    DanakilToursComponent,
    FaceTheFireComponent,
    NorthAdventureTourComponent,
    CoffeeToursComponent,
    ClassicComponent,
    ClimpseComponent,
    DiscoverComponent,
    RiftValleyTourComponent,
    HawassaComponent,
    SouthLeisureComponent,
    RiftValleyComponent,
    ToursComponent,
    SafariComponent,
    TheBestOfTanzaniaSafariComponent,
    GlimpseOfKenyaSafariComponent,
    MaraExperianceSafariComponent,
    EthiopianTraditionalDinnerAndCulturalMusicWithCoffeeComponent,
    SpaSeviceWithEthioCoffeeComponent,
    NationalMusuemAndEthioCoffeeComponent,
    PrivacyPolicyComponent,
    TourPackageResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
