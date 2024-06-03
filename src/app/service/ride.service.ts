import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class RideService {

  constructor(private http:HttpClient) { 

  }

  getCustomers(){
    
    return this.http.get("http://127.0.0.1:8000/api/customers/",{"headers":this.getHeaders()})
  }

  retrieveCustomer(id:any){
  
  
    return this.http.get(`http://127.0.0.1:8000/api/customers/${id}/`,{"headers":this.getHeaders()})
  }

  createCustomer(data:any){
  

    return this.http.post("http://127.0.0.1:8000/api/customers/",data,{"headers":this.getHeaders()})
  }

  updateCustomer(id:any,data:any){


    return this.http.put(`http://127.0.0.1:8000/api/customers/${id}/`,data,{"headers":this.getHeaders()})
  }

  deleteCustomers(id:any){
   
    return this.http.delete(`http://127.0.0.1:8000/api/customers/${id}/`,{"headers":this.getHeaders()})
  }

  getTokenPair(data:any){
    return this.http.post("http://127.0.0.1:8000/api/token/",data)
  }


  getAccessToken(){
    return localStorage.getItem("access")
  }

  getHeaders(){
    let token=this.getAccessToken()
    let headers=new HttpHeaders().set("Authorization","Bearer "+ token)
    return headers
  }

  isAuthenticated(){
    return "access" in localStorage? true:false
  }
}
