import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '@app/@core/data';
import { Store } from '@ngrx/store';
import { CustomersActions } from '@app/customers/actions';

@Component({
    selector: 'ngx-customers-add',
    templateUrl: './customers-add.component.html',
    styleUrls: ['./customers-add.component.scss'],
})
export class CustomersAddComponent implements OnInit {
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
            id: [0, Validators.required],
            name: ['', Validators.required],
            phone: ['', Validators.required],
        });
    }
    submit(item) {
        if (item.name !== '' && item.phone !== '') {
            this.store.dispatch(CustomersActions.addCustomer({ customer: item }));
            alert('Add new customer successfully!');
        } else {
            alert('Please fill in necessary field!');
        }
    }
}
