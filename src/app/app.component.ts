import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selected = 'home';

  title = 'jameshrandolphv-modern';

  setSelected(page: string) {
    this.selected = page;
  }

}
