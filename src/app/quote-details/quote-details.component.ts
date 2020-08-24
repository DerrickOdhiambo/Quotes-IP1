import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css'],
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quotes;
  @Output() toDelete = new EventEmitter<boolean>();

  quoteDelete(del: boolean) {
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
