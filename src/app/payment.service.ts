import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap} from 'rxjs/operators';
import { Bank,Customer,Transaction,TransferType } from './models';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  
  

  url="http://localhost:8000";
  constructor(private http:HttpClient) { }
 


  getBankByBic(Bic:string):Observable<any>{
    return this.http.get<Bank>(this.url + "bank/" + Bic).pipe(
      tap(bank => console.log(bank)),
      catchError(this.handleError)
  );
  }
  getMessageCodes(): Observable<any[]> {
    return this.http.get<Message[]>(this.url + "messagecodes");
  }
 
  getTransferTypes(): Observable<any[]> {
    return this.http.get<TransferType[]>(this.url + "transfertypes");
  }
  getCustomerInfo(accountNumber: string): Observable<Customer> {
    return this.http.get<Customer>(this.url + "/" + accountNumber).pipe(
        tap(customer=> console.log(customer)),
        catchError(this.handleError)
    );
}
postTransaction(value: any): Observable<Transaction> {
  return this.http.post<Transaction>(this.url+"sendmoney", value);
}
private handleError(error: any) {
  console.error(error);
  return throwError(error);
}
}
