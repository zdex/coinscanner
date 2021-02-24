import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Account, ExchangeVolume} from '../models/accountModels';
import {APIs} from 'src/app/config/apis'; 
import { HttpHeaders } from '@angular/common/http';

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

  getListCryptocurrencies() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //Authorization: 'my-auth-token',
        'Access-Control-Allow-Origin': '*',
        //'X-CMC_PRO_API_KEY': 'a6dd0b1f-e8a7-4b44-8760-110921fab15a'
      })
    };
    //return this.http.get(APIs.getListCryptocurrencies, httpOptions);
    return this.http.get(APIs.getListCryptocurrencies);
  }

  getYoutubeSearchList(searchString) {
    return this.http.get(APIs.getYoutubeSearchList + "?" +searchString);
  }

  getYoutubeMembersList(searchString) {
    return this.http.get(APIs.getYoutubeMembersList + "?" +searchString);
  }
}
