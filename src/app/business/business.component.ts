import { Component, OnInit } from '@angular/core';
import {VmnewsapiService} from '../service/vmnewsapi.service';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private api:VmnewsapiService) { }
//business News Data
vmBuzzNewsData: any=[];
  ngOnInit(): void {
    this.api.vmBuzzNews().subscribe((result) => {
      console.log(result.articles);
      this.vmBuzzNewsData = result.articles;
     })
  }

}
