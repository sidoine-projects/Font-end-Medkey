import { Component, AfterViewInit } from '@angular/core';

import * as $ from 'jquery';

import 'datatables.net';
import 'datatables.net-bs4';
import 'datatables.net-buttons'; // Plugin des boutons

import 'datatables.net/js/jquery.dataTables.min.js';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import 'datatables.net-buttons/js/dataTables.buttons.min.js';
import 'datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js';


import 'datatables.net-buttons/js/buttons.html5.min.js';
import 'datatables.net-buttons/js/buttons.print.js';
import 'datatables.net-buttons/js/buttons.colVis.js';

import 'datatables.net-responsive';
import 'datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css'; // Si vous utilisez Bootstrap 4

import 'datatables.net-rowreorder';
import 'datatables.net-fixedheader';
// declaration  d'une variable globale de type any. ca permet à Jquery d'etre global dans le context général.Ceci est utile car je veux utiliser jquery dans l'application


@Component({
  selector: 'app-admissions-attentes',
  templateUrl: './admissions-attentes.component.html',
  styleUrls: ['./admissions-attentes.component.scss']
})

export class AdmissionsAttentesComponent implements AfterViewInit {
  // Vous pouvez définir vos données ici si nécessaire

  // public data = [
  //   { name: 'test1', email: 'test1@gmail.com', website: 'test1.com' },
  //   { name: 'test2', email: 'test2@gmail.com', website: 'test2.com' },
  //   { name: 'test3', email: 'test3@gmail.com', website: 'test3.com' },
  //   { name: 'test4', email: 'test4@gmail.com', website: 'test4.com' },
  // ];


  ngAfterViewInit() { // apres que la vue du composant soit initialiser on peut personnaalisé notre datatable
    $(document).ready(() => {
      
      // @ts-ignore
      $('#myTable').DataTable({
        pagingType: 'full_numbers',
        pageLength: 3,

        lengthMenu: [3, 10, 25, 50, 75, 100],
        processing: true,
        info: true,
        searching: true,
        responsive: true,

        dom:
          '<"row mb-3"<"col-md-12"B>>' +
          '<"row mb-0"<"col-md-6"l><"col-md-6"f>>' +
          '<"row"<"col-md-12"tr>>' +
          '<"row"<"col-md-6"i><"col-md-6"p>>',


        buttons: [

          {
            extend: 'excelHtml5',
            text: 'Excel',
            className: 'btn btn-gray btn-sm'

          },
          {
            extend: 'pdfHtml5',
            text: 'PDF',
            className: 'btn btn-gray btn-sm', // Personnalisation de la classe CSS du bouton

          },

          {
            extend: 'print',
            text: 'Print',
            className: 'btn btn-gray btn-sm', // Personnalisation de la classe CSS du bouton

          },

          {
            extend: 'colvis',
            text: 'Column visibility',
            className: 'btn btn-gray btn-sm', // Personnalisation de la classe CSS du bouton

          },


        ],

        language: {
          url: '/assets/i18n/French.json',
          emptyTable: 'Aucune donnée disponible dans le tableau',
          info: 'Affichage de _START_ à _END_ sur _TOTAL_ entrées',
          infoEmpty: 'Affichage de 0 à 0 sur 0 entrées',
          infoFiltered: '(filtré à partir de _MAX_ entrées au total)',
          infoPostFix: '',
          thousands: ',',
          lengthMenu: 'Afficher _MENU_ entrées',
          loadingRecords: 'Chargement...',
          processing: 'Traitement...',
          search: 'Rechercher :',
          zeroRecords: 'Aucun enregistrement correspondant trouvé',
          paginate: {
            first: '',
            last: '',
            next: 'Suivant',
            previous: 'Précédent'
          },
          aria: {
            sortAscending: ': activer pour trier la colonne par ordre croissant',
            sortDescending: ': activer pour trier la colonne par ordre décroissant'
          }
        },
        stripeClasses: [],



      });

    });
  }




}