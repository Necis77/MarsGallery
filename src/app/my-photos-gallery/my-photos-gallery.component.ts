import { Component, OnInit } from '@angular/core';
import { MyGalleryService } from '../my-gallery.service';

@Component({
  selector: 'app-my-photos-gallery',
  templateUrl: './my-photos-gallery.component.html',
  styleUrls: ['./my-photos-gallery.component.css']
})
export class MyPhotosGalleryComponent implements OnInit {

  favorites : any = [];

  constructor(private myGallery: MyGalleryService) { }

  ngOnInit(): void {
    this.getFavoritesFromService();
  }

  getFavoritesFromService(){
    this.favorites = this.myGallery.getFavorites();
  }

}
