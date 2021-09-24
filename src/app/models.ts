import {HttpErrorResponse} from "@angular/common/http";
export interface Customer {
    accountNumber: string;
    customerName: string;
    clearBalance: number;
   
    overDraft: boolean;
  }
  
  export interface Bank {
    bankBic: string;
    bankName: string;
  }
  
  export interface TransferType {
    code: string;
    description: string;
  }
  
  export interface Message {
    messageCode: string;
    messageInstruction: string;
  }
  
 
  
  export interface ErrorMessage extends HttpErrorResponse {
    error: {
      message: string;
      
    }
  }
  
  export interface TransactionRequest {
    
      senderAccountNumber: string;
      amount: number;
      messageCode: string;
      receiverAccountNumber: string;
      receiverAccountName: string;
      receiverBIC: string;
      transferTypeCode: 'BB' | 'CC'
    
  }
  
  
  
  export interface Transaction {
    transactionID: number,
    customer: {
        accountNumber: string;
        customerName: string;
        clearBalance: number;
       
        overDraft: boolean;
      },
    receiverName: string
    receiverAccountNumber: string
    receiverBIC: {
      bankBic: string
      bankName: string
    },
    message: {
      messageCode: string
      messageInstruction: string
    },
    transferCode: 'BB' | 'CC'
    amount: number
   date: Date,
    
  }
  
