export class SurveyResult {
  project: string;
  score0Student: number;
  score1Student: number;
  score2Student: number;
  score3Student: number;
  score4Student: number;
  score5Student: number;
  score6Student: number;
  score7Student: number;
  score8Student: number;
  score9Student: number;
  score10Student: number;
  nps: number;

  constructor() {
    this.project = '';
    this.score0Student = 0;
    this.score1Student = 0;
    this.score2Student = 0;
    this.score3Student = 0;
    this.score4Student = 0;
    this.score5Student = 0;
    this.score6Student = 0;
    this.score7Student = 0;
    this.score8Student = 0;
    this.score9Student = 0;
    this.score10Student = 0;
  }

  calTotalStudent(): number {
    let totalStudents: number;

    totalStudents = 0;
    totalStudents += +this.score0Student;
    totalStudents += +this.score1Student;
    totalStudents += +this.score2Student;
    totalStudents += +this.score3Student;
    totalStudents += +this.score4Student;
    totalStudents += +this.score5Student;
    totalStudents += +this.score6Student;
    totalStudents += +this.score7Student;
    totalStudents += +this.score8Student;
    totalStudents += +this.score9Student;
    totalStudents += +this.score10Student;

    return totalStudents;
  }

  calNps(): number {
    let nps = 0;

    const totalStudents = this.calTotalStudent();
    const promoters = (((+this.score9Student) + (+this.score10Student)) / totalStudents) * 100;
    const detractors = (((+this.score6Student) + (+this.score5Student) + (+this.score4Student)
      + (+this.score3Student) + (+this.score2Student)
      + (+this.score1Student) + (+this.score0Student))
      / totalStudents ) * 100;
    nps = promoters - detractors;

    if (isNaN(nps)) {
      nps = 0;
    }

    this.nps = nps;

    return nps;
  }
}
