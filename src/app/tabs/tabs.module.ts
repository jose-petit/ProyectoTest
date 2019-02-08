import { ContactPageModule } from './../contact/contact.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import { AboutPageModule } from '../about/about.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [ 
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
    {
      path: 'contact',
      outlet: 'contact',
      component: ContactPage
    }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AboutPageModule,
    ContactPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
