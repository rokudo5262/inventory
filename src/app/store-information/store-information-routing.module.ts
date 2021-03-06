import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StoreInformationComponent } from './store-information.component';
import { StoreListComponent } from './containers/store-list/store-list.component';
import { StoreDetailComponent } from './components/store-detail/store-detail.component';

const routes: Routes = [{
  path: '',
  component: StoreInformationComponent,
  children: [
    { path: 'library', component: StoreListComponent },
    { path: 'store-information/:id', component: StoreDetailComponent },
    { path: '', redirectTo: 'library', pathMatch: 'full' },
  ],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreInformationRoutingModule {
}
