import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [ProductService]
})
export class CartComponent implements OnInit {

  products: Product[] = [];
  loading: boolean = false;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getCartFromDatabase().subscribe(data => {
      this.products = data;
      this.loading = false;
    })
  }

  deleteItem(product: Product) {
    this.productService.deleteCartItemFromDb(product.id).subscribe(data => {
      location.reload();
    });
  }

}
