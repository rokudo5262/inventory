import { Component, OnInit, Input } from '@angular/core';
import { Structure } from '@app/@core/data/structure';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { StructureAddComponent } from '../structure-add/structure-add.component';

@Component({
  selector: 'ngx-structure-edit',
  templateUrl: './structure-edit.component.html',
  styleUrls: ['./structure-edit.component.scss'],
})
export class StructureEditComponent implements OnInit {
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
