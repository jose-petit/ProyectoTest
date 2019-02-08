import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  }

 // { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
 // { path: 'about', loadChildren: './about/about.module#AboutPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
