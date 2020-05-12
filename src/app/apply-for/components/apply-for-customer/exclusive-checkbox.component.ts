import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'checkbox-view',
  template: `
  <nb-checkbox [checked]="this.checked"></nb-checkbox>
  `,
})
export class ExclusiveCheckboxComponent implements OnInit {
  @Input() value: any;
  checked: boolean;
  constructor() { }
  ngOnInit() {
    this.checked = this.value;
  }
}
