import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-chapter-three',
  templateUrl: './chapter-three.component.html',
  styleUrls: ['./chapter-three.component.scss']
})
export class ChapterThreeComponent implements OnInit, OnDestroy {
  expand = 'none';

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url.indexOf('specificity') !== -1) {
      this.expand = 'specificity';
    } else {
      this.expand = 'none';
    }
  }

  ngOnDestroy(): void {
    this.expand = 'none';
  }

  OnClick(expand) {
    this.expand = expand;
    }
}
