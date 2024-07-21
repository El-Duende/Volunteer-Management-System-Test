import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OpportunitiesManagementComponent } from "./opportunities-management/opportunities-management.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OpportunitiesManagementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
