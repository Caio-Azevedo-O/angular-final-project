import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ProductService } from '../../shared/services/product-service';

@Component({
  selector: 'app-products',
  imports: [
    MatTableModule
  ],
  standalone: true,
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  dataSource!: any[];

  /**
   *
   */
  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe(products=>{
      this.dataSource = products;
    });
  }
  
  displayedColumns: string[] = ['position', 'name', 'value', 'description', 'code'];

}
