import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngx-sort-customers',
    template: `
    <div class="container">
        <div>
            <label class="label" type="button">Customer Group<i class="fas fa-sort-down"></i></label>
            <nb-select selected="0" fullWidth placeholder="All Groups" style="margin: 8px 0;">
                <nb-option value="1">Group 1</nb-option>
                <nb-option value="2">Group 2</nb-option>
            </nb-select>
        </div>
        <div>
            <label class="label" type="button">Search<i class="fas fa-sort-down"></i></label>
            <input nbInput [nbFilterInput]="dataSource" fullWidth id="searchByIdNamePhone" class="search-input" placeholder="By Id, Name, Phone">
            <input nbInput [nbFilterInput]="dataSource" fullWidth id="searchByEmail" class="search-input" placeholder="By Email">
            <input nbInput [nbFilterInput]="dataSource" fullWidth id="searchByOrderId" class="search-input" placeholder="By Order Id">
        </div>
        <div>
            <label class="label" type="button">Created Day<i class="fas fa-sort-down"></i></label>
            <nb-radio-group [(ngModel)]="selectedOption" fullWidth>
                <nb-radio value="1">
                    <nb-select placeholder="Time" fullWidth>
                        <nb-option [value]="1">Full Time</nb-option>
                        <nb-option [value]="2">Today</nb-option>
                        <nb-option [value]="3">Yesterday</nb-option>
                        <nb-option [value]="4">Previous 7 days</nb-option>
                        <nb-option [value]="5">This Month</nb-option>
                        <nb-option [value]="6">Previous Month</nb-option>
                        <nb-option [value]="7">Optional ...</nb-option>
                    </nb-select>
                </nb-radio>
                <nb-radio value="2">
                    <input nbInput placeholder="Other" [nbDatepicker]="formpicker" fullWidth>
                    <nb-datepicker #formpicker></nb-datepicker>
                </nb-radio>
            </nb-radio-group>
        </div>
        <div>
            <label class="label" type="button">Creator<i class="fas fa-sort-down"></i></label>
            <input nbInput [nbFilterInput]="dataSource" fullWidth id="searchByCreator" class="search-input" placeholder="Choose Creator">
        </div>
        <div>
            <label class="label" type="button">Birthday<i class="fas fa-sort-down"></i></label>
            <nb-radio-group [(ngModel)]="selectedOption">
                <nb-radio value="1">
                    <nb-select placeholder="Time">
                        <nb-option [value]="1">Full Time</nb-option>
                        <nb-option [value]="2">Today</nb-option>
                        <nb-option [value]="3">Yesterday</nb-option>
                        <nb-option [value]="4">Previous 7 days</nb-option>
                        <nb-option [value]="5">This Month</nb-option>
                        <nb-option [value]="6">Previous Month</nb-option>
                        <nb-option [value]="7">Optional ...</nb-option>
                    </nb-select>
                </nb-radio>
                <nb-radio value="2">
                    <input nbInput placeholder="Other" [nbDatepicker]="formpicker" fullWidth>
                    <nb-datepicker #formpicker></nb-datepicker>
                </nb-radio>
            </nb-radio-group>
        </div>
        <div>
            <label class="label" type="button">The Last Trading<i class="fas fa-sort-down"></i></label>
            <nb-radio-group [(ngModel)]="selectedOption">
                <nb-radio value="1">
                    <nb-select placeholder="Time">
                        <nb-option [value]="1">Full Time</nb-option>
                        <nb-option [value]="2">Today</nb-option>
                        <nb-option [value]="3">Yesterday</nb-option>
                        <nb-option [value]="4">Previous 7 days</nb-option>
                        <nb-option [value]="5">This Month</nb-option>
                        <nb-option [value]="6">Previous Month</nb-option>
                        <nb-option [value]="7">Optional ...</nb-option>
                    </nb-select>
                </nb-radio>
                <nb-radio value="2">
                    <input nbInput placeholder="Other" [nbDatepicker]="formpicker" fullWidth>
                    <nb-datepicker #formpicker></nb-datepicker>
                </nb-radio>
            </nb-radio-group>
        </div>
    </div>
    `,
    styles: [`
    .container{
        padding: 5px 10px;
    }
    .label{
        width: 100%;
        padding: 10px;
        background-color: #3366ff;
        margin: 8px 0;
        color: white;
        font-size: 14px;
    }
    .search-input{
        margin: 8px 0;
    }
    nb-radio {
        width: 100%;
    }
    i {
        float: right;
    }
    `]
})
export class SortCustomersComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
