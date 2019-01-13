// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TestReportingComponent } from './test-reporting/test-reporting.component'




// Components Routing
import { ReportingRoutingModule } from './reporting-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReportingRoutingModule,
   
  ],
  declarations: [
    TestReportingComponent
  ]
})
export class ReportModule { }
