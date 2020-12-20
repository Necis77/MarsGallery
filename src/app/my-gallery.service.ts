import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyGalleryService {


  constructor() { }

  addPhoto(photo: any) {
    localStorage.setItem(String(localStorage.length), photo.src);
    console.log(photo.src);
  }

  getFavorites(){
    let favorites = [];
    console.log(localStorage.length);
    for (let i = 0; i < localStorage.length; i++){
        favorites.push(localStorage.getItem(String(i)));
    }
    return favorites;
  }
}
