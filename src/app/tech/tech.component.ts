import { Component, OnInit } from '@angular/core';
import {VmnewsapiService} from '../service/vmnewsapi.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private api:VmnewsapiService) { }
//tech news data
techNewsData:any = [];
  ngOnInit(): void {
    this.api.vmTechNews().subscribe((result) => {
      console.log(result.articles);
      this.techNewsData = result.articles;
     })
  }

}
