import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-lovequote-details',
  templateUrl: './lovequote-details.component.html',
  styleUrls: ['./lovequote-details.component.css'],
})
export class LovequoteDetailsComponent implements OnInit {
  @Input() love: Quotes;
  constructor() {}

  ngOnInit(): void {}
}
