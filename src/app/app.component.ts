import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DataBindingComponent } from "./data-binding/data-binding.component";
import { DirectiveComponent } from './directive/directive.component';

import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from "./ngfor/ngfor.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DirectiveComponent, NgifComponent, NgforComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'demo';
}
