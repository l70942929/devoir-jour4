import { Component } from '@angular/core';
interface Navigation {
  id: number,
  label: string,
  url: string
}

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})


export class Menu {
  navigation: Navigation[]=[
    {id : 1, label : 'Home' , url : '/home'},
    {id : 2, label : 'Products' , url : '/products'},
    {id : 3, label : 'Blog' , url : '/blog'},
    {id : 4, label : 'Contact' , url : '/contact'},
    {id : 5, label : 'About' , url : '/about'},

  ]
    displayMenu=true;

  ToggleMenu(){
    this.displayMenu= !this.displayMenu
  }

  lienActif: any=null;//boite vide appelle lien actif pour stocker le lien clique


  //fonction qui prend le lien cliquer et le range dans la boite
  rendreActif(item: any){
    this.lienActif=item;
  }









}
