import { Component } from '@angular/core';
import { scheduleMap } from '../app.constants';

@Component({
  selector: 'payroll-search',
  template: `
    <div class="card">
      <div class="card-content">
        <span class="card-title">Payroll Functionality</span>
        <div>Search for Employee Payroll Records</div>
        <section class="card">
    <div class="card-content">
      <span class="card-title">Upcoming Schedule</span>
      <div class="time-block" (mouseleave)="clearSchedule()">
        <div class="day-0" (mouseover)="showSchedule('M')">M</div>
        <div class="day-1" (mouseover)="showSchedule('T')">T</div>
        <div class="day-2" (mouseover)="showSchedule('W')">W</div>
        <div class="day-3" (mouseover)="showSchedule('R')">R</div>
        <div class="day-4" (mouseover)="showSchedule('F')">F</div>
      </div>
      <div>
        {{ currentSchedule }}
      </div>



    </div>
  </section>

      </div>
    </div>
  `
})
export class PayrollSearchComponent {
  currentSchedule = 'Hover to see selected work times';

  showSchedule(day: string) {
    this.currentSchedule = scheduleMap[day];
  }
  clearSchedule() {
    this.currentSchedule = 'Hover to see selected work times';
  }


}
