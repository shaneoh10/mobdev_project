import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { FavouriteService } from './../../services/favourites.service';


@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})

export class NewsDetailsPage implements OnInit {

  article: any;
  isFavourite = false;
  private _articleId: any;
  public get articleId() {
    return this._articleId;
  }
  public set articleId(value) {
    this._articleId = value;
  }

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }

  ngOnInit() {
    this.articleId = this.activatedRoute.snapshot.paramMap.get('id');

    this.api.getArticle(this.articleId).subscribe(res => {
      this.article = res;
    });

    this.favouriteService.isFavourite(this.articleId).then(isFav => {
      this.isFavourite = isFav;
    });
  }

  favouriteArticle() {
    this.favouriteService.favouriteArticle(this.articleId).then(() => {
      this.isFavourite = true;
    });
  }

  unfavouriteArticle() {
    this.favouriteService.unfavouriteArticle(this.articleId).then(() => {
      this.isFavourite = false;
    });
  }

}
