import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';
import { Observable } from 'rxjs';
import Category from '../../shared/models/category';

@Component({
  selector: 'app-category-links',
  templateUrl: './category-links.component.html',
  styleUrls: ['./category-links.component.css']
})
export class CategoryLinksComponent {
  categories$: Observable<Category[]>;

  constructor(private categoryService: CategoryService) {
    this.categories$ = categoryService.all();
  }
}
