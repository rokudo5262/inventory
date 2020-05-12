import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'checkbox-view',
  template: `
  <nb-checkbox [checked]="this.checked" disabled></nb-checkbox>
  `,
})
export class SystemCheckboxComponent implements OnInit {
  @Input() value: any;

  checked: boolean;
  constructor() { }
  ngOnInit() {
    this.checked = this.value;
  }
}
