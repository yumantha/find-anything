import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class ImageService {
  server: String = "http://localhost:3000/";

  constructor(
    private http: Http
  ) { }

  //uploading the image to the database
  uploadImage(image) {
    const formData = new FormData();
    formData.append('image', image, image.name);
    return this.http.post(this.server + 'images/upload', formData)
      .map(res => res.json());
  }

  //update the user/item
  updateInfo(type, id) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    // console.log(item);
    return this.http.post(this.server + 'images/info', {type: type, id: id}, {headers: headers})
      .map(res => res.json());
  }

  //deleting an image from the database
  deleteImage(filename, type, id) {
    const query = filename + "|" + type + "|" + id;

    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.delete(this.server + 'images/' + query, {headers: headers})
      .map(res => res.json());
  }
}
