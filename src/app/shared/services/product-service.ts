import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductContext } from '../../ProductContext';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl:string = 'http://localhost:5034';

  constructor(private https:HttpClient) {
  }

  getById(id:number){}
  getByProductCode(productCode: string){}
  getByUserId(userId: number){}
  getAll():Observable<any>{
    return this.https.get<any>(`${this.baseUrl}/product/search-all`).pipe(
      map(response => response.products || [])
    );
  }
  updateProduct(id:number, newProduct: ProductContext){}
  deleteProduct(id:number){}
  createProduct(newProduct: ProductContext):Observable<any>{
    return this.https.post(`${this.baseUrl}/product/create`, newProduct);
  }
  
}
