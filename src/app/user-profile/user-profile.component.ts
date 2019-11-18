import { Component, OnInit, Inject } from "@angular/core";
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
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {
  control: FormGroup;
  firstname: AbstractControl;
  citys: any[];
  constructor(private fb: FormBuilder) {
    this.control = fb.group({ firstname: ["", Validators.required] });
    this.citys = Citys.filter(city => city);
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.control.value["firstname"]);
  }
}
