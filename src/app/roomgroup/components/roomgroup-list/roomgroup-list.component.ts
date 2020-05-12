import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Update } from '@ngrx/entity';
import { NbDialogService } from '@nebular/theme';
import { RoomGroupsActions } from '@app/roomgroup/actions';
import { RoomGroup } from '@app/@core/data/roomgroup';
import { RoomGroupSelectors } from '@app/roomgroup/selectors';
import { RoomGroupAddComponent } from '../roomgroup-add/Roomgroup-add.component';

@Component({
  selector: 'ngx-roomgroup-smart-table',
  templateUrl: './roomgroup-list.component.html',
  styleUrls: ['./roomgroup-list.component.scss'],

})
export class RoomGroupListComponent implements OnInit {
  settings = {
    hideSubHeader: false,
    // selectMode: 'multi',
    // edit: {
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    //   confirmSave: true
    // },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        filter: true,
        type: 'number',
        editable: false,
      },
      name: {
        title: 'Name',
        type: 'string',
        editable: true,
      },
      note: {
        title: 'Note',
        type: 'string',
        editable: true,
      },
      status: {
        title: 'Status',
        type: 'string',
        editable: false,
      },
    },
    actions: {
      add: false,
      delete: true,
      edit: false,
    }
  };
  roomgroups$: Observable<RoomGroup[]>;
  dialogRef: any;
  constructor(
    private store: Store<RoomGroup>,
    private route: Router,
    private dialogService: NbDialogService,
  ) {
    this.roomgroups$ = this.store.pipe(select(RoomGroupSelectors.selectAllRoomGroups));
  }
  ngOnInit() {
    this.store.dispatch(RoomGroupsActions.loadRoomGroups({ roomgroups: [] }));
  }
  open() {
    this.dialogService.open(RoomGroupAddComponent);
  }
  navigateToRoomGroup(event) {
    this.route.navigate(['dashboard/roomgroups/roomgroup', event.data.id]);
  }
  edit(event) {
    if (window.confirm('Are you sure you want to edit roomgroup :' + event.data.id + '?')) {
      const changes = event.newData;
      const update: Update<RoomGroup> = {
        id: event.data.id,
        changes: changes
      };
      this.store.dispatch(RoomGroupsActions.updateRoomGroup({ update: update }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  delete(event) {
    if (window.confirm('Are you sure you want to delete roomgroup:' + event.data.id + '?')) {
      if (event.data.status === 'off') {
        this.store.dispatch(RoomGroupsActions.deleteRoomGroup({ id: event.data.id }));
        event.confirm.resolve();
      } else {
        window.alert('Roomgroup status is ' + event.data.status + ' cannot delete');
        event.confirm.reject();
      }
    } else {
      event.confirm.reject();
    }
  }
  add(event) {
    if (window.confirm('Are you sure you want to add roomgroup:' + event.data.id + '?')) {
      this.store.dispatch(RoomGroupsActions.addRoomGroup({ roomgroup: event }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  close() {
    this.dialogRef.close();
  }
}
