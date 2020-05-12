import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { GoodsGroupPageComponent } from './components/goods-group-page.component';

const routes: Routes = [{
      path: '',
      component: GoodsGroupPageComponent,
      children: [
          { path: '', redirectTo: 'goods-group', pathMatch: 'full' },
      ],
  },
    {
      path: '**',
      component: GoodsGroupPageComponent,
    },
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoodsGroupRoutingModule {}
