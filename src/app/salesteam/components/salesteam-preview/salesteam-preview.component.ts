import { Component, Input, OnInit } from '@angular/core';
import { SalesTeam } from '@app/@core/data/salesteam';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { SalesTeamUpdateComponent } from '../salesteam-update/salesteam-update.component';
import { SalesTeamDeleteComponent } from '../salesteam-delete/salesteam-delete.component';
@Component({
  selector: 'ngx-salesteam-preview',
  templateUrl: './salesteam-preview.component.html',
})

export class SalesTeamPreviewComponent implements OnInit {
  @Input() salesteam: SalesTeam;

  constructor(
    private route: Router,
    private dialogService: NbDialogService,
  ) { }

  ngOnInit() {
  }
  back() {
    this.route.navigate(['dashboard/salesteams/salesteam']);
  }

  edit() {
    this.dialogService.open(SalesTeamUpdateComponent, {
      context: {
        salesteam: this.salesteam
      }
    });
  }
  delete() {
    this.dialogService.open(SalesTeamDeleteComponent, {
      context: {
        salesteam: this.salesteam
      }
    });
  }
}
