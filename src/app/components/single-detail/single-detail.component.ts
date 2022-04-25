import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-single-detail',
  templateUrl: './single-detail.component.html',
  styleUrls: ['./single-detail.component.css'],
})
export class SingleDetailComponent implements OnInit {
  singAd: any;

  constructor(public service: MainService) {}

  ngOnInit(): void {
    this.service.currentData.subscribe((e) => (this.singAd = e));
  }
}
