import { PluvialAppComponent } from './pluvial-app/pluvial-app.component';
import { DevicesComponent } from './devices/devices.component';
import { BlogComponent } from './blog/blog.component';
import { SupportComponent } from './support/support.component';
import { TeamComponent } from './team/team.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'team', component:TeamComponent},
  {path:'support', component:SupportComponent},
  {path:'blog', component:BlogComponent},
  {path:'devices', component:DevicesComponent},
  {path:'platform',component:PluvialAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
