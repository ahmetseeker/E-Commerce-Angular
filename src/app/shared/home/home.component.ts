import { Component, OnInit } from '@angular/core';
import { Product } from '../../products/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ProductService]
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loading = true;
      this.productService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data;
        this.loading = false;
    })
  })
  }

}
