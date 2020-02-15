import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';


import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';


import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DispensaryLayoutComponent } from './layouts/dispensary-layout/dispensary-layout.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'environments/environment';
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';
import { MatDialogModule, MatSliderModule } from '@angular/material';
import { HospitalsComponent } from './layouts/adminComponents/Hospital/hospitals/hospitals.component';
import { SystemUsersService } from './shared/services/system-users.service';
import { MaterialModule } from './shared/material/material.module';
import { RoleService } from './shared/services/role.service';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { HomeComponent } from './home/home.component';
import { DoctorsLayoutComponent } from './layouts/doctors-layout/doctors-layout.component';
import { Testing2Component } from './testing2/testing2.component';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './login/login.component';
import { PatientsComponent } from './layouts/adminComponents/Patients/patients/patients.component';
import { PatientsListComponent } from './layouts/adminComponents/Patients/patients-list/patients-list.component';
import { BlogListComponent } from './layouts/adminComponents/blog/blog-list/blog-list.component';
import { ArticlesComponent } from './layouts/adminComponents/blog/articles/articles.component';




@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    MaterialModule,
    ToastrModule.forRoot()
   /* AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })*/
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AvatarDialogComponent,
    ConfirmDialogComponent,
    DispensaryLayoutComponent,
    HomeComponent,
    DoctorsLayoutComponent,
    LoginComponent,
   
  ],
  providers: [SystemUsersService, RoleService, HospitalsComponent],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule { }
