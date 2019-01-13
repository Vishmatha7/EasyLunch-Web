// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TestSecurityComponent } from './test-security/test-security.component'




// Components Routing
import { SecurityRoutingModule } from './security-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SecurityRoutingModule,
   
  ],
  declarations: [
    TestSecurityComponent
  ]
})
export class SecurityModule { }
