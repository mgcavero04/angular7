
/* 301 Injectors */
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Employee, WallsLoaderService } from './walls-loader.service';
//const apiUrl = 'https://api.angularbootcamp.com/videos';

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
  constructor(svc: WallsLoaderService) {//301:calling the service
    svc
    .loadEmployees()
    .subscribe(empleados => (this.empleados = empleados));
    /*http
      .get<Employee[]>(apiUrl)
      .subscribe(empleados => (this.empleados = empleados));*/ /*300: this is using http*/

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
