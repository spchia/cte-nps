import {SurveyResult} from './survey-result';
import Chart from 'chart.js';

export class SurveyGroup {
  id: string;
  displayName: string;
  surveyResults: SurveyResult[];
  chart: Chart;

  constructor() {
    this.id = 'sgrp' + Date.now();
    this.displayName = '';
    this.surveyResults = [];
  }

  uiCreateChart() {
    const ctx = document.getElementById(this.id);
    const chartSettings = {
      type: 'horizontalBar',
      data: {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: [],
          borderColor: [],
          borderWidth: 1,
          barThickness: 25
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: false
            }
          }]
        }
      }
    };

    for (const surveyResult of this.surveyResults) {
      chartSettings.data.labels.push(surveyResult.project);
      chartSettings.data.datasets[0].data.push(surveyResult.calNps());

      if (surveyResult.nps > 0) {
        chartSettings.data.datasets[0].backgroundColor.push('rgba(40, 167, 69, 0.6)');
        chartSettings.data.datasets[0].borderColor.push('rgba(40, 167, 69, 1)');

      } else {
        chartSettings.data.datasets[0].backgroundColor.push('rgba(255, 99, 132, 0.6)');
        chartSettings.data.datasets[0].borderColor.push('rgba(255, 99, 132, 1)');

      }
    }

    this.chart = new Chart(ctx, chartSettings);

  }

  uiUpdateChartData() {
    this.chart.data.labels = [];
    this.chart.data.datasets[0].data = [];
    this.chart.data.datasets[0].backgroundColor = [];
    this.chart.data.datasets[0].borderColor = [];

    for (const surveyResult of this.surveyResults) {
      this.chart.data.labels.push(surveyResult.project);
      this.chart.data.datasets[0].data.push(surveyResult.calNps());

      if (surveyResult.nps > 0) {
        this.chart.data.datasets[0].backgroundColor.push('rgba(40, 167, 69, 0.6)');
        this.chart.data.datasets[0].borderColor.push('rgba(40, 167, 69, 1)');

      } else {
        this.chart.data.datasets[0].backgroundColor.push('rgba(255, 99, 132, 0.6)');
        this.chart.data.datasets[0].borderColor.push('rgba(255, 99, 132, 1)');

      }
    }

    this.chart.update();
  }

}
