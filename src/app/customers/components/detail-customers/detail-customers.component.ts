import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '@app/@core/data';

@Component({
    selector: 'ngx-detail-customers',
    template: `
    <div >
        <p>
            ID: {{ customer?customer.id:'' }}
        </p>
        <p>
            Name: {{ customer?customer.name:'' }}
        </p>
        <p>
            Phone: {{ customer?customer.phone:'' }}
        </p>
    </div>
    `,
})

export class DetailCustomersComponent implements OnInit {
    @Input() customer: Customer;
    constructor() { }

    ngOnInit() { }
}
