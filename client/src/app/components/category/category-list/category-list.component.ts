import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';
import Category from '../../shared/models/category';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categories$: Observable<Category[]>

  constructor(private categoryService: CategoryService) { 
    this.categories$ = categoryService.all();
  }
}
