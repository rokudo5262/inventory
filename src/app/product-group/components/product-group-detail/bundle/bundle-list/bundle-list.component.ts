import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'ngx-bundle-list',
    templateUrl: './bundle-list.component.html',
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
export class BundleListComponent implements OnInit {
    settings = {
        actions: {
            delete: false,
            add: false,
            edit: false,
            custom: [{ name: 'BundleAction', title: '<i class="nb-compose"></i>' }],
        },
        selectMode: 'multi',
        columns: {
            lineID: {
                title: 'Line ID',
                type: 'number',
                width: '15%',
            },
            detailType: {
                title: 'Group Type',
                type: 'string',
                width: '20%',
            },
            productCode: {
                title: 'Product Code',
                width: '25%',
            },
            quatity: {
                title: 'Quatity',
                type: 'string',
                width: '25%',
            },
            UOM: {
                title: 'UOM',
                width: '20%',
                type: 'custom',
            },
        },
    };
    constructor(
        private route: Router,
    ) { }
    ngOnInit() { }
    onBundleAction(event) {
        this.route.navigate(['dashboard/product-group/product-group/Bundle', event.data.lineId]);
    }
}
