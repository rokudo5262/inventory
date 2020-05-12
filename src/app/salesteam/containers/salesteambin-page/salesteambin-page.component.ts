import { Observable } from 'rxjs';
import { OnInit, Component, Input } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { SalesTeamBin } from '@app/@core/data/salesteambin';
import { SalesTeamBinAddComponent } from '../../components/salesteambin-add/salesteambin-add.component';
import { SalesTeam } from '@app/@core/data/salesteam';
import { Router } from '@angular/router';

@Component({
    selector: 'ngx-salesteambin-page',
    templateUrl: './salesteambin-page.component.html',
    styleUrls: ['./salesteambin-page.component.scss']
})

export class SalesTeamBinPageComponent implements OnInit {
    @Input() salesteams: SalesTeam[];
    salesteambins$: Observable<SalesTeamBin[]>;
    constructor(
        private route: Router,
        private dialogService: NbDialogService,
    ) { }
    open() {
        this.dialogService.open(SalesTeamBinAddComponent);
    }
    navigate() {
        this.route.navigate(['dashboard/salesteams/salesteam']);
    }
    ngOnInit() {
    }
}
