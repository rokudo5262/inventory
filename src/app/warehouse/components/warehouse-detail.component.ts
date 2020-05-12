import { Component, Input, OnInit } from '@angular/core';
import { Warehouse } from '@appdata';
@Component({
    selector: 'ngx-warehouse-detail',
    template: `
    <div>
    <p>
        Id: {{ warehouse?warehouse.id:'' }}
    </p>
    <p>
        Name: {{ warehouse?warehouse.warehouseName:'' }}
    </p>
    <p>
        Location Id: {{ warehouse?warehouse.locationId:'' }}
    </p>
    <p>
        Address: {{ warehouse?warehouse.warehouseAddress:'' }}
    </p>
    <p>
        Warehouse Manager Id: {{ warehouse?warehouse.managerId:'' }}
    </p>
    <p>
        Warehouse Code: {{ warehouse?warehouse.warehouseCode:'' }}
    </p>
    <p>
    Status: {{ warehouse?warehouse.warehouseStatus:'' }}
    </p>
  </div>
    `,
})

export class WarehouseDComponent  implements OnInit {
    @Input() warehouse: Warehouse;

    constructor() { }

    ngOnInit() {
  }
}
