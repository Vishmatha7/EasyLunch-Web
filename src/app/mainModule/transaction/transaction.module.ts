// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TesttransactionComponent } from './testtransaction/testtransaction.component'




// Components Routing
import { TransactionRoutingModule } from './transaction-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TransactionRoutingModule,
   
  ],
  declarations: [
    TesttransactionComponent
  ]
})
export class TransactionModule { }
