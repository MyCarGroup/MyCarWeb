import { Component, OnInit } from "@angular/core";
import { Inject } from "@angular/core";
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { PermisService } from "../../../../services/permis.service";
@Component({
  selector: "app-add-permis-type-modal",
  templateUrl: "./add-permis-type-modal.component.html",
  styleUrls: ["./add-permis-type-modal.component.scss"]
})
export class AddPermisTypeModalComponent implements OnInit {
  permisTypes: any = [];
  selectedPermisType;
  permisTypesToCandidate;
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
  }
}
