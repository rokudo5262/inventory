import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CodeMasterPageComponent } from './containers/code-master-page/code-master-page.component';
import { CodeDetailPageComponent } from './containers/code-detail-page/code-detail-page.component';
import { CodeMasterComponent } from './code-master.component';
import { CodeMasterDetailComponent } from './components/code-master-detail/code-master-detail.component';
import { CodeDetailDetailComponent } from './components/code-detail-detail/code-detail-detail.component';

const routes: Routes = [{
  path: '', component: CodeMasterComponent,
  children: [
    { path: 'codemaster', component: CodeMasterPageComponent },
    { path: 'codemaster/:id', component: CodeMasterDetailComponent },
    { path: 'codedetail', component: CodeDetailPageComponent },
    { path: 'codedetail/:id', component: CodeDetailDetailComponent },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeMasterRoutingModule { }
