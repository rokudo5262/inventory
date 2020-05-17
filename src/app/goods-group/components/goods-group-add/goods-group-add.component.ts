import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { GoodsGroup } from '@appdata';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { GoodsGroupActions } from '@app/goods-group/actions';

@Component({
  selector: 'ngx-goods-group-add',
  templateUrl: './goods-group-add.component.html',
  styleUrls: ['./goods-group-add.component.scss'],
})

export class GoodsGroupAddComponent implements OnInit {
  public addGoodsGroupForm: FormGroup;
  public goodsgroup: GoodsGroup;
  @Output() response: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private store: Store<GoodsGroup>,
    private ref: NbDialogRef<GoodsGroupAddComponent>,
  ) { }
  ngOnInit() {
    this.addForm();
  }
  addForm = () => {
    this.addGoodsGroupForm = this.fb.group({
      id: [0, Validators.required],
      code: ['', Validators.required],
      name: ['', Validators.required],
      deleted: [false, Validators.required],
      createdBy: ['', Validators.required],
      lastUpdatedBy: ['', Validators.required],
    });
  }
  close() {
    this.ref.close();
  }
  submit(item) {
    if (item.code !== '' && item.name !== '') {
      this.store.dispatch(GoodsGroupActions.addGoodsGroup({ addgoodsgroup: item }));
    }
    this.close();
  }
}
