import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListImagesComponent } from './list-images/list-images.component';
import { ListImagesItemComponent } from './list-images-item/list-images-item.component';
import { PerDaysPhotosComponent } from './per-days-photos/per-days-photos.component';
import { MyPhotosGalleryComponent } from './my-photos-gallery/my-photos-gallery.component';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListImagesComponent,
    ListImagesItemComponent,
    PerDaysPhotosComponent,
    MyPhotosGalleryComponent,
    HeaderComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
