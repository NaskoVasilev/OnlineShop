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
  products: Product[]
  selectedProductId = 0;

  constructor(private productService: ProductService) {
    productService.all().subscribe(data => this.products = data);
  }

  onMouseOverHandler(id: number) {
    this.selectedProductId = id;
  }

  onMouseOutHandler() {
    this.selectedProductId = 0;
  }
}
