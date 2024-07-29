import { Component, Input } from '@angular/core';
import { VolunteerOppertunity } from '../opportunities/assets/VolunteerOppertunity.interface';

@Component({
  selector: 'app-opportunity',
  standalone: true,
  imports: [],
  templateUrl: './opportunity.component.html',
  styleUrl: './opportunity.component.css'
})
export class OpportunityComponent {
  @Input({required: true}) oppertunity!: VolunteerOppertunity;

}
