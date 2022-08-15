import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ComponentLibraryModule} from '@company/component-library-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
