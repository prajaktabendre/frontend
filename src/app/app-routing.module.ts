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
import { FacilatorComponent } from './facilator/facilator.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { AddChaperComponent } from './add-chaper/add-chaper.component';
import { EnrollcourseComponent } from './enrollcourse/enrollcourse.component';
//import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'myhomepage',canActivate:[AuthGuard],component:MyhomepageComponent},
  {path:'register',component:RegisterComponent},
  {path:'uploadimg',component:UploadvideoComponent},
  {path:'facilator/:id',canActivate:[AuthGuard],component:FacilatorComponent},
  {path:'create/:id',canActivate:[AuthGuard],component:CreateCourseComponent},
  {path:'addchapter',canActivate:[AuthGuard],component:AddChaperComponent},
  {path:'enrollcourse/:id',canActivate:[AuthGuard],component:EnrollcourseComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
