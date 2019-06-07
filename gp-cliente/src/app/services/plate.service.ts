import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plate } from '../models/plate.model';

@Injectable({
  providedIn: 'root'
})
export class PlateService {

  url = 'http://localhost:8080/plates/';

  constructor(private http: HttpClient) {   }

  getPlates() {
    return this.http.get(this.url);
  }

  getPlatesByType(type: string) {
    return this.http.get(this.url + type);
  }

  addPlate(plate: Plate) {
    return this.http.post(this.url, plate);
  }
}
