import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Account, ExchangeVolume} from '../models/accountModels';
import {APIs} from 'src/app/config/apis'; 

@Injectable({
  providedIn: 'root'
})
export class RippleService {

  constructor(private http: HttpClient) { }

  getAccount(accountAddress:string) {
    return this.http.get<Account>(APIs.getAccount + accountAddress);
  }

  getExchangeVolume(exchange_currency:string, exchange_issuer: string) {
    return this.http.get<ExchangeVolume>(APIs.getExchangeVolume + 'exchange_currency=' + exchange_currency + '&exchange_issuer='+ exchange_issuer);
  }
}
