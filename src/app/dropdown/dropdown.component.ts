import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  countries: string[] = ['India', 'United States', 'Germany', 'Japan'];
  selectedCountry = '';
}
