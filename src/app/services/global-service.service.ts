import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  constructor() {
    
  
  this._baseUrl ="http://localhost:55260"
    this._userId = 1;
    this._userName = "Prabodha"
    this._versionNumber = "6.1.1"
    this._companyId = 1
    this._companyName = "Eazy Lunch"
   }
   _baseUrl : string;
   _userName : string;
   _userId  : number;
   _versionNumber : string;
   _companyId: number;
   _companyName: string;
  public get companyName(): string {
    return this._companyName;
  }
  public set companyName(value: string) {
    this._companyName = value;
  }
  public get companyId(): number {
    return this._companyId;
  }
  public set companyId(value: number) {
    this._companyId = value;
  }
 



  public get userName() : string {
    return this._userName;
  }
  public set userName(v : string) {
    this._userName = v;
  }
  
  
  public get userId () : number { 
    return this._userId ;
  }
  public set userId (v : number) {
    this._userId   = v;
  }
  

  
  public get versionNumber() : string {
    return this._versionNumber;
  }
  public set versionNumber(v : string) {
    this._versionNumber = v;
  }
  
 
  public get baseUrl() : string {
    return this._baseUrl;
  }
  public set baseUrl(v : string) {
    this._baseUrl = v;
  }
  
}
