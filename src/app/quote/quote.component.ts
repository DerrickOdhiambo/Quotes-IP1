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
      new Date(),
      'The purpose of our lives is to be happy.',
      'Dalai Lama',
      'John Kimana'
    ),
    new Quotes(
      new Date(),
      ' Life is what happens when you are busy making other plans.',
      'John Lennon',
      'Sheila Mtu'
    ),
    new Quotes(
      new Date(),
      'Get busy living or get busy dying.',
      'Stephen King',
      'Derrick Odhiambo'
    ),
    new Quotes(
      new Date(),
      ' You only live once, but if you do it right, once is enough.',
      'Mae West',
      'Levis Juma'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
