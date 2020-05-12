import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomersList } from '@app/@core/data/customersList';

@Component({
    selector: 'ngx-view-customers-page',
    template: `
    <div class="row">
        <div class="col-lg-3 col-xxxl-3">
            <nb-card>
                <ngx-sort-customers></ngx-sort-customers>
            </nb-card>
        </div>
        <div class="col-lg-9 col-xxxl-9">
            <ngx-view-customers></ngx-view-customers>
        </div>
    </div>
    `,
})
export class ViewCustomersPageComponent implements OnInit {
    customers$: Observable<CustomersList[]>;
    constructor() {

    }

    ngOnInit() {

    }
}
