import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyword-strings-other-text',
  templateUrl: './keyword-strings-other-text.component.html',
  styleUrls: ['./keyword-strings-other-text.component.scss']
})
export class KeywordStringsOtherTextComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
