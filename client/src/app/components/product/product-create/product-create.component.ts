import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MinLengthValidator, AbstractControl } from '@angular/forms';
import { modelConstants } from 'src/app/common/model-constants';
import Product from '../../shared/models/product.model';
import { ProductService as ProductService } from 'src/app/core/services/product.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Category from '../../shared/models/category';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categories$: Observable<Category[]>
  productForm: FormGroup
  nameMinLength = modelConstants.product.nameMinLength
  nameMaxLength = modelConstants.product.nameMaxLength
  descriptionMinLength = modelConstants.product.descriptionMinLength
  descriptionMaxLength = modelConstants.product.descriptionMaxLength
  priceMinValue = modelConstants.product.priceMinValue
  priceMaxValue = modelConstants.product.priceMaxValue

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router) {
    this.categories$ = categoryService.all();
  }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(modelConstants.product.nameMinLength),
          Validators.maxLength(modelConstants.product.nameMaxLength)
        ]
      ],
      description: [
        null,
        [
          Validators.required,
          Validators.minLength(modelConstants.product.descriptionMinLength),
          Validators.maxLength(modelConstants.product.descriptionMaxLength)
        ]
      ],
      image: [null, Validators.required],
      price: [
        1.00,
        [
          Validators.required,
          Validators.min(modelConstants.product.priceMinValue),
          Validators.max(modelConstants.product.priceMaxValue)
        ]
      ],
      categoryId: [null, [Validators.required]]
    })
  }

  formHandler() {
    let product: Product = this.productForm.value;

    this.productService.create(product)
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
