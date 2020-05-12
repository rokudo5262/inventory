import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '@app/@core/data';
import { Store } from '@ngrx/store';
import { CustomersApiActions } from '@app/customers/actions';

@Component({
    selector: 'ngx-add-customers',
    template: `
    <nb-card>
        <nb-card-header><p>Add Customers</p></nb-card-header>
        <nb-card-body>
            <form [formGroup]="addCustomerForm" method="POST">
                <div class="row">
                    <div class="col-lg-2 col-md-12 avatar">
                        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" >
                        <input type="file" id="avatar-file" name="logo" style="display: none;"><br>
                        <button id="choose" type="button" nbButton status="info" class="btnUploadAvatar" nbTooltip="Choose image" nbTooltipPlacement="bottom" style="font-size: 12px;"><i class="fas fa-image"></i>Choose image</button>
                    </div>
                    <div class="col-lg-5 col-md-12">
                        <div class="form-group row">
                            <label class="label col-sm-3 col-form-label">Customer Type</label>
                            <div class="col-sm-9">
                                <nb-radio-group [(value)]="customerType" class="row" name="type">
                                    <nb-radio
                                    value="personal">
                                    Personal
                                    </nb-radio>
                                    <nb-radio
                                    value="company">
                                    Company
                                    </nb-radio>
                                </nb-radio-group>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputName" class="label col-sm-3 col-form-label">Customer ID</label>
                            <div class="col-sm-9">
                                <input type="text" formControlName="id" class="form-control" name="id" nbInput fullWidth placeholder="Default ID" disabled>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputName" class="label col-sm-3 col-form-label">Name</label>
                            <div class="col-sm-9">
                                <input type="text" formControlName="name" class="form-control" name="name" nbInput fullWidth>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPhone" class="label col-sm-3 col-form-label">Phone</label>
                            <div class="col-sm-9">
                                <input type="text" formControlName="phone" class="form-control" name="phone" nbInput fullWidth>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputDob" class="label col-sm-3 col-form-label">Birthday</label>
                            <div class="col-sm-9">
                                <input nbInput fullWidth [nbDatepicker]="formpicker">
                                <nb-datepicker #formpicker></nb-datepicker>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputAddress" class="label col-sm-3 col-form-label">Address</label>
                            <div class="col-sm-9">
                                <input type="text" nbInput fullWidth>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputDistrict" class="label col-sm-3 col-form-label">District</label>
                            <div class="col-sm-9">
                                <nb-select selected="0" fullWidth>
                                    <nb-option value="0">Choose District</nb-option>
                                    <nb-option value="1">District 1</nb-option>
                                    <nb-option value="2">District 2</nb-option>
                                </nb-select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputWard" class="label col-sm-3 col-form-label">Ward</label>
                            <div class="col-sm-9">
                                <nb-select selected="0" fullWidth>
                                    <nb-option value="0">Choose Ward</nb-option>
                                    <nb-option value="1">Ward 1</nb-option>
                                    <nb-option value="2">Ward 2</nb-option>
                                </nb-select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputGroup" class="label col-sm-3 col-form-label">Group</label>
                            <div class="col-sm-9">
                                <input type="text" nbInput fullWidth id="inputGroup">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-12">
                        <div class="form-group row">
                            <label for="inputbName" class="label col-sm-3 col-form-label">Branch Name</label>
                            <div class="col-sm-9">
                                <input type="text" nbInput fullWidth id="inputbName" disabled>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputTax" class="label col-sm-3 col-form-label">Tax code</label>
                            <div class="col-sm-9">
                                <input type="text" nbInput fullWidth>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputGender" class="label col-sm-3 col-form-label">Gender</label>
                            <div class="col-sm-9">
                                <nb-radio-group [(value)]="gender" class="row" name="gender">
                                    <nb-radio
                                    value="male">
                                    Male
                                    </nb-radio>
                                    <nb-radio
                                    value="female">
                                    Female
                                    </nb-radio>
                                </nb-radio-group>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail" class="label col-sm-3 col-form-label">Email</label>
                            <div class="col-sm-9">
                                <input type="text" nbInput fullWidth>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputFb" class="label col-sm-3 col-form-label">Facebook</label>
                            <div class="col-sm-9">
                                <input type="text" nbInput fullWidth>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputNotes" class="label col-sm-3 col-form-label">Notes</label>
                            <div class="col-sm-9">
                                <textarea type="text" nbInput fullWidth rows="8"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div class="col-sm-9" class="button">
                <button class="btn btnSave" type="button" nbButton status="success" nbTooltip="Save" nbTooltipPlacement="left" (click)="submit(addCustomerForm.value)"><i class="fas fa-save"></i><span>Save</span></button>
                <button class="btn btnCancel" type="button" nbButton status="danger" nbTooltip="Cancel" nbTooltipPlacement="right" [routerLink]="['/dashboard/customers/view-customers-page']"><i class="fas fa-times-circle"></i><span>Cancel</span></button>
            </div>
        </nb-card-body>
    </nb-card>
    `,
    styles: [`
    nb-layout-column {
        background-color: white;
    }
    p {
        font-size: 24px;
        margin: 10px 0;
    }
    nb-radio-group {
        justify-content: space-evenly;
    }
    form {
        margin-top: 1vw;
    }
    .button {
        float: right;
    }
    .btn {
        margin-left: 10px;
        width: 100px;
    }
    .avatar {
        padding: 0;
    }
    .avatar img {
        width: 140px;
        height: 140px;
        display: block;
        margin: auto;
    }
    .btnUploadAvatar {
        width: 140px;
        display: block;
        margin: auto;
    }
    .btn span {
        margin-left: 5px;
    }
    .fa-image {
        margin-right: 5px;
    }
    @media screen and (max-width: 992px) {
        .avatar img {
            clip-path: circle(70px at 50% 50%);
        }
        .btnUploadAvatar {
            margin-bottom: 20px;
        }
    }
    @media screen and (min-width: 576px) and (max-width: 991px) {
        nb-radio-group {
            display: block;
            margin: 0 auto 0 10vw;
        }
    }
    @media screen and (max-width: 575px) {
        .button {
            margin-right: 10px;
        }
    }
    `]
})
export class AddCustomersComponent implements OnInit {
    customerType: string = 'personal';
    gender: string = 'male';
    public addCustomerForm: FormGroup;
    public customer: Customer;
    @Output() response: EventEmitter<any> = new EventEmitter();
    constructor(
        private fb: FormBuilder,
        private store: Store<Customer>,
    ) { }
    ngOnInit() {
        this.createForm();
    }
    createForm = () => {
        this.addCustomerForm = this.fb.group({
            name: ['', Validators.required],
            phone: ['', Validators.required],
            id: [0, Validators.required],
        });
    }
    submit(item) {
        if (item.name !== '' && item.phone !== '') {
            this.store.dispatch(CustomersApiActions.addCustomer({ customer: item }));
            alert('Add new customer successfully!');
        } else {
            alert('Please fill in necessary field!');
        }
    }
}
