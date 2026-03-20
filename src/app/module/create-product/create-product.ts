import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductService } from '../../shared/services/product-service';
import { ProductContext } from '../../ProductContext';

@Component({
  selector: 'app-create-product',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatFormField,
    FormsModule
  ],
  standalone: true,
  templateUrl: './create-product.html',
  styleUrl: './create-product.scss',
})
export class CreateProduct {
  productName: string = "";
  productValue: number = 0;
  productDescription: string = "";
  productCode: string = ""; 

  /**
   *
   */
  constructor(private productService: ProductService) {
  }

  createProduct(){
    let newProduct = new ProductContext(
      this.productName,
      this.productValue,
      this.productDescription,
      this.productCode
    );
    this.productService.createProduct(newProduct).subscribe(response=>{
      console.log(response);
    });
  }
}
