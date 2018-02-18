import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {FlashMessagesModule} from "angular2-flash-messages";

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/common/header/header.component';
import {HomeComponent} from './components/common/home/home.component';
import {WelcomeComponent} from './components/common/welcome/welcome.component';
import {SearchResultsComponent} from './components/search/search-results/search-results.component';
import {RegisterComponent} from './components/users/register/register.component';
import {LoginComponent} from './components/users/login/login.component';
import {ProfileComponent} from './components/users/profile/profile.component';
import {EditProfileComponent} from './components/users/edit-profile/edit-profile.component';
import {AddItemComponent} from './components/items/add-item/add-item.component';
import {ViewItemComponent} from './components/items/view-item/view-item.component';
import {EditAccountComponent} from './components/users/edit-account/edit-account.component';
import {EditItemComponent} from './components/items/edit-item/edit-item.component';
import {ViewProfileComponent} from './components/users/view-profile/view-profile.component';

import {EnterPassDialog} from './components/users/edit-profile/enter-pass/enter-pass.component';
import {ConfirmDeleteDialog} from "./components/items/view-item/confirm-delete/confirm-delete.component";

import {ValidateService} from "./services/validate/validate.service";
import {AuthService} from "./services/authenticate/auth.service";
import {ItemService} from "./services/items/item.service";

import {AuthGuard} from "./guards/auth.guard";
import { AddServiceComponent } from './components/items/add-service/add-service.component';
import { EditServiceComponent } from './components/items/edit-service/edit-service.component';
import { ViewServiceComponent } from './components/items/view-service/view-service.component';

const appRoutes = [
  {path: '', component: WelcomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'search/results', component: SearchResultsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'profile/editProf', component: EditProfileComponent, canActivate: [AuthGuard]},
  {path: 'profile/editAcc', component: EditAccountComponent, canActivate: [AuthGuard]},
  {path: 'users/:id', component: ViewProfileComponent},
  {path: 'items/new', component: AddItemComponent, canActivate: [AuthGuard]},
  {path: 'items/:id', component: ViewItemComponent},
  {path: 'items/:id/edit', component: EditItemComponent, canActivate: [AuthGuard]},
  {path: 'services/new', component: AddServiceComponent, canActivate: [AuthGuard]},
  {path: 'services/:id', component: ViewServiceComponent},
  {path: 'services/:id/edit', component: EditServiceComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WelcomeComponent,
    SearchResultsComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AddItemComponent,
    ViewItemComponent,
    EditProfileComponent,
    EditAccountComponent,
    EnterPassDialog,
    EditItemComponent,
    ViewProfileComponent,
    ConfirmDeleteDialog,
    AddServiceComponent,
    EditServiceComponent,
    ViewServiceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  entryComponents: [
    EnterPassDialog,
    ConfirmDeleteDialog
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
    ItemService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
