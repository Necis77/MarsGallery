import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerDaysPhotosComponent } from './per-days-photos/per-days-photos.component';
import { MyPhotosGalleryComponent } from './my-photos-gallery/my-photos-gallery.component';

const routes: Routes = [
  { path: 'per-days-photos', component: PerDaysPhotosComponent },
  { path: 'my-photos-gallery', component: MyPhotosGalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
