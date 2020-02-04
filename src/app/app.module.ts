import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';

//Angular 1 components
//import { Routes, RouterModule, UrlSegment , UrlHandlingStrategy, UrlTree} from '@angular/router';
import {baseapp} from '../app-js/script';
import {serviceng1} from '../app-js/services/convertor';
import {convertercon} from '../app-js/controllers/convertorController';
import {placeCon} from '../app-js/controllers/lundon';


import { LocationUpgradeModule } from '@angular/common/upgrade';
import { ShowerComponent } from './shower/shower.component';
import { ShowingComponent } from './showing/showing.component';
import { App404Component } from './app404/app404.component';
import { RouterModule, UrlHandlingStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// export class CustomHandlingStrategy implements UrlHandlingStrategy {
//   shouldProcessUrl(url) {
//     return url.toString().startsWith("/a2") || url.toString().startsWith("/a1") || url.toString() == "/"
//   }
//   extract(url) { return url; }
//   merge(url, whole) { return url; }
// }

@NgModule({
  declarations: [
    AppComponent,
    ShowerComponent,
    ShowingComponent,
    App404Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    UpgradeModule,
    AppRoutingModule,
    LocationUpgradeModule.config()
  ],
  providers: [
    // use custom url handling strategy
    //{ provide: UrlHandlingStrategy, useClass: CustomHandlingStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
