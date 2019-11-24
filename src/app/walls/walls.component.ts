import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Video } from '../app.constants';
import { Employees } from '../app.constants';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'https://api.angularbootcamp.com/videos';
interface Employee {
  title: string;
  author: string;
}
@Component({
  selector: 'walls',
  templateUrl: './walls.component.html',
  styleUrls: ['./walls.component.css']
})
export class WallsComponent implements OnInit{
  //@Input() videos: Video[] = [];
  empleados: Employee[] = [];
  @Output() videoSelected = new EventEmitter<Employee>();
  selectedVideo: Employee;
  constructor(http: HttpClient) {
    http
      .get<Employee[]>(apiUrl)
      .subscribe(empleados => (this.empleados = empleados));

      }
  //empleados = Employees;
  //empleados = this.videos;
  ngOnInit(): void {
    this.selectedVideo = {
      author: '',
      title: ''
    };
  }
  selectVideo(empleado: Employee) {
    this.selectedVideo = empleado;
    console.log('this.selectedVideo:', this.selectedVideo);
     this.videoSelected.emit(empleado);
  }



}
