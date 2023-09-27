import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },


  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  // { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'basic-ui', loadChildren: () => import('./basic-ui/basic-ui.module').then(m => m.BasicUiModule) },
  { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsDemoModule) },
  { path: 'forms', loadChildren: () => import('./forms/form.module').then(m => m.FormModule) },
  { path: '', loadChildren: () => import('./pages/module-hospitalisation/formulaire.module').then(m => m.FormulaireModule) },
  { path: '', loadChildren: () => import('./pages/module-patient/formulaire.module').then(m => m.FormulaireModule) },
  { path: '', loadChildren: () => import('./pages/module-patient-consultation-externe/formulaire.module').then(m => m.FormulaireModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  { path: 'user-pages', loadChildren: () => import('./user-pages/user-pages.module').then(m => m.UserPagesModule) },
  { path: 'error-pages', loadChildren: () => import('./error-pages/error-pages.module').then(m => m.ErrorPagesModule) },

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
