
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { MatFormFieldModule } from '@angular/material';
// import { MatInputModule } from '@angular/material';
import {ReactiveFormsModule, FormGroup, FormArray, } from '@angular/forms';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './mainModule/login/login.component';
import { RegisterComponent } from './mainModule/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];
//
import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
  
  
  
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';


import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { SSRSReportViewerModule } from 'ngx-ssrs-reportviewer';


//import { PayItemCategoryComponent } from './mainModule/masterdata/pay-item-category/pay-item-category.component';




//import { PersonalInformationComponent } from './mainModule/masterdata/personal-information/personal-information.component';



//import { NgSelectModule } from '@ng-select/ng-select';


//import { DepartmentService ,CompanyService, CostCenterService} from './services';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
   // NgSelectModule,
    BrowserModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatFormFieldModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
   
    SSRSReportViewerModule
    //NgbModule,
  
    
   
    
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
  
    LoginComponent,
    RegisterComponent,
    
 
   
    //PayItemCategoryComponent,
    
   
   
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
