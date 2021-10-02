import { Component, OnInit } from '@angular/core';
import { MedReviewService } from '../services/med-review/med-review.service';

@Component({
  selector: 'med-review',
  templateUrl: './med-review.component.html',
  styleUrls: ['./med-review.component.css'],
})
export class MedReviewComponent implements OnInit {
  review: any = {};
  indicators: string[] = [];
  alarms: string[] = [];
  medDetails: any = {};

  constructor(private service: MedReviewService) {}

  ngOnInit(): void {
    this.review = this.service.getMedReview(123);
    this.indicators = this.service.getIndicators(123);
    this.alarms = this.service.getAlarms(123);
    this.medDetails = this.service.getMedDetails(123);
  }
}
