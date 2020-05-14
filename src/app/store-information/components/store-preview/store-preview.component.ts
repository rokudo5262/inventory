import { Component, OnInit, Input } from '@angular/core';
import { StoreInformation } from '@app/@core/data/store';

@Component({
  selector: 'ngx-store-preview',
  templateUrl: './store-preview.component.html',
  styleUrls: ['./store-preview.component.scss'],
})
export class StorePreviewComponent implements OnInit {
  @Input() storeinformation: StoreInformation;
  constructor() { }
  ngOnInit() {
  }
}
