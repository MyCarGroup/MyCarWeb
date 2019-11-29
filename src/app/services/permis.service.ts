import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class PermisService {
  constructor(private http: HttpClient) {}
  candidateUrl = "http://localhost:8000/api/";

  getAllCandidate() {
    return this.http.get(this.candidateUrl + "candidate/getAll");
  }

  getPermisTypes() {
    return this.http.get(this.candidateUrl + "permis/types");
  }

  createCandidate(obj) {
    return this.http
      .post(this.candidateUrl + "candidate/add", obj)
      .subscribe(reponse => {
        console.log(reponse);
      });
  }
  addPermisTypesToCandidate(obj1) {
    return this.http
      .post(this.candidateUrl + "permis/addPermisTypesToCandidate", obj1)
      .subscribe(reponse => {
        console.log(reponse);
      });
  }
}
