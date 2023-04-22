import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  providers: [CategoryService]
})
export class CategoryListComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category | null;

  constructor(private categoryService: CategoryService) {
   }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  displayAll = true;

  selectCategory(category?: Category) {
    if(category) {
      this.selectedCategory = category;
      this.displayAll = false;
    } else {
      this.selectedCategory = null;
      this.displayAll = true;
    }
  }

}
