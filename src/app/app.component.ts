import { Component } from '@angular/core';
import { MenuItem } from './app.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Products-Frontend';

  usersMenu: MenuItem[] = [
    { text: 'List all Users', link: 'user/list' },
    { text: 'Insert all Users', link: 'Not-implemented-yet' },
    { text: 'Delete all Users', link: 'Not-implemented-yet' },
    { text: 'Update all Users', link: 'Not-implemented-yet' },
  ];

  productsMenu: MenuItem[] = [
    { text: 'List all Products', link: 'product/list' },
    { text: 'Insert all Products', link: 'Not-implemented-yet' },
    { text: 'Delete all Products', link: 'Not-implemented-yet' },
    { text: 'Update all Product', link: 'Not-implemented-yet' },
  ];
}
