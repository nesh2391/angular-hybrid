import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { UpgradeModule } from '@angular/upgrade/static';

import { Router } from '@angular/router';

// Import these globally to make teh typescript compiler happy by bringing in their @types
import 'angular';
import 'angular-resource';
import 'angular-route';

// Need to import NG 1.x module
import './app-js';


platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  // Use the upgrade module to bootstrap the hybrid
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['RoutingApp']);
  //setUpLocationSync(upgrade);
});