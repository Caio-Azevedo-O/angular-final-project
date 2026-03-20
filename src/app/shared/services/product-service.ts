import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductContext } from '../../ProductContext';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl:string = 'http://localhost:';

  constructor(private https:HttpClient) {
  }

  getById(id:number){}
  getByProductCode(productCode: string){}
  getByUserId(userId: number){}
  getAll(){}
  updateProduct(id:number, newProduct: ProductContext){}
  deleteProduct(id:number){}
  createProduct(newProduct: ProductContext){}
  
}
