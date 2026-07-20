import { Component } from '@angular/core';
import { Aside } from '../aside/aside';

@Component({
  selector: 'app-aside-container',
  imports: [Aside],
  templateUrl: './aside-container.html',
  styleUrl: './aside-container.css',
})
export class AsideContainer {}
