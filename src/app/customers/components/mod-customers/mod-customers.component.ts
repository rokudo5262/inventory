import { Component } from '@angular/core';

@Component({
    selector: 'ngx-mod-customers',
    template: `
        <nb-card>
            <nb-tabset fullWidth>
                <nb-tab tabTitle="Information">
                    <ngx-tab-customer-info></ngx-tab-customer-info>
                </nb-tab>
                <nb-tab tabTitle="Debt">
                    <ngx-tab-customer-debt></ngx-tab-customer-debt>
                </nb-tab>
                <nb-tab tabTitle="History">

                </nb-tab>
            </nb-tabset>
        </nb-card>
    `,
})
export class ModCustomersComponent {

}
