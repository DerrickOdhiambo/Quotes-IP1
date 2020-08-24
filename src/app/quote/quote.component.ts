import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  newQuotes: Quotes[] = [
    new Quotes(
      new Date(2020, 4, 12),
      'The purpose of our lives is to be happy.',
      'Dalai Lama',
      'John Kimana'
    ),
  ];

  quoteDetails(index) {
    this.newQuotes[index].showQuoteDetails = !this.newQuotes[index]
      .showQuoteDetails;
  }

  addNewQuote(quote) {
    let quoteLength = this.newQuotes.length;
    quote.id = quoteLength + 1;
    this.newQuotes.push(quote);
  }

  quoteDelete(toDelete, index) {
    if (toDelete) {
      this.newQuotes.splice(index, 1);
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
