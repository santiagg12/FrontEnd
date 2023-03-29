import { Injectable } from '@angular/core';
import { Storage } from '@angular/fire/storage';
import { getDownloadURL, uploadBytes, list , getStorage, ref } from 'firebase/storage';



@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  private storageFirebase = getStorage();
  public url: string = '';

  constructor(private storage: Storage) { }

  public upLoadImage($event: any, nombre: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const img = $event.target.files[0];
      const imagenRef = ref(this.storageFirebase, nombre);
      uploadBytes(imagenRef, img)
        .then(snapshot => {
          getDownloadURL(snapshot.ref)
            .then(url => {
              this.url = url;
              resolve(url);
            })
            .catch(error => reject(error));
        })
        .catch(error => reject(error));
    });
  }

  public getImagen(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const imgRef = ref(this.storage);
      list(imgRef)
        .then(async response => {
          for (let item of response.items) {
            this.url = await getDownloadURL(item);
          }
          resolve(this.url);
        })
        .catch(error => reject(error));
    });
  }
}
