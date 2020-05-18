import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { CardModule } from 'primeng/card';
import { DialogService } from 'primeng/dynamicdialog';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { LoginService } from './services/login.service';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { AddReviewFirstStepComponent } from './add-review/add-review-first-step/add-review-first-step.component';
import { AddReviewSecondStepComponent } from './add-review/add-review-second-step/add-review-second-step.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    HomeComponent,
    AddReviewFirstStepComponent,
    AddReviewSecondStepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    // { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    DialogService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
