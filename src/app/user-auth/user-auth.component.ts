import { Component,OnInit } from '@angular/core';
import { login, signup } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit{
shownLogin:boolean=true;
authError:string="";

  constructor(private user:UserService){}

  ngOnInit(): void {
    this.user.userAuthreload();
  }
  signup(data:signup){
  //console.warn(data)
  this.user.userSignUp(data)
  }
  login(data:login){
this.user.userLogin(data);
this.user.inValiduserAuth.subscribe((result)=>{
  console.warn("apple",result)
  if(result){
    this.authError="please enter valid user details"
  }
})
  } 
  openSignUp(){
    this.shownLogin=false
  }
  openLogin(){ 
 this.shownLogin=true
  } 
} 
