import { Component } from '@angular/core'
import { FirestoreService } from '@services/firestore.service'
import { DashboardService } from '../dashboard.service'

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent {
  constructor(
    public fss: FirestoreService,
    public dashboardService: DashboardService
  ) {}
}
