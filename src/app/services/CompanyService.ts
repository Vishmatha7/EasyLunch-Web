import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalServiceService } from './global-service.service';
import {CostCenterDetails} from '../models/CostCenter.model'
import { Company } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
 _url : string = "/CostCenterDetails/GetAllCostCenterDetails?id=1";
 _urlDelete : string = "/CostCenterDetails/DeleteCostCenterDetails?id=";
 _save : string = "/CompanyDetails/InsertCompanyDetails";
 _update: string = "/CostCenterDetails/UpdateCostCenterDetails"

  constructor(private _http : HttpClient, private glosvr :GlobalServiceService) { }
  // getCostCenterDetails(){
  //   return this._http.get<CostCenterDetails[]>(`${this.glosvr._baseUrl}`+ this._url);
  // }
  //  deleteCostCenterDetails(id : number){
  //    return this._http.get(`${this.glosvr._baseUrl}`+`${this._urlDelete}`+`${id}`);
  //  }
  
   saveCompany(company : Company){
   return this._http.post<Company>(`${this.glosvr._baseUrl}`+ this._save, company)
   }
  // upDateCostCenterDetails(dept : CostCenterDetails){
  //   return this._http.post<CostCenterDetails>(`${this.glosvr._baseUrl}`+ this._update,dept)
  // }
}