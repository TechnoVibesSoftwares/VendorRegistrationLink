import { Observable } from 'rxjs';
 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface ApiResult{
page:number;
result:any[];


}
@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor( private http:HttpClient) { }

  getTopList():Observable<ApiResult>{
    return this.http.get<ApiResult>('http://demo2421825.mockable.io/vendorList');
 
  }
  getContactDetails(id:string){
    return this.http.get('http://demo2421825.mockable.io/vendorList');
  }
}
