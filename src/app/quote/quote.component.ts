import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  lifeQuotes: Quotes[] = [
    { id: 1, quote: 'The purpose of our lives is to be happy.' },
    {
      id: 2,
      quote: 'Life is what happens when you are busy making other plans',
    },
    { id: 3, quote: 'Get busy living or get busy dying' },
    {
      id: 4,
      quote: 'You only live once, but if you do it right, once is enough',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
