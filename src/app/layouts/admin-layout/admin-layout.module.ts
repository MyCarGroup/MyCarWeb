import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../dashboard/dashboard.component";
import { AddCandidateComponent } from "./add-candidate/add-candidate.component";
import { TypographyComponent } from "../../typography/typography.component";
import { IconsComponent } from "../../icons/icons.component";
import { MapsComponent } from "../../maps/maps.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { UpgradeComponent } from "../../upgrade/upgrade.component";
import { AdminProfileComponent } from "./admin-profile/admin-profile.component";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material";

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from "@angular/material";
import { CandidateListComponent } from "./candidate-list/candidate-list.component";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    MatTooltipModule
  ],
  declarations: [
    DashboardComponent,
    AddCandidateComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    AdminProfileComponent,
    UpgradeComponent,
    CandidateListComponent
  ]
})
export class AdminLayoutModule {}
