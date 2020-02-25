import { Component } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import Product from '../../shared/models/product.model';
import { CategoryService } from 'src/app/core/services/category.service';
import ProductSearchModel from '../../shared/models/product-search.model';
import { globalConstants } from 'src/app/common/global-constants';
import getPage from 'src/app/common/paginator';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  page: number = globalConstants.pagination.defaultPage;
  pageSize: number;
  allProducts: Product[] = [];
  products: Product[] = []
  
  constructor(private productService: ProductService, private categoryService: CategoryService) {
    this.pageSize = globalConstants.pagination.productsPerPage;
    this.productService.all().subscribe(data => {
      this.allProducts = data;
      this.getProductsPerPage(this.page);
    })
  }

  searchHandler(searchData: ProductSearchModel){
    this.productService.filter(searchData.category, searchData.orderBy).subscribe(data => {
      this.allProducts = data;
      this.getProductsPerPage(this.page);
    })
  }

  public getProductsPerPage(page: number): void {
    this.products = getPage<Product>(this.allProducts, page, this.pageSize);
  }
}
