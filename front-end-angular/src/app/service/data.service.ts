import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './iuser';
import { User } from './user';
import { UserTransaction } from './userTransaction';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl: string = 'http://localhost:9000/';
  constructor(private http: HttpClient) { 

  }

  public save(user: User) {
    return this.http.post<User>(this.baseUrl + 'createUser', user);
  }

  public loginUser(user: User) {
    return this.http.post<User>(this.baseUrl + 'getUser', user);
  }

  public createTransactions(arrTransaction: UserTransaction[]) {
    return this.http.post<UserTransaction[]>(this.baseUrl + 'createTransactions', arrTransaction);
  }



  // addUser(data:IUser): Observable<IUser>{
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 
  //       'Access-Control-Allow-Origin':'*',
  //     })
  //   };
  //   return this.http.post<IUser>('localhost:9001/createUser', data, httpOptions)
  // }

}




