import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LocationListComponent } from '@app/locations/components/location-list/location-list.component';
import { LocationDetailComponent } from '@app/locations/components/location-detail/location-detail.component';
import { LocationAddComponent } from './components/location-add/location-add.component';

const routes: Routes = [
  { path: 'library', component: LocationListComponent },
  { path: 'location/add', component: LocationAddComponent },
  { path: 'location/:id', component: LocationDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
