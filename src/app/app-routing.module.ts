import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { SingleDetailComponent } from './components/single-detail/single-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MainpageComponent,
  },
  {
    path: 'singleDetail',
    component: SingleDetailComponent,
  },
  {
    path: 'companyDetails',
    component: CompanyDetailComponent,
  },
  {
    path: '**',
    redirectTo: '', //da mettere 404 page component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
