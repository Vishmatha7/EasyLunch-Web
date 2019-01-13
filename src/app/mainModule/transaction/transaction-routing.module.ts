import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesttransactionComponent } from './testtransaction/testtransaction.component'

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Transaction'
    },
    children: [
      {
        path: 'testtransaction',
        component: TesttransactionComponent,
        data: {
          title: 'Test Transaction'
        }
      }
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule {}
