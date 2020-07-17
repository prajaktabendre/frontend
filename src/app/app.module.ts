import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { MyhomepageComponent } from './myhomepage/myhomepage.component';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DetailsUploadComponent } from './uploads/details-upload/details-upload.component';
import { FormUploadComponent } from './uploads/form-upload/form-upload.component';
import { ListUploadComponent } from './uploads/list-upload/list-upload.component';
import { UploadvideoComponent } from './uploadvideo/uploadvideo.component';
import { FacilatorComponent } from './facilator/facilator.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { DatePipe } from '@angular/common';
import { AddChaperComponent } from './add-chaper/add-chaper.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    AboutComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    MyhomepageComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent,
    UploadvideoComponent,
    FacilatorComponent,
    CreateCourseComponent,
    AddChaperComponent
  ],
  imports: [
        BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
