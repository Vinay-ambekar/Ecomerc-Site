import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { login, signup } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent {
  showLogin=false
  authError:string='';
  constructor(private seller:SellerService , private router: Router){

  }
  ngOnInit(): void {
    this.seller.reloadSeller()
  }
 
  signup(data:signup):void{
    this.seller.userSignUp(data)
/*     this.seller.userSignUp(data).subscribe((result)=>{
      if(result){
    this.router.navigate(['seller-home'])
      }
    }); */
   
  }
  login(data:signup):void{
    this.authError="";
    //console.warn(data)
    this.seller.userLogin(data)
    this.seller.isloginerror.subscribe((isError)=>{
      if(isError){
         this.authError="email or passowrd is not correct"
      }
    })
  }
  openLogin(){
     this.showLogin=true
  }
  openSignup(){
    this.showLogin=false
  }
}
