import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addmidmarks',
  templateUrl: './addmidmarks.component.html',
  styleUrls: ['./addmidmarks.component.css']
})
export class AddmidmarksComponent implements OnInit {

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

  onAddmarks(marksObj:any){
    console.log("marksObj",marksObj)
    if(marksObj.marks<=30){
    if(marksObj.midoption==="option1"){
      this.ds.addMid1Marks(marksObj).subscribe(
        res=>{
         alert(res.message)
        },
        err=>{
          console.log("err in adding marks",err)
          alert("Something went wrong in adding marks")
        }
      )
    }
    else{
      this.ds.addMid2Marks(marksObj).subscribe(
        res=>{
         alert(res.message)
        },
        err=>{
          console.log("err in adding marks",err)
          alert("Something went wrong in adding marks")
        }
      )
    }
    
  }
  else{
    alert("mid marks cannot be more than 30")
}
}


}
