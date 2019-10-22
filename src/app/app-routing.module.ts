import {NgModule} from '@angular/core';
import {PreloadAllModules, Router, RouterModule, Routes} from '@angular/router';
import {ListItemComponent} from './list-item/list-item.component';
import {AboutComponent} from './about/about.component';
import {PoeTestComponent} from './poe-test/poe-test.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: ListItemComponent },
  { path: 'about', component: AboutComponent },
  { path: 'poe', component: PoeTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
