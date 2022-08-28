import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserService } from '../user.service';
@Component({
  selector: 'app-quizdetails',
  templateUrl: './quizdetails.component.html',
  styleUrls: ['./quizdetails.component.css']
})
export class QuizdetailsComponent implements OnInit {

  constructor(private us:UserService,private ar:ActivatedRoute,private router:Router){
    
  }
  questions:any;
  user:any;
   subject:any;
  ngOnInit(): void {
    let name=localStorage.getItem("username")
    this.user=name
    var url=this.ar.snapshot.params.m
    this.subject=url;
    //console.log(url)
    this.us.getqstionsbyname(url).subscribe(
      res=>{
         this.questions=res.message;
         console.log(this.questions)
      },
      err=>{
        console.log(err);
      }
      )
  }

   dict={}
  sendans(opt:any,no:any){
     
    this.dict[no]=opt;
    console.log(this.dict)
  }
  
  submittest(){
    let score=0;
    for(let i =0;i<this.questions.length;i++){
      let j=this.questions[i].qno;
    
      if(this.dict[j] === this.questions[i].correctoption){
           score=score + 1;
      }
    }
  let  userscore={
       subjectname:this.subject,
      username:this.user,
      points:score
    }
    this.us.updatescore(userscore).subscribe(
          res=>{
              alert(res.message)
              this.router.navigateByUrl('/leaderboard')
          }
    )
  }

    
}
