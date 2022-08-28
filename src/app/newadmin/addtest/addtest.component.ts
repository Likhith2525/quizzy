import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/newadmin/data.service'
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-addtest',
  templateUrl: './addtest.component.html',
  styleUrls: ['./addtest.component.css']
})
export class AddtestComponent implements OnInit {

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }
  onAddProduct(prodObj:any){

    //console.log("prod obj",prodObj)
    

    this.ds.addNewProduct(prodObj).subscribe(
      res=>{
       alert(res.message)
      },
      err=>{
        console.log("err in adding rpoduct",err)
        alert("Something went wrong in adding product")
      }
    )
   
  }

}
