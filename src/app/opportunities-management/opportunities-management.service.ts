import { Injectable } from "@angular/core";
import { NewOppportunityData } from "./opportunity/opportunity.model";
import { Skill } from "./opportunity/opportunity.model";

 @Injectable({providedIn: 'root'})
 export class OpportunitiesManagementService{
    private nextOpportunityIdNum = 6;
    private freedOppotunityIdNums = [];
    private opportunities = [
        {
            opportunityId: '1',
            title: 'Opp 1',
            location: 'Jacksonville',
            date: '01-1-2024',
            reqSkills: [{key: 1, value:'RNA'},{key: 2, value: 'Painting'}, {key: 3, value: 'testskill 1'},{key: 4, value: 'testskill 2'}]
        },
        {
            opportunityId: '2',
            title: 'Opp 2',
            location: 'Gainsville',
            date: '01-2-2024',
            reqSkills: [{key: 1, value: 'None'}]
        },
        {
            opportunityId: '3',
            title: 'Opp 3',
            location: 'Panama City',
            date: '01-3-2024',
            reqSkills: [{key: 1, value: 'Carpentry'}]
        },
        {
            opportunityId: '4',
            title: 'Opp 4',
            location: 'Oralando',
            date: '01-1-2024',
            reqSkills: [{key: 1, value: 'Painting'}]
        }, 
        {
            opportunityId: '5',
            title: 'Opp 5',
            location: 'Gainsville',
            date: '01-4-2024',
                    reqSkills: [{key: 1, value: 'None'}]
        },    
    ]

    getOpportunites(search: string){
        if(search !== ''){
            search = search.toLowerCase();
            return this.opportunities.filter((opportunity)=>
            opportunity.title.toLowerCase().includes(search)||
            opportunity.location.toLowerCase().includes(search)||
            opportunity.date.toLowerCase().includes(search)||this.checkSkills(opportunity.reqSkills, search)
            );
        }
        return this.opportunities;
    }
    
    checkSkills(skills: Skill[], search: string){
      let match = false;
      skills.forEach((skill: Skill)=>{
        if(skill.value.toLowerCase().includes(search)){
            match = true;
        }
      })
      return match;
    }

    addOpportunity(opportunityData: NewOppportunityData){
        let opportunityId = '';
        let skills = [];
        let reqSkills = [{key: 0, value: ''}];

        if(this.freedOppotunityIdNums.length === 0){
            opportunityId = this.nextOpportunityIdNum.toString();
            this.nextOpportunityIdNum += 1;
        }

        if(this.freedOppotunityIdNums.length != 0){
            opportunityId = this.freedOppotunityIdNums.pop.toString();
        }

        skills = opportunityData.reqSkills.split(" ");
        skills.forEach((skill, index) =>{
            reqSkills.push(
                {
                    key: index,
                    value: skill
                }
            )
        }
        )
        this.opportunities.unshift({
            opportunityId: opportunityId,
            title: opportunityData.title,
            location: opportunityData.location,
            date: opportunityData.date,
            reqSkills: reqSkills

        })
    }

    removeOpportunity(opportunityId: string){
        this.opportunities = this.opportunities.filter((opportunity)=> opportunity.opportunityId !== opportunityId);
    }


 }