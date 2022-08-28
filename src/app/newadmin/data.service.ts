import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }
  addNewProduct(newProduct:any):Observable<any>{

    //console.log("new product",newProduct)
    return  this.hc.post("/user/add-product",newProduct)
    
  }
}
