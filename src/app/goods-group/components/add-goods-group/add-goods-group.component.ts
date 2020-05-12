import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { GoodsGroup } from '@appdata';
import { AddGoodsGroupActions } from '../../actions';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ngx-add-goods-group',
  templateUrl: './add-goods-group.component.html',
  styleUrls: ['./add-goods-group.component.scss'],
})

export class AddGoodsGroupComponent implements OnInit {
  public addGoodsGroupForm: FormGroup;
  public goodsgroup: GoodsGroup;
  @Output() response: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private store: Store<GoodsGroup>,
    private ref: NbDialogRef<AddGoodsGroupComponent>,
    ) { }
  ngOnInit() {
    this.addForm();
  }
  addForm = () => {
    this.addGoodsGroupForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      id: [0, Validators.required],
    });
  }
  close() {
    this.ref.close();
  }
  submit(item) {
    if (item.code !== '' && item.name !== '') {
      this.store.dispatch(AddGoodsGroupActions.addGoodsGroup({ addgoodsgroup: item }));
    }
    this.close();
  }
}
