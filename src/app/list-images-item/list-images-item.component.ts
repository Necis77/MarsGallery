import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-images-item',
  templateUrl: './list-images-item.component.html',
  styleUrls: ['./list-images-item.component.css']
})
export class ListImagesItemComponent implements OnInit {
  @Input()
  marsImage: any;

  constructor() { }

  ngOnInit(): void {
  }

}
