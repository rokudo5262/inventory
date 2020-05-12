import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'warehouse-search',
    template: `
    <label>Search</label>
    <input nbInput [value]="query" placeholder="Warehouse Code" (keydown.enter)="onSearchId(search.value)">
    <input nbInput class="search" type="text" placeholder="Warehouse Name" (keydown.enter)="onSearchName(search2.value)">
    <span *ngIf="error">{{error}}</span>
    `
})

export class WarehouseSearchComponent {
    @Input() query = '';
    @Input() searching = false;
    @Input() error = '';
    @Output() search = new EventEmitter<string>();
}
