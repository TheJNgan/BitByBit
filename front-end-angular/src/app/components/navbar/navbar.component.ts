import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonUtil } from 'src/app/service/commonUtil';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public util: CommonUtil,private router: Router) { }

  ngOnInit(): void {
  }

  navTo(event: any,route: string,type?: string) {
    if(type) {
      this.router.navigate([route],{queryParams: {type: type}});
    }
    else {
      this.router.navigate([route]);
    }
    event.preventDefault();
  }

}
