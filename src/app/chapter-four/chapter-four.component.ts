import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-four',
  templateUrl: './chapter-four.component.html',
  styleUrls: ['./chapter-four.component.scss']
})
export class ChapterFourComponent implements OnInit {
  expand = 'none';

  constructor() { }

  ngOnInit() {
  }

  OnClick(expand) {
    this.expand = expand;
    }

}
