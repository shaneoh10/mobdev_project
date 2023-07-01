import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
      path: 'tabs',
      component: TabsPage,
      children: [
        {
          path: 'news',
          children: [
            {
              path: '',
              loadChildren: () => import('../news/news.module').then( m => m.NewsPageModule)
            },
            {
              path: ':id',
              loadChildren: () => import('../news-details/news-details.module').then( m => m.NewsDetailsPageModule)
            }
          ]
        },
        {
          path: 'sports',
          children: [
            {
              path: '',
              loadChildren: () => import('../sports/sports.module').then( m => m.SportsPageModule)
            }
          ]
        },
        {
          path: 'finance',
          children: [
            {
              path: '',
              loadChildren: () => import('../finance/finance.module').then( m => m.FinancePageModule)
            }
          ]
        }
      ]
    },
    {
      path: '',
      redirectTo: '/tabs/news',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
