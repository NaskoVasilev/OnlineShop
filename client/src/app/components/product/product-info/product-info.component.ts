import { Component, OnInit, Input } from '@angular/core';
import Product from '../../shared/models/product.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDeleteModalComponent } from '../product-delete-modal/product-delete-modal.component';
import { ProductService } from 'src/app/core/services/product.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
  @Input() product: Product
  isAdmin: Boolean = false;

  constructor(
    private modalService: NgbModal, 
    private productService: ProductService, 
    private router: Router,
    private authService: AuthService) {
      this.isAdmin = authService.isAdmin;
     }

  open(productId: number) {
    let modal = this.modalService.open(ProductDeleteModalComponent);
    
    modal.result.then(value => {
      debugger;
      this.productService.delete(productId).toPromise()
      .then(_ => {
        this.router.navigate(['/product', 'all']);
      })
    }).catch(err => {
      console.log(err);
    })
  }
}
