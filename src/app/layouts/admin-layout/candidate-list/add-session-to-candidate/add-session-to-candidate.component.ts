import { Component, OnInit } from "@angular/core";
import { Inject } from "@angular/core";
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { NgbDateStruct, NgbCalendar } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "add-session-to-candidate",
  templateUrl: "./add-session-to-candidate.component.html",
  styles: ["./add-session-to-candidate.component.scss"]
})
export class AddSessionToCandidateComponent implements OnInit {
  model: NgbDateStruct;
  date: { year: number; month: number };
  endTime = { hour: 13, minute: 30 };
  startTime = { hour: 13, minute: 30 };
  constructor(
    public dialogRef: MatDialogRef<AddSessionToCandidateComponent>,
    @Inject(MAT_DIALOG_DATA) public datalist: any,
    private calendar: NgbCalendar
  ) {}

  ngOnInit() {
    this.selectToday();
  }
  selectToday() {
    this.model = this.calendar.getToday();
  }
}
