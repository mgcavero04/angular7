import { Component } from '@angular/core';
// this component will be included in payroll
@Component({
  selector: 'search-box',
  template: `
    <input type="text" style="width: 25%" placeholder="Search" />
    <span class="material-icons" style="position: relative;top: 7px;">
      search
    </span>
  `
})
export class SearchBoxComponent {}
