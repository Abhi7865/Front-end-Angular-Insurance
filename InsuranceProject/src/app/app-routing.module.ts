import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdloginComponent } from './adlogin/adlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';

const routes: Routes = [

  {path:'dashboard',component:DashboardComponent},

  {path:'adminlogin',component:AdloginComponent},
  {path:'maincompo',component:MaincomponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
