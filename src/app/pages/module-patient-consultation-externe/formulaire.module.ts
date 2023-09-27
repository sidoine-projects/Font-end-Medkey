import { NgModule } from '@angular/core';

import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
// import { Select2Module } from 'ng2-select2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { InterventionsComponent } from "./interventions/interventions.component";
import { AddInterventionComponent } from "./interventions/add-intervention/add-intervention.component";
import { MaladiesComponent } from "./maladies/maladies.component";
import { AddMaladieComponent } from "./maladies/add-maladie/add-maladie.component";
import { CategorieplainteComponent } from "./categorieplainte/categorieplainte.component";
import { AddCategorieplainteComponent } from "./categorieplainte/add-categorieplainte/add-categorieplainte.component";
import { PlaintesComponent } from "./plaintes/plaintes.component";
import { AddPlainteComponent } from "./plaintes/add-plainte/add-plainte.component";

import { PharmacologieComponent } from "./pharmacologie/pharmacologie.component";
import { AddPharmacologieComponent } from "./pharmacologie/add-pharmacologie/add-pharmacologie.component";
import { AddExamensgenerauxComponent } from "./examens-generaux/add-examensgeneraux/add-examensgeneraux.component";
import { ExamensGenerauxComponent } from "./examens-generaux/examens-generaux.component";
import { CategorieProceduresComponent } from "./categorie-procedures/categorie-procedures.component";
import { AddCategorieprocedureComponent } from "./categorie-procedures/add-categorieprocedure/add-categorieprocedure.component";
import { ProcedureComponent } from "./procedure/procedure.component";
import { AddProcedureComponent } from "./procedure/add-procedure/add-procedure.component";
import { ModeleHistoriqueMaladiesComponent } from "./modele-historique-maladies/modele-historique-maladies.component";
import { AddModeleHistoriqueComponent } from "./modele-historique-maladies/add-modele-historique/add-modele-historique.component";
import { ModeleExamenPhysiqueComponent } from "./modele-examen-physique/modele-examen-physique.component";
import { AddExamenPhysiqueComponent } from "./modele-examen-physique/add-examen-physique/add-examen-physique.component";
import { InventaireMedicamentComponent } from "./inventaire-medicament/inventaire-medicament.component";
import { AddInventaireMedicamentComponent } from "./inventaire-medicament/add-inventaire-medicament/add-inventaire-medicament.component";
import { OrdonnancesFacturablesComponent } from "./ordonnances-facturables/ordonnances-facturables.component";
import { AddOrdonnancesFacturableComponent } from "./ordonnances-facturables/add-ordonnances-facturable/add-ordonnances-facturable.component";
import { InventairePetitesSallesSoinsComponent } from "./inventaire-petites-salles-soins/inventaire-petites-salles-soins.component";
import { AddInventairepetiteComponent } from "./inventaire-petites-salles-soins/add-inventairepetite/add-inventairepetite.component";
import { ArticlesfacturablComponent } from "./articlesfacturabl/articlesfacturabl.component";
import { AddArticlefacturablComponent } from "./articlesfacturabl/add-articlefacturabl/add-articlefacturabl.component";
import { EnquetesInterventionsComponent } from "./enquetes-interventions/enquetes-interventions.component";
import { AddEnqueteComponent } from "./enquetes-interventions/add-enquete/add-enquete.component";
import { RapportsComponent } from "./rapports/rapports.component";
import { AddRapportComponent } from "./rapports/add-rapport/add-rapport.component";
import { AfacturableComponent } from "./afacturable/afacturable.component";
import { AddAfacturableComponent } from "./afacturable/add-afacturable/add-afacturable.component";
import { MedicamentsComponent } from "./medicaments/medicaments.component";
import { AddMedicamentComponent } from "./medicaments/add-medicament/add-medicament.component";
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  { path: "module-patient-consulation-externe-dashbord", component: DashboardComponent },
  {
    path: "intervention",
    component: InterventionsComponent,
  },
  {
    path: "ajout-intervention",
    component: AddInterventionComponent,
  },
  {
    path: "maladie",
    component: MaladiesComponent,
  },
  {
    path: "ajout-maladie",
    component: AddMaladieComponent,
  },
  {
    path: "categorieplainte",
    component: CategorieplainteComponent,
  },
  {
    path: "ajout-categorieplainte",
    component: AddCategorieplainteComponent,
  },
  {
    path: "plainte",
    component: PlaintesComponent,
  },
  {
    path: "ajout-plainte",
    component: AddPlainteComponent,
  },
  {
    path: "pharmacologie",
    component: PharmacologieComponent,
  },
  {
    path: "ajout-pharmacologie",
    component: AddPharmacologieComponent,
  },
  {
    path: "examen",
    component: ExamensGenerauxComponent,
  },
  {
    path: "ajout-examen",
    component: AddExamensgenerauxComponent,
  },
  {
    path: "categorieprocedure",
    component: CategorieProceduresComponent,
  },
  {
    path: "ajout-categorieprocedure",
    component: AddCategorieprocedureComponent,
  },
  {
    path: "procedure",
    component: ProcedureComponent,
  },
  {
    path: "ajout-procedure",
    component: AddProcedureComponent,
  },
  {
    path: "mhm",
    component: ModeleHistoriqueMaladiesComponent,
  },
  {
    path: "ajout-mhm",
    component: AddModeleHistoriqueComponent,
  },
  {
    path: "examenphysique",
    component: ModeleExamenPhysiqueComponent,
  },
  {
    path: "ajout-examenphysique",
    component: AddExamenPhysiqueComponent,
  },
  {
    path: "inventairemedicament",
    component: InventaireMedicamentComponent,
  },
  {
    path: "ajout-inventairemedicament",
    component: AddInventaireMedicamentComponent,
  },
  {
    path: "ordonnancefacturable",
    component: OrdonnancesFacturablesComponent,
  },
  {
    path: "ajout-ordonnancefacturable",
    component: AddOrdonnancesFacturableComponent,
  },
  {
    path: "inventairepetite",
    component: InventairePetitesSallesSoinsComponent,
  },
  {
    path: "ajout-inventairepetite",
    component: AddInventairepetiteComponent,
  },
  {
    path: "artfactumineur",
    component: ArticlesfacturablComponent,
  },
  {
    path: "ajout-artfactumineur",
    component: AddArticlefacturablComponent,
  },
  {
    path: "enquete",
    component: EnquetesInterventionsComponent,
  },
  {
    path: "ajout-enquete",
    component: AddEnqueteComponent,
  },
  {
    path: "rapport",
    component: RapportsComponent,
  },
  {
    path: "ajout-rapport",
    component: AddRapportComponent,
  },
  {
    path: "facturable",
    component: AfacturableComponent,
  },
  {
    path: "ajout-facturable",
    component: AddAfacturableComponent,
  },
  {
    path: "medicament",
    component: MedicamentsComponent,
  },
  {
    path: "ajout-medicament",
    component: AddMedicamentComponent,
  },

  
]

@NgModule({
  declarations: [InterventionsComponent,
    AddInterventionComponent,
    MaladiesComponent,
    AddMaladieComponent,
    CategorieplainteComponent,
    AddCategorieplainteComponent,
    PlaintesComponent,
    AddPlainteComponent,
    ExamensGenerauxComponent,

    PharmacologieComponent,
    AddPharmacologieComponent,
    AddExamensgenerauxComponent,
    CategorieProceduresComponent,
    AddCategorieprocedureComponent,
    ProcedureComponent,
    AddProcedureComponent,
    ModeleHistoriqueMaladiesComponent,
    AddModeleHistoriqueComponent,
    ModeleExamenPhysiqueComponent,
    AddExamenPhysiqueComponent,
    InventaireMedicamentComponent,
    AddInventaireMedicamentComponent,
    OrdonnancesFacturablesComponent,
    AddOrdonnancesFacturableComponent,
    InventairePetitesSallesSoinsComponent,
    AddInventairepetiteComponent,
    ArticlesfacturablComponent,
    AddArticlefacturablComponent,
    EnquetesInterventionsComponent,
    AddEnqueteComponent,
    RapportsComponent,
    AddRapportComponent,
    AfacturableComponent,
    AddAfacturableComponent,
    MedicamentsComponent,
    AddMedicamentComponent,],


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
