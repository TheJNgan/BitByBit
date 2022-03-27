import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { User } from 'src/app/service/user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  user: User;
  constructor(private dataService: DataService) { 
    this.user = new User();
  }

  ngOnInit(): void {
  }

  // registerUser(){
  //   this.dataService.addUser(this.user).subscribe(data =>{
  //     console.log("response received");
      
  //   },
  //   error =>{
  //     console.log("exception occurred")
  //   })

  // }


  onSubmitHandler(){
    this.dataService.save(this.user).subscribe(response =>{
      console.log(response)
      console.log("posted")
    })
    
  }

  

}
