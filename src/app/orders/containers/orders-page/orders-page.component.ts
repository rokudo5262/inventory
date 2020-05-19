import { OnInit, Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { OrdersAddComponent } from '@app/orders/components/orders-add/orders-add.component';

@Component({
    selector: 'ngx-orders-page',
    templateUrl: './orders-page.component.html',
    styleUrls: ['./orders-page.component.scss'],
})

export class OrdersPageComponent implements OnInit {
    constructor(
        private dialogService: NbDialogService,
    ) { }
    open() {
        this.dialogService.open(OrdersAddComponent);
    }
    ngOnInit() {
    }
}
