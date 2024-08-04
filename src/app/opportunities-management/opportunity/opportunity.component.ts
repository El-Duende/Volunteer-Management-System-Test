import { Component, Input, inject} from '@angular/core';
import { Opportunity } from './opportunity.model';
import { OpportunitiesManagementService } from '../opportunities-management.service';

@Component({
  selector: 'app-opportunity',
  standalone: true,
  imports: [],
  templateUrl: './opportunity.component.html',
  styleUrl: './opportunity.component.css'
})
export class OpportunityComponent {
  @Input ({required: true}) opportunity!: Opportunity;
  private OpportunitiesManagementService = inject(OpportunitiesManagementService)

  onRemoveOpportunity(){
    this.OpportunitiesManagementService.removeOpportunity(this.opportunity.opportunityId);
  }
}
