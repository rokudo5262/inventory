import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { RoomGroup } from '@app/@core/data/roomgroup';
import { RoomGroupsActions } from '@app/roomgroup/actions';

@Component({
  selector: 'ngx-roomgroup-delete',
  templateUrl: './roomgroup-delete.component.html',
  styleUrls: ['./roomgroup-delete.component.scss'],
})
export class RoomGroupDeleteComponent implements OnInit {
  public deleteRoomGroupForm: FormGroup;
  public roomgroup: RoomGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store<RoomGroup>,
    private dialogRef: NbDialogRef<RoomGroupDeleteComponent>
  ) { }

  ngOnInit() {
    this.createForm();
  }
  createForm = () => {
    this.deleteRoomGroupForm = this.fb.group({
      id: [this.roomgroup ? this.roomgroup.id : '', Validators.required],
      name: [this.roomgroup ? this.roomgroup.name : '', Validators.required],
      note: [this.roomgroup ? this.roomgroup.note : '', Validators.required],
      status: [this.roomgroup ? this.roomgroup.status : '', Validators.required],
      deleted: [this.roomgroup ? this.roomgroup.deleted : true, Validators.required],
    });

  }

  close() {
    this.dialogRef.close();
  }

  submit(item) {
    const update = {
      id: item.id,
      changes: item
    };
    this.store.dispatch(RoomGroupsActions.removeRoomGroup({ update: update }));
    this.close();
  }
}
