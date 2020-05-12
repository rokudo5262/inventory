import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Warehouse } from '@appdata';
@Component({
    selector: 'ngx-warehouse-list',
    template: `
    <table class="table table-striped">
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Location Id</th>
            <th>Address</th>
            <th>Warehouse Manager Id</th>
            <th>Warehouse Code</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let warehouse of warehouses"
        (click)="navigateToWarehouse(warehouse.id)">
            <td>{{ warehouse.id }}</td>
            <td>{{ warehouse.warehouseName }}</td>
            <td>{{ warehouse.locationId }}</td>
            <td>{{ warehouse.warehouseAddress }}</td>
            <td>{{ warehouse.managerId }}</td>
            <td>{{ warehouse.warehouseCode }}</td>
            <td>{{ warehouse.warehouseStatus }}</td>
        </tr>
    </tbody>
    </table>
    `,
})

export class WarehouseListComponent implements OnInit {
    @Input() warehouses: Warehouse[];
    @Output() warehouseSelected: EventEmitter<number> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    navigateToWarehouse(id: number) {
        this.warehouseSelected.emit(id);
    }
}
