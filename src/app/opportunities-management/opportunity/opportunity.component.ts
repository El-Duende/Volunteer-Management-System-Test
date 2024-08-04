import { Component, Input, Output, inject} from '@angular/core';
import { Opportunity } from './opportunity.model';
import { OpportunitiesManagementService } from '../opportunities-management.service';
import { EditOpportunityComponent } from '../edit-opportunity/edit-opportunity.component';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-opportunity',
  standalone: true,
  imports: [EditOpportunityComponent],
  templateUrl: './opportunity.component.html',
  styleUrl: './opportunity.component.css'
})
export class OpportunityComponent {
  @Input ({required: true}) opportunity!: Opportunity;
  private OpportunitiesManagementService = inject(OpportunitiesManagementService)
  isEditingOpportunity = false;

  onRemoveOpportunity(){
    this.OpportunitiesManagementService.removeOpportunity(this.opportunity.opportunityId);
  }

  onEditOpportunity(){
    this.isEditingOpportunity = true;
  }
  onCloseEditOpportunity(){
    this.isEditingOpportunity =false;
  }
}
