import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

  title = 'demo1';

  showSidebarModuleHome: boolean = true;
  showSidebarModuleHospitalisation: boolean = true;
  showSidebarModulePatient: boolean = true;
  showSidebarModuleConsultationExterne: boolean = true;

  showNavbar: boolean = true;
  showFooter: boolean = true;
  // showSettings: boolean = true;
  isLoading: boolean;

  constructor(private router: Router, private cdr: ChangeDetectorRef, translate: TranslateService) { }

  ngOnInit() {
    this.setupRouterEvents();

    // Scroll to top after route change
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  setupRouterEvents() {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if ((event['url'] == '' || event['url'] == '/' || event['url'] == '/user-pages/login') || (event['url'] == '/user-pages/login-2') || (event['url'] == '/user-pages/register') || (event['url'] == '/user-pages/register-2') || (event['url'] == '/user-pages/lock-screen') || (event['url'] == '/error-pages/404') || (event['url'] == '/error-pages/500')) {
          this.showNavbar = false;
          this.showFooter = false;
          // this.showSettings = false;
          this.showSidebarModuleHome = false;
          this.showSidebarModuleHospitalisation = false;
          this.showSidebarModulePatient = false;
          this.showSidebarModuleConsultationExterne = false;
          document.querySelector('.main-panel').classList.add('w-100');
          document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
          if ((event['url'] == '/user-pages/login-2') || (event['url'] == '/user-pages/register-2')) {
            document.querySelector('.content-wrapper').classList.add('auth', 'auth-img-bg',);
          } else if (event['url'] == '/user-pages/lock-screen') {
            document.querySelector('.content-wrapper').classList.add('auth', 'lock-full-bg');
          } else {
            document.querySelector('.content-wrapper').classList.remove('auth', 'auth-img-bg',);
            document.querySelector('.content-wrapper').classList.remove('auth', 'lock-full-bg');
          }
          if ((event['url'] == '/error-pages/404') || (event['url'] == '/error-pages/500')) {
            document.querySelector('.content-wrapper').classList.add('p-0');
          }
        } else {
          this.showNavbar = true;
          this.showFooter = true;

          // if (event['url'] == '' || event['url'] == '/' || event['url'] == '/home') {
          if (event['url'] == '/home') {
            this.showSidebarModuleHome = true;
            this.showSidebarModuleHospitalisation = false;
            this.showSidebarModulePatient = false;
            this.showSidebarModuleConsultationExterne = false;
            this.cdr.detectChanges();
          }

          if (event['url'] == '/module-hospitalisation-dashboard') {
            this.showSidebarModuleHospitalisation = true;
            this.showSidebarModuleHome = false;
            this.showSidebarModulePatient = false;
            this.showSidebarModuleConsultationExterne = false;

            this.cdr.detectChanges();
          }

          if (event['url'] == '/module-patient-dashboard') {
            this.showSidebarModulePatient = true;
            this.showSidebarModuleHospitalisation = false;
            this.showSidebarModuleHome = false;
            this.showSidebarModuleConsultationExterne = false;
  
            this.cdr.detectChanges();
          }

          
          if (event['url'] == '/module-patient-consulation-externe-dashbord') {
            this.showSidebarModuleConsultationExterne = true;
            this.showSidebarModulePatient = false;
            this.showSidebarModuleHospitalisation = false;
            this.showSidebarModuleHome = false;
  
            this.cdr.detectChanges();
          }

          document.querySelector('.main-panel').classList.remove('w-100');
          document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
          document.querySelector('.content-wrapper').classList.remove('auth', 'auth-img-bg');
          document.querySelector('.content-wrapper').classList.remove('p-0');
        }
      }
    });

    // Spinner for lazyload modules
    this.router.events.forEach((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.isLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isLoading = false;
      }
    });
  }
}
