import { Component, AfterViewInit } from '@angular/core';

 import * as $ from 'jquery';



 import 'datatables.net';
 import 'datatables.net-bs4';

 import 'jszip';
 import 'pdfmake/build/pdfmake.min.js';
 import 'pdfmake/build/vfs_fonts.js';
 import 'datatables.net-buttons/js/buttons.html5.min.js';
 import 'datatables.net-buttons/js/buttons.print.js';
 import 'datatables.net-buttons/js/buttons.colVis.js';
 import 'datatables.net-buttons/js/buttons.flash.js';


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
      $('#myTable').DataTable({
        pagingType: 'full_numbers',
        pageLength: 3,
     
    lengthMenu: [ 3, 10, 25, 50, 75, 100 ],
        processing: true,
        info: true,
        searching: true,
        dom:
          '<"row mb-3"<"col-md-12"B>>' +
          '<"row mb-0"<"col-md-6"l><"col-md-6"f>>' +
          '<"row"<"col-md-12"tr>>' +
          '<"row"<"col-md-6"i><"col-md-6"p>>',
        
      
        language: {
          url: '/assets/i18n/French.json',
         
        },
        buttons: [
          {
            extend: 'csvHtml5',
            text: 'CSV',
            className: 'btn btn-inverse-dark', // Personnalisation de la classe CSS du bouton

          },
      
          {
            extend: 'pdfHtml5',
            text: 'PDF',
            className: 'btn btn-inverse-dark', // Personnalisation de la classe CSS du bouton

          },

          {
            extend: 'pdfHtml5',
            text: 'Excel',
            className: 'btn btn-inverse-dark', // Personnalisation de la classe CSS du bouton


          },
     
    
        ],
      oLanguage: {
       
        sEmptyTable: 'Aucune donnée disponible dans le tableau',
        sInfo: 'Affichage de _START_ à _END_ sur _TOTAL_ entrées',
        sInfoEmpty: 'Affichage de 0 à 0 sur 0 entrées',
        sInfoFiltered: '(filtré à partir de _MAX_ entrées au total)',
        sInfoPostFix: '',
        sInfoThousands: ',',
        sLengthMenu: 'Afficher _MENU_ entrées',
        sLoadingRecords: 'Chargement...',
        sProcessing: 'Traitement...',
        sSearch: 'Rechercher :',
        sZeroRecords: 'Aucun enregistrement correspondant trouvé',
        oPaginate: {
          sFirst: '', // Bouton "Première" vide
          sLast: ''  // Bouton "Dernière" vide
        },
        oAria: {
          sSortAscending: ': activer pour trier la colonne par ordre croissant',
          sSortDescending: ': activer pour trier la colonne par ordre décroissant'
        }
      },
      
      stripeClasses: [],

     

      
  
    


      });

    });
  }




}
