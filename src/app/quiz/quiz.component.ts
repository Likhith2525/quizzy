import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { HelperService } from '../services/helper.service';
import { Option, Question, Quiz, QuizConfig } from '../models/index';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuizService]
})
export class QuizComponent implements OnInit {
  subjects:any;
  constructor(private us:UserService,private ar:Router){}
   ngOnInit(): void {
     this.us.getsubjects().subscribe(
      res=>{
           this.subjects=res.message;
           //console.log(this.subjects)
      },
      err=>{
        alert(err.message)
      }
     )
   }

  
}