import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { SupportComponent } from './support/support.component';
import { BlogComponent } from './blog/blog.component';
import { DevicesComponent } from './devices/devices.component';
import { PluvialAppComponent } from './pluvial-app/pluvial-app.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    HomeComponent,
    TeamComponent,
    SupportComponent,
    BlogComponent,
    DevicesComponent,
    PluvialAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
