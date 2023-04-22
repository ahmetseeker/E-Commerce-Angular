import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/products/models/product.model';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  product: Product | undefined;
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params["productId"];
      this.loading = true;

      this.productService.getProductById(id).subscribe(result => {
        this.product = { ...result, id: id}
        this.loading = false;
        console.log(this.product);
      })
    })
  }

  
  addToCart(product: Product) {
    this.productService.addToCartDatabase(product).subscribe(data => {
        this.loading = false;
        this.router.navigate(['/products/cart']);
        location.reload();
    })
  }

}
