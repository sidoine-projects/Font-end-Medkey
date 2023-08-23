import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms"; // N'oubliez pas d'importer FormGroup

declare var grecaptcha: any; // Déclarer la variable globale grecaptcha
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: [""],
      password: [""],
    });
  }

  ngOnInit() {}

  onSubmit() {
    const recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse === "") {
      // reCAPTCHA n'a pas été validé
      console.log("Veuillez valider reCAPTCHA.");
    } else {
      // reCAPTCHA a été validé, vous pouvez envoyer le formulaire
      console.log("Formulaire soumis avec succès !");
      // Envoyez recaptchaResponse et les données de connexion au serveur pour validation
    }
  }
}
