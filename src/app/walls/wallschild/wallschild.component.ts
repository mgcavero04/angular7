import { Component, OnInit, Input} from '@angular/core';
import { Video } from '../../app.constants';

@Component({
  selector: 'app-wallschild',
  templateUrl: './wallschild.component.html'

 })
export class WallschildComponent implements OnInit{


  @Input() video: Video;

  constructor() { }

  ngOnInit() {
  }






 }
