import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';
import Category from '../../shared/models/category';
import { Observable, Subscription } from 'rxjs';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, AfterViewInit, OnDestroy {
  categories$: Observable<Category[]>
  @ViewChild(MatPaginator, {read: MatPaginator, static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {read: MatSort, static: true}) sort: MatSort;
  displayedColumns: string[] = [ 'name' ];
  dataSource = new MatTableDataSource<Category>();
  allCategoriesSubscription: Subscription;

  constructor(private categoryService: CategoryService) { 
    this.categories$ = categoryService.all();
  }

  ngOnInit() {
    this.allCategoriesSubscription = this.categoryService.all()
    .subscribe(data => {
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.allCategoriesSubscription.unsubscribe();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
