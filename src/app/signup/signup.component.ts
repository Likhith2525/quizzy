import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private us:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  uObj:User={username:"",password:"",dob:"",email:""};
  onSignup(){
    let obj=this.uObj;
    this.us.createUser(obj).subscribe(
      res=>{
        if(res.message==="New user created successfully"){
          alert("User Created")
          //navigate to login component
          this.router.navigateByUrl("/login")

        }
        else{
          alert(res.message)
        }
    },
    err=>{
      console.log(err)
      alert("Something went wrong in registration")
    })
  }

}
