import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";

import { AppComponent } from "./app.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddCandidateComponent } from "./layouts/admin-layout/add-candidate/add-candidate.component";
import { TypographyComponent } from "./typography/typography.component";
import { IconsComponent } from "./icons/icons.component";
import { MapsComponent } from "./maps/maps.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { UpgradeComponent } from "./upgrade/upgrade.component";
import { AgmCoreModule } from "@agm/core";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AdminProfileComponent } from "./layouts/admin-layout/admin-profile/admin-profile.component";
import { LoginComponent } from "./layouts/login/login.component";
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from "@angular/material";
import { AddPermisTypeModalComponent } from "./layouts/admin-layout/candidate-list/add-permis-type-modal/add-permis-type-modal.component";
import { MatRadioModule } from "@angular/material/radio";
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpModule,
    MatButtonModule,
    HttpClientModule,
    ComponentsModule,
    MatSelectModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "YOUR_GOOGLE_MAPS_API_KEY"
    })
  ],
  entryComponents: [AddPermisTypeModalComponent],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PageNotFoundComponent,
    LoginComponent,
    AddPermisTypeModalComponent
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
