import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {FlashMessagesModule} from "angular2-flash-messages";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/common/header/header.component';
import {WelcomeComponent} from './components/common/welcome/welcome.component';
import {SearchResultsComponent} from './components/search/search-results/search-results.component';
import {RegisterComponent} from './components/users/register/register.component';
import {LoginComponent} from './components/users/login/login.component';
import {ProfileComponent} from './components/users/profile/profile.component';
import {EditProfileComponent} from './components/users/edit-profile/edit-profile.component';
import {AddItemComponent} from './components/items/add-item/add-item.component';
import {AddServiceComponent} from './components/items/add-service/add-service.component';
import {ViewItemComponent} from './components/items/view-item/view-item.component';
import {ViewServiceComponent} from './components/items/view-service/view-service.component';
import {ViewUserComponent} from './components/users/view-user/view-user.component';
import {EditAccountComponent} from './components/users/edit-account/edit-account.component';
import {EditItemComponent} from './components/items/edit-item/edit-item.component';
import {EditServiceComponent} from './components/items/edit-service/edit-service.component';
import {NotificationsComponent} from './components/common/notifications/notifications.component';
import {RequestsComponent} from './components/common/requests/requests.component';
import {AdminDashboardComponent} from './components/common/admin-dashboard/admin-dashboard.component';
import {HelpComponent} from './components/common/help/help.component';
import {HelpReglogComponent} from './components/common/help/help-reglog/help-reglog.component';
import {HelpProfComponent} from './components/common/help/help-prof/help-prof.component';
import {HelpHomeComponent} from './components/common/help/help-home/help-home.component';
import {HelpNavbarComponent} from './components/common/help/help-navbar/help-navbar.component';
import {HelpEditprofComponent} from './components/common/help/help-editprof/help-editprof.component';
import {HelpAddsaleComponent} from './components/common/help/help-addsale/help-addsale.component';
import {HelpEditsaleComponent} from './components/common/help/help-editsale/help-editsale.component';
import {HelpFavreqsaleComponent} from './components/common/help/help-favreqsale/help-favreqsale.component';
import {HelpReviewsaleComponent} from './components/common/help/help-reviewsale/help-reviewsale.component';
import {HelpNotificationsComponent} from './components/common/help/help-notifications/help-notifications.component';
import {HelpSearchComponent} from './components/common/help/help-search/help-search.component';
import {HelpRequestsComponent} from './components/common/help/help-requests/help-requests.component';

import {EnterPassDialog} from './components/users/edit-profile/enter-pass/enter-pass.component';
import {ConfirmDeleteDialog} from "./components/items/view-item/confirm-delete/confirm-delete.component";
import {ConfirmServicedeleteDialog} from './components/items/view-service/confirm-servicedelete/confirm-servicedelete.component';
import {AddReviewDialog} from './components/items/view-item/add-review/add-review.component';
import {AddServiceReviewDialog} from './components/items/view-service/add-service-review/add-service-review.component';
import {ConfirmReviewDeleteDialog} from './components/users/profile/confirm-review-delete/confirm-review-delete.component';
import {EditReviewDialog} from './components/users/profile/edit-review/edit-review.component';
import {ConfirmDeleteAccountDialog} from './components/users/edit-account/confirm-delete-account/confirm-delete-account.component';

import {ValidateService} from "./services/validate/validate.service";
import {AuthService} from "./services/authenticate/auth.service";
import {ItemService} from "./services/items/item.service";
import {SearchService} from './services/search/search.service';
import {ReviewService} from './services/reviews/review.service';
import {NotificationsService} from './services/notifications/notifications.service';
import {RequestService} from './services/requests/request.service';
import {AdminService} from './services/admin/admin.service';
import {ImageService} from './services/image/image.service';

import {AuthGuard} from "./guards/auth.guard";

const appRoutes = [
  {path: '', component: WelcomeComponent},
  {path: 'search/:query', component: SearchResultsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'notifications', component: NotificationsComponent, canActivate: [AuthGuard]},
  {path: 'requests', component: RequestsComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'profile/editProf', component: EditProfileComponent, canActivate: [AuthGuard]},
  {path: 'profile/editAcc', component: EditAccountComponent, canActivate: [AuthGuard]},
  {path: 'users/:type/:id', component: ViewUserComponent},
  {path: 'items/new', component: AddItemComponent, canActivate: [AuthGuard]},
  {path: 'items/:id', component: ViewItemComponent},
  {path: 'items/:id/edit', component: EditItemComponent, canActivate: [AuthGuard]},
  {path: 'services/new', component: AddServiceComponent, canActivate: [AuthGuard]},
  {path: 'services/:id', component: ViewServiceComponent},
  {path: 'services/:id/edit', component: EditServiceComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard]},
  {path: 'help', component: HelpComponent},
  {path: 'help/helpreglog', component: HelpReglogComponent},
  {path: 'help/helpprofile', component: HelpProfComponent},
  {path: 'help/helphome', component: HelpHomeComponent},
  {path: 'help/helpnavbar', component: HelpNavbarComponent},
  {path: 'help/helpeditprof', component: HelpEditprofComponent},
  {path: 'help/helpaddsale', component: HelpAddsaleComponent},
  {path: 'help/helpeditsale', component: HelpEditsaleComponent},
  {path: 'help/helpfavreq', component: HelpFavreqsaleComponent},
  {path: 'help/helprev', component: HelpReviewsaleComponent},
  {path: 'help/helpnotifications', component: HelpNotificationsComponent},
  {path: 'help/helpsearch', component: HelpSearchComponent},
  {path: 'help/helprequests', component: HelpRequestsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    SearchResultsComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    EditProfileComponent,
    EditAccountComponent,
    ViewUserComponent,
    AddItemComponent,
    ViewItemComponent,
    EditItemComponent,
    AddServiceComponent,
    ViewServiceComponent,
    EditServiceComponent,
    RequestsComponent,
    NotificationsComponent,
    AdminDashboardComponent,
    EnterPassDialog,
    ConfirmDeleteDialog,
    ConfirmServicedeleteDialog,
    AddReviewDialog,
    AddServiceReviewDialog,
    ConfirmReviewDeleteDialog,
    EditReviewDialog,
    ConfirmDeleteAccountDialog,
    HelpComponent,
    HelpProfComponent,
    HelpHomeComponent,
    HelpNavbarComponent,
    HelpEditprofComponent,
    HelpAddsaleComponent,
    HelpEditsaleComponent,
    HelpFavreqsaleComponent,
    HelpReviewsaleComponent,
    HelpNotificationsComponent,
    HelpSearchComponent,
    HelpRequestsComponent,
    HelpReglogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}),
    FlashMessagesModule.forRoot()
  ],
  entryComponents: [
    EnterPassDialog,
    ConfirmDeleteDialog,
    ConfirmServicedeleteDialog,
    AddReviewDialog,
    AddServiceReviewDialog,
    ConfirmReviewDeleteDialog,
    EditReviewDialog,
    ConfirmDeleteAccountDialog
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
    ItemService,
    SearchService,
    ReviewService,
    NotificationsService,
    RequestService,
    AdminService,
    ImageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
