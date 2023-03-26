import { Injectable } from '@angular/core';
import { Storage} from '@angular/fire/storage'
import { async } from '@firebase/util';
import { getDownloadURL, uploadBytes, list , getStorage, ref} from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  url: string = "";
  storageFirebase = getStorage()
  
  constructor(private storage: Storage) { }

  public upLoadImage($event: any, nombre: string) {
    const img = $event.target.files[0]
    const imagenRef = ref(this.storageFirebase, nombre)
    uploadBytes(imagenRef, img)
      .then(Response => { alert("imagen subida correctamente") })
      .catch(error => console.log(error))
  }

  getImagen() {
    const imgRef = ref(this.storage)
    list(imgRef)
      .then(async response => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item)
        }
      }).catch(error => console.log(error)
      )
  }
}
