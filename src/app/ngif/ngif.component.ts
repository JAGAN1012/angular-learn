import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ngif',
  imports: [CommonModule,FormsModule],
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.scss'
})
export class NgifComponent {
  name:string=" "
  ischeck:boolean=false;
  isInput:boolean=true;
  onclick(){
    this.ischeck=!this.ischeck;
  }
  onshow(){
   this.isInput=true;
  }
  onhide(){
    this.isInput=false;
  }

}
