import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatesComponent } from './states.component';
import { CounterComponent } from './counter/counter.component';
import { NotFoundComponent } from '../miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: StatesComponent,
  children: [
    {
      path: 'counter',
      component: CounterComponent,
    },
    {
      path: '**',
      component: NotFoundComponent,
      data: { title: 'Not found' },
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatesRoutingModule { }
