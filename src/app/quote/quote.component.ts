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

  lifeQuotes: Quotes[] = [
    new Quotes(
      new Date(2018, 6, 23),
      'Life is what happens when you are busy making other plans.',
      'John Lennon',
      'Emily Son'
    ),
    new Quotes(
      new Date(2010, 2, 6),
      'Get busy living or get busy dying.',
      'Stephen King',
      'Kamau Lemar'
    ),
    new Quotes(
      new Date(2014, 9, 23),
      'You only live once, but if you do it right, once is enough.',
      'Mae West',
      'Njogu Diana'
    ),
  ];

  loveQuotes: Quotes[] = [
    new Quotes(
      new Date(2017, 2, 18),
      'I think the perfection of love is that it is not perfect.',
      'Taylor Swift',
      'Ngolo Kante'
    ),
    new Quotes(
      new Date(2012, 3, 10),
      'The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.',
      'Hellen Keller',
      'Mambo Leo'
    ),
    new Quotes(
      new Date(2015, 6, 3),
      'The best thing to hold onto in life is each other.',
      'Audrey Hepburn',
      'Sheila Kimani'
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
