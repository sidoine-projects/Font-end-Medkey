import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
];

@NgModule({

  declarations: [HomeComponent],

  imports: [

    CommonModule,
    FormsModule,
    DataTablesModule ,
    NgbModule,
    RouterModule.forChild(routes),

  ]

})

export class HomeModule { 


}
