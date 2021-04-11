import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userLogin } from './userLogin';
import { RouterModule, Route, Router} from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent {
  pword="admin1234"

  adlogin = new userLogin();

  constructor(private router: Router) { }

  Gotopage(userForm : NgForm)
  {
    if(this.adlogin.emailId == "admin@gmail.com" && this.adlogin.password == "kitchenadmin"){
      if(window.confirm("Do you want to visit Admin Page?")){
        this.router.navigate(['/admin-page']);
      }
      else{
        userForm.reset();
        console.log(this.adlogin.password);
      }
      
    }
    else{
      userForm.reset();
      alert("Invalid EmailId or Password");


    }
  }
  save(userForm : NgForm){
    
    
  }

  log(x){
    console.log(x);
  }
  

}
