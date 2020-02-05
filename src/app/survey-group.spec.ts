import { SurveyGroup } from './survey-group';
import {SurveyResult} from './survey-result';

describe('SurveyGroup', () => {

  describe('uiCreateChart', () => {
    it('should create chart', () => {
      const dummyElement = document.createElement('div');
      document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);

      const surveyGroup = new SurveyGroup();
      expect(surveyGroup.chart).toBe(undefined);
      surveyGroup.uiCreateChart();
      expect(surveyGroup.chart).not.toBeNull();
    });

    it('should be red color if value is negative', () => {
      const dummyElement = document.createElement('div');
      document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);

      const surveyGroup = new SurveyGroup();
      const surveyResult = new SurveyResult();
      surveyResult.score0Student = 1;
      expect(surveyResult.calNps()).toEqual(-100);

      surveyGroup.surveyResults.push(surveyResult);
      surveyGroup.uiCreateChart();
      expect(surveyGroup.chart.data.datasets[0].data[0]).toEqual(-100);
      expect(surveyGroup.chart.data.datasets[0].backgroundColor[0]).toEqual('rgba(255, 99, 132, 0.6)');
      expect(surveyGroup.chart.data.datasets[0].borderColor[0]).toEqual('rgba(255, 99, 132, 1)');
    });

    it('should be blue color if value is positive', () => {
      const dummyElement = document.createElement('div');
      document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);

      const surveyGroup = new SurveyGroup();
      const surveyResult = new SurveyResult();
      surveyResult.score10Student = 1;
      expect(surveyResult.calNps()).toEqual(100);

      surveyGroup.surveyResults.push(surveyResult);
      surveyGroup.uiCreateChart();
      expect(surveyGroup.chart.data.datasets[0].data[0]).toEqual(100);
      expect(surveyGroup.chart.data.datasets[0].backgroundColor[0]).toEqual('rgba(40, 167, 69, 0.6)');
      expect(surveyGroup.chart.data.datasets[0].borderColor[0]).toEqual('rgba(40, 167, 69, 1)');
    });
  });

  describe('uiChartUpdate', () => {
    it('should update chart with new value', () => {
      let isChartUpdateCalled = false;

      const dummyElement = document.createElement('div');
      document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);

      const surveyGroup = new SurveyGroup();
      const surveyResult = new SurveyResult();
      surveyResult.project = 'old project name';
      surveyResult.score0Student = 1;
      surveyGroup.surveyResults.push(surveyResult);
      surveyGroup.uiCreateChart();

      expect(surveyGroup.chart.data.labels[0]).toEqual('old project name');
      expect(surveyGroup.chart.data.datasets[0].data[0]).toEqual(-100);
      expect(surveyGroup.chart.data.datasets[0].backgroundColor[0]).toEqual('rgba(255, 99, 132, 0.6)');
      expect(surveyGroup.chart.data.datasets[0].borderColor[0]).toEqual('rgba(255, 99, 132, 1)');

      surveyGroup.chart.update = () => { isChartUpdateCalled = true; }; // mock update function for chart
      surveyGroup.surveyResults[0].project = 'new project name';
      surveyGroup.surveyResults[0].score0Student = 0;
      surveyGroup.surveyResults[0].score10Student = 1;
      surveyGroup.uiUpdateChartData();

      expect(surveyGroup.chart.data.labels[0]).toEqual('new project name');
      expect(surveyGroup.chart.data.datasets[0].data[0]).toEqual(100);
      expect(surveyGroup.chart.data.datasets[0].backgroundColor[0]).toEqual('rgba(40, 167, 69, 0.6)');
      expect(surveyGroup.chart.data.datasets[0].borderColor[0]).toEqual('rgba(40, 167, 69, 1)');
      expect(isChartUpdateCalled).toBeTruthy();
    });
  });
});
