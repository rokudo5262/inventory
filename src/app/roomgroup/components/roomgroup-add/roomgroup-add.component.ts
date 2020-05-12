import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { RoomGroup } from '@app/@core/data/roomgroup';
import { RoomGroupsActions } from '@app/roomgroup/actions';

@Component({
  selector: 'ngx-roomgroup-add',
  templateUrl: './roomgroup-add.component.html',
  styles: [
    `@include nb-install-component() {
        input {
          width: 100%;
          margin-bottom: 20px;
        }
      }
    button[nbButton]{
      display: block;
      float: right;
      margin-left: 15px;
    }`]
})
export class RoomGroupAddComponent implements OnInit {
  public addRoomGroupForm: FormGroup;
  public roomgroup: RoomGroup;
  @Output() response: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private store: Store<RoomGroup>,
    private dialogRef: NbDialogRef<RoomGroupAddComponent>
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm = () => {
    this.addRoomGroupForm = this.fb.group({
      id: [0, Validators.required],
      name: ['', Validators.required],
      note: ['', Validators.required],
      status: ['on', Validators.required],
      createdBy: ['1', Validators.required],
      lastUpdatedBy: ['1', Validators.required],
      deleted: [false, Validators.required],
    });
  }
  close() {
    this.dialogRef.close();
  }
  submit(item) {
    if (item.name !== '' && item.note !== '' && item.status !== '') {
      this.store.dispatch(RoomGroupsActions.addRoomGroup({ roomgroup: item }));
    }
    this.close();
  }
}
