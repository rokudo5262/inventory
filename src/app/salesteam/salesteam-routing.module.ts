import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesTeamComponent } from './salesteam.component';
import { SalesTeamDetailComponent } from './components/salesteam-detail/salesteam-detail.component';
import { SalesTeamPageComponent } from './containers/salesteam-page/salesteam-page.component';
import { SalesTeamBinPageComponent } from './containers/salesteambin-page/salesteambin-page.component';
import { SalesTeamBinDetailComponent } from './components/salesteambin-detail/salesteambin-detail.component';
const routes: Routes = [{
  path: '',
  component: SalesTeamComponent,
  children: [
    { path: 'salesteam', component: SalesTeamPageComponent },
    { path: 'salesteam/:salesTeamCode', component: SalesTeamDetailComponent },
    { path: 'salesteambin', component: SalesTeamBinPageComponent },
    { path: 'salesteambin/:lineId', component: SalesTeamBinDetailComponent },
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
export class SalesTeamRoutingModule {
}
