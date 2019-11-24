import { Component, OnInit, Input} from '@angular/core';
import { Video } from '../../app.constants';

const apiUrl = 'https://api.angularbootcamp.com/videos';
interface Employee {
  title: string;
  author: string;
}
@Component({
  selector: 'app-wallschild',
  templateUrl: './wallschild.component.html'

 })
export class WallschildComponent{
 // @Input() video: Video
  @Input() empleados: Employee;

 constructor() {
  this.empleados = {
    title: '',
    author: ''
  };

    }





 }
