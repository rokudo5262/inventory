import { Component, OnInit, Input } from '@angular/core';
import { UOM } from '@app/@core/data';
import { Router } from '@angular/router';

@Component({
    selector: 'ngx-uom-review',
    templateUrl: './uom-review.component.html',
    styleUrls: ['./uom-review.component.scss'],
})

export class UomReviewComponent implements OnInit {
    @Input() uom: UOM;

    constructor(
        private route: Router,
    ) {
    }
    ngOnInit() {
    }
    back() {
        this.route.navigate(['dashboard/UOMs']);
    }
}
