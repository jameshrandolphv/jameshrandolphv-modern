import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selected = 'Home';

  menuExpanded = false;

  title = 'jameshrandolphv-modern';

  constructor(public router: Router) {

  }

  setSelected(page: string) {
    if (this.selected !== page) {
      this.selected = page;
      this.expandMenu();
      this.router.navigate([page.toLowerCase()]);
    } else {
      this.expandMenu();
    }
  }

  expandMenu() {
    if (this.menuExpanded) {
      this.menuExpanded = false;
    } else {
      this.menuExpanded = true;
    }
  }

}
