import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { sortBy } from 'lodash';
import { Observable, Subject, combineLatest } from 'rxjs';
import {
  debounceTime,
  map,
  startWith,
  switchMap
} from 'rxjs/operators';

import { Employee } from '../../walls/walls-loader.service';
import { WallsLoaderService } from '../../walls/walls-loader.service';

@Component({
  selector: 'walls-list',
  templateUrl: './walls-list.component.html'
})
export class WallsListComponent {
  nameFilter = new FormControl('');
  sort = new FormControl('author');

  filteredList: Observable<Employee[]>;
  selectedId = new Subject<number>();
  selectedEmployee: Observable<Employee>;

  constructor(loader: WallsLoaderService) {
    // .valueChanges is missing the initial value; add it:
    const nameFilter = this.nameFilter.valueChanges.pipe(
      startWith(this.nameFilter.value as string)
    );

    const sort = this.sort.valueChanges.pipe(
      startWith(this.sort.value as string)
    );

    // List reacts to filter and sort changes
    this.filteredList = combineLatest([
      nameFilter.pipe(
        debounceTime(250),
        switchMap(x => loader.getList(x))
      ),
      sort
    ]).pipe(map(([list, sortKey]) => sortBy(list, sortKey)));
    console.log('this.filteredList:', this.filteredList);

    // Detail reacts to selected employee changes
    /*this.selectedEmployee = this.selectedId.pipe(
      switchMap(id => loader.getDetails(id))
    );*/
  }
}
