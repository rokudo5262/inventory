import { Component, OnInit, Input } from '@angular/core';
import { StoreInformation } from '@app/@core/data/store';

@Component({
  selector: 'ngx-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.scss'],
})
export class StoreDetailComponent implements OnInit {
  @Input() storeinformation: StoreInformation;
  constructor() { }
  ngOnInit() {
  }
}
