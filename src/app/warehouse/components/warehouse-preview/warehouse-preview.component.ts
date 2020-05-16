import { Component, Input, OnInit } from '@angular/core';
import { Warehouse } from '@appdata';
@Component({
    selector: 'ngx-warehouse-preview',
    templateUrl: './warehouse-preview.component.html',
    styleUrls: ['./warehouse-preview.component.scss'],
})

export class WarehousePreviewComponent  implements OnInit {
    @Input() warehouse: Warehouse;

    constructor() { }

    ngOnInit() {
  }
}
