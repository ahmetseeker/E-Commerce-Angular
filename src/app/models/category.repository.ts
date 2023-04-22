import { Category } from "../categories/models/category.model";

export class CategoryRepository {
    private categories: Category[] = [
    
        { id: 1, name: "Watches"},
        { id: 2, name: "Phones"},
        { id: 3, name: "Computers"},
        { id: 4, name: "Books"},
        { id: 5, name: "Home"},
        { id: 6, name: "Software"},
        { id: 7, name: "Sport"},
        { id: 8, name: "Fashion"},
        { id: 9, name: "Cosmetics"},
    ]

    getCategories(): Category[] {
        return this.categories;
    }

    getCategoryById(id: number) {
        return this.categories.find(c => c.id == id);
    }
}