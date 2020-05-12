import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StoreInformation } from '@app/@core/data/store';
import { NbDialogRef } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { StoresApiActions } from '@app/store-information/actions';

@Component({
  selector: 'ngx-store-add',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.scss'],
})
export class StoreAddComponent implements OnInit {
  public addStoreForm: FormGroup;
  public storeinformation: StoreInformation;
  @Output() response: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private store: Store<StoreInformation>,
    protected dialogRef: NbDialogRef<StoreAddComponent>,
  ) { }
  ngOnInit() {
    this.createForm();
  }
  createForm = () => {
    this.addStoreForm = this.fb.group({
      id: [0, Validators.required],
      codeStore: ['', Validators.required],
      codeLocation: ['', Validators.required],
      codeStaff: ['', Validators.required],
      openTime: [null, Validators.required],
      closeTime: [null, Validators.required],
      address: ['', Validators.required],
    });
  }
  close() {
    this.dialogRef.close();
  }
  submit(item) {
    if (
      item.codeStore !== 0 &&
      item.codeLocation !== 0 &&
      item.codeStaff !== 0 &&
      item.openTime !== { hours: 1, minutes: 20 } &&
      item.closeTime !== { hours: 1, minutes: 20 } &&
      item.address !== '') {
      this.store.dispatch(StoresApiActions.addStore({ storeinformation: item }));
    }
    this.close();
  }
}
