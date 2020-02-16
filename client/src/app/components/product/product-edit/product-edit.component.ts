import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Category from '../../shared/models/category';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { modelConstants } from 'src/app/common/model-constants';
import { ProductService } from 'src/app/core/services/product.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import Product from '../../shared/models/product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  categories$: Observable<Category[]>
  productForm: FormGroup
  nameMinLength = modelConstants.product.nameMinLength
  nameMaxLength = modelConstants.product.nameMaxLength
  descriptionMinLength = modelConstants.product.descriptionMinLength
  descriptionMaxLength = modelConstants.product.descriptionMaxLength
  priceMinValue = modelConstants.product.priceMinValue
  priceMaxValue = modelConstants.product.priceMaxValue
  productId: number;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute) {
    this.categories$ = categoryService.all();
  }

  ngOnInit() {
    let product: Product = this.route.snapshot.data.product;
    this.productId = product.id;
    this.productForm = this.formBuilder.group({
      name: [
        product.name,
        [
          Validators.required,
          Validators.minLength(modelConstants.product.nameMinLength),
          Validators.maxLength(modelConstants.product.nameMaxLength)
        ]
      ],
      description: [
        product.description,
        [
          Validators.required,
          Validators.minLength(modelConstants.product.descriptionMinLength),
          Validators.maxLength(modelConstants.product.descriptionMaxLength)
        ]
      ],
      image: [null, Validators.required],
      price: [
        product.price,
        [
          Validators.required,
          Validators.min(modelConstants.product.priceMinValue),
          Validators.max(modelConstants.product.priceMaxValue)
        ]
      ],
      categoryId: [product.categoryId, [Validators.required]]
    })
  }

  formHandler() {
    let product: Product = this.productForm.value;
        
    this.productService.edit(product, this.productId)
      .subscribe(_ => {
        this.router.navigate(['product', 'all']);
      })

    this.productForm.reset();
  }

  get name(): AbstractControl {
    return this.productForm.get('name');
  }

  get description(): AbstractControl {
    return this.productForm.get('description');
  }

  get price(): AbstractControl {
    return this.productForm.get('price');
  }

  get image(): AbstractControl {
    return this.productForm.get('image');
  }

  get categoryId(): AbstractControl {
    return this.productForm.get('categoryId');
  }
}
