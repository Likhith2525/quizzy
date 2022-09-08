import { Component, OnInit } from '@angular/core';
import { DataService } from '../newadmin/data.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  subjects:any;
  item:any;
  usermarksobj=[];
  marksobj:any;
  marksbyuser:any;
  un:any;
  selected_sub:any;
  username:any;
  constructor(private us:UserService,private ds:DataService) { }

  ngOnInit(): void {
    let name=localStorage.getItem("username")
    this.username=name;
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
  onSubSelect(item){
    //console.log(item);
    this.selected_sub=item;
    this.usermarksobj=[]
    
    this.ds.getscores().subscribe(
      res=>{
        //console.log(this.subjects)
           this.marksobj=res.message;
           for(let i of this.marksobj){

             this.un=i.username;
             if(i.dict[item]===undefined){
              this.usermarksobj.push({
                key : this.un,
                value : -1
              });
             }
             else {
              this.usermarksobj.push({
                    key : this.un,
                    value : i.dict[item]
              });
             }

           }
           this.usermarksobj.sort((a, b) => b.value - a.value);
          //console.log(this.usermarksobj);
           
      },
      err=>{
        alert(err.message)
      }
     )
  }


}
