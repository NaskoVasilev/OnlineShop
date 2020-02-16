import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
import Product from 'src/app/components/shared/models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {
    constructor(private productService: ProductService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Product> {
        let id = route.params['id'];
        return this.productService.getById(id);
    }
}