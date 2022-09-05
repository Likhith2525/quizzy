import { Component, OnInit,Inject } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuizService]
})
export class QuizComponent implements OnInit {
  subjects:any;
  elem:any;

  constructor(private us:UserService,private ar:Router,@Inject(DOCUMENT) private document: any){}

   ngOnInit(): void {
     this.elem = document.documentElement;
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
   openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
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