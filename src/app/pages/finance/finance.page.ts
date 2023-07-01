import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.page.html',
  styleUrls: ['./finance.page.scss'],
})

export class FinancePage implements OnInit {
  articles: Observable<any> | undefined;

  constructor(private navController: NavController, private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.articles = this.api.getFinance();
  }

  showArticle(article: { url: string; }) {
    let split = article.url.split('/');
    let articleId = split[split.length - 2];
    this.router.navigateByUrl(`/tabs/finance/${articleId}`);
  }
}

