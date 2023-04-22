import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CKEditorModule } from "ckeditor4-angular";
import { AuthenticationModule } from "../authentication/authentication.module";
import { AdminGuard } from "../authentication/guards/admin-guard";
import { ProductCreateComponent } from "./product-create/product-create.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product/product.component";
import { CartComponent } from "./cart/cart.component";

const routes: Routes = [
    {
        path: "products",
        children: [
            { path: 'create', component: ProductCreateComponent, canActivate: [AdminGuard]},
            { path: 'cart', component: CartComponent},
            { path: ':productId', component: ProductComponent},
            { path: 'category/:categoryId', component: ProductListComponent },
            { path: '', component: ProductListComponent},
        ]
    }
]

@NgModule({
    declarations: [
        ProductListComponent,
        ProductComponent,
        ProductCreateComponent,
        CartComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        CKEditorModule,
        AuthenticationModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        ProductListComponent,
        ProductComponent,
        ProductCreateComponent,
        CartComponent
    ]
})
export class ProductsModule {

}