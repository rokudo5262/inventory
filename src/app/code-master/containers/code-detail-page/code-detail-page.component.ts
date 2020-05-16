import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeDetail } from '@app/@core/data';

@Component({
    selector: 'ngx-detail-page',
    templateUrl: 'code-detail-page.component.html',
    styleUrls: ['./code-detail-page.component.scss'],
})

export class CodeDetailPageComponent implements OnInit {
    codeDetails$: Observable<CodeDetail[]>;
    constructor(
    ) { }
    ngOnInit() { }
}
