import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-lovequote-details',
  templateUrl: './lovequote-details.component.html',
  styleUrls: ['./lovequote-details.component.css'],
})
export class LovequoteDetailsComponent implements OnInit {
  @Input() love: Quotes;
  @Output() toDelete = new EventEmitter<boolean>();

  loveQuoteDelete(del: boolean) {
    this.toDelete.emit(del);
  }

  numberOfLikes: number = 0;
  numberOfDislikes: number = 0;

  likeButtonClick() {
    this.numberOfLikes++;
  }

  dislikeButtonClick() {
    this.numberOfDislikes++;
  }

  constructor() {}

  ngOnInit(): void {}
}
