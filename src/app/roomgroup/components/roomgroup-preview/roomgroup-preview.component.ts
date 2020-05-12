import { Component, Input, OnInit } from '@angular/core';
import { RoomGroup } from '@app/@core/data/roomgroup';
import { NbDialogService } from '@nebular/theme';
import { Router } from '@angular/router';
import { RoomGroupUpdateComponent } from '../roomgroup-update/roomgroup-update.component';
import { RoomGroupDeleteComponent } from '../roomgroup-delete/roomgroup-delete.component';
@Component({
  selector: 'ngx-roomgroup-preview',
  templateUrl: './roomgroup-preview.component.html',
})

export class RoomGroupPreviewComponent implements OnInit {
  @Input() roomgroup: RoomGroup;

  constructor(
    private route: Router,
    private dialogService: NbDialogService,
  ) { }

  ngOnInit() {
  }
  back() {
    this.route.navigate(['dashboard/roomgroups/library']);
  }

  edit() {
    this.dialogService.open(RoomGroupUpdateComponent, {
      context: {
        roomgroup: this.roomgroup
      }
    });
  }
  delete() {
    this.dialogService.open(RoomGroupDeleteComponent, {
      context: {
        roomgroup: this.roomgroup
      }
    });
  }
}
