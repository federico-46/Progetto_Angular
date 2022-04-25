import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ProgettoAngular';

  constructor(public router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
