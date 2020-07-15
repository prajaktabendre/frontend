import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyhomepageComponent } from './myhomepage/myhomepage.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { UploadvideoComponent } from './uploadvideo/uploadvideo.component';
import { FacilitatorComponent } from './facilitator/facilitator.component';
import { UploadimgComponent } from './uploadimg/uploadimg.component';
import { CreatecourseComponent } from './createcourse/createcourse.component';
//import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'myhomepage/:id',canActivate:[AuthGuard],component:MyhomepageComponent},
  {path:'register',component:RegisterComponent},
  {path:'uploadvideo',canActivate:[AuthGuard],component:UploadvideoComponent},
  {path:'facilitator',canActivate:[AuthGuard],component:FacilitatorComponent},
  {path:'uploadimg',canActivate:[AuthGuard],component:UploadimgComponent},
  {path:'createcourse/:',component:CreatecourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
