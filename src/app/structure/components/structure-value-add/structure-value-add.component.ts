import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Structure } from '@app/@core/data/structure';
import { StructureSelectors } from '@app/structure/selectors/structure.selectors';
import { StructureValue } from '@app/@core/data/structure-value';
import { StructuresActions, StructureValuesActions } from '@app/structure/actions';

@Component({
  selector: 'ngx-structure-value-add',
  templateUrl: './structure-value-add.component.html',
  styleUrls: ['./structure-value-add.component.scss'],
})
export class StructureValueAddComponent implements OnInit {
  structures$: Observable<Structure[]>;
  stForm = new FormControl('');
  stInfoForm: FormGroup;
  public addStructureValueForm: FormGroup;
  public structurevalue: StructureValue;
  @Output() response: EventEmitter<any> = new EventEmitter();
  stSelected: Structure = {
    id: null,
    companyCode: null,
    structureCode: null,
    structureName: null,
    level: null,
    type: null,
    parentCode: null,
    status: null,
    remark: null,
    source: null,
    delete1: null,
  };
  constructor(
    private fb: FormBuilder,
    private store: Store<Structure>,
    protected dialogRef: NbDialogRef<StructureValueAddComponent>,
    private store1: Store<StructureValue>,
  ) {
    this.structures$ = this.store.pipe(select(StructureSelectors.selectAllStructures));
  }
  ngOnInit() {
    this.store.dispatch(StructuresActions.getStructures({ structures: [] }));
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
      //   if(item.id != 0){
      //     const update = {
      //       id: item.id,
      //       changes: item
      //     }
      //     this.store1.dispatch(StructureValueApiActions.updateStructureValue({update: update}))
      // }
      // else{
      this.store1.dispatch(StructureValuesActions.addStructureValue({ structurevalue: item }));
    }
    this.close();
  }
}
