import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { GoodsGroup } from '@appdata';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { GoodsGroupActions } from '@app/goods-group/actions';

@Component({
  selector: 'ngx-goods-group-update',
  templateUrl: './goods-group-update.component.html',
  styleUrls: ['./goods-group-update.component.scss'],
})

export class GoodsGroupUpdateComponent implements OnInit {
  public updateGoodsGroupForm: FormGroup;
  public goodsgroup: GoodsGroup;
  @Output() response: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private store: Store<GoodsGroup>,
    private ref: NbDialogRef<GoodsGroupUpdateComponent>,
  ) { }
  ngOnInit() {
    this.updateForm();
  }
  updateForm = () => {
    this.updateGoodsGroupForm = this.fb.group({
      id: [this.goodsgroup ? this.goodsgroup.id : '', Validators.required],
      code: [this.goodsgroup ? this.goodsgroup.code : '', Validators.required],
      name: [this.goodsgroup ? this.goodsgroup.name : '', Validators.required],
      deleted: [this.goodsgroup ? this.goodsgroup.deleted : '', Validators.required],
      createdBy: [this.goodsgroup ? this.goodsgroup.createdBy : '', Validators.required],
      lastUpdatedBy: [this.goodsgroup ? this.goodsgroup.lastUpdatedBy : '', Validators.required],
    });
  }
  close() {
    this.ref.close();
  }
  submit(item) {
    if (item.code !== '' && item.name !== '') {
      const update = {
        id: item.id,
        changes: item
      };
      this.store.dispatch(GoodsGroupActions.updateGoodsGroup({
        update: update
      }));
    }
    this.close();
  }
}
