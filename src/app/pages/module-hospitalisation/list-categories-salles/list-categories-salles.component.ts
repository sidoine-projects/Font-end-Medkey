import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';

@Component({
  selector: 'app-list-categories-salles',
  templateUrl: './list-categories-salles.component.html',
  styleUrls: ['./list-categories-salles.component.scss']
})


export class ListCategoriesSallesComponent implements OnInit {

  constructor(private router: Router) {}


  ouvrirAjout() {
    this.router.navigate(['/categories-chambres']); // Remplacez par le chemin de votre composant d'ajout
  }




  dtOptions: any = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true, 
   
      searching: true,
    
      lengthMenu: [10, 25, 50, 75, 100],
     
      // dom: 'Bfrtip',
     
      // Configure the buttons

      dom:
        '<"row mb-3"<"col-md-12"B>>' +
        '<"row mb-0"<"col-md-6"l><"col-md-6"f>>' +
        '<"row"<"col-md-12"tr>>' +
        '<"row"<"col-md-6"i><"col-md-6"p>>',

        initComplete: function (settings: any, json: any) {

          // $('button').removeClass('dt-button');
          $('.dt-buttons').addClass('btn-group flex-wrap');


    
          $('div.dt-button').addClass('btn-group');


          // $('.dataTables_paginate').removeClass('dt-button');
          // $('.dataTables_paginate').addClass('btn btn-sm btn-primary');
          // $('.dataTables_paginate').addClass('btn btn-sm btn-primary');
          $('button.dt-button:not(.dataTables_paginate button)').removeClass('dt-button');



            
        },

        "drawCallback": function () {
          $('.dataTables_paginate > .pagination a').addClass('btn btn-sm btn-primary');
      },

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
        processing:     "Traitement en cours...",
        search:         "Rechercher&nbsp;:",
     
        lengthMenu:    "Afficher _MENU_ &eacute;l&eacute;ments",
        info:           "Affichage de l'&eacute;lement _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
        infoEmpty:      "Affichage de l'&eacute;lement 0 &agrave; 0 sur 0 &eacute;l&eacute;ments",
        infoFiltered:   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
        infoPostFix:    "",
        loadingRecords: "Chargement en cours...",
        zeroRecords:    "Aucun &eacute;l&eacute;ment &agrave; afficher",
        emptyTable:     "Aucune donnée disponible dans le tableau",
        paginate: {
            first:      "",
            previous:   "Pr&eacute;c&eacute;dent",
            next:       "Suivant",
            last:       ""
        },
        aria: {
            sortAscending:  ": activer pour trier la colonne par ordre croissant",
            sortDescending: ": activer pour trier la colonne par ordre décroissant"
        }
    },
 
    
      responsive: true,
    };
  }




}
