import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
  url:any="https://sdpt-rest-api.cyclic.app/api/v1/posts/";
  headers: any = {};

  addproduct(body:any){
    const headerData = new HttpHeaders(this.headers);
    return this.http.post(this.url, body, { headers: headerData, responseType: 'json' })
  }

  getproduct(){
    return this.http.get(this.url)
  }

}
