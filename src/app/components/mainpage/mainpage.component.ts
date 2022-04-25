import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ads } from 'src/app/models/ads.model';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent implements OnInit {
  loading: boolean = false;

  page: number = 1;
  id!: number;

  ads: Ads[] = new Array();

  user: string = ' aaaa';

  response: any;

  @ViewChild('selectedField') selectedField!: ElementRef;

  singAds!: any;

  selectedLevel: string = 'all';

  constructor(public http: HttpClient, public service: MainService) {}

  ngOnInit(): void {
    this.Ads();
  }

  showDetail(i: any) {
    this.singAds = i;
    this.service.updateData(this.singAds);
  }

  Ads() {
    this.loading = true;
    this.service.loadAds(this.page).subscribe((res) => {
      this.response = res;
      this.ads = this.response.results;
      this.loading = false;
    });
  }

  changeLevel(Levelpage: number): void {
    this.page = Levelpage;
    this.selectedLevel = this.selectedField.nativeElement.value;
    this.loading = true;
    this.service.loadLevel(this.page, this.selectedLevel).subscribe((res) => {
      this.response = res;
      this.ads = this.response.results;
      this.loading = false;
      console.log(this.selectedLevel);
    });
  }

  nextPage() {
    this.page++;
    if (this.selectedLevel == 'all') {
      this.Ads();
    } else {
      this.changeLevel(this.page);
    }

    window.scrollTo(0, 0);
  }

  previousPage() {
    this.page--;
    if (this.selectedLevel == 'all') {
      this.Ads();
    } else {
      this.changeLevel(this.page);
    }
    window.scrollTo(0, 0);
  }

  // loadId(id: number): void {
  //   this.loading = true;
  //   this.http
  //     .get(`https://www.themuse.com/api/public/companies/${id}`)
  //     .subscribe((res) => {
  //       console.log(res);
  //       this.loading = false;
  //     });
  // }
}
