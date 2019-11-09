import { Component } from '@angular/core';


@Component({
  selector: 'pavers-search',
  template: `
    <div class="card">
      <div class="card-content">
        <span class="card-title">Pavers Functionality</span>
        <div>Search for Pavers Records</div>
        <section class="card">
        <div class="card-content">
          <span class="card-title">Time Clock</span>
          <p>Hello, {{ name }}</p>
          <p>
            <strong>{{ message }}</strong>
          </p>
          <p>
            Managers, don't forget to hold shift while clocking in!
          </p>
        </div>
        <div class="card-action">
          <button class="btn" (click)="clockIn($event)">Clock In</button>
          &nbsp;
          <button class="btn" (click)="clockOut()">Clock Out</button>
        </div>
        <div (click)="showMessage1()">Click here to see message1: {{ newMessage1 }}</div>
        <div>
          <input type="text" (focus)="showMessage2()" value="{{ newMessage2 }}">Type to see message2
        </div>
      </section>


      </div>
    </div>
  `
})
export class PaversSearchComponent {
  name = 'John Doe';
  message = 'Please Clock In';

  newMessage1 = '';
  newMessage2 = '';

  clockIn(event: MouseEvent) {
    if (event.shiftKey) {
      this.message = 'Clocked in as manager!';
    } else {
      this.message = 'Clocked in as employee';
    }
  }

  clockOut() {
    this.message = 'Have a nice day!';
  }




  showMessage1() {
    this.newMessage1 = 'This message 1';
  }
  showMessage2() {
    this.newMessage2 = 'This message 2';
  }



}
