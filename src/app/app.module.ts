import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { SingleDetailComponent } from './components/single-detail/single-detail.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    SingleDetailComponent,
    CompanyDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
