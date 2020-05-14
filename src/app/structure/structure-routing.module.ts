import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StructureComponent } from './structure.component';
import {
  StructureDetailComponent
} from './components/structure-detail/structure-detail.component';
import {
  StructureValueDetailComponent
} from './components/structure-value-detail/structure-value-detail.component';
import { StructurePageComponent } from './containers/structure-page/structure-page.component';
import { StructureValuePageComponent } from './containers/structure-value-page/structure-value-page.component';

const routes: Routes = [{
  path: '',
  component: StructureComponent,
  children: [
    { path: 'structure', component: StructurePageComponent },
    { path: 'structure-value', component: StructureValuePageComponent },
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
