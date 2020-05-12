import { Observable } from 'rxjs';
import { OnInit, Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { SalesTeam } from '@app/@core/data/salesteam';
import { SalesTeamAddComponent } from '../../components/salesteam-add/salesteam-add.component';
import { Router } from '@angular/router';

@Component({
    selector: 'ngx-salesteam-page',
    templateUrl: './salesteam-page.component.html',
    styleUrls: ['./salesteam-page.component.scss']
})

export class SalesTeamPageComponent implements OnInit {
    salesteams$: Observable<SalesTeam[]>;
    constructor(
        private route: Router,
        private dialogService: NbDialogService,
    ) { }
    open() {
        this.dialogService.open(SalesTeamAddComponent);
    }
    navigate() {
        this.route.navigate(['dashboard/salesteambins/salesteambin']);
    }
    ngOnInit() {
    }
}
