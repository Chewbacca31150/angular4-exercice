import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PersonnageService} from '../shared/personnage.service';

@Component({
  selector: 'app-personnage-list',
  templateUrl: './personnage-list.component.html',
  styleUrls: ['./personnage-list.component.css']
})
export class PersonnageListComponent implements OnInit {

  persoList: Array<any> = [];
  constructor(private persoService: PersonnageService, private router: Router) { }

  /**
   * We return the first 10 characters and show them on the page
   */
  ngOnInit() {
    // We set persoList with the results from the query we have made in personnage.service
    // We convert the result in json and call results since all the characters are there
    this.persoService.list().subscribe(res => {
      this.persoList = res.json().results;
    });
  }

  /**
   * @description navigate to details
   * @param url
   */
  navigateToDetails(url: string) {
    // TODO: setter urlPersonnage avec l'url en paramètre
    // utiliser this.router.navigate(['perso]); pour naviguer sur la page de détails
  }

}
