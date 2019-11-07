import { Component } from '@angular/core';

@Component({
  selector: 'shared-box',
  template: `<div class="card">
  <div class="card-content">
    <span class="card-title">
      <input type="text" style="width: 25%" placeholder="Search" />
      <span
        class="material-icons"
        style="position: relative;top: 7px;"
      >
        search
      </span>
    </span>
    </div>
    </div>`
})
export class SearchBoxComponent {} /*104-2*/
