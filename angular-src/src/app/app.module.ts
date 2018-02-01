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
import {AddItemComponent} from './components/items/add-item/add-item.component';
import {ViewItemComponent} from './components/items/view-item/view-item.component';

import {ValidateService} from "./services/validate/validate.service";
import {AuthService} from "./services/authenticate/auth.service";

const appRoutes = [
  {path: '', component: WelcomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'search/results', component: SearchResultsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'items/new', component: AddItemComponent},
  {path: 'items/:id', component: ViewItemComponent},
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
    ViewItemComponent
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
  providers: [
    ValidateService,
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
