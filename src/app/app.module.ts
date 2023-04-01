import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseHeaderComponent } from './layouts/base/base-header/base-header.component';
import { BaseBodyComponent } from './layouts/base/base-body/base-body.component';
import { BaseFooterComponent } from './layouts/base/base-footer/base-footer.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseHeaderComponent,
    BaseBodyComponent,
    BaseFooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
