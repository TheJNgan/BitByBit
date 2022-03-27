import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonUtil } from 'src/app/service/commonUtil';
import { DataService } from 'src/app/service/data.service';
import { RegistrationService } from 'src/app/service/registration.service';
import { User } from 'src/app/service/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  constructor(private service : DataService,private util: CommonUtil,private router: Router) { }

  ngOnInit(): void {


  }

  loginUser(){
    if(this.user && this.user.username && this.user.password) {
        this.service.loginUser(this.user).subscribe(
          data => {
            if(data) {
              console.log("User Authenticated");
              this.util.user = data;
              this.router.navigate(['/home']);
            }
            else {
              alert("Authentication Failed. Please enter valid Username and Password");
            }
          },
          error => console.error(error)
        );
      }
      else {
        alert("Please enter Username and Password");
      }
  }
    
    

}
