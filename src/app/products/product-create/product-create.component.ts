import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../../categories/models/category.model';
import { CategoryService } from '../../categories/services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
  providers: [CategoryService, ProductService]
})
export class ProductCreateComponent implements OnInit {

  categories:  Category[] = [];
  error: string = "";
  model: any = {
    categoryId: "0"
  };

  constructor(private productService: ProductService, private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  saveProduct(form: NgForm) {
    
    
    const extensions = ["jpeg", "jpg", "png"];
    const extension = this.model.imageUrl.split(".").pop();

    if(extensions.indexOf(extension) == -1) {
      this.error = "Image format not supported";
      return;
    }

    if(this.model.categoryId == "0") {
      this.error = "Category not selected";
      return;
    }

    const p = { 
    id: 7, 
    name: this.model.name, 
    price: this.model.price, 
    oldPrice: this.model.oldPrice, 
    imageUrl: this.model.imageUrl, 
    productHeader: this.model.productHeader, 
    description: this.model.description, 
    isActive: this.model.isActive, 
    categoryId: this.model.categoryId}


    if(form.valid) {

      this.productService.createProduct(p)
      .subscribe(result => {
        this.router.navigate(['/products'])
      });
    } else {
      this.error = "Please fill out all fields";
    }
      
    console.log(this.model);

  } 
}


