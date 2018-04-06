import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class ImageService {
  server: String = "http://localhost:3000/";

  constructor(
    private http: Http
  ) { }

  uploadImage(image) {
    const formData = new FormData();
    formData.append('image', image, image.name);
    return this.http.post(this.server + 'images/upload', formData)
      .map(res => res.json());
  }

  getImage(id) {
    return this.http.get(this.server + 'images/' + id)
      .map(res => res);
  }
}
