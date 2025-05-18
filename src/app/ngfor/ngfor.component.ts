import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ngfor', 
  imports: [CommonModule,FormsModule],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.scss'
})
export class NgforComponent {
  employee:any[]=[{
    empname:"jagan",
  role:'sdeIII'},{
    empname:"vmal",
  role:'sdeI'
  }
  ]
}
