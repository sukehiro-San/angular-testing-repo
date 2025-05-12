import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private router: Router) {}
  isSubscribed = false;
  btnText = 'Subscribe';

  subscribe() {
    setTimeout(() => {
      this.isSubscribed = !this.isSubscribed;
      this.btnText = this.isSubscribed ? 'Subscribed' : 'Subscribe';
    }, 3000);
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
