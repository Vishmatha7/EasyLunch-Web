import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
// import { DepartmentService ,CompanyService, GlobalServiceService} from '../../../services';


import { FormBuilder, FormGroup, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { Departments } from '../../../models';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { GlobalServiceService } from '../../../services';



@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit,OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: any = new Subject();
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  selectToDelete: any;

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
  Departments: any[];
  Company : any[];
  validateForm;
  companyId : number;
  submitButton : string = "Submit"
  disableCompanyName : boolean = false;
 // mDepartment : Departments

  
  constructor(public glsr : GlobalServiceService, public toaster :ToastrService) {
    
    this.validateForm = new FormGroup({
      CompanyID : new FormControl('', Validators.required),
      Name : new FormControl('',Validators.required),
      IsActive : new FormControl('')
    });
    this.companyId = this.glsr.companyId;
   }

  ngOnInit() {
   // this.getdata();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthChange : false,
      language: { search:  '<i class="fa fa-search"></i>', searchPlaceholder: "Search records..." },
     
      };
  }
 i=0;
  // getdata(){
  //   this.departmentsDetails.getDepartments().subscribe(data => {
  //     this.Departments = data;
  //     if(this.i==0){
  //       this.dtTrigger.next();
  //       this.i++;
  //     }else{
  //       this.rerender();
  //     }
  //   })
  //   this.companyDetails.getCompany().subscribe(data => this.Company = data)
   
  // }
  // onclickClose(val){
  //   this.selectToDelete = val;
  // }
  // save(department : Departments){
  //   console.log(department);
  //   department.DepartmentId = -1;
  //   department.CreatedDate = new Date();
  //   department.ModifiedDate = new Date();
  //   department.ModifiedUserId = 1;
  //   department.CreatedUserId = 1;
  //   if(this.validateForm.status == 'INVALID'){
  //     this.toaster.error('Please fill details');
  //   }else{
  //     this.departmentsDetails.saveDepartment(department).subscribe(
  //       data => {console.log(data)
  //         this.toaster.success("Saved")
  //         this.getdata();
  //         this.addNew();
  //       },err =>{
  //         // this.toaster.error("Save Failed")
  //         // this.toaster.warning("Given name already exists")
  //         this.toaster.error(err.error.ExceptionMessage)
          
  //       });
  //   }

  // }
  // setUpDate(department: Departments) {
  //   this.disableCompanyName = true;
  //   console.log(department)
  //   this.mDepartment = department;
  //   if(this.submitButton == "Submit"){
  //         this.submitButton= "Update"
  //   }else if( this.submitButton== "Update"){
  //     this.submitButton= "Update"
  //   }
  //   else{ this.submitButton ="Submit"}
  //   this.validateForm.controls["CompanyID"].setValue(department.CompanyId)
  //   this.validateForm.controls["Name"].setValue(department.Name)
  //   this.validateForm.controls["IsActive"].setValue(department.IsActive)
       
  //    }
  // delete(){
  //   this.departmentsDetails.deleteDepartment(this.selectToDelete).subscribe(data=>{
  //     console.log(data);
  //     this.getdata();
      
  //   });
   
  // }
  // update(department : Departments){
    
  //     department.DepartmentId = this.mDepartment.DepartmentId;
  //     department.CreatedDate = new Date();
  //     department.ModifiedDate = new Date();
  //     department.ModifiedUserId = 1;
  //     department.CreatedUserId = 1;
  //     if(this.validateForm.status == 'INVALID'){
  //       this.toaster.error('Please fill details');
  //     }else{
  //       this.departmentsDetails.upDateDepartment(department).subscribe(data=>{
  //         console.log(data);
  //         this.toaster.success("Updated")
  //         this.getdata(); 
  //        this.addNew();
  //     }, err =>{
  //       // this.toaster.error("Update Failed")
  //       // this.toaster.warning("Given name already exists")
  //       this.toaster.error(err.error.ExceptionMessage)

  //     });
     
  //     }
 
  // }
  // addNew(){
  //   this.submitButton = 'Submit';
  //   this.disableCompanyName = false;
    
  //   this.validateForm = new FormGroup({
  //     CompanyID : new FormControl(this.companyId, Validators.required),
  //     Name : new FormControl('',Validators.required),
  //     IsActive : new FormControl('')
  //   });
  
  // }
  Refresh(){
   // this.getdata();
  }
}