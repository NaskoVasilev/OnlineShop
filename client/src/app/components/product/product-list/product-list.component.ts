import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { Observable } from 'rxjs';
import Product from '../../shared/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products$: Observable<Product[]>

  constructor(private productService: ProductService) {
    this.products$ = productService.all();
   }
}
