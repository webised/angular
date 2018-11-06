import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.sass']
})
export class AppareilComponent implements OnInit {
  title = 'mon titre';
  @Input() appareilName: string;
  constructor() { }


  ngOnInit() {
  }

}
