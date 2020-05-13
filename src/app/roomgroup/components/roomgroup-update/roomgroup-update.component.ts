import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { RoomGroup } from '@app/@core/data/roomgroup';
import { RoomGroupsActions } from '@app/roomgroup/actions';

@Component({
  selector: 'ngx-roomgroup-update',
  templateUrl: './roomgroup-update.component.html',
  styleUrls: ['./roomgroup-update.component.scss'],
})
export class RoomGroupUpdateComponent implements OnInit {
  public updateRoomGroupForm: FormGroup;
  public roomgroup: RoomGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store<RoomGroup>,
    private dialogRef: NbDialogRef<RoomGroupUpdateComponent>
  ) { }

  ngOnInit() {
    this.createForm();
  }
  createForm = () => {
    this.updateRoomGroupForm = this.fb.group({
      id: [this.roomgroup ? this.roomgroup.id : '', Validators.required],
      name: [this.roomgroup ? this.roomgroup.name : '', Validators.required],
      note: [this.roomgroup ? this.roomgroup.note : '', Validators.required],
      status: [this.roomgroup ? this.roomgroup.status : '', Validators.required],
      deleted: [this.roomgroup ? this.roomgroup.deleted : '', Validators.required],
      createdBy: [this.roomgroup ? this.roomgroup.createdBy : '', Validators.required],
      lastUpdatedBy: [this.roomgroup ? this.roomgroup.lastUpdatedBy : '', Validators.required],
      // rowVersion: [this.roomgroup?this.roomgroup.rowVersion:[], Validators.required],
      createdDateTime: [this.roomgroup ? this.roomgroup.createdDateTime : '', Validators.required],
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
    this.store.dispatch(RoomGroupsActions.updateRoomGroup({ update: update }));
    this.close();
  }
}
