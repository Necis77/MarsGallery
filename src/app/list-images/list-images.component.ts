import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {GetMarsImagesService} from "../get-mars-images.service";

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {
  @Input()
  images: any;
  Day;
  Month;
  Year;

  @Output()
  imageClick = new EventEmitter();

  errorCatch = false;
  constructor(private marsImagesService: GetMarsImagesService) { }

  ngOnInit(): void {
  }
  refreshImages() {
    this.marsImagesService.GetMarsImagesFromApi(this.Day,this.Month,this.Year).subscribe(
      (response) => {
        this.errorCatch = false;
        this.images = response.photos;
      },
      (error) => {
        this.errorCatch = true;
        console.log('toto' + error);
        this.images = null;
      }
    );
  }

  onClick(event: Event){
    this.imageClick.emit(event);
  }

}
