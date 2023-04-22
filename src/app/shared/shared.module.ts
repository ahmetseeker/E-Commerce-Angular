import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { AuthenticationModule } from "../authentication/authentication.module";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SliderComponent } from "./slider/slider.component";
import { CategoriesModule } from "../categories/categories.module";
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsModule } from "../products/products.module";

@NgModule({
    declarations: [
        NavbarComponent,
        HomeComponent,
        FooterComponent,
        SliderComponent,
        NotFoundComponent
    ],
    exports: [
        NavbarComponent,
        HomeComponent,
        FooterComponent,
        SliderComponent,
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        AuthenticationModule,
        CategoriesModule,
        ProductsModule
    ]
})
export class SharedModule {

}