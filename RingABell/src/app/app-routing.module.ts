import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddReviewFirstStepComponent } from './add-review/add-review-first-step/add-review-first-step.component';
import { AddReviewSecondStepComponent } from './add-review/add-review-second-step/add-review-second-step.component';
import { AddReviewThirdStepComponent } from './add-review/add-review-third-step/add-review-third-step.component';
import { ThankYouComponent } from './add-review/thank-you/thank-you.component';


const routes: Routes = [
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'add-review',
    component: AddReviewFirstStepComponent
  },
  {
    path: 'add-review2',
    component: AddReviewSecondStepComponent
  },
  {
    path: 'add-review3',
    component: AddReviewThirdStepComponent
  },
  {
    path: 'thank-you',
    component: ThankYouComponent
  },  
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
