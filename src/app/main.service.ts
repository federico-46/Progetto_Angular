import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Ads } from './models/ads.model';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private dataSource = new BehaviorSubject({});

  currentData = this.dataSource.asObservable();

  constructor(public http: HttpClient) {}

  loadAds(page: number): Observable<Ads[]> {
    return this.http.get<Ads[]>(
      `https://www.themuse.com/api/public/jobs?category=Software Engineering&page=${page}`
    );
  }

  loadLevel(page: number, selectedLevel: string): Observable<Ads[]> {
    return this.http.get<Ads[]>(
      `https://www.themuse.com/api/public/jobs?category=Software Engineering&page=${page}&level=${selectedLevel}`
    );
  }

  loadCompanyDeatils(id: number): Observable<any> {
    return this.http.get<any>(
      `https://www.themuse.com/api/public/companies/${id}`
    );
  }

  updateData(data: any) {
    this.dataSource.next(data);
  }
}
