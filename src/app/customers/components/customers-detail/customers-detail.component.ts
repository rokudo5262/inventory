import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '@app/@core/data';

@Component({
    selector: 'ngx-customers-detail',
    templateUrl: './customers-detail.component.html',
    styleUrls: ['./customers-detail.component.scss'],
})

export class CustomersDetailComponent implements OnInit {
    @Input() customer: Customer;
    constructor() { }

    ngOnInit() { }
}
