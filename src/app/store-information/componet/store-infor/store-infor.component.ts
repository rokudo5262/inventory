import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StoreInformation } from '@app/@core/data/store';

@Component({
  selector: 'ngx-store-infor1',
  templateUrl: './store-infor.component.html',
  styleUrls: ['./store-infor.component.scss']
})
export class StoreInfor1Component implements OnInit {
  @Input() storeinformations: StoreInformation[];
  @Output() storeSelected: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  navigateToStore(id: number) {
    this.storeSelected.emit(id);
  }
}
