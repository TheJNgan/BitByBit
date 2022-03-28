import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonUtil } from 'src/app/service/commonUtil';
import { DataService } from 'src/app/service/data.service';
import { User } from 'src/app/service/user';
import { UserTransaction } from 'src/app/service/userTransaction';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  subTotal: number = 0;
  shipping: number = 0;
  tax: number = 0;
  total: number = 0;

  constructor(public util: CommonUtil,private service : DataService,private router: Router) { }

  ngOnInit(): void {
    this.calculateTotal();
  
  }

  // Remove Items From Cart
  remove(components: any,index: number,event: any) {
    const item = this.util.cart.splice(index,1);
    console.log("removed Item is ",item);
    this.calculateTotal();
    event.preventDefault();
  }

  checkout(event: any) {
    if(this.util.cart && this.util.cart.length) {
      let userInfo: User = this.util.user;
      let arrTran: UserTransaction[] = [];
      for(let item of this.util.cart) {
        let tran: UserTransaction = {id: -1,userId: userInfo.id ,productName: item.name ,price: item.price_usd ,quantity:1};
        arrTran.push(tran);
      }
      this.service.createTransactions(arrTran).subscribe(
        data => {
          if(data) {
            alert("Transaction was saved successfully.");
            this.router.navigate(['/home']);
          }
          else {
            alert("Transaction was not saved.");
          }
        },
        error => console.error(error)
      );
    }
    else {
      alert("Please select an item to checkout");
    }
  }

  calculateTotal() {
    if(this.util.cart.length > 0){
      this.shipping = 5;
      this.subTotal = 0;
      for(let item of this.util.cart) {
        this.subTotal += item.price_usd;
      }
      this.tax = this.subTotal * 0.075;
      this.total = this.subTotal + this.tax + this.shipping
    }
  }
}