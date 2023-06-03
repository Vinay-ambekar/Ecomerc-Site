/* import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { signup } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn=new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient, private router:Router) { }
  userSignUp(data:signup){
  let result=   this.http.post('http://localhost:3000/posts',data,
  {observe:'response'}).subscribe(()=>{
    this.isSellerLoggedIn.next(true)
    localStorage.setItem('seller',JSON.stringify(result.body))
    this.router.navigate(['seller-home'])
    console.warn(result)  
  })
  
  return false
}
}
 */
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, signup } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isloginerror= new EventEmitter<boolean>(false)
  constructor(private http: HttpClient, private router: Router) {}

  userSignUp(data: signup) {
    this.http.post('http://localhost:3000/seller', data, { observe: 'response' }).subscribe(
      (response) => {
        this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller', JSON.stringify(response.body));
        this.router.navigate(['seller-home']);

      },
      (error) => {
        console.error(error);
      }
    );
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
  userLogin(data:login){
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, { observe: 'response' }).subscribe(
      (response:any) => {
        //console.warn(response)
       if(response && response.body && response.body.length ){
          localStorage.setItem('seller', JSON.stringify(response.body));
          this.router.navigate(['seller-home']); 
        //  console.warn("login ")
        }else{
         // console.warn("login faild")
          this.isloginerror.emit(true)

        }  
       

      },
      (error) => {
        console.error(error);
      }
    );

  }


}
