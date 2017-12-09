import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators';


@Injectable()
export class PersonnageService {

  api= 'https://swapi.co/api/people';
  urlPersonnage = '';

  constructor(private http: Http) { }

  /**
   * @desc getter for urlPersonnage
   */
  getUrlPersonnage() {
    return this.urlPersonnage;
  }

  /**
   * @desc setter for urlPersonnage
   * @param url
   */
  setUrlPersonnage(url: string) {
    this.urlPersonnage = url;
  }

  list() {
    return this.http.get(this.api);
  }
  /**
   * @desc returns a character with the url given in the current service
   * @returns promise
   */
  getOne() {
    // TODO: retourner un Observable<Response> grâce à this.http.get() avec l'url du personnage donné
  }
}
