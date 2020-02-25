import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Product from 'src/app/components/shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private route = 'product';

  constructor(private http: HttpClient) { }

  create(product: Product){
    return this.http.post(this.route, product);
  }

  all(){
    return this.http.get<Product[]>(this.route);
  }

  filter(categoryId: string, orderBy: string){
    let params = { categoryId, orderBy };
    return this.http.get<Product[]>(this.route, { params });
  }

  edit(product: Product, id: number){
    return this.http.put(this.route + `/${id}`, product);
  }

  getById(id: number){
    return this.http.get<Product>(`${this.route}/${id}`);
  }

  delete(id: number){
    return this.http.delete(`${this.route}/${id}`);
  }
}
