import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const NEWS_API_URL = environment.NEWS_API_URL;
const NEWS_API_KEY = environment.NEWS_API_KEY;


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getNews(){
    const url = `${NEWS_API_URL}/top-headlines?country=ie&apiKey=${NEWS_API_KEY}`;
    return this.http.get(url);
  }

  getSports(){
    const url = `${NEWS_API_URL}/top-headlines?category=sports&country=ie&apiKey=${NEWS_API_KEY}`;
    return this.http.get(url);
  }

  getFinance(){
    const url = `${NEWS_API_URL}/top-headlines?category=business&country=ie&apiKey=${NEWS_API_KEY}`;
    return this.http.get(url);
  }

  getArticle(id: string){
    const url = `${NEWS_API_URL}/${id}?apiKey=${NEWS_API_KEY}`;
    return this.http.get(url);
  }

}
