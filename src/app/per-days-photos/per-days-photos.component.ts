import { Component, OnInit } from '@angular/core';
import {GetMarsImagesService} from '../get-mars-images.service';

@Component({
  selector: 'app-per-days-photos',
  templateUrl: './per-days-photos.component.html',
  styleUrls: ['./per-days-photos.component.css']
})
export class PerDaysPhotosComponent implements OnInit {

  marsPhotos : any = [];

  constructor(private marsImagesService : GetMarsImagesService) { }

  ngOnInit() {
    this.marsImagesService.GetMarsImagesFromApi().subscribe(
      (response) => {
        this.marsPhotos = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
