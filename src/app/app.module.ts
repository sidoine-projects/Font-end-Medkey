import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormulaireModule } from './pages/basic-elements/formulaire.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
// import { FormulaireComponent } from './pages/basic-elements/form/basic-elements.component';
import { SidebarComponent as SidebarComponent1 } from './shared/sidebar/sidebar.component';
import { SidebarComponent as SidebarComponent2 } from './pages/module-hospitalisation/sidebar/sidebar.component';
import { SidebarComponent as SidebarComponent3 } from './pages/module-patient/sidebar/sidebar.component';
import { SidebarComponent as SidebarComponent4 } from './pages/module-patient-consultation-externe/sidebar/sidebar.component';
import { SettingsPanelComponent } from './shared/settings-panel/settings-panel.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ContentAnimateDirective } from './shared/directives/content-animate.directive';
import { DataTablesModule } from "angular-datatables";
// import { HomeComponent } from './pages/home/home.component';
// import { DataTablesModule } from 'angular-datatables';
// import { BrancheComponent } from './pages/form/branche/branche.component';
// import { FormWizardModule } from 'angular2-wizard';
// import { FormWizardModule } from 'angular-wizard-form';



// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}

@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent1,
    SidebarComponent2,
    SidebarComponent3,
    SidebarComponent4,
    // FormulaireComponent,

    SettingsPanelComponent,
    FooterComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    // HomeComponent,
    // BrancheComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    // FormulaireModule,
    // FormWizardModule,
    // DataTablesModule,
    DataTablesModule,
    ReactiveFormsModule,
    ChartsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
    })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
