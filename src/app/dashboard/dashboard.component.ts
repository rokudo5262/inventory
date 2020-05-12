import { Component } from '@angular/core';

import { MENU_ITEMS } from './dashboard-menu';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['dashboard.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class DashboardComponent {

  menu = MENU_ITEMS;
}
