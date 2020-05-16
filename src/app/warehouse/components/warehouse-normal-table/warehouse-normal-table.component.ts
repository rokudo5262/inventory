import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Warehouse } from '@appdata';
@Component({
    selector: 'ngx-warehouse-normal-table',
    templateUrl: './warehouse-normal-table.component.html',
    styleUrls: ['./warehouse-normal-table.component.scss'],
})

export class WarehouseNormalTableComponent implements OnInit {
    @Input() warehouses: Warehouse[];
    @Output() warehouseSelected: EventEmitter<number> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    navigateToWarehouse(id: number) {
        this.warehouseSelected.emit(id);
    }
}
