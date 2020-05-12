import { Component, OnInit, Input } from '@angular/core';
import { UOM } from '@app/@core/data';
import { Router } from '@angular/router';

@Component({
    selector: 'ngx-uom-detail',
    templateUrl: './UOM-detail.component.html',
    styles: [`
    button[nbButton]{
        display: block;
        float: right;
        margin-left: 15px;
    }
    `]
})

export class UomDetailComponent implements OnInit {
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
