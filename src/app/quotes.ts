export class Quotes {
  showQuoteDetails: boolean;
  constructor(
    public date: Date,
    public quote: string,
    public author: string,
    public person: string
  ) {
    this.showQuoteDetails = false;
  }
}
