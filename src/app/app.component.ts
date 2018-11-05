import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'watchanddestroy';
  isAuth = false;

  onAllumer(){
        console.log('test');
  }
}
