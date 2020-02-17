import { Component } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import Product from '../../shared/models/product.model';
import { CategoryService } from 'src/app/core/services/category.service';
import ProductSearchModel from '../../shared/models/product-search.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[]
  
  constructor(private productService: ProductService, private categoryService: CategoryService) {
    productService.all().subscribe(data => this.products = data);
  }

  searchHandler(searchData: ProductSearchModel){
    console.log(searchData);
    
  }
}
