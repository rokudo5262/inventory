import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UomListComponent } from './containers/UOM-list/uom-list.component';
import { UomDetailComponent } from './containers/UOM-detail/uom-detail.component';

const routes: Routes = [
    { path: '', component: UomListComponent, },
    { path: 'uom/:id', component: UomDetailComponent, }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class UomsRoutingModule { }
