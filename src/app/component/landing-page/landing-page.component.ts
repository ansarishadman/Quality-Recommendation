import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/service/mock-data.service';
import * as moment from 'moment';
import { CsvService } from 'src/app/service/csv.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(
    private mockDataFromService: MockDataService,
    private csvService: CsvService
  ) {}

  dataCSV: any;
  csvFileName: any;
  incidentData: any;
  summaryData: any;
  notesData: any;
  resolutionData: any;
  worklogData: any;
  incidentUrl: string = 'http://localhost:3000/recommendationSystem1';
  summaryUrl: string = 'http://localhost:3000/summary';
  notesUrl: string = 'http://localhost:3000/notes';
  resolutionUrl: string = 'http://localhost:3000/resolution';
  worklogUrl: string = 'http://localhost:3000/worklog_notes';
  randomIncidentNo: any;
  summaryDataInfo: any;
  notesDataInfo: any;
  resolutionDataInfo: any;
  worklogDataInfo: any;
  incidentNoR1: any;
  summaryDataInfoR1: any;
  notesDataInfoR1: any;
  resolutionDataInfoR1: any;
  worklogDataInfoR1: any;
  incidentNoR2: any;
  summaryDataInfoR2: any;
  notesDataInfoR2: any;
  resolutionDataInfoR2: any;
  worklogDataInfoR2: any;
  incidentNoR3: any;
  summaryDataInfoR3: any;
  notesDataInfoR3: any;
  resolutionDataInfoR3: any;
  worklogDataInfoR3: any;
  incidentNumbersForSystem1: any;
  slider2Rating: any = '50';
  slider3Rating: any = '50';
  slider4Rating: any = '50';
  slider2RatingInf: any = '50';
  slider3RatingInf: any = '50';
  slider4RatingInf: any = '50';
  showFirstPage = false;
  showSecondPage = false;
  showThirdPage = false;
  showCompletedPage = false;
  finalCompiledDataForAllSystems: any = [];
  pageNumber: any;

  ngOnInit(): void {
    this.finalCompiledDataForAllSystems = [];
    this.pageNumber = '1';
    this.showFirstPage = true;
    this.showSecondPage = false;
    this.showThirdPage = false;
    this.showCompletedPage = false;
    this.fetchDataFromService();
  }

  // download csv
  downloadCSV(finalCompiledDataForAllSystems: any) {
    if (
      finalCompiledDataForAllSystems &&
      finalCompiledDataForAllSystems.length > 0
    ) {
      const csvData = [];
      for (let i = 0; i < 3; i++) {
        let System_Number;
        let Incident_Number;
        let Relatedness_Rating;
        let Informativeness_Rating;
        let system1Data = finalCompiledDataForAllSystems[0].System1Data;
        let system2Data = finalCompiledDataForAllSystems[1].System2Data;
        let system3Data = finalCompiledDataForAllSystems[2].System3Data;
        for (let j = 0; j < 4; j++) {
          if (j === 0) {
            const data1 =
              i === 0
                ? system1Data.INC1
                : i === 1
                ? system2Data.INC1
                : system3Data.INC1;
            System_Number = i === 0 ? '1' : i === 1 ? '2' : '3';
            Incident_Number = data1.incidentNo1;
            Relatedness_Rating = '';
            Informativeness_Rating = '';
            const _csvdata = {
              System_Number,
              Incident_Number,
              Relatedness_Rating,
              Informativeness_Rating,
            };
            csvData.push(_csvdata);
          } else if (j === 1) {
            const data2 =
              i === 0
                ? system1Data.INC2
                : i === 1
                ? system2Data.INC2
                : system3Data.INC2;
            System_Number = '';
            Incident_Number = data2.incidentNo2;
            Relatedness_Rating = data2.rating2Rec;
            Informativeness_Rating = data2.rating2Inf;
            const _csvdata = {
              System_Number,
              Incident_Number,
              Relatedness_Rating,
              Informativeness_Rating,
            };
            csvData.push(_csvdata);
          } else if (j === 2) {
            const data3 =
              i === 0
                ? system1Data.INC3
                : i === 1
                ? system2Data.INC3
                : system3Data.INC3;
            System_Number = '';
            Incident_Number = data3.incidentNo3;
            Relatedness_Rating = data3.rating3Rec;
            Informativeness_Rating = data3.rating3Inf;
            const _csvdata = {
              System_Number,
              Incident_Number,
              Relatedness_Rating,
              Informativeness_Rating,
            };
            csvData.push(_csvdata);
          } else if (j === 3) {
            const data4 =
              i === 0
                ? system1Data.INC4
                : i === 1
                ? system2Data.INC4
                : system3Data.INC4;
            System_Number = '';
            Incident_Number = data4.incidentNo4;
            Relatedness_Rating = data4.rating4Rec;
            Informativeness_Rating = data4.rating4Inf;
            const _csvdata = {
              System_Number,
              Incident_Number,
              Relatedness_Rating,
              Informativeness_Rating,
            };
            csvData.push(_csvdata);
          }
        }
      }
      this.dataCSV = csvData;
      this.csvFileName = 'QualityRecommendation' + moment().format();
      this.csvService.downloadFile(this.dataCSV, this.csvFileName);
    }
  }

  nextPage1() {
    const saveFinalSurveyData1 = {
      INC1: {
        incidentNo1: this.randomIncidentNo,
        summary1: this.summaryDataInfo,
        notes1: this.notesDataInfo,
        resolution1: this.resolutionDataInfo,
        worklogNotes1: this.worklogDataInfo,
      },
      INC2: {
        incidentNo2: this.incidentNoR1,
        summary2: this.summaryDataInfoR1,
        notes2: this.notesDataInfoR1,
        resolution2: this.resolutionDataInfoR1,
        worklogNotes2: this.worklogDataInfoR1,
        rating2Rec: this.slider2Rating,
        rating2Inf: this.slider2RatingInf,
      },
      INC3: {
        incidentNo3: this.incidentNoR2,
        summary3: this.summaryDataInfoR2,
        notes3: this.notesDataInfoR2,
        resolution3: this.resolutionDataInfoR2,
        worklogNotes3: this.worklogDataInfoR2,
        rating3Rec: this.slider3Rating,
        rating3Inf: this.slider3RatingInf,
      },
      INC4: {
        incidentNo4: this.incidentNoR3,
        summary4: this.summaryDataInfoR3,
        notes4: this.notesDataInfoR3,
        resolution4: this.resolutionDataInfoR3,
        worklogNotes4: this.worklogDataInfoR3,
        rating4Rec: this.slider4Rating,
        rating4Inf: this.slider4RatingInf,
      },
    };

    this.finalCompiledDataForAllSystems.push({
      System1Data: saveFinalSurveyData1,
    });
    this.showSecondPageWithData(saveFinalSurveyData1.INC1);
  }

  nextPage2() {
    const saveFinalSurveyData2 = {
      INC1: {
        incidentNo1: this.randomIncidentNo,
        summary1: this.summaryDataInfo,
        notes1: this.notesDataInfo,
        resolution1: this.resolutionDataInfo,
        worklogNotes1: this.worklogDataInfo,
      },
      INC2: {
        incidentNo2: this.incidentNoR1,
        summary2: this.summaryDataInfoR1,
        notes2: this.notesDataInfoR1,
        resolution2: this.resolutionDataInfoR1,
        worklogNotes2: this.worklogDataInfoR1,
        rating2Rec: this.slider2Rating,
        rating2Inf: this.slider2RatingInf,
      },
      INC3: {
        incidentNo3: this.incidentNoR2,
        summary3: this.summaryDataInfoR2,
        notes3: this.notesDataInfoR2,
        resolution3: this.resolutionDataInfoR2,
        worklogNotes3: this.worklogDataInfoR2,
        rating3Rec: this.slider3Rating,
        rating3Inf: this.slider3RatingInf,
      },
      INC4: {
        incidentNo4: this.incidentNoR3,
        summary4: this.summaryDataInfoR3,
        notes4: this.notesDataInfoR3,
        resolution4: this.resolutionDataInfoR3,
        worklogNotes4: this.worklogDataInfoR3,
        rating4Rec: this.slider4Rating,
        rating4Inf: this.slider4RatingInf,
      },
    };

    this.finalCompiledDataForAllSystems.push({
      System2Data: saveFinalSurveyData2,
    });
    this.showThirdPageWithData(saveFinalSurveyData2.INC1);
  }

  finalSubmit() {
    const saveFinalSurveyData3 = {
      INC1: {
        incidentNo1: this.randomIncidentNo,
        summary1: this.summaryDataInfo,
        notes1: this.notesDataInfo,
        resolution1: this.resolutionDataInfo,
        worklogNotes1: this.worklogDataInfo,
      },
      INC2: {
        incidentNo2: this.incidentNoR1,
        summary2: this.summaryDataInfoR1,
        notes2: this.notesDataInfoR1,
        resolution2: this.resolutionDataInfoR1,
        worklogNotes2: this.worklogDataInfoR1,
        rating2Rec: this.slider2Rating,
        rating2Inf: this.slider2RatingInf,
      },
      INC3: {
        incidentNo3: this.incidentNoR2,
        summary3: this.summaryDataInfoR2,
        notes3: this.notesDataInfoR2,
        resolution3: this.resolutionDataInfoR2,
        worklogNotes3: this.worklogDataInfoR2,
        rating3Rec: this.slider3Rating,
        rating3Inf: this.slider3RatingInf,
      },
      INC4: {
        incidentNo4: this.incidentNoR3,
        summary4: this.summaryDataInfoR3,
        notes4: this.notesDataInfoR3,
        resolution4: this.resolutionDataInfoR3,
        worklogNotes4: this.worklogDataInfoR3,
        rating4Rec: this.slider4Rating,
        rating4Inf: this.slider4RatingInf,
      },
    };

    this.finalCompiledDataForAllSystems.push({
      System3Data: saveFinalSurveyData3,
    });
    this.downloadCSV(this.finalCompiledDataForAllSystems);
    this.showFirstPage = false;
    this.showSecondPage = false;
    this.showThirdPage = false;
    this.showCompletedPage = true;
  }

  showSecondPageWithData(incData: any) {
    this.slider2Rating = '50';
    this.slider3Rating = '50';
    this.slider4Rating = '50';
    this.slider2RatingInf = '50';
    this.slider3RatingInf = '50';
    this.slider4RatingInf = '50';
    this.pageNumber = '2';
    this.showFirstPage = false;
    this.showSecondPage = true;
    this.showThirdPage = false;
    this.showCompletedPage = false;
    this.getSystem2Recommendation(incData);
  }

  showThirdPageWithData(incData: any) {
    this.slider2Rating = '50';
    this.slider3Rating = '50';
    this.slider4Rating = '50';
    this.slider2RatingInf = '50';
    this.slider3RatingInf = '50';
    this.slider4RatingInf = '50';
    this.pageNumber = '3';
    this.showFirstPage = false;
    this.showSecondPage = false;
    this.showThirdPage = true;
    this.showCompletedPage = false;
    this.getSystem3Recommendation(incData);
  }

  slider2Change(event: any) {
    this.slider2Rating = event.target.value;
  }

  slider3Change(event: any) {
    this.slider3Rating = event.target.value;
  }

  slider4Change(event: any) {
    this.slider4Rating = event.target.value;
  }

  slider2ChangeInf(event: any) {
    this.slider2RatingInf = event.target.value;
  }

  slider3ChangeInf(event: any) {
    this.slider3RatingInf = event.target.value;
  }

  slider4ChangeInf(event: any) {
    this.slider4RatingInf = event.target.value;
  }

  fetchDataFromService() {
    this.getWorklogDataFromService(this.worklogUrl);
    this.getResolutionDataFromService(this.resolutionUrl);
    this.getNotesDataFromService(this.notesUrl);
    this.getSummaryDataFromService(this.summaryUrl);
    this.getIncidentDataFromService(this.incidentUrl);
  }

  getFirstSetData(incidentData: any) {
    var keys = Object.keys(incidentData);
    this.randomIncidentNo = keys[(keys.length * Math.random()) << 0];
    this.incidentNumbersForSystem1 =
      incidentData[keys[(keys.length * Math.random()) << 0]];
    this.setDataValues();
  }

  setDataValues() {
    const that = this;
    const value = setInterval(setData, 500);
    function setData() {
      that.summaryDataInfo = that.summaryData[that.randomIncidentNo]
        ? that.summaryData[that.randomIncidentNo]
        : '';
      that.notesDataInfo = that.notesData[that.randomIncidentNo]
        ? that.notesData[that.randomIncidentNo]
        : '';
      that.resolutionDataInfo = that.resolutionData[that.randomIncidentNo]
        ? that.resolutionData[that.randomIncidentNo]
        : '';
      that.worklogDataInfo = that.worklogData[that.randomIncidentNo]
        ? that.worklogData[that.randomIncidentNo]
        : '';
      if (
        that.summaryDataInfo &&
        that.notesDataInfo &&
        that.resolutionDataInfo &&
        that.worklogDataInfo
      ) {
        clearInterval(value);
        that.getSystem1Recommendation();
      }
    }
  }

  setDataValuesSystem1Recommendation1(incidentNo: any) {
    const that = this;
    const value = setInterval(setData, 500);
    function setData() {
      that.incidentNoR1 = incidentNo;
      that.summaryDataInfoR1 = that.summaryData[incidentNo]
        ? that.summaryData[incidentNo]
        : '';
      that.notesDataInfoR1 = that.notesData[incidentNo]
        ? that.notesData[incidentNo]
        : '';
      that.resolutionDataInfoR1 = that.resolutionData[incidentNo]
        ? that.resolutionData[incidentNo]
        : '';
      that.worklogDataInfoR1 = that.worklogData[incidentNo]
        ? that.worklogData[incidentNo]
        : '';
      if (
        that.summaryDataInfoR1 &&
        that.notesDataInfoR1 &&
        that.resolutionDataInfoR1 &&
        that.worklogDataInfoR1
      ) {
        clearInterval(value);
      }
    }
  }

  setDataValuesSystem1Recommendation2(incidentNo: any) {
    const that = this;
    const value = setInterval(setData, 500);
    function setData() {
      that.incidentNoR2 = incidentNo;
      that.summaryDataInfoR2 = that.summaryData[incidentNo]
        ? that.summaryData[incidentNo]
        : '';
      that.notesDataInfoR2 = that.notesData[incidentNo]
        ? that.notesData[incidentNo]
        : '';
      that.resolutionDataInfoR2 = that.resolutionData[incidentNo]
        ? that.resolutionData[incidentNo]
        : '';
      that.worklogDataInfoR2 = that.worklogData[incidentNo]
        ? that.worklogData[incidentNo]
        : '';
      if (
        that.summaryDataInfoR2 &&
        that.notesDataInfoR2 &&
        that.resolutionDataInfoR2 &&
        that.worklogDataInfoR2
      ) {
        clearInterval(value);
      }
    }
  }

  setDataValuesSystem1Recommendation3(incidentNo: any) {
    const that = this;
    const value = setInterval(setData, 500);
    function setData() {
      that.incidentNoR3 = incidentNo;
      that.summaryDataInfoR3 = that.summaryData[incidentNo]
        ? that.summaryData[incidentNo]
        : '';
      that.notesDataInfoR3 = that.notesData[incidentNo]
        ? that.notesData[incidentNo]
        : '';
      that.resolutionDataInfoR3 = that.resolutionData[incidentNo]
        ? that.resolutionData[incidentNo]
        : '';
      that.worklogDataInfoR3 = that.worklogData[incidentNo]
        ? that.worklogData[incidentNo]
        : '';
      if (
        that.summaryDataInfoR3 &&
        that.notesDataInfoR3 &&
        that.resolutionDataInfoR3 &&
        that.worklogDataInfoR3
      ) {
        clearInterval(value);
      }
    }
  }

  getSystem1Recommendation() {
    const url: string = 'http://localhost:3000/recommendationSystem1';
    this.mockDataFromService
      .getAll(url)
      .subscribe((res) => this.setSystem1Data(res));
  }

  getSystem2Recommendation(incData: any) {
    const incidentNo = incData.incidentNo1;
    const url: string = 'http://localhost:3000/recommendationSystem2';
    this.mockDataFromService
      .getAll(url)
      .subscribe((res) => this.setSystem2Data(incidentNo, res));
  }

  getSystem3Recommendation(incData: any) {
    const incidentNo = incData.incidentNo1;
    const url: string = 'http://localhost:3000/recommendationSystem3';
    this.mockDataFromService
      .getAll(url)
      .subscribe((res) => this.setSystem3Data(incidentNo, res));
  }

  setSystem1Data(data: any) {
    let incidentNumbers = [];
    incidentNumbers = data[this.randomIncidentNo];
    if (incidentNumbers) {
      this.setDataValuesSystem1Recommendation1(incidentNumbers[0]);
      this.setDataValuesSystem1Recommendation2(incidentNumbers[1]);
      this.setDataValuesSystem1Recommendation3(incidentNumbers[2]);
    }
  }

  setSystem2Data(incNo: any, data: any) {
    let incidentNumbers = [];
    incidentNumbers = data[incNo];
    if (incidentNumbers) {
      this.setDataValuesSystem1Recommendation1(incidentNumbers[0]);
      this.setDataValuesSystem1Recommendation2(incidentNumbers[1]);
      this.setDataValuesSystem1Recommendation3(incidentNumbers[2]);
    }
  }

  setSystem3Data(incNo: any, data: any) {
    let incidentNumbers = [];
    incidentNumbers = data[incNo];
    if (incidentNumbers) {
      this.setDataValuesSystem1Recommendation1(incidentNumbers[0]);
      this.setDataValuesSystem1Recommendation2(incidentNumbers[1]);
      this.setDataValuesSystem1Recommendation3(incidentNumbers[2]);
    }
  }

  getIncidentDataFromService(url: string) {
    this.mockDataFromService.getAll(url).subscribe(
      (res) => {
        this.incidentData = res;
        this.getFirstSetData(res);
      },
      (error) => console.log(error)
    );
  }

  getSummaryDataFromService(url: string) {
    this.mockDataFromService.getAll(url).subscribe(
      (res) => {
        this.summaryData = res;
      },
      (error) => console.log(error)
    );
  }

  getNotesDataFromService(url: string) {
    this.mockDataFromService.getAll(url).subscribe(
      (res) => {
        this.notesData = res;
      },
      (error) => console.log(error)
    );
  }

  getResolutionDataFromService(url: string) {
    this.mockDataFromService.getAll(url).subscribe(
      (res) => {
        this.resolutionData = res;
      },
      (error) => console.log(error)
    );
  }

  getWorklogDataFromService(url: string) {
    this.mockDataFromService.getAll(url).subscribe(
      (res) => {
        this.worklogData = res;
      },
      (error) => console.log(error)
    );
  }
}
