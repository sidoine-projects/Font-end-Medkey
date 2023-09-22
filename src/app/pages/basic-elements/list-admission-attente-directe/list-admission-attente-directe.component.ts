import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
// import * as $ from 'jquery';
// import 'datatables.net';
// import 'datatables.net-bs4';
// import 'datatables.net-buttons';
// import 'datatables.net/js/jquery.dataTables.min.js';
// import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
// import 'datatables.net-buttons/js/dataTables.buttons.min.js';
// import 'datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js';
// import 'datatables.net-buttons/js/buttons.html5.min.js';
// import 'datatables.net-buttons/js/buttons.print.js';
// import 'datatables.net-buttons/js/buttons.colVis.js';
// import 'datatables.net-responsive';
// import 'datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css';

@Component({
  selector: 'app-list-admission-attente-directe',
  templateUrl: './list-admission-attente-directe.component.html',
  styleUrls: ['./list-admission-attente-directe.component.scss']
})
export class ListAdmissionAttenteDirecteComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private router: Router) { }

  private datatable5: any;
  private dataTable6: any;

  ngOnInit(): void {
  }

  ouvrirAjout() {
    this.router.navigate(['/admissions-attentes']);
  }

  ngAfterViewInit() {
    // Initialisation de la DataTable pour le premier tableau
    // this.datatable5 = $('#table5').DataTable({
    //   pagingType: 'full_numbers',
    //   pageLength: 3,
    //   lengthMenu: [3, 10, 25, 50, 75, 100],
    //   processing: true,
    //   info: true,
    //   searching: true,
    //   responsive: true,
   
    //   dom:
    //   '<"row mb-3"<"col-md-12"B>>' +
    //   '<"row mb-0"<"col-md-6"l><"col-md-6"f>>' +
    //   '<"row"<"col-md-12"tr>>' +
    //   '<"row"<"col-md-6"i><"col-md-6"p>>',


    // buttons: [

    //   {
    //     extend: 'excelHtml5',
    //     text: 'Excel',
    //     className: 'btn btn-gray btn-sm'

    //   },
    //   {
    //     extend: 'pdfHtml5',
    //     text: 'PDF',
    //     className: 'btn btn-gray btn-sm', // Personnalisation de la classe CSS du bouton

    //   },

    //   {
    //     extend: 'print',
    //     text: 'Print',
    //     className: 'btn btn-gray btn-sm', // Personnalisation de la classe CSS du bouton

    //   },

    //   {
    //     extend: 'colvis',
    //     text: 'Column visibility',
    //     className: 'btn btn-gray btn-sm', // Personnalisation de la classe CSS du bouton

    //   },


    // ],

    // language: {
    //   url: '/assets/i18n/French.json',
    //   emptyTable: 'Aucune donnée disponible dans le tableau',
    //   info: 'Affichage de _START_ à _END_ sur _TOTAL_ entrées',
    //   infoEmpty: 'Affichage de 0 à 0 sur 0 entrées',
    //   infoFiltered: '(filtré à partir de _MAX_ entrées au total)',
    //   infoPostFix: '',
    //   thousands: ',',
    //   lengthMenu: 'Afficher _MENU_ entrées',
    //   loadingRecords: 'Chargement...',
    //   processing: 'Traitement...',
    //   search: 'Rechercher :',
    //   zeroRecords: 'Aucun enregistrement correspondant trouvé',
    //   paginate: {
    //     first: '',
    //     last: '',
    //     next: 'Suivant',
    //     previous: 'Précédent'
    //   },
    //   aria: {
    //     sortAscending: ': activer pour trier la colonne par ordre croissant',
    //     sortDescending: ': activer pour trier la colonne par ordre décroissant'
    //   }
    // },
    // stripeClasses: [],
    // });

    // // Initialisation de la DataTable pour le deuxième tableau
    // this.dataTable6 = $('#table6').DataTable({
    //   pagingType: 'full_numbers',
    //   pageLength: 3,
    //   lengthMenu: [3, 10, 25, 50, 75, 100],
    //   processing: true,
    //   info: true,
    //   searching: true,
    //   // responsive: true,
   
    //   dom:
    //   '<"row mb-3"<"col-md-12"B>>' +
    //   '<"row mb-0"<"col-md-6"l><"col-md-6"f>>' +
    //   '<"row"<"col-md-12"tr>>' +
    //   '<"row"<"col-md-6"i><"col-md-6"p>>',


    // buttons: [

    //   {
    //     extend: 'excelHtml5',
    //     text: 'Excel',
    //     className: 'btn btn-gray btn-sm'

    //   },
    //   {
    //     extend: 'pdfHtml5',
    //     text: 'PDF',
    //     className: 'btn btn-gray btn-sm', // Personnalisation de la classe CSS du bouton

    //   },

    //   {
    //     extend: 'print',
    //     text: 'Print',
    //     className: 'btn btn-gray btn-sm', // Personnalisation de la classe CSS du bouton

    //   },

    //   {
    //     extend: 'colvis',
    //     text: 'Column visibility',
    //     className: 'btn btn-gray btn-sm', // Personnalisation de la classe CSS du bouton

    //   },


    // ],

    // language: {
    //   url: '/assets/i18n/French.json',
    //   emptyTable: 'Aucune donnée disponible dans le tableau',
    //   info: 'Affichage de _START_ à _END_ sur _TOTAL_ entrées',
    //   infoEmpty: 'Affichage de 0 à 0 sur 0 entrées',
    //   infoFiltered: '(filtré à partir de _MAX_ entrées au total)',
    //   infoPostFix: '',
    //   thousands: ',',
    //   lengthMenu: 'Afficher _MENU_ entrées',
    //   loadingRecords: 'Chargement...',
    //   processing: 'Traitement...',
    //   search: 'Rechercher :',
    //   zeroRecords: 'Aucun enregistrement correspondant trouvé',
    //   paginate: {
    //     first: '',
    //     last: '',
    //     next: 'Suivant',
    //     previous: 'Précédent'
    //   },
    //   aria: {
    //     sortAscending: ': activer pour trier la colonne par ordre croissant',
    //     sortDescending: ': activer pour trier la colonne par ordre décroissant'
    //   }
    // },
    // stripeClasses: [],
    // });
  }

  ngOnDestroy() {
    // if (this.datatable5) {
    //   this.datatable5.destroy();
    // }
    // if (this.dataTable6) {
    //   this.dataTable6.destroy();
    // }
  }
}
