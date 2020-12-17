import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetMarsImagesService {

    private ApiKey : string = "wx3ke6Hvs8pM1Xb7BfnWasHUbLDttXysbsSZS8EM";
    private ApiUrl : string = "https://api.nasa.gov/";


  constructor(private httpClient : HttpClient) { }



  GetMarsImagesFromApi(): any {
    return this.httpClient.get(this.ApiUrl + 'mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-10-10&api_key='+ this.ApiKey);
  }
}
