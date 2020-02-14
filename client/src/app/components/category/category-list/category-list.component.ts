import { Component } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';
import Category from '../../shared/models/category';

import { globalConstants } from 'src/app/common/global-constants';
import getPage from 'src/app/common/paginator';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  page: number = globalConstants.pagination.defaultPage;
  collectionSize: number;
  private itemsPerPage: number;
  categories: Category[] = [];
  allCategories: Category[] = [];

  constructor(private categoryService: CategoryService) {
    this.itemsPerPage = globalConstants.pagination.itemsPerPage;
    this.categoryService.all().subscribe(data => {
      this.allCategories = data;
      this.getCategoriesPerPage(this.page);
    })
  }

  public getCategoriesPerPage(page: number): void {
    debugger;
    this.categories = getPage<Category>(this.allCategories, page, this.itemsPerPage);
  }
}
