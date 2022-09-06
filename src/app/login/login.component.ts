import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Login} from '../models/login.model'
import { UserService } from '../user.service';
import {User} from '../models/user.model';

declare var jQuery:any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userObj:Login={username:"",password:""};
  type:any;
  function(){
    document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
  });}
  //inject userservice object
  constructor(private us:UserService,private router:Router){}

  ngOnInit():void{
    this.function()
  }

  onLogin(){
    let userCredentials=this.userObj;
    if(userCredentials.username=="admin"  &&  userCredentials.password=="1234"){
      this.us.masterLoginStatus=true;
        this.router.navigateByUrl('/newadmin')
    }
    else{
    this.us.loginUser(userCredentials).subscribe(
      res=>{
        if(res.message==="Logged in successfully"){
          //save tken to local storage
          localStorage.setItem("token",res.token)
          localStorage.setItem("username",res.username)
          localStorage.setItem("userObj",JSON.stringify(res.userObj))
          alert(res.message)
          //update user login status
          this.us.userLoginStatus=true;
          //navigate to userprofile page
          this.router.navigateByUrl('/home')
        }
        else{
          alert("Incorrect Password");
        }
      
      },
      err=>{
        console.log(err)
        alert("Something went wrong")
      }
    
    )
    }
  
}
 

  uObj:User={username:"",password:"",dob:"",email:""};


  onSignup(){
    
    console.log(this.uObj)
    this.us.createUser(this.uObj).subscribe(
      res=>{
        if(res.message==="User created"){
          alert("User Created")
          //navigate to login component
          this.router.navigateByUrl("/home")

        }
        else{
          alert(res.message);
        }
    },
    err=>{
      console.log(err)
      alert("Something went wrong in registration")
    })
  }



  
}
