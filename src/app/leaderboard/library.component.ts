import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  userCartObj;
  products=[];
  userObj;
  count;

  constructor(private us:UserService) { }

  ngOnInit(): void {
    //get user data from local storage
    this.userObj= JSON.parse(localStorage.getItem("userObj"))
    //get userCartObj from API
    this.us.getProductsFromUserCart(this.userObj.username).subscribe(
      res=>{
        if(res.message==='Cart-empty'){
          this.us.updateDataObservable(0)
        }
        else{
          this.us.updateDataObservable(res.message)
        }
        this.us.dataObservable.subscribe(prodObj=>{
           if(prodObj==0){
              this.count=0;
           }
           else{
             this.count=prodObj.products.length;
           }
        })
      }
    )
    console.log(this.products)
    //get user data from local storage
    this.userObj= JSON.parse(localStorage.getItem("userObj"))
    let username=localStorage.getItem("username")
   this.us.getProductsFromUserCart(username).subscribe(
     res=>{
       if(res["message"]==='Cart-empty'){
         alert("User cart is empty")
       }
       else{
         this.userCartObj=res["message"]    
       }
     },
     err=>{
       console.log("err in reading cart",err)
       alert("Something went wrong in fetching cart items..")
     }
   )
   }
   
  }

