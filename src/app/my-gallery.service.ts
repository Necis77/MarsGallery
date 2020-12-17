import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyGalleryService {

  favorites : any = [];

  constructor() { }

  addPhoto(photo : any) {
    this.favorites.push(photo);
    console.log(this.favorites);
  }

  getFavorites(){
    return this.favorites;
  }
}
