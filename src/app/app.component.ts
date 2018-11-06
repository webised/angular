import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'watchanddestroy';
  isAuth = false;

  appareilOne = 'Machine à laver';

  appareils = [
      {
          name: 'tv',
          statut: 'allume'
      },
      {
          name: 'box',
          statut: 'eteinte'
      }

  ];

  onAllumer() {
        console.log('test');
  }
}
