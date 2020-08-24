import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { HighlightQuoteDirective } from './highlight-quote.directive';
import { TimeCountPipe } from './time-count.pipe';
import { LifequoteDetailsComponent } from './lifequote-details/lifequote-details.component';
import { LovequoteDetailsComponent } from './lovequote-details/lovequote-details.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuoteFormComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    HighlightQuoteDirective,
    TimeCountPipe,
    LifequoteDetailsComponent,
    LovequoteDetailsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
