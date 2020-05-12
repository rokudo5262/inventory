import { Component } from '@angular/core';
@Component({
    selector: 'ngx-liquidate-info',
    template: `
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="form-group row">
                    <label class="label col-sm-3 col-form-label">Current Debt</label>
                    <div class="col-sm-9">
                        <input type="text" nbInput fullWidth id="currentDebt" disabled>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputReceived" class="label col-sm-3 col-form-label">Received</label>
                    <div class="col-sm-9">
                        <input type="tetx" nbInput fullWidth id="received">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="label col-sm-3 col-form-label">Rest Debt</label>
                    <div class="col-sm-9">
                        <input type="text" nbInput fullWidth id="restDebt" disabled>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="form-group row">
                    <label for="inputDate" class="label col-sm-3 col-form-label">Date</label>
                    <div class="col-sm-9">
                        <input class="date" nbInput fullWidth [nbDatepicker]="formpicker">
                        <i class="far fa-calendar-minus"></i>
                        <nb-datepicker #formpicker></nb-datepicker>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPayment" class="label col-sm-3 col-form-label">Payment</label>
                    <div class="col-sm-9">
                        <nb-select selected="1" fullWidth>
                            <nb-option value="1">Cash</nb-option>
                            <nb-option value="2">ATM</nb-option>
                            <nb-option value="3">VISA</nb-option>
                            <nb-option value="4">JCB</nb-option>
                        </nb-select>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="form-group row">
                    <div class="col-sm-12">
                        <textarea type="notes" nbInput fullWidth id="inputNotes" rows="6" placeholder="Notes..."></textarea>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        i {
            float: right;
            position: absolute;
            margin: 12px 0 12px -25px;
        }
        date {
            position: relative;
        }
    `],
})
export class LiquidateInfoComponent { }
