import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../services';
import { FormBuilder, FormGroup, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.scss']
})
export class RegisterCompanyComponent implements OnInit {
  validateForm;
  constructor(public companySrrvice : CompanyService, public toaster :ToastrService) {
    this.validateForm = new FormGroup({
      Name : new FormControl('', Validators.required),
      AddressLine1 : new FormControl('',Validators.required),
      Telephone : new FormControl('',Validators.required),
      NameOfContactPerson : new FormControl('',Validators.required),
      TelOfContactPerson : new FormControl('',Validators.required)
    });
  }
  ngOnInit() {
    
  }
  save(company : Company){
    console.log(company);
    company.ID = -1
    company.PassCode = "001"
    
    this.companySrrvice.saveCompany(company).subscribe(data =>{
      //this.taster.succes("Gods");
      console.log(company);
    }, err =>{
      console.log(company);
    })

  }
}
