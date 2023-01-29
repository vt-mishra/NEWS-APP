import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VmnewsapiService {

  constructor(private http: HttpClient) { }
  
  //VmnewsHeadline API URL
  topheadlinesNews='https://newsapi.org/v2/top-headlines?country=in&apiKey=bd7ca71d646a48c4ac262c006edbf708';
  
  //tech News API URL
  techNews='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=bd7ca71d646a48c4ac262c006edbf708';

  //business News API URL
  businessNews='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bd7ca71d646a48c4ac262c006edbf708';

  
  // For Headlines News logic
  vmHeadlines():Observable<any>{
    return this.http.get(this.topheadlinesNews)
  }
  
  //Use tech News logic
  vmTechNews():Observable<any>{
    return this.http.get(this.techNews)
  }

  //for Business  News Logic
  vmBuzzNews():Observable<any>{
    return this.http.get(this.businessNews)
  }

}
