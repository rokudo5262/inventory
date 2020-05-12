import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngx-liquidate-auto',
    template: `
    <div class="col-lg-4 col-md-4 col-sm-4 auto">
        <div class="form-group row">
            <label class="label col-sm-6 col-form-label">Total</label>
            <div class="col-sm-6">
                <input type="text" nbInput fullWidth id="total" disabled>
            </div>
        </div>
        <div class="form-group row">
            <label class="label col-sm-6 col-form-label">Balanced</label>
            <div class="col-sm-6">
                <input type="text" nbInput fullWidth id="balanced" disabled>
            </div>
        </div>
    </div>
    `,
    styles: [`
    .auto {
        margin: 20px 0 40px auto;
        padding: 0;
    }
    `],
})
export class LiquidateAutoComponent implements OnInit {
    constructor() {
    }
    ngOnInit() {
    }
}
