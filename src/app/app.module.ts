import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedReviewComponent } from './med-review/med-review.component';
import { MedReviewService } from './services/med-review/med-review.service';

@NgModule({
  declarations: [AppComponent, MedReviewComponent],
  imports: [BrowserModule],
  providers: [MedReviewService],
  bootstrap: [AppComponent],
})
export class AppModule {}
