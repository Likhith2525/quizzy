import { DOCUMENT } from '@angular/common';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserService } from '../user.service';
@Component({
  selector: 'app-quizdetails',
  templateUrl: './quizdetails.component.html',
  styleUrls: ['./quizdetails.component.css']
})
export class QuizdetailsComponent implements OnInit {
  elem:any;
  constructor(private us:UserService,private ar:ActivatedRoute,private router:Router,@Inject(DOCUMENT) private document: any){
    
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
         //console.log(this.questions);
      },
      err=>{
        console.log(err);
      }
      )
  }

  dict={}
  sendans(opt:any,no:any){
     
    this.dict[no]=opt;
    //console.log(this.dict)
  }
  
  submittest(){
    let score=0;
    for(let i =0;i<this.questions.length;i++){
      let j=this.questions[i].qno;
    
      if(this.dict[j] === this.questions[i].correctoption){
           score=score+1;
      }
    }
  let userscore={
      subjectname:this.subject,
      username:this.user,
      points:score,
    }
    this.us.updatescore(userscore).subscribe(
          res=>{
              alert(res.message)
              this.router.navigateByUrl('/dashboard')
          }
    )
  }



  /* Close fullscreen */
  closeFullscreen() {
    if (document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
    
}


}
