import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private us:UserService) { }

  obj:any;
  marks:any;
  arr:[];
  username:any;
  ngOnInit(): void {
    let name=localStorage.getItem("username")
    this.username=name;
    this.us.getscorebyname(name).subscribe(
      res=>{
         this.obj=res.message;
         //console.log(this.obj);
         this.marks=this.obj.dict;


         //console.log(this.marks);

      },
      err=>{
        console.log(err);
      }
      )
  }
}
