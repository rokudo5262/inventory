import { Component, Input, OnInit } from '@angular/core';
import { RoomGroup } from '@app/@core/data/roomgroup';
import { NbDialogService } from '@nebular/theme';
import { Router } from '@angular/router';
import { RoomGroupUpdateComponent } from '../roomgroup-update/roomgroup-update.component';
import { Store } from '@ngrx/store';
import { RoomGroupsActions } from '@app/roomgroup/actions';
@Component({
  selector: 'ngx-roomgroup-preview',
  templateUrl: './roomgroup-preview.component.html',
  styleUrls: ['./roomgroup-preview.component.scss'],
})

export class RoomGroupPreviewComponent implements OnInit {
  @Input() roomgroup: RoomGroup;

  constructor(
    private route: Router,
    private dialogService: NbDialogService,
    private store: Store<RoomGroup>,
  ) { }

  ngOnInit() {
  }

  edit() {
    this.dialogService.open(RoomGroupUpdateComponent, {
      context: {
        roomgroup: this.roomgroup
      }
    });
  }
  delete(item) {
    this.store.dispatch(RoomGroupsActions.deleteRoomGroup({ id: item.id }));
    this.back();
  }
  back() {
    this.route.navigate(['dashboard/roomgroups/library']);
  }
}
