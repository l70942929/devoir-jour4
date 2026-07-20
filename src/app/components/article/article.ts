import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-article',
  imports: [NgClass],
  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class Article {
  // Initialisation du compteur à 0
  count: number = 0;

  // Méthode pour incrémenter (+)
  incrementer() {
    this.count++;
  }

  // Méthode pour décrémenter (-)
  decrementer() {
    this.count--;
  }

}



