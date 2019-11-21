import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JsonToListComponent } from './json-to-list/json-to-list.component';
import { ItemComponent } from './json-to-list/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonToListComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
