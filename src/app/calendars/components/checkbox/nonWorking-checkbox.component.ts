import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngx-non-working-checkbox',
    template: `
        <nb-checkbox [(ngModel)]="checkboxNgModel"></nb-checkbox>
    `,
})
export class NonWorkingCheckboxComponent implements OnInit {
    checkboxNgModel = false;
    constructor() { }
    ngOnInit() { }
}
