import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestAdministrationComponent } from './test-administration/test-administration.component'
import { DepartmentComponent } from './department/department.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { AddMealComponent } from './add-meal/add-meal.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Administration'
    },
    children: [
      {
        path: 'testadministration',
        component: TestAdministrationComponent,
        data: {
          title: 'Test Administration'
        }
      },
      {
        path: 'company',
        component: DepartmentComponent,
        data: {
          title: 'Company'
        }
      },
      {
        path: 'registerCompany',
        component: RegisterCompanyComponent,
        data: {
          title: 'register-company'
        }
      },
      {
        path: 'addmeal',
        component: AddMealComponent,
        data: {
          title: 'add-meal'
        }
      },

    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule {}
