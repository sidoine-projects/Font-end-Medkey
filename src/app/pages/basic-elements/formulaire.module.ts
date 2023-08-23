import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaireComponent } from './form/basic-elements.component';
import { RouterModule, Routes } from '@angular/router';
// import { Select2Module } from 'ng2-select2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrancheComponent } from './branche/branche.component';
import { CliniqueComponent } from './clinique/clinique.component';
import { BanqueComponent } from './banque/banque.component';
import { DelaiFacturationTardiveComponent } from './delai-facturation-tardive/delai-facturation-tardive.component';
import { CasExemptionComponent } from './cas-exemption/cas-exemption.component';
import { ChambreComponent } from './chambre/chambre.component';
import { QuartiersComponent } from './quartiers/quartiers.component';
import { LitsComponent } from './lits/lits.component';
import { SallesFacturableComponent } from './salles-facturable/salles-facturable.component';
import { LitsFacturablesComponent } from './lits-facturables/lits-facturables.component';
import { ArticlesComponent } from './articles/articles.component';
import { ServicesComponent } from './services/services.component';
import { ProjetsComponent } from './projets/projets.component';
import { CaissesComponent } from './caisses/caisses.component';
import { MagasinComponent } from './magasin/magasin.component';
import { CategorieFournisseursComponent } from './categorie-fournisseurs/categorie-fournisseurs.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { VaccinsComponent } from './vaccins/vaccins.component';
import { PharmacologiesComponent } from './pharmacologies/pharmacologies.component';
import { ExamensGenerauxComponent } from './examens-generaux/examens-generaux.component';
import { CategoriesSallesComponent } from './categories-salles/categories-salles.component';
import { EtatTestLaboratoireComponent } from './etat-test-laboratoire/etat-test-laboratoire.component';
import { CategorieEmploiComponent } from './categorie-emploi/categorie-emploi.component';
import { RoleUserComponent } from './role-user/role-user.component';
import { DepartementComponent } from './departement/departement.component';
import { PrivilegeUtilisateurComponent } from './privilege-utilisateur/privilege-utilisateur.component';
import { UnitesComponent } from './unites/unites.component';
import { RegimesMedicauxComponent } from './regimes-medicaux/regimes-medicaux.component';


const routes: Routes = [
  { path: 'user', component: FormulaireComponent },
  { path: 'branche', component: BrancheComponent },
  { path: 'role-user', component: RoleUserComponent },
  { path: 'privilege-user', component: PrivilegeUtilisateurComponent },
  { path: 'branches', component: BrancheComponent },
  { path: 'departements', component: DepartementComponent },
  { path: 'cliniques', component: CliniqueComponent },
  { path: 'regimes-medicaux', component: RegimesMedicauxComponent },
  { path: 'banques', component: BanqueComponent },
  { path: 'unites', component: UnitesComponent },
  
]

@NgModule({
  declarations: [FormulaireComponent, BrancheComponent, CliniqueComponent, BanqueComponent, DelaiFacturationTardiveComponent, CasExemptionComponent, ChambreComponent, QuartiersComponent, LitsComponent, SallesFacturableComponent, LitsFacturablesComponent, ArticlesComponent, ServicesComponent, ProjetsComponent, CaissesComponent, MagasinComponent, CategorieFournisseursComponent, FournisseursComponent, VaccinsComponent, PharmacologiesComponent, ExamensGenerauxComponent, CategoriesSallesComponent, EtatTestLaboratoireComponent, CategorieEmploiComponent, RoleUserComponent, DepartementComponent, PrivilegeUtilisateurComponent, UnitesComponent, RegimesMedicauxComponent],
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
