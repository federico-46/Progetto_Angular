import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css'],
})
export class CompanyDetailComponent implements OnInit {
  constructor(public service: MainService) {}

  singAd: any; //All data for single ad
  singAd_Id!: number; //id for single ad
  resCompany!: any; //all data for single ad company

  ngOnInit(): void {
    this.service.currentData.subscribe((e) => {
      this.singAd = e;
      this.singAd_Id = this.singAd.company.id;
      console.log(this.singAd_Id);
    });

    this.service.loadCompanyDeatils(this.singAd_Id).subscribe((res) => {
      this.resCompany = res;
      console.log(this.resCompany);
    });
  }
}
