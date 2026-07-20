import { Component } from '@angular/core';
import{Nav} from '../nav/nav';
import {Article} from '../article/article';
import {AsideContainer} from '../aside-container/aside-container';

@Component({
  selector: 'app-container',
  imports: [Nav, Article, AsideContainer],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {}
