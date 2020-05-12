import { Component, OnInit, Input } from '@angular/core';
import { StructureValue } from '@app/@core/data/structure-value';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { StructureValueEditDialogComponent } from '../edit-structure-value-dialog/edit-strucrure-value.component';

@Component({
  selector: 'ngx-structure-value-detail-edit',
  templateUrl: 'structure-value-detail-edit.componet.html',
  styles: [`
    button[nbButton]{
      display: block;
      float: right;
      margin-left: 15px;
    }
    `],
})
export class StructureValueDetailEditComponent implements OnInit {
  @Input() structurevalue: StructureValue;
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
    this.dialogService.open(StructureValueEditDialogComponent, {
      context: {
        structurevalue: this.structurevalue
      }
    });
  }
}
