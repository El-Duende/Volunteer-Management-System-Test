import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { OpportunitiesManagementService } from './opportunities-management.service';
import { NewOpportunityComponent } from './new-opportunity/new-opportunity.component';
import { NgIf } from '@angular/common';
import { Opportunity } from './opportunity/opportunity.model';


@Component({
  selector: 'app-opportunities-management',
  standalone: true,
  imports: [OpportunityComponent,NewOpportunityComponent, FormsModule,NgIf],
  templateUrl: './opportunities-management.component.html',
  styleUrl: './opportunities-management.component.css'
})
export class OpportunitiesManagementComponent {
  private opportunitiesServices = inject(OpportunitiesManagementService)
  enteredSearch = '';
  selectedFilter = '';

  isAddingOpportunity = false;
  opportunities: Opportunity[]=[];
  locationList: string[] = [];

  ngOnInit(){
    this.getOpportunities();
    this.getLocationList();
  }
  getOpportunities(){
    this.opportunities = this.opportunitiesServices.getOpportunites(this.enteredSearch, this.selectedFilter);
  }
  
  getLocationList(){
    this.locationList = this.opportunitiesServices.getLocationList();
  }

  onSearchChange(){
    this.getOpportunities();
  }

  onFilterChange(event: Event){
    let filterElement = event.target as HTMLSelectElement;
    this.selectedFilter = filterElement.value;
    this.getOpportunities()
  }

  onCloseAddOpportunity(){
    this.isAddingOpportunity = false;
    this.getLocationList();
    this.getOpportunities();
  }

  onStartAddingOpportunity(){
    this.isAddingOpportunity = true;
  }

  onRemoveOpportunity(opportunityId: string){
    this.opportunitiesServices.removeOpportunity(opportunityId);
    this.getOpportunities();
    this.getLocationList();
  }

}
