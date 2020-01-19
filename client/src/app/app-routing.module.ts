import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProductResolver } from './core/resolvers/product.resolver';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'product', children: [
      { path: '', component: ProductListComponent },
      { path: 'all', component: ProductListComponent },
      { path: 'create', component: ProductCreateComponent },
      { 
        path: 'edit/:id', 
        component: ProductEditComponent,
        resolve : 
        { 
          product: ProductResolver
        } 
      },
      { 
        path: 'details/:id', 
        component: ProductDetailsComponent,
        resolve : 
        { 
          product: ProductResolver
        } 
      }
    ]
  },
  {
    path: 'category', children: [
      { path: '', component: CategoryListComponent },
      { path: 'all', component: CategoryListComponent },
      { path: 'create', component: CategoryCreateComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
