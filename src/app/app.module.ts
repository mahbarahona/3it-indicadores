import { LOCALE_ID,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';


import localeEsCL from '@angular/common/locales/es-CL';
registerLocaleData(localeEsCL)

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule, 
    MatProgressBarModule  
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es-CL' } ],

  bootstrap: [AppComponent]
})
export class AppModule { }
