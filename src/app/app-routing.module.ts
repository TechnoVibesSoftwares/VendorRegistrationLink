import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './gurds/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)

  },
  {
    path: 'vregister',
    loadChildren: () => import('./pages/vregister/vregister.module').then( m => m.VregisterPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule),
    canActivate:[AuthGuard]
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
