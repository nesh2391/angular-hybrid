import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment , UrlHandlingStrategy, UrlTree} from '@angular/router';
import { App404Component } from './app404/app404.component';

//Angular 1 components
import {baseapp} from '../app-js/script';
import {serviceng1} from '../app-js/services/convertor';
import {convertercon} from '../app-js/controllers/convertorController';
import {placeCon} from '../app-js/controllers/lundon';

//Angular 2 compnents
import {ShowerComponent} from './shower/shower.component';
import {ShowingComponent} from './showing/showing.component';



// Match any URL that starts with `users`
export function isAngularJSUrl(url: UrlSegment[]) {
    console.log("We ran a check "+(url.length > 0 && url[0].path.startsWith('a1') ?  url : null));
    return url.length > 0 && url[0].path.startsWith('a1') ? ({consumed: url}) : null;
  }
  
  export const routes: Routes = [
    // Routes rendered by Angular
    { path: 'a2/clean', component: ShowerComponent }, 
    // AngularJS routes
    { matcher: isAngularJSUrl, component: ShowingComponent }, 
    
    // Catch-all route
    { path: '**', component: App404Component }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }