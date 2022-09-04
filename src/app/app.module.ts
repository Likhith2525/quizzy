import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent} from './contactus/contactus.component'
import { UserService } from './user.service';
import { HttpClientModule} from '@angular/common/http';
import { CourseComponent } from './course/course.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SearchPipe } from './search.pipe';
import { QuizComponent } from './quiz/quiz.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { QuizdetailsComponent } from './quizdetails/quizdetails.component';
import { MasterComponent } from './master/master.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ContactusComponent,
    CourseComponent,
    UserprofileComponent,
  
    SearchPipe,
    QuizComponent,
    CoursedetailsComponent,
    QuizdetailsComponent,
    MasterComponent,
    LeaderboardComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
