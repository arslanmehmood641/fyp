import { AlertService } from './Services/alert.service';
import { MediaService } from "./Services/media.service";
import { UserService } from "./Services/user.service";
import { HallsService } from "./Services/halls.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { HttpModule } from "@angular/http";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { VenueDetailComponent } from "./venue-detail/venue-detail.component";
import { AdminBarComponent } from "./admin-bar/admin-bar.component";
import { ClientBarComponent } from "./client-bar/client-bar.component";
import { VenueListComponent } from "./venue-list/venue-list.component";
import { CatererListComponent } from "./caterer-list/caterer-list.component";
import { PhotographerListComponent } from "./photographer-list/photographer-list.component";
import { VenueListAdminComponent } from "./venue-list-admin/venue-list-admin.component";
import { CreateVenueComponent } from "./create-venue/create-venue.component";
import { VenueRequestComponent } from "./venue-request/venue-request.component";
import { VenueManageComponent } from "./venue-manage/venue-manage.component";
import { ProfileComponent } from "./profile/profile.component";
import { HallBookingComponent } from "./hall-booking/hall-booking.component";
import { HallBookingsAdminComponent } from "./hall-bookings-admin/hall-bookings-admin.component";
import { CatererService } from "./Services/caterer.service";
import { CatererDetailComponent } from "./caterer-detail/caterer-detail.component";
import { PhotographerComponent } from "./photographer/photographer.component";
import { CreateCatererComponent } from './create-caterer/create-caterer.component';
import { CreateMediaComponent } from './create-media/create-media.component';
import { PackegeDetailComponent } from './packege-detail/packege-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    VenueDetailComponent,
    AdminBarComponent,
    ClientBarComponent,
    VenueListComponent,
    CatererListComponent,
    PhotographerListComponent,
    VenueListAdminComponent,
    CreateVenueComponent,
    VenueRequestComponent,
    VenueManageComponent,
    ProfileComponent,
    HallBookingComponent,
    HallBookingsAdminComponent,
    CatererDetailComponent,
    PhotographerComponent,
    CreateCatererComponent,
    CreateMediaComponent,
    PackegeDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
      { path: "", component: LoginComponent, pathMatch: "full" },
      { path: "home", component: HomeComponent },
      { path: "signup", component: SignUpComponent },
      { path: "venueDetail/:companyId", component: VenueDetailComponent },
      { path: "admin", component: AdminBarComponent },
      { path: "venuelist", component: VenueListComponent },
      { path: "catererlist", component: CatererListComponent },
      { path: "photographerlist", component: PhotographerListComponent },
      { path: "client", component: ClientBarComponent },
      { path: "venuelistadmin", component: VenueListAdminComponent },
      { path: "createvenue", component: CreateVenueComponent },
      { path: "venuerequest", component: VenueRequestComponent },
      { path: "venuemanage", component: VenueManageComponent },
      { path: "profile", component: ProfileComponent },
      { path: "hallbooking/:id", component: HallBookingComponent },
      { path: "hallbookingadmin/:id", component: HallBookingsAdminComponent },
      { path: "catererdetail/:id", component: CatererDetailComponent },
      { path: "mediadetail/:id", component: PhotographerComponent },
      { path: "createcaterer", component: CreateCatererComponent },
      { path: "createmedia", component: CreateMediaComponent },
      { path: "packegedetail/:id", component: PackegeDetailComponent }
    ])
  ],
  providers: [HallsService, UserService, CatererService, MediaService,AlertService],

  bootstrap: [AppComponent]
})
export class AppModule {}
