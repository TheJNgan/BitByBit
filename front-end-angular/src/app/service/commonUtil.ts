import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CommonUtil {
    public user: User;
    public cart: any[] = [];
    
    constructor() { 
        
    }
}