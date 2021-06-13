import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'quality-recommendation/form',
    pathMatch: 'full',
  },
  {
    path: 'quality-recommendation/form',
    component: LandingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
