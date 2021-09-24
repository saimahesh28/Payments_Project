import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { PaymentService } from '../payment.service';
import { models } from ./app/
@Component({
  selector: 'app-transferform',
  templateUrl: './transferform.component.html',
  styleUrls: ['./transferform.component.scss']
})
export class TransferformComponent implements OnInit {

 transferForm: FormGroup
transferTypeList:Observable<TransferType[]>=of([]);
messageCodeList: Observable<Message[]>=of([]);

  constructor(private formBuilder:FormBuilder,private payment:PaymentService ) {
    this.transferForm=formBuilder.group({
      senderAccountNumber:['',[Validators.required]],
      senderName:[{value:'',disabled:true}],
      clearBalance:[{value:'',disabled:true}],
      currency:['',[Validators.required]],
      recipientBic:['',[Validators.required]],
      recipientBankName:['',[Validators.required]],
      recipientName:[{value:'',disabled:true}],
      recipientAccNumber:['',[Validators.required]],
      transferType:['',[Validators.required]],
      messageType:['',[Validators.required]],
      amount:['',[Validators.required]],
      totalAmount:[{value:'',disabled:true}]

    
    })
   }

  ngOnInit(): void {
   this.transferTypeList=this.payment.getTransferTypes();
   this.messageCodeList=this.payment.getMessageCodes();

  }

  getInfo(){
    this.payment.getCustomerInfo(this.transferForm.value.accountNumber).subscribe(value=>{

      this.transferForm.get('accountName')?.setValue(value.customerName);
      this.transferForm.get('clearBalance')?.setValue(value.clearBalance);

      }
      
      );
  }
  
  getBank(){
    this.payment.getBankByBic(this.transferForm.value.recipientBic).subscribe(
      val=>{
        this.transferForm.get('recipientBankName')?.setValue(val.recipientBankName);
      }
    )
  }

  onSubmit(): void {
    // Process checkout data here
    
    console.warn('Your order has been submitted', this.transferForm.value);
    this.transferForm.reset();
  }

}
