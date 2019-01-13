import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestReportingComponent } from './test-reporting/test-reporting.component'

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Reporting'
    },
    children: [
      {
        path: 'testreporting',
        component: TestReportingComponent,
        data: {
          title: 'Test Reporting'
        }
      }
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportingRoutingModule {}
