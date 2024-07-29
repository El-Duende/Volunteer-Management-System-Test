import { Component } from '@angular/core';
import { OpportunitiesActionMenuComponent } from "./opportunities-action-menu/opportunities-action-menu.component";
import { OpportunitiesResultsComponent } from './opportunities/opportunities.component';

@Component({
  selector: 'app-opportunities-management',
  standalone: true,
  imports: [OpportunitiesActionMenuComponent, OpportunitiesResultsComponent],
  templateUrl: './opportunities-management.component.html',
  styleUrl: './opportunities-management.component.css'
})
export class OpportunitiesManagementComponent {
}
