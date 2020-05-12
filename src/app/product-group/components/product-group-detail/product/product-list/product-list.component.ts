import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'ngx-product-list',
    templateUrl: './product-list.component.html',
    styles: [`
        :host /deep/ .ng2-smart-action-multiple-select{
            text-align: center;
            width: 60px;
        }

        :host /deep/ .ng2-smart-action-multiple-select > input{
            width: 13px;
            height: 13px;
            display: unset;
            padding: 0;
            margin: 0;
        }
        p {
            float: left;
            font-size: 24px;
            margin: 10px 0;
            font-weight: bold;
        }
        .button {
            float: right;
        }
        .btn {
            width: 120px;
            margin-left: 10px;
        }
        .btn span {
            margin-left: 5px;
        }
    `],
})
export class ProductListComponent implements OnInit {
    settings = {
        actions: {
            add: false,
            delete: false,
            edit: false,
            custom: [{ name: 'ProductAction', title: '<i class="nb-compose"></i>' }],
        },
        selectMode: 'multi',
        columns: {
            detailType: {
                title: 'Group Type',
                type: 'string',
                width: '20%',
            },
            productCode: {
                title: 'Product Code',
                width: '25%',
            },
            productName: {
                title: 'Product Code',
                width: '25%',
            },
            desciption: {
                title: 'Product Code',
                width: '25%',
            },
            hierarchyL01: {
                title: 'Struct Lv1',
                width: '25%',
            },
            hierarchyL02: {
                title: 'Struct Lv2',
                width: '25%',
            },
            hierarchyL03: {
                title: 'Struct Lv3',
                width: '25%',
            },
            hierarchyL04: {
                title: 'Struct Lv4',
                width: '25%',
            },
            hierarchyL05: {
                title: 'Struct Lv5',
                width: '25%',
            },
        },
    };
    constructor(
        private route: Router,
    ) { }
    ngOnInit() { }
    onProductAction(event) {
        this.route.navigate(['dashboard/product-group/product-group/Product', event.data.lineId]);
    }
}
