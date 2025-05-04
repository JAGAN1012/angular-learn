import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  name: string ="jagan";
  age: number =10;
  random="";

onsave(){
  alert("data save successfully")

}
onchange(event: Event): void {
  const selectedValue = (event.target as HTMLSelectElement).value;
  alert("Country has changed to " + selectedValue);
}
}
