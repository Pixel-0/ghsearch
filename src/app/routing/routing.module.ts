import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule,Routes} from "@angular/router"
// import {LandComponent} from "../home/home.component";
// import {UserComponent} from "../profile/profile.component"

const routes:Routes = [
//  {path:"Profile",component:ProfileComponent},
//  {path:"user",component:UserComponent},
{path:"",redirectTo:"/land",pathMatch:"full"},
]
@NgModule({
imports: [
  CommonModule,
  RouterModule.forRoot(routes)
],
declarations: [],
exports:[RouterModule]
})
export class RoutingModule { }