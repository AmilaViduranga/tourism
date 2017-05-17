import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SwiperModule } from 'angular2-useful-swiper';

import { AppComponent } from './Components/RootComponent/app.component';
import {NavBarComponent} from './Components/NavbarComponent/navbar.component';
import {ContentComponent} from './Components/ContentComponent/content.component';
import {HotTourComponent} from './Components/HotToursComponent/hottours.component';
import {MapComponent} from './Components/MapComponent/map.component';
import {PlacesComponent} from './Components/PlacesComponent/places.component';
import {DetailedPlacesComponent} from './Components/DetailedComponent/detailed.component';
import {SocialMediaComponent} from './Components/SocialMediaComponent/socialmedia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContentComponent,
    HotTourComponent,
    MapComponent,
    PlacesComponent,
    DetailedPlacesComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
