import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../app.constants';
import { Employees } from '../app.constants';



@Component({
  selector: 'walls',
  templateUrl: './walls.component.html',
  styleUrls: ['./walls.component.css']
})
export class WallsComponent {

  @Input() videos: Video[] = [];
  @Output() videoSelected = new EventEmitter<Video>();

  empleados = Employees;
  selectedVideo: Video;

  selectVideo(video: Video) {
    this.selectedVideo = video;
    console.log('this.selectedVideo:', this.selectedVideo);
     this.videoSelected.emit(video);




  }





}
