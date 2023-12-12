import { Component } from '@angular/core';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(`A test recipe`, `This is a test`, "https://pxhere.com/en/photo/1619833")
  ];
}
