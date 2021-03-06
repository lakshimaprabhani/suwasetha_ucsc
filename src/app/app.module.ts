import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';


import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';


import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'environments/environment';
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';
import { MatDialogModule, MatSliderModule } from '@angular/material';
import { SystemUsersService } from './shared/services/system-users.service';
import { PrescriptionsService} from './shared/services/prescriptions.service';
import { PatientDetailsService} from './shared/services/patientdetails.service';
import {LookClinicsService} from './shared/services/lookclinics.service';

import { MaterialModule } from './shared/material/material.module';
import { RoleService } from './shared/services/role.service';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { HomeComponent } from './home/home.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { ComponentsModule } from './components/components.module';


//import { HospitalListComponent } from './layouts/adminComponents/Hospital/hospital-list/hospital-list.component';
// { DispensaryComponentComponent } from './layouts/dispensary-component/dispensary-component.component';

import { DoctorFooterComponent } from './doctor-bars/doctor-footer/doctor-footer.component';
import { DoctorNavbarComponent } from './doctor-bars/doctor-navbar/doctor-navbar.component';
import { DispensaryLayoutComponent } from './layouts/dispensary-layout/dispensary-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';

import { AppointmentsComponent } from './appointments/appointments.component';
import { Nav2Component } from './nav2/nav2.component';
import { BannerComponent } from './banner/banner.component';
//import { AboutComponent } from 'app/layouts/patient-components/about/about.component';
import {MatDatepickerModule} from '@angular/material';

//import { ClinicComponent } from 'app/layouts/patient-components/clinic/clinic.component';
import { ContactComponent } from './contact/contact.component';

import { DoctorsComponent } from './doctors/doctors.component';
import { FooterComponent } from './footer/footer.component';

//import { HospitalComponent } from 'app/layouts/patient-components/hospital/hospital.component';

import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { PrescriptionsComponent } from './layouts/doctor-components/prescription/prescriptions/prescriptions.component';
//import { BookappointmentListComponent } from 'app/layouts/patient-components/bookappointment/bookappointment-list/bookappointment-list.component';
//import { BookappointmentComponent } from 'app/layouts/patient-components/bookappointment/bookappointment.component';
import { BookappointmentService } from './shared/services/bookappointment.service';
//import { ClinicListComponent } from 'app/layouts/patient-components/clinic/clinic-list/clinic-list.component';
import { ClinicService } from './shared/services/clinic.service';
//import { HospitalListComponent } from 'app/layouts/patient-components/hospital/hospital-list/hospital-list.component';
import { HospitalService } from './shared/services/hospital.service';
import { PatientFooterComponent } from './patient-bars/patient-footer/patient-footer.component';
import { PatientNavbarComponent } from './patient-bars/patient-navbar/patient-navbar.component';
import { PatientLayoutComponent } from './layouts/patient-layout/patient-layout.component';

import { PatientService } from './shared/services/patient.service';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { StaffLayoutComponent } from './layouts/staff-layout/staff-layout.component';
import { UpdatepatientComponent } from './layouts/doctor-components/patientdetails/updatepatient/updatepatient.component';



 //import { DoctorComponentsComponent } from './layouts/doctor-components/doctor-components.component';
// import { DashboardComponent } from './layouts/doctor-components/dashboard/dashboard.component';
// import { UserProfileComponent } from './layouts/doctor-components/user-profile/user-profile.component';
//import { AppointmentsComponent } from './layouts/doctor-components/appointments/appointments.component';
//import { PrescriptionsComponent } from './layouts/doctor-components/prescriptions/prescriptions.component';
//import { BlogPostsComponent } from './layouts/doctor-components/blog-posts/blog-posts.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    AdminLayoutModule,
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
    MatDatepickerModule,
    ToastrModule.forRoot()
   /* AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })*/
  ],
  declarations: [
    AppComponent,
    AvatarDialogComponent,
    ConfirmDialogComponent,
    DispensaryLayoutComponent,
    HomeComponent,
    DoctorLayoutComponent,
    AdminLayoutComponent,

    StaffLayoutComponent,
  
   
    

    //DispensaryComponentComponent,

   

  

    DoctorFooterComponent,
    DoctorNavbarComponent,

    AppointmentsComponent,
    Nav2Component,


    AboutComponent,

    ContactComponent,

    
    UpdatepatientComponent,

   


    
    
    ContactComponent,
    DoctorsComponent,
    FooterComponent,
    
    IndexComponent,
    RegisterComponent,
   // DoctorComponentsComponent,

    //AppointmentsComponent,

    //PrescriptionsComponent,
    PrescriptionComponent,
   //BookappointmentListComponent,
   //ClinicListComponent,
   //HospitalListComponent,
   PatientFooterComponent,
   PatientNavbarComponent,
  PatientLayoutComponent,

   //PatientSidebarComponent




  ],


  

  providers: [SystemUsersService, RoleService, PrescriptionsService, BookappointmentService, ClinicService, HospitalService],

  providers: [SystemUsersService, RoleService, PrescriptionsService, PatientService,LookClinicsService,PatientDetailsService],

  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule { }
