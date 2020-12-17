import { Component, OnInit } from '@angular/core';
import {GetMarsImagesService} from '../get-mars-images.service';
import { MyGalleryService } from '../my-gallery.service';

@Component({
  selector: 'app-per-days-photos',
  templateUrl: './per-days-photos.component.html',
  styleUrls: ['./per-days-photos.component.css']
})
export class PerDaysPhotosComponent implements OnInit {

  marsPhotos : any = [];

  constructor(private marsImagesService : GetMarsImagesService, private myGallery : MyGalleryService) { }

  ngOnInit() {
    this.marsImagesService.GetMarsImagesFromApi(10,10,2015).subscribe(
      (response) => {
        this.marsPhotos = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  clickToAdd(event: Event){
    this.myGallery.addPhoto(event);
  }

}
