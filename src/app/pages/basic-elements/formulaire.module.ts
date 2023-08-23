import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaireComponent } from './form/basic-elements.component';
import { RouterModule, Routes } from '@angular/router';
// import { Select2Module } from 'ng2-select2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrancheComponent } from './branche/branche.component';


const routes: Routes = [
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'branche', component: BrancheComponent },
]

@NgModule({
  declarations: [FormulaireComponent, BrancheComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // Select2Module,
    NgbModule,
    NgSelectModule
  ],
  providers: []
})
export class FormulaireModule { }
