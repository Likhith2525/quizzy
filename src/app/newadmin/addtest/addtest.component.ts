import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-addtest',
  templateUrl: './addtest.component.html',
  styleUrls: ['./addtest.component.css']
})
export class AddtestComponent implements OnInit {

  constructor(private us:UserService) { }

  ngOnInit(): void {
  }
  onAddProduct(prodObj:any){

    console.log("prod obj",prodObj)
    

    this.us.addNewProduct(prodObj).subscribe(
      res=>{
          if(res.message=='New product added'){
            alert("New product added")
            //navigate to view products 
          }
          else{
            alert(res.message)
          }
      },
      err=>{
        console.log("err in adding rpoduct",err)
        alert("Something went wrong in adding product")
      }
    )
   
  }

}
