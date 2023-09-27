import { Component, OnInit  } from '@angular/core';



// declaration  d'une variable globale de type any. ca permet à Jquery d'etre global dans le context général.Ceci est utile car je veux utiliser jquery dans l'application


@Component({
  selector: 'app-admissions-attentes',
  templateUrl: './admissions-attentes.component.html',
  styleUrls: ['./admissions-attentes.component.scss']
})

export class AdmissionsAttentesComponent implements  OnInit {
  // Vous pouvez définir vos données ici si nécessaire

  ngOnInit(): void {
  }


}