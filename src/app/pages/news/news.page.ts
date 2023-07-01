import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})

export class NewsPage implements OnInit {
  articles: Observable<any> | undefined;

  constructor(private navController: NavController, private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.articles = this.api.getNews();
  }

  showArticle(article: { url: string; }) {
    let split = article.url.split('/');
    let articleId = split[split.length - 2];
    this.router.navigateByUrl(`/tabs/news/${articleId}`);
  }
}

