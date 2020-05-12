import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { Structure } from '@app/@core/data/structure';
import { StructureApiActions } from '@app/structure/actions';

@Component({
  selector: 'ngx-structure-add',
  templateUrl: './add-structure.component.html',
  styleUrls: ['./add-structure.component.scss'],
})
export class StructureAddComponent implements OnInit {
  public addStructureForm: FormGroup;
  public structure: Structure;
  @Output() response: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private store: Store<Structure>,
    protected dialogRef: NbDialogRef<StructureAddComponent>,
  ) { }

  ngOnInit() {
    this.createForm();
  }
  createForm = () => {
    this.addStructureForm = this.fb.group({
      id: [this.structure ? this.structure.id : 0, Validators.required],
      companyCode: [this.structure ? this.structure.companyCode : '', Validators.required],
      structureCode: [this.structure ? this.structure.structureCode : '', Validators.required],
      structureName: [this.structure ? this.structure.structureName : '', Validators.required],
      level: [this.structure ? this.structure.level : '', Validators.required],
      type: [this.structure ? this.structure.type : '', Validators.required],
      parentCode: [this.structure ? this.structure.parentCode : '', Validators.required],
      status: [this.structure ? this.structure.status : 'A', Validators.required],
      remark: [this.structure ? this.structure.remark : '', Validators.required],
      source: [this.structure ? this.structure.source : '', Validators.required],
      delete1: [this.structure ? this.structure.delete1 : false, Validators.required],
    });
  }
  close() {
    this.dialogRef.close();
  }
  submit(item) {
    if (item.companyCode !== '' &&
      item.structureCode !== '' &&
      item.structureName !== '' &&
      item.level !== 0 &&
      item.type !== '' &&
      item.parentCode !== '' &&
      item.remark !== '' &&
      item.source !== '') {
      if (item.id !== 0) {
        const update = {
          id: item.id,
          changes: item
        };
        this.store.dispatch(StructureApiActions.updateStructure({ update: update }));
      } else {
        this.store.dispatch(StructureApiActions.addStructure({ structure: item }));
      }
    }
    this.close();
  }
}
