import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-chapter-three',
  templateUrl: './chapter-three.component.html',
  styleUrls: ['./chapter-three.component.scss']
})
export class ChapterThreeComponent implements OnInit, OnDestroy {
  expand = false;

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url.indexOf('specificity') !== -1) {
      this.expand = true;
    } else {
      this.expand = false;
    }
  }

  OnClick(expand) {
    if (expand === 'true') {
      this.expand = true;
    } else {
      this.expand = false;
    }
  }

  ngOnDestroy() {
    this.expand = false;
  }
}
