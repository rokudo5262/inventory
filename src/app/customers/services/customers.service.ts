import { Injectable } from '@angular/core';
import { Customer } from '@app/@core/data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerData } from '@app/@core/mock/customers';

@Injectable({
    providedIn: 'root',
})

export class CustomersService {
    API_PATH = 'http://localhost:5000/api/customers';
    options = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };
    customerCookieString = 'CUSTOMER_COOKIES';
    customer: Customer;
    customers: Customer[];
    constructor(
        private http: HttpClient,
    ) { }
    getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.API_PATH, this.options);
    }
    addCustomer(customer: Customer) {
        return this.http.post<Customer>(this.API_PATH, customer, this.options);
    }
    updateCustomer(changes: Partial<Customer>) {
        return this.http.put<Customer>(this.API_PATH + '/' + changes.id, changes, this.options);
    }
    removeCustomer(id: number) {
        return this.http.delete<Customer>(this.API_PATH + '/' + id, this.options);
    }
    uploadCustomer(item) {
        this.customer = CustomerData.find(x => x.id === item.id);
        if (this.customer) {
            this.customer.name = item.name;
            this.customer.phone = item.phone;
        } else {
            if (this.customer.id === 0) {
                this.customer.id = CustomerData[CustomerData.length - 1].id + 1;
            }
            this.customer = {
                id: item.id,
                name: item.name,
                phone: item.phone,
            };
            CustomerData.push(this.customer);
        }
    }
}
