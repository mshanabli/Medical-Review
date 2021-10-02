import medReview from '../../../assets/json/med-review.json';
import medication from '../../../assets/json/medication.json';

export class MedReviewService {
  getMedReview(patientId: number) {
    return medReview.find((review) => review.patientId === patientId);
  }

  getIndicators(patientId: number) {
    const indicators: string[] = [];

    medication.forEach((med) => {
      if (!indicators.includes(med.status)) indicators.push(med.status);
    });

    return indicators;
  }

  getAlarms(patientId: number) {
    const alarms: string[] = [];

    medication.forEach((med) => {
      if (med.alarm && !alarms.includes(med.alarm)) alarms.push(med.alarm);
    });

    return alarms;
  }

  getMedDetails(patientId: number) {
    const medDetails: any = {};

    medication.forEach((med) => {
      medDetails[med.classification]
        ? medDetails[med.classification].push(med)
        : (medDetails[med.classification] = [med]);
    });

    return medDetails;
  }
}
