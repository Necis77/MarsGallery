import { Component } from '@angular/core';
import {GetMarsImagesService} from './get-mars-images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MarsGallery';
  marsPhotos = new GetMarsImagesService();
}
