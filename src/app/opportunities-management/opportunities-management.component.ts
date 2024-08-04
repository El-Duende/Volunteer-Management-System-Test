import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { OpportunitiesManagementService } from './opportunities-management.service';
import { NewOpportunityComponent } from './new-opportunity/new-opportunity.component';


@Component({
  selector: 'app-opportunities-management',
  standalone: true,
  imports: [OpportunityComponent,NewOpportunityComponent, FormsModule],
  templateUrl: './opportunities-management.component.html',
  styleUrl: './opportunities-management.component.css'
})
export class OpportunitiesManagementComponent {
  private opportunitiesServices = inject(OpportunitiesManagementService)
  enteredSearch = '';
  isAddingOpportunity = false;

  get filteredOpportunities(){
    return this.opportunitiesServices.getOpportunites(this.enteredSearch);
  }

  onCloseAddOpportunity(){
    this.isAddingOpportunity = false;
  }

  onStartAddingOpportunity(){
    this.isAddingOpportunity = true;
  }

}
