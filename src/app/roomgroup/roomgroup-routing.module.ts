import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomGroupComponent } from './roomgroup.component';
import { RoomGroupPageComponent } from './containers/roomgroup-page/roomgroup-page.component';
import { RoomGroupDetailComponent } from './components/roomgroup-detail/roomgroup-detail.component';
const routes: Routes = [{
  path: '',
  component: RoomGroupComponent,
  children: [
    { path: 'library', component: RoomGroupPageComponent },
    { path: 'roomgroup/:id', component: RoomGroupDetailComponent },
    { path: '', redirectTo: 'library', pathMatch: 'full' },
  ],
}];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class RoomGroupRoutingModule {
}
