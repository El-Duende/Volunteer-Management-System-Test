import { Component,Output, EventEmitter,inject,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Opportunity, Skill } from '../opportunity/opportunity.model';
import { NewOppportunityData } from '../opportunity/opportunity.model';
import { OpportunitiesManagementService } from '../opportunities-management.service';

@Component({
  selector: 'app-edit-opportunity',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-opportunity.component.html',
  styleUrl: './edit-opportunity.component.css'
})
export class EditOpportunityComponent {
  @Input({required: true}) opertuntity!: Opportunity;
  @Output() close = new EventEmitter();

  enteredTitle = '';
  enteredLocation = '';
  enteredDate = '';
  enteredReqSkills = '';

  private taskService = inject(OpportunitiesManagementService)
  
  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.taskService.editOpportunity( this.opertuntity.opportunityId,{
      title: this.enteredTitle,
      location: this.enteredLocation,
      date: this.enteredDate,
      reqSkills: this.enteredReqSkills
    });
    this.close.emit();
  }

  getSkillString(skills: Skill[]){
    let temp = '';
    skills.forEach((skill, index)=>{
      temp += skill.value;
      if(index < skills.length -1){
        temp += ', ';
      }
    });
    return temp;
  }
}
