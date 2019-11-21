import { Component, Input} from '@angular/core';
import { Video } from '../../app.constants';

@Component({
  selector: 'app-wallschild',
  templateUrl: './wallschild.component.html'
 })
export class WallschildComponent {
  @Input() video: Video;




}
