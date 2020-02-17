import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { BaseUrlInterceptor } from './core/interceptors/base-url.interceptor';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { ProductInfoComponent } from './components/product/product-info/product-info.component';
import { ProductDeleteModalComponent } from './components/product/product-delete-modal/product-delete-modal.component';
import { CategoryLinksComponent } from './components/category/category-links/category-links.component';
import { SearchFormComponent } from './components/shared/search-form/search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProductCreateComponent,
    ProductListComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    NavBarComponent,
    ProductEditComponent,
    ProductDetailsComponent,
    ProductInfoComponent,
    ProductDeleteModalComponent,
    CategoryLinksComponent,
    SearchFormComponent,
  ],
  entryComponents: [ ProductDeleteModalComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

