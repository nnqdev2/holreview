import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
const routes: Routes = [
  { path: 'search', component: SearchFilterComponent },
  // {
  //   path: 'search',
  //   component: LustSearchContainerComponent,
  //   resolve: {
  //     data: PageResolver,
  //   }
  // },
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: '**', redirectTo: 'search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
