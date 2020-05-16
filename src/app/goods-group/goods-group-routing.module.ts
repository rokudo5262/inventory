import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { GoodsGroupPageComponent } from './containers/goods-group-page/goods-group-page.component';
import { GoodsGroupDetailComponent } from './components/goods-group-detail/goods-group-detail.component';
import { GoodsGroupComponent } from './goods-group.component';

const routes: Routes = [{
      path: '',
      component: GoodsGroupComponent,
      children: [
          { path: 'library', component: GoodsGroupPageComponent },
          { path: 'goods-group/:id', component: GoodsGroupDetailComponent },
      ],
  },
  { path: '**', component: GoodsGroupPageComponent },
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoodsGroupRoutingModule {}
