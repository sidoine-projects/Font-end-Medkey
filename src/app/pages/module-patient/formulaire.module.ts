import { NgModule } from '@angular/core';

import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common';
// import { FormulaireComponent } from './form/basic-elements.component';
import { RouterModule, Routes } from '@angular/router';
// import { Select2Module } from 'ng2-select2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TypevisiteComponent } from "./typevisite/typevisite.component";
import { AddTypevisiteComponent } from "./typevisite/add-typevisite/add-typevisite.component";
import { TyperelationComponent } from "./typerelation/typerelation.component";
import { AddRelationComponent } from "./typerelation/add-relation/add-relation.component";
import { PatientsComponent } from "./patients/patients.component";
import { AddPatientComponent } from "./patients/add-patient/add-patient.component";
import { IndgencesComponent } from "./indgences/indgences.component";
import { AddIndigenceComponent } from "./indgences/add-indigence/add-indigence.component";
import { CompagniesComponent } from "./compagnies/compagnies.component";
import { AddCompagnieComponent } from "./compagnies/add-compagnie/add-compagnie.component";
import { AssurancesComponent } from "./assurances/assurances.component";
import { AddAssuranceComponent } from "./assurances/add-assurance/add-assurance.component";
import { AssurancepatientComponent } from "./assurancepatient/assurancepatient.component";
import { AddAssurancepatientComponent } from "./assurancepatient/add-assurancepatient/add-assurancepatient.component";
import { IndigencepatientComponent } from "./indigencepatient/indigencepatient.component";
import { AddIndigencepatientComponent } from "./indigencepatient/add-indigencepatient/add-indigencepatient.component";
import { ForfaitfacturationComponent } from "./forfaitfacturation/forfaitfacturation.component";
import { AddForfaitfacturationComponent } from "./forfaitfacturation/add-forfaitfacturation/add-forfaitfacturation.component";
import { ExemptionComponent } from "./exemption/exemption.component";
import { AddExemptionComponent } from "./exemption/add-exemption/add-exemption.component";
import { RendezvousComponent } from "./rendezvous/rendezvous.component";
import { AddRendezvousComponent } from "./rendezvous/add-rendezvous/add-rendezvous.component";
import { DashboardComponent } from './dashboard/dashboard.component';





const routes: Routes = [

  { path: "visite", component: TypevisiteComponent },
  { path: "ajout-visite", component: AddTypevisiteComponent },
  { path: "relation", component: TyperelationComponent },
  { path: "ajout-relation", component: AddRelationComponent },
  { path: "patient", component: PatientsComponent },
  { path: "ajout-patient", component: AddPatientComponent },
  { path: "indigence", component: IndgencesComponent },
  { path: "ajout-indigence", component: AddIndigenceComponent },
  { path: "compagnie", component: CompagniesComponent },
  { path: "ajout-compagnie", component: AddCompagnieComponent },
  { path: "assurance", component: AssurancesComponent },
  { path: "ajout-assurance", component: AddAssuranceComponent },
  { path: "assurancepatient", component: AssurancepatientComponent },
  { path: "ajout-assurancepatient", component: AddAssurancepatientComponent },
  { path: "indigencepatient", component: IndigencepatientComponent },
  { path: "ajout-indigencepatient", component: AddIndigencepatientComponent },
  { path: "forfaitfacturation", component: ForfaitfacturationComponent },
  { path: "ajout-forfaitfacturation", component: AddForfaitfacturationComponent },
  { path: "module-patient-dashboard", component: DashboardComponent },
  {
    path: "exemption",
    component: ExemptionComponent,
  },
  {
    path: "ajout-exemption",
    component: AddExemptionComponent,
  },
  {
    path: "rendezvous",
    component: RendezvousComponent,
  },
  {
    path: "ajout-rendezvous",
    component: AddRendezvousComponent,
  },

]

@NgModule({
  declarations: [
    TypevisiteComponent,
    DashboardComponent,
    AddTypevisiteComponent,
    TyperelationComponent,
    AddRelationComponent,
    PatientsComponent,
    AddPatientComponent,
    IndgencesComponent,
    AddIndigenceComponent,
    CompagniesComponent,
    AddCompagnieComponent,
    AssurancesComponent,
    AddAssuranceComponent,
    AssurancepatientComponent,
    AddAssurancepatientComponent,
    IndigencepatientComponent,
    AddIndigencepatientComponent,
    ForfaitfacturationComponent,
    AddForfaitfacturationComponent,
    ExemptionComponent,
    AddExemptionComponent,
    RendezvousComponent,
    AddRendezvousComponent,],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // Select2Module,
    NgbModule,
    DataTablesModule,
    NgSelectModule
  ],
  providers: []
})
export class FormulaireModule { }
