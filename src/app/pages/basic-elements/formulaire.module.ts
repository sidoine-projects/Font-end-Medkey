import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormulaireComponent } from "./form/basic-elements.component";
import { RouterModule, Routes } from "@angular/router";
// import { Select2Module } from 'ng2-select2';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { BrancheComponent } from "./branche/branche.component";

import { TypeDeRelationComponent } from "./type-de-relation/type-de-relation.component";
import { TypeDeVisiteComponent } from "./type-de-visite/type-de-visite.component";
import { ChampBioEtenduComponent } from "./champ-bio-etendu/champ-bio-etendu.component";
import { EmplacementComponent } from "./emplacement/emplacement.component";

const routes: Routes = [
  { path: "formulaire", component: FormulaireComponent },
  { path: "branche", component: BrancheComponent },
  { path: "typevisite", component: TypeDeVisiteComponent },
  { path: "typerelation", component: TypeDeRelationComponent },
  { path: "bio", component: ChampBioEtenduComponent },
  { path: "emplacement", component: EmplacementComponent },
];

@NgModule({
  declarations: [
    FormulaireComponent,
    BrancheComponent,
    TypeDeRelationComponent,
    TypeDeVisiteComponent,
    ChampBioEtenduComponent,
    EmplacementComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // Select2Module,
    NgbModule,
    NgSelectModule,
  ],
  providers: [],
})
export class FormulaireModule {}
