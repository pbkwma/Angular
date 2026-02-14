# Angular Dropdown Component

Reusable standalone Angular dropdown component.

## Usage

```ts
import { Component } from '@angular/core';
import { DropdownComponent, DropdownOption } from './dropdown/dropdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DropdownComponent],
  template: `
    <app-dropdown
      label="Country"
      [options]="countries"
      [(selectedValue)]="selectedCountry"
    />

    <p>Selected: {{ selectedCountry || 'none' }}</p>
  `
})
export class AppComponent {
  selectedCountry = '';

  countries: DropdownOption[] = [
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'India', value: 'in' }
  ];
}
```
