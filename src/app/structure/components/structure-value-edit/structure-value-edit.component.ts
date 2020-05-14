import { Component, OnInit, Input } from '@angular/core';
import { StructureValue } from '@app/@core/data/structure-value';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { StructureValueDialogComponent } from '../structure-value-dialog/structure-value-dialog.component';

@Component({
  selector: 'ngx-structure-value-edit',
  templateUrl: 'structure-value-edit.component.html',
  styleUrls: ['./structure-value-edit.component.scss'],
})
export class StructureValueEditComponent implements OnInit {
  @Input() structurevalue: StructureValue;
  constructor(
    private route: Router,
    private dialogService: NbDialogService,
  ) { }
  ngOnInit() {
  }

  back() {
    this.route.navigate(['dashboard/structure/structure-value']);
  }

  edit() {
    this.dialogService.open(StructureValueDialogComponent, {
      context: {
        structurevalue: this.structurevalue
      }
    });
  }
}
