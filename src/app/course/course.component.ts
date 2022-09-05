import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  //product selected by user
  onProductSelect(productObject,id){
    let username=localStorage.getItem("username")
    let newUserProductObj={username,productObject}
    this.userService.sendProductToUserCart(newUserProductObj).subscribe(
       res=>{
         alert(res['message'])
         this.userService.updateDataObservable(res.latestCartObj)
        },
       err=>{
         console.log("err in posting product to cart",err)
         alert("Something wrong in adding product to cart...")
        }
      )
    }

    onClick(id:any){
      this.userService.sendcourseid(id);
      this.router.navigateByUrl('/coursedetails');

    }
}
