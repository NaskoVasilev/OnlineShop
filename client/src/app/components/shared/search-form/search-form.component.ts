import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import ProductSearchModel from '../models/product-search.model';
import { Observable } from 'rxjs';
import Category from '../models/category';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() submit = new EventEmitter<ProductSearchModel>();
  searchForm: FormGroup;
  categories$: Observable<Category[]>;

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService) {
    this.categories$ = categoryService.all();
  }
  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      category: [""],
      orderBy: [""],
    })
  }

  formHandler() {
    let searchData: ProductSearchModel = this.searchForm.value;
    this.submit.emit(searchData);
  }

  get category(): AbstractControl {
    return this.searchForm.get('category');
  }

  get orderBy(): AbstractControl {
    return this.searchForm.get('orderBy');
  }
}
