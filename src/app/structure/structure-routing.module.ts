import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StructureComponent } from './structure.component';
import { StructureInformationComponent } from './container/structure/structure.component';
import {
  StructureValueInformationComponent
} from './container/structure-value/structure-value.component';
import {
  StructureDetailComponent
} from './component/smart-table-structure/structure-detail/structure-detail.component';
import {
  StructureValueDetailComponent
} from './component/smart-table-structure-value/structure-value-detail/structure-value-detail.componet';

const routes: Routes = [{
  path: '',
  component: StructureComponent,
  children: [
    { path: 'structure', component: StructureInformationComponent },
    { path: 'structure-value', component: StructureValueInformationComponent },
    { path: 'structure/:id', component: StructureDetailComponent },
    { path: 'structure-value/:id', component: StructureValueDetailComponent }
  ],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StructureRoutingModule {
}
