import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Dummy_Volunteer_Opps } from './assets/dummy-volunteer-opps';
import { VolunteerOppertunity } from './assets/VolunteerOppertunity.interface';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { OpportunityComponent } from "../opportunity/opportunity.component";


@Component({
  selector: 'app-opportunities',
  standalone: true,
  imports: [NgFor, MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule, OpportunityComponent],
  templateUrl: './opportunities.component.html',
  styleUrl: './opportunities.component.css'
})
export class OpportunitiesResultsComponent {
  oppertunities = Dummy_Volunteer_Opps
  displayedColumns: string[] = ['name', 'center', 'date', 'req_skill'];
  filteredOpportunities: VolunteerOppertunity[] = [...this.oppertunities];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this. filteredOpportunities = this.oppertunities.filter(oppertunity =>
      oppertunity.name.toLowerCase().includes(filterValue.toLowerCase()) ||
      oppertunity.center.toLowerCase().includes(filterValue.toLowerCase()) ||
      oppertunity.req_skill.toLowerCase().includes(filterValue.toLowerCase())
    );
    console.log(" Funciton triggered.")
  }
}
