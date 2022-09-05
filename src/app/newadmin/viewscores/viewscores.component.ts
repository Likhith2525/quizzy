import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-viewscores',
  templateUrl: './viewscores.component.html',
  styleUrls: ['./viewscores.component.css']
})
export class ViewscoresComponent implements OnInit {

  subjects:any;
  item:any;
  usermarksobj=[];
  marksobj:any;
  marksbyuser:any;
  un:any;
  selected_sub:any;
  constructor(private us:UserService,private ds:DataService) { }

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
           //console.log(this.usermarksobj);
           
      },
      err=>{
        alert(err.message)
      }
     )
  }

}
