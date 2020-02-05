import { SurveyResult } from './survey-result';

describe('SurveyResult', () => {
  describe('calTotalStudent', () => {
    it('should return 0 if no value is initialise', () => {
      const surveyResult = new SurveyResult();
      expect(surveyResult.calTotalStudent()).toEqual(0);
    });

    it('should return 11 if all studentScore is 1', () => {
      const surveyResult = new SurveyResult();
      surveyResult.score0Student = 1;
      surveyResult.score1Student = 1;
      surveyResult.score2Student = 1;
      surveyResult.score3Student = 1;
      surveyResult.score4Student = 1;
      surveyResult.score5Student = 1;
      surveyResult.score6Student = 1;
      surveyResult.score7Student = 1;
      surveyResult.score8Student = 1;
      surveyResult.score9Student = 1;
      surveyResult.score10Student = 1;
      expect(surveyResult.calTotalStudent()).toEqual(11);
    });
  });

  describe('calNps', () => {
    let surveyResult: SurveyResult;

    beforeEach(() => {
      surveyResult = new SurveyResult();
    });

    it('should return 0 if nothing is initialise', () => {
      expect(surveyResult.calNps()).toEqual(0);
    });

    it('should return 100 if only promoter is set to 1', () => {
      surveyResult.score9Student = 1;
      surveyResult.score10Student = 1;
      expect(surveyResult.calNps()).toEqual(100);
    });

    it('should return -100 if only detractors is set to 1', () => {
      surveyResult.score0Student = 1;
      surveyResult.score1Student = 1;
      surveyResult.score2Student = 1;
      surveyResult.score3Student = 1;
      surveyResult.score4Student = 1;
      surveyResult.score5Student = 1;
      surveyResult.score6Student = 1;
      expect(surveyResult.calNps()).toEqual(-100);
    });

    it('should return 0 if non-promoter/detractor is set to 1', () => {
      surveyResult.score7Student = 1;
      surveyResult.score8Student = 1;
      expect(surveyResult.calNps()).toEqual(0);
    });
  });
});
