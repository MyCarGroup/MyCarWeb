import { Component, OnInit } from "@angular/core";
import { Inject } from "@angular/core";
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { PermisService } from "../../../../services/permis.service";
declare const $: any;

@Component({
  selector: "app-add-permis-type-modal",
  templateUrl: "./add-permis-type-modal.component.html",
  styleUrls: ["./add-permis-type-modal.component.scss"]
})
export class AddPermisTypeModalComponent implements OnInit {
  permisTypes: any = [];
  selectedPermisType;
  permisTypesToCandidate;
  hide: true;
  candidate;
  constructor(
    public dialogRef: MatDialogRef<AddPermisTypeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public datalist: any,
    private permis: PermisService
  ) {
    this.getPermisTypes();
  }

  ngOnInit() {}

  getSelectedPermisType(id) {
    this.selectedPermisType = id;
  }
  getPermisTypes() {
    this.permis.getPermisTypes().subscribe(data => {
      for (const d of data as any) {
        this.permisTypes.push({
          id: d.id,
          label: d.label,
          h_drive_price: d.h_drive_price,
          h_code_price: d.h_code_price
        });
      }
      console.log(this.permisTypes);
    });
  }
  save() {
    console.log(this.selectedPermisType);
    this.permisTypesToCandidate = {
      idCandidate: this.datalist.idCandidate,
      idPermisTypes: this.selectedPermisType
    };
    this.permis.addPermisTypesToCandidate(this.permisTypesToCandidate);
    this.dialogRef.close("the dialog is closed");
    console.log(this.candidate);
    this.showNotification(
      "bottom",
      "left",
      "the Permis type ' " +
        this.permisTypes[this.selectedPermisType - 1].label +
        " ' is affected successfuly to candidate"
    );
  }

  showNotification(from, align, message) {
    $.notify(
      {
        icon: "notifications",
        message: message
      },
      {
        type: "info",
        timer: 100,
        placement: {
          from: from,
          align: align
        },
        template:
          '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          "</div>" +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          "</div>"
      }
    );
  }
}
