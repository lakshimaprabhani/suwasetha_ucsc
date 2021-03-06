import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DispensaryLayoutRoutes } from './dispensary-layout.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, 
  MatRippleModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatSelectModule, 
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';

//import { BlogPostsComponent } from 'app/layouts/adminComponents/blog-posts/blog-posts.component';
import { MaterialModule } from 'app/shared/material/material.module';
import { HospitalsComponent } from '../adminComponents/Hospital/hospitals/hospitals.component';
import { HospitalListComponent } from '../adminComponents/Hospital/hospital-list/hospital-list.component';
import { DashboardComponent } from '../adminComponents/dashboard/dashboard.component';
import { UserProfileComponent } from '../adminComponents/user-profile/user-profile.component';
import { BlogPostsComponent } from '../adminComponents/blog/blog-posts/blog-posts.component';
import { SystemUsersListComponent } from 'app/systemUsers/system-users-list/system-users-list.component';
import { SystemUsersComponent } from 'app/systemUsers/system-users/system-users.component';
import { TestingComponent } from 'app/testing/testing.component';
import { HomeComponent } from 'app/home/home.component';
import { PrescriptionComponent } from 'app/prescription/prescription.component';



@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(DispensaryLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MaterialModule
   
  ],
  declarations: [
    TestingComponent,
    DashboardComponent,
    UserProfileComponent,
    BlogPostsComponent,
    SystemUsersListComponent,
    SystemUsersComponent,
   PrescriptionComponent

   /* TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,*/
  ],
  entryComponents: [SystemUsersComponent]
  
})
export class DispensaryLayoutModule { }
