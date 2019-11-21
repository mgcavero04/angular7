import { Component } from '@angular/core';

@Component({
  selector: 'shared-box',
  template: `<div>
      <input type="text" style="width: 50%;" placeholder="Search" />
      <span
        class="material-icons"
        style="position: relative;top: 7px;"
      >
        search
      </span>
    </div>`
})
export class SearchBoxComponent {} /*104-2*/
