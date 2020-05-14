import { Component } from '@angular/core';
import { MENU_ITEMS } from './dashboard-menu';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent {
  menu = MENU_ITEMS;
}
