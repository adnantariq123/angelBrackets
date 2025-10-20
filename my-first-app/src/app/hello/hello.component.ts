import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Import FormsModule to use ngModel for two-way data binding, and ngForm, and ngModelGroup
import { CommonModule } from '@angular/common'; 
// Import CommonModule to use structural directives like *ngIf, *ngFor, etc.
  
@Component({
  selector: 'app-hello',
  imports: [FormsModule, CommonModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent {
    name = 'Adi';
    SecondName = 'Adnan';
    lastName = "Tariq";


    changeName() {
        this.name = 'Motto';
    }
}
