import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CodeMasterPageComponent } from './containers/code-master-page.component';
import { CodeDetailPageComponent } from './containers/code-detail/code-detail-page.component';
import { DetailComponent } from './containers/code-master/detail/detail.component';
import { CodeMasterComponent } from './code-master.component';

const routes: Routes = [{
  path: '', component: CodeMasterComponent,
  children: [
    { path: 'codeMaster', component: CodeMasterPageComponent },
    { path: 'codeMaster/:id', component: DetailComponent },
    { path: 'codeDetail', component: CodeDetailPageComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeMasterRoutingModule { }
