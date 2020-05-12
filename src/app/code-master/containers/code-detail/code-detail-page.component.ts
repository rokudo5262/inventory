import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeDetail } from '@app/@core/data';

@Component({
    templateUrl: './code-detail-page.component.html',

})

export class CodeDetailPageComponent implements OnInit {
    codeDetails$: Observable<CodeDetail[]>;
    constructor(
    ) { }
    ngOnInit() { }
}
