import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngx-warehouse-search',
    templateUrl: './warehouse-search.component.html',
    styleUrls: ['./warehouse-search.component.scss'],
})

export class WarehouseSearchComponent {
    @Input() query = '';
    @Input() searching = false;
    @Input() error = '';
    @Output() search = new EventEmitter<string>();
}
