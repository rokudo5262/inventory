import { OnInit, Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { RoomGroupAddComponent } from '../../components/roomgroup-add/Roomgroup-add.component';

@Component({
    selector: 'ngx-roomgroup-page',
    templateUrl: './roomgroup-page.component.html',
    styleUrls: ['./roomgroup-page.component.scss'],
})

export class RoomGroupPageComponent implements OnInit {
    constructor(
        private dialogService: NbDialogService,
    ) { }
    open() {
        this.dialogService.open(RoomGroupAddComponent);
    }
    ngOnInit() {
    }
}
