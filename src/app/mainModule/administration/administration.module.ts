// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TestAdministrationComponent } from './test-administration/test-administration.component'




// Components Routing
import { AdministrationRoutingModule } from './administration-routing.module';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTablesModule } from 'angular-datatables';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DepartmentComponent } from './department/department.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgSelectModule,
    NgbModule,
    DataTablesModule,
    ToastrModule.forRoot(),
    AdministrationRoutingModule,
   
  ],
  declarations: [
    TestAdministrationComponent,
    DepartmentComponent
  ]
})
export class AdministrationModule { }
