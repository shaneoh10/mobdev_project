import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


const STORAGE_KEY = 'favouriteArticles';


@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(private storage: Storage) { }

  getAllFavouriteArticles() {
    return this.storage.get(STORAGE_KEY);
  }

  isFavourite(articleId: any) {
    return this.getAllFavouriteArticles().then(result => {
      return result && result.indexOf(articleId) !== -1;
    });
  }

  favouriteArticle(articleId: any) {
    return this.getAllFavouriteArticles().then(result => {
      if (result) {
        result.push(articleId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [articleId]);
      }
    });
  }

  unfavouriteArticle(articleId: any) {
    return this.getAllFavouriteArticles().then(result => {
      if (result) {
        var index = result.indexOf(articleId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return Promise.resolve();
      }
    });
  }

}