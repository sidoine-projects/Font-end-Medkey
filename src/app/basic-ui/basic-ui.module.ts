import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // pour naviguer entre les routes.

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // fonctionnalité lié ) boostrap

import { ButtonsComponent } from './buttons/buttons.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: 'dropdowns', component: DropdownsComponent },
  // { path: 'dropdowns', component: DropdownsComponent },
  { path: 'typography', component: TypographyComponent },
];

@NgModule({ // est utilisé pour déclarer le module. et est accessible dans tous les modules de angular donc pas besoin de l" déclarer
  declarations: [ButtonsComponent, DropdownsComponent, TypographyComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes), // il est utilisé car on a créer un module de fonctionalités (Un module qui encapsule d'autres modules)
  ]
})
export class BasicUiModule { }  // regroupe des composants, services, directives et sert à organiser et encapsuler différente partie d'une application
