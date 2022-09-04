import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userLoginStatus=false;
  masterLoginStatus=false;
  dataSource=new BehaviorSubject<any>(0)
    dataObservable=this.dataSource.asObservable();
     updateDataObservable(data){
       this.dataSource.next(data)
    }

  //inject http client object
  constructor(private hc:HttpClient) { 
    if(localStorage.getItem('username')!==null){
      this.userLoginStatus=true;
    }
  }

  loginUser(credentials):Observable<any>{
    return this.hc.post("/user/login",credentials)
  }
  createUser(userObj):Observable<any>{
    return this.hc.post("/user/createuser",userObj)
  }
  getUser(username):Observable<any>{
    return this.hc.get(`/user/getuser/${username}`)
  }
  deleteUser(){

  }
  updateUser(){

  }
  sendProductToUserCart(userProductObj):Observable<any>{
    return this.hc.post("/user/add-to-cart",userProductObj)
  }

  getProductsFromUserCart(username):Observable<any>{
    return this.hc.get(`/user/getproducts/${username}`)
  }
  
  //to ad new product
  addNewProduct(newProduct):Observable<any>{

    console.log("new product",newProduct)
    return  this.hc.post("/user/add-product",newProduct)
    
  }


  //to read all products
  getProducts():Observable<any>{

      return this.hc.get('/user/getadminproducts')

  }

  getqstionsbyname(sub):Observable<any>{
    return this.hc.get(`/user/getquestions/${sub}`)
  }
   //to read all products
   getsubjects():Observable<any>{
    return this.hc.get('/user/getsubjects')

}
  updatescore(ans):Observable<any>{
    return this.hc.post('/user/evaluateuser',ans)
  }
  getscorebyname(name):Observable<any>{
    return this.hc.get(`/user/getscore/${name}`)
  }

}
