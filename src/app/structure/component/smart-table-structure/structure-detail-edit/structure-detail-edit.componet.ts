import { Component, OnInit, Input } from '@angular/core';
import { Structure } from '@app/@core/data/structure';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { StructureAddComponent } from '../add-structure/add-structure.component';

@Component({
  selector: 'ngx-structure-detail-edit',
  templateUrl: 'structure-detail-edit.componet.html',
  styles: [`
    button[nbButton]{
      display: block;
      float: right;
      margin-left: 15px;
    }
    `],
})
export class StructureDetailEditComponent implements OnInit {
  @Input() structure: Structure;
  constructor(
    private route: Router,
    private dialogService: NbDialogService,
  ) { }
  ngOnInit() {
  }
  back() {
    this.route.navigate(['dashboard/structure/structure']);
  }
  edit() {
    this.dialogService.open(StructureAddComponent, {
      context: {
        structure: this.structure
      }
    });
  }
}
