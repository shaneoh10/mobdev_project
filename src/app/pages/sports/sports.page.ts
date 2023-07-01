import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})

export class SportsPage implements OnInit {
  articles: Observable<any> | undefined;

  constructor(private navController: NavController, private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.articles = this.api.getSports();
  }

  showArticle(article: { url: string; }) {
    let split = article.url.split('/');
    let articleId = split[split.length - 2];
    this.router.navigateByUrl(`/tabs/news/${articleId}`);
  }

}
