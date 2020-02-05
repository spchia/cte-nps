import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { faTrash, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { SurveyResult } from './survey-result';
import { SurveyGroup } from './survey-group';
import { SURVEY_RESULTS } from './mock-survey-result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
  surveyGroups: SurveyGroup[];
  btnDeleteIcon = faTrash;
  btnReport = faFileDownload;

  constructor() {
  }

  ngOnInit() {
    this.surveyGroups = SURVEY_RESULTS;

  }

  ngAfterViewInit() {
    for (const surveyGroup of this.surveyGroups) {
      surveyGroup.uiCreateChart();
    }
  }

  addSurveyGroup() {
    const newSurveyGroup = new SurveyGroup();
    newSurveyGroup.surveyResults.push(new SurveyResult());
    this.surveyGroups.push(newSurveyGroup);
  }

  removeSurveyGroup(groupIndex) {
    this.surveyGroups.splice(groupIndex, 1);
  }

  addSurveyResult(groupIndex) {
    this.surveyGroups[groupIndex].surveyResults.push(new SurveyResult());
  }

  removeSurveyResult(groupIndex, resultIndex) {
    this.surveyGroups[groupIndex].surveyResults.splice(resultIndex, 1);
    this.surveyGroups[groupIndex].uiUpdateChartData();
  }

  updateChart(groupIndex) {
    if (this.surveyGroups[groupIndex].chart) {
      this.surveyGroups[groupIndex].uiUpdateChartData();
    } else {
      this.surveyGroups[groupIndex].uiCreateChart();
    }
  }

  updateChartLabels(groupIndex, resultIndex) {
    this.surveyGroups[groupIndex].chart.data.labels[resultIndex] = this.surveyGroups[groupIndex].surveyResults[resultIndex].project;
    this.surveyGroups[groupIndex].chart.update();
  }

  downloadPdfReport() {
    const doc = new jsPDF('p', 'mm', 'a4');
    const pageWidth = doc.internal.pageSize.getWidth();
    const fontSize = doc.internal.getFontSize();

    for ( const table of this.surveyGroups ) {
      doc.text(15, 20, table.displayName);

      const tableData = {
        startY: 23,
        head: [['Project', 'Students', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'NPS']],
        body: []
      };

      for (const tableDataRow of table.surveyResults) {
        tableData.body.push([tableDataRow.project, tableDataRow.calTotalStudent(),
          tableDataRow.score0Student, tableDataRow.score1Student, tableDataRow.score2Student, tableDataRow.score3Student,
          tableDataRow.score4Student, tableDataRow.score5Student, tableDataRow.score6Student, tableDataRow.score7Student,
          tableDataRow.score8Student, tableDataRow.score9Student, tableDataRow.score10Student, tableDataRow.calNps().toFixed(6) ]);

      }

      if (table.chart) {
        doc.autoTable(tableData);

        const finalY = doc.lastAutoTable.finalY;
        const chartTitle = 'Net Promoter Score ' + table.displayName;
        const textWidth = doc.getStringUnitWidth(chartTitle) * fontSize / doc.internal.scaleFactor;
        doc.text((pageWidth - textWidth) / 2, finalY + 20, chartTitle);
        doc.addImage(table.chart.toBase64Image(), (pageWidth / 10), finalY + 22, (pageWidth / 10) * 8, 80);
        doc.addPage();
      }
    }

    const pageCount = doc.internal.getNumberOfPages();
    doc.deletePage(pageCount);
    doc.save('table.pdf');
  }
}
