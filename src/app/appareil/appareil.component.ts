import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.sass']
})
export class AppareilComponent implements OnInit {
  title = 'mon titre';
  @Input() appareilStatut: string;
  @Input() appareilName: string;

  constructor() { }

  setCOlor() {
    if(this.appareilStatut === 'allume') {
      return 'green';
    } else if(this.appareilStatut === 'eteinte') {
      return 'red';
    }
  }
  ngOnInit() {
  }

}
