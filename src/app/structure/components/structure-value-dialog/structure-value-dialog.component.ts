import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Structure } from '@app/@core/data/structure';
import { StructureSelectors } from '@app/structure/selectors/structure.selectors';
import { StructureValuesActions } from '@app/structure/actions';
import { StructureValue } from '@app/@core/data/structure-value';

@Component({
  selector: 'ngx-structure-value-dialog',
  templateUrl: './structure-value-dialog.component.html',
  styleUrls: ['./structure-value-dialog.component.scss']
})
export class StructureValueDialogComponent implements OnInit {
  structures$: Observable<Structure[]>;
  public addStructureValueForm: FormGroup;
  public structurevalue: StructureValue;
  @Output() response: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    protected dialogRef: NbDialogRef<StructureValueDialogComponent>,
    private store: Store<StructureValue>,
  ) {
    this.structures$ = this.store.pipe(select(StructureSelectors.selectAllStructures));
  }

  ngOnInit() {
    // this.store.dispatch(StructureApiActions.getStructures({structures: []}));
    this.createForm();
  }
  createForm = () => {
    this.addStructureValueForm = this.fb.group({
      id: this.structurevalue ? this.structurevalue.id : [0, Validators.required],
      companyCode: [this.structurevalue ? this.structurevalue.companyCode : '', Validators.required],
      structureCode: [this.structurevalue ? this.structurevalue.structureCode : '', Validators.required],
      structureValueCode: [this.structurevalue ? this.structurevalue.structureValueCode : '', Validators.required],
      structureValueName: [this.structurevalue ? this.structurevalue.structureValueName : '', Validators.required],
      level: [this.structurevalue ? this.structurevalue.level : '', Validators.required],
      type: [this.structurevalue ? this.structurevalue.type : '', Validators.required],
      parentCode: [this.structurevalue ? this.structurevalue.parentCode : '', Validators.required],
      parentValue: [this.structurevalue ? this.structurevalue.parentValue : '', Validators.required],
      status: [this.structurevalue ? this.structurevalue.status : 'A', Validators.required],
      ordinal: [this.structurevalue ? this.structurevalue.ordinal : '', Validators.required],
      source: [this.structurevalue ? this.structurevalue.source : '', Validators.required],
      delete2: [this.structurevalue ? this.structurevalue.delete2 : false, Validators.required],
    });
  }
  close() {
    this.dialogRef.close();
  }
  submit(item) {
    if (item.companyCode !== '' &&
      item.structureCode !== '' &&
      item.structureValueCode !== '' &&
      item.structureValueName !== '' &&
      item.level !== '' &&
      item.type !== '' &&
      item.parentCode !== '' &&
      item.parentValue !== '' &&
      item.ordinal !== '' &&
      item.source !== '') {
      if (item.id !== 0) {
        const update = {
          id: item.id,
          changes: item
        };
        this.store.dispatch(StructureValuesActions.updateStructureValue({ update: update }));
      }
    }
    this.close();
  }
}
