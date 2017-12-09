import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PersonnageService} from '../shared/personnage.service';

@Component({
  selector: 'app-personnage-detail',
  templateUrl: './personnage-detail.component.html',
  styleUrls: ['./personnage-detail.component.css']
})
export class PersonnageDetailComponent {

  // TODO: créer une variable perso

  // TODO: Appeler PersonnageService dans le constructeur
  constructor() {
    // TODO: appeler getDetail
  }

  /**
   * @desc get the details of a given character
   */
  getDetail() {
    // TODO: appeler PersonnageService.getOne(), faire un .subscribe(res => MAVARIABLECREEE = res.json()) dessus
  }
}
