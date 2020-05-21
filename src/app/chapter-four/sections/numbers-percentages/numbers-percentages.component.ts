import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers-percentages',
  templateUrl: './numbers-percentages.component.html',
  styleUrls: ['./numbers-percentages.component.scss']
})
export class NumbersPercentagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }


}
