import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../app.constants';

@Component({
  selector: 'walls',
  templateUrl: './walls.component.html',
  styleUrls: ['./walls.component.css']
})
export class WallsComponent {
  employees = [
    {
      name: 'Cynthia Cunningham',
      roles: ['moderator', 'infrastructure', 'firmware']
    },
    {
      name: 'Peter Clark',
      roles: ['contingency', 'protocol'] },
    {
      name: 'Theresa Soto',
      roles: ['implementation'] },
    {
      name: 'Russell Fisher',
      roles: ['implementation', 'application']
    },
    {
      name: 'Elizabeth Hudson',
      roles: ['instruction set design'] },
    {
      name: 'Heather Spencer',
      roles: ['moderator'] },
    {
      name: 'Barbara Tran',
      roles: ['protocol'] },
    {
      name: 'Julia Anderson',
      roles: ['instruction set design', 'implementation']
    }
  ];
  @Input() videos: Video[] = [];
  @Output() videoSelected = new EventEmitter<Video>();

  selectedVideo: Video;
  selectedList: Video;
  showInactiveRoles = true;
  //name: string;

  selectVideo(video: Video) {
    console.log(video);
    this.selectedList = video;
    }




}
