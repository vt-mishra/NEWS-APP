import { Component, OnInit } from '@angular/core';
import {VmnewsapiService} from '../service/vmnewsapi.service';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit {

  constructor(private api:VmnewsapiService) { }

  //display headlines  data
  topheadlinesData:any = [];
  ngOnInit(): void {
   this.api.vmHeadlines().subscribe((result) => {
    console.log(result.articles);
    this.topheadlinesData = result.articles;
   })

  }

}
