import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // configUrl = 'assets/config.json';



  constructor(private http: HttpClient) { }

  apiData() : any{
    // let url = "https://jsonplaceholder.typicode.com/todos";
    let url = "https://fakestoreapi.com/products/";
    return this.http.get(url)
  }


  getproductsbyid(id:any):any{
    let url = "https://fakestoreapi.com/products/" + id;
    return this.http.get(url)
  }

}
