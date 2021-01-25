import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Account} from '../models/accountModels';
import {APIs} from 'src/app/config/apis'; 

@Injectable({
  providedIn: 'root'
})
export class RippleService {

  constructor(private http: HttpClient) { }

  getAccount(accountAddress:string) {
    return this.http.get<Account>(APIs.getAccount + accountAddress);
  }
}
