import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Employee, WallsLoaderService } from '../../walls/walls-loader.service';
@Component({
  selector: 'walls',
  templateUrl: './walls.component.html',
  styleUrls: ['./walls.component.css']
})

export class WallsComponent implements OnInit{
  empleados: Employee[] = [];
  @Input() list: Employee[] = [];
  @Output() videoSelected = new EventEmitter<Employee>();
  selectedVideo: Employee;
  constructor(svc: WallsLoaderService) {
    svc
    .loadEmployees()
    .subscribe(empleados => (this.empleados = empleados));
  }
  ngOnInit(): void {
    this.selectedVideo = {
      id: '',
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
