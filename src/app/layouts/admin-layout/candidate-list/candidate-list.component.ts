import { Component, OnInit } from "@angular/core";
import { PermisService } from "../../../services/permis.service";

import { AddPermisTypeModalComponent } from "./add-permis-type-modal/add-permis-type-modal.component";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
@Component({
  selector: "app-candidate-list",
  templateUrl: "./candidate-list.component.html",
  styleUrls: ["./candidate-list.component.scss"]
})
export class CandidateListComponent implements OnInit {
  constructor(private permis: PermisService, public dialog: MatDialog) {}
  candidates: any = [];
  permisTypes: any = [];
  ngOnInit() {
    this.getAllCandidates();
  }

  //------------------------
  openDialog(idCandidate): void {
    let dialogRef = this.dialog.open(AddPermisTypeModalComponent, {
      data: {
        idCandidate: idCandidate
      },
      height: "300px",
      width: "600px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      if (result) {
        console.log(result);
      }
    });
  }
  getAllCandidates() {
    this.permis.getAllCandidate().subscribe(data => {
      for (const d of data as any) {
        this.candidates.push({
          id: d.id,
          firstname: d.firstname,
          lastname: d.lastname,
          email: d.email
        });
      }
      console.log(this.candidates);
    });
  }
}
