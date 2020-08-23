import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  lifeQuotes: Quotes[] = [
    new Quotes(
      new Date(2019, 4, 12),
      'The purpose of our lives is to be happy.',
      'Dalai Lama',
      'John Kimana'
    ),
    new Quotes(
      new Date(2020, 0, 31),
      ' Life is what happens when you are busy making other plans.',
      'John Lennon',
      'Sheila Mtu'
    ),
    new Quotes(
      new Date(2017, 2, 24),
      'Get busy living or get busy dying.',
      'Stephen King',
      'Derrick Odhiambo'
    ),
    new Quotes(
      new Date(2018, 9, 1),
      ' You only live once, but if you do it right, once is enough.',
      'Mae West',
      'Levis Juma'
    ),
  ];

  quoteDetails(index) {
    this.lifeQuotes[index].showQuoteDetails = !this.lifeQuotes[index]
      .showQuoteDetails;
  }

  addNewQuote(quote) {
    let quoteLength = this.lifeQuotes.length;
    quote.id = quoteLength + 1;
    this.lifeQuotes.push(quote);
  }

  constructor() {}

  ngOnInit(): void {}
}
