import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, exhaustMap, map, Observable, take, tap } from "rxjs";
import { Product } from "../models/product.model";
import { AuthService } from "../../authentication/services/auth.service";
import { environment } from "src/environments/environment";

@Injectable()
export class ProductService {
    
    private url = environment.databaseUrl;
    
    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) {}

    getProducts(categoryId: number): Observable<Product[]> {
        return this.http
        .get<Product[]>(this.url + "products.json")
        .pipe(
            map(data => {
                const products: Product[] = [];

                for(const key in data) {
                    if(categoryId) {
                        if(categoryId == data[key].categoryId) {
                            products.push({ ...data[key], id: key})
                        }
                    } else {
                        products.push({ ...data[key], id: key});
                    }
                }

                return products;
            }),
            tap(data => console.log(data)),
            delay(500)
        )
    }

    getProductById(id: string): Observable<Product> {
        return this.http.get<Product>(this.url + "products/" + id + ".json").pipe(delay(500));
    }

    createProduct(product: Product): Observable<Product> {

        return this.authService.user.pipe(
            take(1),
            tap(user =>console.log(user)),
            exhaustMap(user => {

                return this.http.post<Product>(this.url + "products.json?auth=" + user?.token, product).pipe(delay(500));
            })
        )

    }

    addToCartDatabase(product: Product): Observable<Product> {
        return this.authService.user.pipe(
            take(1),
            tap(user =>console.log(user)),
            exhaustMap(user => {
                return this.http.post<Product>(this.url + user?.id + ".json?auth=" + user?.token, product);
            }),
            delay(500)
        )
    }

    getCartFromDatabase(): Observable<Product[]> {
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                return this.http.get<Product[]>(this.url + user?.id + ".json");
            }),
            map(data => {
                const products: Product[] = [];

                for(const key in data) {
                    products.push({ ...data[key], id: key})
                }

                return products;
            }),
            delay(500)
        )
    }

    deleteCartItemFromDb(id: string) {
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                return this.http.delete<Product>(this.url + user?.id + "/" + id + ".json?auth=" + user?.token)
            }),
            delay(500)
        )
    }


}