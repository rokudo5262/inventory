import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeMaster } from '@appdata';

@Component({
    selector: 'ngx-code-master-page',
    templateUrl: './code-master-page.component.html',
    styleUrls: ['./code-master-page.component.scss'],
})
export class CodeMasterPageComponent implements OnInit {
    codeMasters$: Observable<CodeMaster[]>;
    @Input() codeMaster: CodeMaster;

    constructor(
    ) { }
    ngOnInit() { }
}
