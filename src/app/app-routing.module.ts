import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { CourseComponent } from './course/course.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { SignupComponent } from './signup/signup.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'userprofile',component:UserprofileComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'quiz',component:QuizComponent},
  {path:'library',component:LibraryComponent},
  {path:'courses',component:CourseComponent},
  {path:'coursedetails',component:CoursedetailsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

