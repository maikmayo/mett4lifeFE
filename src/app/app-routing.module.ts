import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { BestellenComponent } from './views/bestellen/bestellen.component';
import { MainComponent } from './views/main/main.component';
import { NotFoundComponent } from './views/notFound/notFound.component';
import { StatistikComponent } from './views/statistik/statistik.component';

const routes: Routes = [
  { path: "", component: MainComponent},
  { path: "statistik", component: StatistikComponent},
  { path: "about", component: AboutComponent},
  { path: "bestellen", component: BestellenComponent},
  { path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
