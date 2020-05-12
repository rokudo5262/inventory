import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngx-import-customers',
    template: `
    <nb-card>
        <nb-card-header>Import Customers from Excel File</nb-card-header>
        <nb-card-body>
        <p>Data handling (Download template: <a href="#" style="text-decoration: none;">Excel File</a>): </p> <hr>
        <div class="import-checkbox">
            <nb-checkbox status="success">Update the last balance.</nb-checkbox> <br>
            <nb-checkbox status="success">Update points.</nb-checkbox> <br>
            <nb-checkbox status="success">Accept imported guests to match existing guests in the system.</nb-checkbox> <br>
        </div>
        <div>
            <button class="btn btnChoose" nbButton status="success" nbTooltip="Choose File" nbTooltipPlacement="top" style="float: right; margin: 1vw 0.25vw 0.25vw auto;"><i class="fas fa-copy" aria-hidden="true"></i><span style="margin-left: 0.5vw;">Choose File</span></button>
        </div>
        </nb-card-body>
    </nb-card>
    `
})
export class ImportCustomersComponent implements OnInit {
    constructor() {
    }
    ngOnInit() {
    }
}
