import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-lifequote-details',
  templateUrl: './lifequote-details.component.html',
  styleUrls: ['./lifequote-details.component.css'],
})
export class LifequoteDetailsComponent implements OnInit {
  @Input() life: Quotes;
  @Output() toDelete = new EventEmitter<boolean>();

  lifeQuoteDelete(del: boolean) {
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
