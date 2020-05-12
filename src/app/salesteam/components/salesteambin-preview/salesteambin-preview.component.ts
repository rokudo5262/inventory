import { Component, Input, OnInit } from '@angular/core';
import { SalesTeamBin } from '@app/@core/data/salesteambin';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { SalesTeamBinUpdateComponent } from '../salesteambin-update/salesteambin-update.component';
import { SalesTeamBinDeleteComponent } from '../salesteambin-delete/salesteambin-delete.component';
@Component({
  selector: 'ngx-salesteambin-preview',
  templateUrl: './salesteambin-preview.component.html',
})

export class SalesTeamBinPreviewComponent implements OnInit {
  @Input() salesteambin: SalesTeamBin;

  constructor(
    private route: Router,
    private dialogService: NbDialogService,
  ) { }

  ngOnInit() {
  }
  back() {
    this.route.navigate(['dashboard/salesteambins/salesteambin']);
  }

  edit() {
    this.dialogService.open(SalesTeamBinUpdateComponent, {
      context: {
        salesteambin: this.salesteambin
      }
    });
  }
  delete() {
    this.dialogService.open(SalesTeamBinDeleteComponent, {
      context: {
        salesteambin: this.salesteambin
      }
    });
  }
}
