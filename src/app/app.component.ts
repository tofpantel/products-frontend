import { Component } from '@angular/core';
import { usersMenu } from 'shared';
import { productsMenu } from 'shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Products Frontend';
  usersMenu = usersMenu;
  productsMenu = productsMenu;

}
