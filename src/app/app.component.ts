import {Component, Input} from '@angular/core';
import {GetMarsImagesService} from './get-mars-images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MarsGallery';
  marsPhotos: any;

  constructor(private marsImagesService: GetMarsImagesService) { }

  ngOnInit() {
    this.marsImagesService.GetMarsImagesFromApi('10','10','2015').subscribe(
      (response) => {
        this.marsPhotos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
