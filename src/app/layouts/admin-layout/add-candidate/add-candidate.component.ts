import { Component, OnInit, Inject } from "@angular/core";
import { PermisService } from "../../../services/permis.service";

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms";
declare const $: any;

declare interface CityInfo {
  value: string;
  title: string;
}

export const Citys: CityInfo[] = [
  { value: "1", title: "Ariana" },
  { value: "2", title: "Béja" },
  { value: "3", title: "Ben Arous" },
  { value: "4", title: "Bizerte" },
  { value: "5", title: "Gabes" },
  { value: "6", title: "Gafsa" },
  { value: "7", title: "Jendouba" },
  { value: "8", title: "Kairouan" },
  { value: "9", title: "Kasserine" },
  { value: "10", title: "Kebili" },
  { value: "11", title: "La Manouba" },
  { value: "12", title: "Mahdia" },
  { value: "13", title: "Médenine" },
  { value: "14", title: "Monastir" },
  { value: "15", title: "Nabeul" },
  { value: "16", title: "Sfax" },
  { value: "17", title: "Sidi Bouzid " },
  { value: "18", title: "Siliana" },
  { value: "19", title: "Sousse" },
  { value: "20", title: "Tataouine" },
  { value: "21", title: "Tozeur" },
  { value: "22", title: "Tunis" },
  { value: "23", title: "Zaghouan" },
  { value: "24", title: "Le Kef" }
];
@Component({
  selector: "add-candidate",
  templateUrl: "./add-candidate.component.html",
  styleUrls: ["./add-candidate.component.css"]
})
export class AddCandidateComponent implements OnInit {
  form: FormGroup;
  hide: true;
  candidate: any;
  firstname: AbstractControl;
  citys: any[];
  constructor(private permis: PermisService, private fb: FormBuilder) {
    this.form = new FormGroup({
      firstname: new FormControl(""),
      lastname: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl("")
    });
    //this.citys = Citys.filter(city => city);
  }

  ngOnInit() {}

  onSubmit() {
    if (this.form.controls.firstname.value != "") {
      this.showNotification("bottom", "left");
    }
    this.candidate = {
      firstname: this.form.controls.firstname.value,
      lastname: this.form.controls.lastname.value,
      email: this.form.controls.email.value,
      password: this.form.controls.password.value
    };

    this.permis.createCandidate(this.candidate);
  }
  showNotification(from, align) {
    const type = ["", "info", "success", "warning", "danger"];

    const color = Math.floor(Math.random() * 4 + 1);

    $.notify(
      {
        icon: "notifications",
        message:
          "The candidate <strong> <b>" +
          this.form.controls.firstname.value +
          "</b> </strong> - Is added successfully"
      },
      {
        type: type[color],
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
