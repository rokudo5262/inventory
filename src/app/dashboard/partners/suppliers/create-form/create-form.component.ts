import { Component } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent {
  constructor(public windowRef: NbWindowRef) {}
  close() {
    this.windowRef.close();
  }
}
