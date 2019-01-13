import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestSecurityComponent } from './test-security/test-security.component'

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Reporting'
    },
    children: [
      {
        path: 'testsecurity',
        component: TestSecurityComponent,
        data: {
          title: 'Test Security'
        }
      }
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule {}
