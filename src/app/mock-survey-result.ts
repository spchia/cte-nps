import { SurveyResult} from './survey-result';
import {SurveyGroup} from './survey-group';


const surveyResult1a: SurveyResult = new SurveyResult();
surveyResult1a.project = 'Accounting Mobile Game (AMG)';
surveyResult1a.score0Student = 0;
surveyResult1a.score1Student = 0;
surveyResult1a.score2Student = 1;
surveyResult1a.score3Student = 2;
surveyResult1a.score4Student = 2;
surveyResult1a.score5Student = 15;
surveyResult1a.score6Student = 28;
surveyResult1a.score7Student = 40;
surveyResult1a.score8Student = 47;
surveyResult1a.score9Student = 26;
surveyResult1a.score10Student = 37;

const surveyResult1b: SurveyResult = new SurveyResult();
surveyResult1b.project = 'Business Multiplayer Game (BMG)';
surveyResult1b.score0Student = 0;
surveyResult1b.score1Student = 5;
surveyResult1b.score2Student = 4;
surveyResult1b.score3Student = 4;
surveyResult1b.score4Student = 7;
surveyResult1b.score5Student = 18;
surveyResult1b.score6Student = 41;
surveyResult1b.score7Student = 69;
surveyResult1b.score8Student = 86;
surveyResult1b.score9Student = 33;
surveyResult1b.score10Student = 31;

const surveyResult1c: SurveyResult = new SurveyResult();
surveyResult1c.project = 'Legal VR Simulation (VRL)';
surveyResult1c.score0Student = 0;
surveyResult1c.score1Student = 0;
surveyResult1c.score2Student = 0;
surveyResult1c.score3Student = 0;
surveyResult1c.score4Student = 1;
surveyResult1c.score5Student = 2;
surveyResult1c.score6Student = 7;
surveyResult1c.score7Student = 13;
surveyResult1c.score8Student = 38;
surveyResult1c.score9Student = 29;
surveyResult1c.score10Student = 40;

const surveyResult1d: SurveyResult = new SurveyResult();
surveyResult1d.project = 'Statistics Ipad Game (SIG)';
surveyResult1d.score0Student = 0;
surveyResult1d.score1Student = 0;
surveyResult1d.score2Student = 0;
surveyResult1d.score3Student = 1;
surveyResult1d.score4Student = 0;
surveyResult1d.score5Student = 6;
surveyResult1d.score6Student = 19;
surveyResult1d.score7Student = 47;
surveyResult1d.score8Student = 53;
surveyResult1d.score9Student = 34;
surveyResult1d.score10Student = 26;

const surveyGroup1: SurveyGroup = new SurveyGroup();
surveyGroup1.id = 'sgrp1';
surveyGroup1.displayName = 'Semester 1 2019';
surveyGroup1.surveyResults = [
  surveyResult1a,
  surveyResult1b,
  surveyResult1c,
  surveyResult1d
];

const surveyResult2a: SurveyResult = new SurveyResult();
surveyResult2a.project = 'Accounting Mobile Game (AMG)';
surveyResult2a.score0Student = 0;
surveyResult2a.score1Student = 0;
surveyResult2a.score2Student = 0;
surveyResult2a.score3Student = 3;
surveyResult2a.score4Student = 2;
surveyResult2a.score5Student = 24;
surveyResult2a.score6Student = 36;
surveyResult2a.score7Student = 15;
surveyResult2a.score8Student = 28;
surveyResult2a.score9Student = 40;
surveyResult2a.score10Student = 47;

const surveyResult2b: SurveyResult = new SurveyResult();
surveyResult2b.project = 'Business Multiplayer Game (BMG)';
surveyResult2b.score0Student = 0;
surveyResult2b.score1Student = 5;
surveyResult2b.score2Student = 7;
surveyResult2b.score3Student = 7;
surveyResult2b.score4Student = 7;
surveyResult2b.score5Student = 41;
surveyResult2b.score6Student = 18;
surveyResult2b.score7Student = 34;
surveyResult2b.score8Student = 30;
surveyResult2b.score9Student = 84;
surveyResult2b.score10Student = 65;

const surveyResult2c: SurveyResult = new SurveyResult();
surveyResult2c.project = 'Legal VR Simulation (VRL)';
surveyResult2c.score0Student = 0;
surveyResult2c.score1Student = 0;
surveyResult2c.score2Student = 0;
surveyResult2c.score3Student = 1;
surveyResult2c.score4Student = 0;
surveyResult2c.score5Student = 37;
surveyResult2c.score6Student = 26;
surveyResult2c.score7Student = 15;
surveyResult2c.score8Student = 7;
surveyResult2c.score9Student = 40;
surveyResult2c.score10Student = 40;

const surveyResult2d: SurveyResult = new SurveyResult();
surveyResult2d.project = 'Statistics Ipad Game (SIG)';
surveyResult2d.score0Student = 0;
surveyResult2d.score1Student = 0;
surveyResult2d.score2Student = 0;
surveyResult2d.score3Student = 0;
surveyResult2d.score4Student = 1;
surveyResult2d.score5Student = 26;
surveyResult2d.score6Student = 34;
surveyResult2d.score7Student = 6;
surveyResult2d.score8Student = 60;
surveyResult2d.score9Student = 19;
surveyResult2d.score10Student = 40;

const surveyGroup2: SurveyGroup = new SurveyGroup();
surveyGroup2.id = 'sgrp2';
surveyGroup2.displayName = 'Semester 2 2019';
surveyGroup2.surveyResults = [
  surveyResult2a,
  surveyResult2b,
  surveyResult2c,
  surveyResult2d
];

export const SURVEY_RESULTS: SurveyGroup[] = [
  surveyGroup1,
  surveyGroup2
];
