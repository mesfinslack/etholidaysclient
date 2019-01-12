import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { TopDestinationsComponent } from './components/main/top-destinations/top-destinations.component';
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
import { CapeTownComponent } from './components/main/top-destinations/south-africa/tours/cape-town/cape-town.component';
import { NosyBeComponent } from './components/main/top-destinations/south-africa/beach/nosy-be/nosy-be.component';
import { VictoriaComponent } from './components/main/top-destinations/south-africa/beach/victoria/victoria.component';
import { SpecialsComponent } from './components/main/top-destinations/south-africa/specials/specials.component';
import { SafariAndFallsComponent } from './components/main/top-destinations/south-africa/specials/safari-and-falls/safari-and-falls.component';
import { SouthAfricaAndFallsComponent } from './components/main/top-destinations/south-africa/specials/south-africa-and-falls/south-africa-and-falls.component';
import { WineAndGardenComponent } from './components/main/top-destinations/south-africa/specials/wine-and-garden/wine-and-garden.component';
import { KrugerComponent } from './components/main/top-destinations/south-africa/tours/kruger/kruger.component';
import { NamibiaComponent } from './components/main/top-destinations/south-africa/tours/namibia/namibia.component';
import { ToursComponent } from './components/main/top-destinations/south-africa/tours/tours.component';
import { BeachAndBushComponent } from './components/main/top-destinations/east-africa/beach-and-bush/beach-and-bush.component';
import { MombasaComponent } from './components/main/top-destinations/east-africa/beach-and-bush/mombasa/mombasa.component';
import { SeychellesComponent } from './components/main/top-destinations/east-africa/beach-and-bush/seychelles/seychelles.component';
import { ZenzibarComponent } from './components/main/top-destinations/east-africa/beach-and-bush/zenzibar/zenzibar.component';
import { SafariComponent } from './components/main/top-destinations/east-africa/safari/safari.component';
import { KenyaSafariHolidayComponent } from './components/main/top-destinations/east-africa/safari/kenya-safari-holiday/kenya-safari-holiday.component';
import { SleepingWithElephantComponent } from './components/main/top-destinations/east-africa/safari/sleeping-with-elephant/sleeping-with-elephant.component';
import { TanzaniaLuxuryComponent } from './components/main/top-destinations/east-africa/safari/tanzania-luxury/tanzania-luxury.component';
import { GorillaTrekkingComponent } from './components/main/top-destinations/east-africa/specials/gorilla-trekking/gorilla-trekking.component';
import { MountKilimanjaroComponent } from './components/main/top-destinations/east-africa/specials/mount-kilimanjaro/mount-kilimanjaro.component';
import { WildlifeAndCultureComponent } from './components/main/top-destinations/east-africa/specials/wildlife-and-culture/wildlife-and-culture.component';
import { CoffeeToursComponent } from './components/main/top-destinations/ethiopia/coffee-tours/coffee-tours.component';
import { ErtaleAdventureComponent } from './components/main/top-destinations/ethiopia/ertale-adventure/ertale-adventure.component';
import { RiftValleyTourComponent } from './components/main/top-destinations/ethiopia/rift-valley-tour/rift-valley-tour.component';
import { ClassicComponent } from './components/main/top-destinations/ethiopia/coffee-tours/classic/classic.component';
import { ClimpseComponent } from './components/main/top-destinations/ethiopia/coffee-tours/climpse/climpse.component';
import { DiscoverComponent } from './components/main/top-destinations/ethiopia/coffee-tours/discover/discover.component';
import { DanakilToursComponent } from './components/main/top-destinations/ethiopia/ertale-adventure/danakil-tours/danakil-tours.component';
import { FaceTheFireComponent } from './components/main/top-destinations/ethiopia/ertale-adventure/face-the-fire/face-the-fire.component';
import { NorthAdventureTourComponent } from './components/main/top-destinations/ethiopia/ertale-adventure/north-adventure-tour/north-adventure-tour.component';
import { HawassaComponent } from './components/main/top-destinations/ethiopia/rift-valley-tour/hawassa/hawassa.component';
import { RiftValleyComponent } from './components/main/top-destinations/ethiopia/rift-valley-tour/rift-valley/rift-valley.component';
import { SouthLeisureComponent } from './components/main/top-destinations/ethiopia/rift-valley-tour/south-leisure/south-leisure.component';
import { GlimpseOfKenyaSafariComponent } from './components/main/customized-tour/safari/glimpse-of-kenya-safari/glimpse-of-kenya-safari.component';
import { MaraExperianceSafariComponent } from './components/main/customized-tour/safari/mara-experiance-safari/mara-experiance-safari.component';
import { TheBestOfTanzaniaSafariComponent } from './components/main/customized-tour/safari/the-best-of-tanzania-safari/the-best-of-tanzania-safari.component';
import { EthiopianTraditionalDinnerAndCulturalMusicWithCoffeeComponent } from './components/main/customized-tour/transit/ethiopian-traditional-dinner-and-cultural-music-with-coffee/ethiopian-traditional-dinner-and-cultural-music-with-coffee.component';
import { NationalMusuemAndEthioCoffeeComponent } from './components/main/customized-tour/transit/national-musuem-and-ethio-coffee/national-musuem-and-ethio-coffee.component';
import { SpaSeviceWithEthioCoffeeComponent } from './components/main/customized-tour/transit/spa-sevice-with-ethio-coffee/spa-sevice-with-ethio-coffee.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { SearchEnquireComponent } from './components/main/search-enquire/search-enquire.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"top-Destinations",component:TopDestinationsComponent},
  
  {path:"top-Destinations/ethiopia",component:EthiopiaComponent},
  {path:"top-Destinations/ethiopia/coffee-tours",component:CoffeeToursComponent},
  {path:"top-Destinations/ethiopia/coffee-tours/classic",component:ClassicComponent},
  {path:"top-Destinations/ethiopia/coffee-tours/climpse",component:ClimpseComponent},
  {path:"top-Destinations/ethiopia/coffee-tours/discover",component:DiscoverComponent},
  {path:"top-Destinations/ethiopia/ertale-adventure",component:ErtaleAdventureComponent},
  {path:"top-Destinations/ethiopia/ertale-adventure/danakil-tour",component:DanakilToursComponent},
  {path:"top-Destinations/ethiopia/ertale-adventure/face-the-fire",component:FaceTheFireComponent},
  {path:"top-Destinations/ethiopia/ertale-adventure/north-adventure-tour",component:NorthAdventureTourComponent},
  {path:"top-Destinations/ethiopia/rift-valley-tour",component:RiftValleyTourComponent},
  {path:"top-Destinations/ethiopia/rift-valley-tour/hawassa",component:HawassaComponent},
  {path:"top-Destinations/ethiopia/rift-valley-tour/rift-valley",component:RiftValleyComponent},
  {path:"top-Destinations/ethiopia/rift-valley-tour/south-leisure",component:SouthLeisureComponent},

  {path:"top-Destinations/south-africa",component:SouthAfricaComponent},
  {path:"top-Destinations/south-africa/beach",component:BeachComponent},
  {path:"top-Destinations/south-africa/beach/cape-town",component:CapeTownComponent},
  {path:"top-Destinations/south-africa/beach/nosy-be",component:NosyBeComponent},
  {path:"top-Destinations/south-africa/beach/victoria",component:VictoriaComponent},
  {path:"top-Destinations/south-africa/specials",component:SpecialsComponent},
  {path:"top-Destinations/south-africa/specials/safari-and-falls",component:SafariAndFallsComponent},
  {path:"top-Destinations/south-africa/specials/south-africa-and-falls",component:SouthAfricaAndFallsComponent},
  {path:"top-Destinations/south-africa/specials/wine-and-garden",component:WineAndGardenComponent},
  {path:"top-Destinations/south-africa/tours",component:ToursComponent},
  {path:"top-Destinations/south-africa/tours/cape-town",component:CapeTownComponent},
  {path:"top-Destinations/south-africa/tours/kruger",component:KrugerComponent},
  {path:"top-Destinations/south-africa/tours/nambia",component:NamibiaComponent},

  {path:"top-Destinations/east-africa",component:EastAfricaComponent},
  {path:"top-Destinations/east-africa/beach-and-bush",component:BeachAndBushComponent},
  {path:"top-Destinations/east-africa/beach-and-bush/mombasa",component:MombasaComponent},
  {path:"top-Destinations/east-africa/beach-and-bush/seychelles",component:SeychellesComponent},
  {path:"top-Destinations/east-africa/beach-and-bush/zenzibar",component:ZenzibarComponent},
  {path:"top-Destinations/east-africa/safari",component:SafariComponent},
  {path:"top-Destinations/east-africa/safari/kenya-safari-holidays",component:KenyaSafariHolidayComponent},
  {path:"top-Destinations/east-africa/safari/sleeping-with-elephants",component:SleepingWithElephantComponent},
  {path:"top-Destinations/east-africa/safari/tanzania-luxury",component:TanzaniaLuxuryComponent},
  {path:"top-Destinations/east-africa/specials",component:SpecialsComponent},
  {path:"top-Destinations/east-africa/specials/gorilla-trekking",component:GorillaTrekkingComponent},
  {path:"top-Destinations/east-africa/specials/mount-kilimanjaro",component:MountKilimanjaroComponent},
  {path:"top-Destinations/east-africa/specials/wildlife-and-culture",component:WildlifeAndCultureComponent},

  {path:"customized-Tour/safari",component:SafarisComponent},
  {path:"customized-Tour/safari/glimpse-of-kenya",component:GlimpseOfKenyaSafariComponent},
  {path:"customized-Tour/safari/mara-experiance",component:MaraExperianceSafariComponent},
  {path:"customized-Tour/safari/the-best-of-tanzania",component:TheBestOfTanzaniaSafariComponent},
  {path:"customized-Tour/romantic",component:RomanticComponent},
  {path:"customized-Tour/transit",component:TransitComponent},
  {path:"customized-Tour/transit/ethiopian-traditional-dinner",component:EthiopianTraditionalDinnerAndCulturalMusicWithCoffeeComponent},
  {path:"customized-Tour/transit/national-musuem-and-coffee",component:NationalMusuemAndEthioCoffeeComponent},
  {path:"customized-Tour/transit/spa-service-with-ethio-coffee",component:SpaSeviceWithEthioCoffeeComponent},
  {path:"customized-Tour/experiance",component:ExperianceComponent},
  {path:"customized-Tour/experiance/timket",component:TimketComponent},
  {path:"customized-Tour/experiance/balloon",component:BalloonComponent},
  {path:"customized-Tour/experiance/great-run",component:GreatRunComponent},
  {path:"customized-Tour/experiance/eritrean",component:EritreanComponent},
  {path:"customized-Tour/experiance/bird",component:BirdComponent},
  {path:"customized-Tour/experiance/bike",component:BikeComponent},

  {path:"Privacy-Policy",component:PrivacyPolicyComponent},
  {path:"search-Enquire",component:SearchEnquireComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
