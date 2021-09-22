import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-transferform',
  templateUrl: './transferform.component.html',
  styleUrls: ['./transferform.component.scss']
})
export class TransferformComponent implements OnInit {

 transferForm: FormGroup


  constructor(private formBuilder:FormBuilder,private payment:PaymentService ) {
    this.transferForm=formBuilder.group({
      senderAccountNumber:['',[Validators.required]],
      senderName:['',[Validators.required]],
      clearBalance:['',[Validators.required]],
      currency:['',[Validators.required]],
      recipientBic:['',[Validators.required]],
      recipientBankName:['',[Validators.required]],
      recipientName:['',[Validators.required]],
      recipientAccNumber:['',[Validators.required]],
      transferType:['',[Validators.required]],
      messageType:['',[Validators.required]],
      amount:['',[Validators.required]],
      totalAmount:['',[Validators.required]]

    
    })
   }

  ngOnInit(): void {
   

  }

  getInfo(){
    this.payment.getSenderInfo(this.transferForm.value.senderAccountNumber).subscribe(sender=>
      (this.transferForm.get('senderAccountNumber')?.setValue(sender.)
      )
  }
  
  onSubmit(): void {
    // Process checkout data here
    
    console.warn('Your order has been submitted', this.transferForm.value);
    this.transferForm.reset();
  }

}
