import { Component, OnInit } from "@angular/core";


import { Router } from '@angular/router';




// import 'datatables.net-rowreorder';
// import 'datatables.net-fixedheader';
// declaration  d'une variable globale de type any. ca permet à Jquery d'etre global dans le context général.Ceci est utile car je veux utiliser jquery dans l'application

@Component({
  selector: "app-typevisite",
  templateUrl: "./typevisite.component.html",
  styleUrls: ["./typevisite.component.scss"],
})
export class TypevisiteComponent implements OnInit {
  // Vous pouvez définir vos données ici si nécessaire

  // public data = [
  //   { name: 'test1', email: 'test1@gmail.com', website: 'test1.com' },
  //   { name: 'test2', email: 'test2@gmail.com', website: 'test2.com' },
  //   { name: 'test3', email: 'test3@gmail.com', website: 'test3.com' },
  //   { name: 'test4', email: 'test4@gmail.com', website: 'test4.com' },
  // ];

 
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
