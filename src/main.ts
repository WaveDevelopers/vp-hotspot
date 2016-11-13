/* Import all required libraries */
import 'core-js/es6';
import 'core-js/es7';
import 'zone.js/dist/zone';
import 'hammerjs';

/* Load Angular Material Stylesheet */
import '@angular/material/core/theming/prebuilt/deeppurple-amber.css';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRouterModule, AppRouterDeclarations, AppRouterProviders} from './routes';
import {MaterialModule} from '@angular/material';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import {HotspotAppComponent} from './components/app/app.component';
import {AuthVerification} from './services/auth-verification';

@NgModule({

  imports: [
    BrowserModule,
    HttpModule,
    AppRouterModule,
    ReactiveFormsModule,

    /* Material Design Modules */
    MaterialModule.forRoot()
  ],

  declarations: [
    AppRouterDeclarations,
    HotspotAppComponent
  ],

  bootstrap: [HotspotAppComponent],
  providers: [AppRouterProviders, AuthVerification]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
