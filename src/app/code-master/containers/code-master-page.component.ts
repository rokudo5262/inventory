import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeMaster } from '@appdata';

@Component({
    templateUrl: './code-master-page.component.html',
    styles: [`
    .title{
        font-size: 30px;
        margin: auto 0;
    }
    .row{
        margin: 0 ;
        justify-content: space-between;
    }
    button[nbButton]{
        margin: 0 5px;
    }
    `],
})
export class CodeMasterPageComponent implements OnInit {
    codeMasters$: Observable<CodeMaster[]>;
    @Input() codeMaster: CodeMaster;

    constructor(
    ) { }
    ngOnInit() { }
}
