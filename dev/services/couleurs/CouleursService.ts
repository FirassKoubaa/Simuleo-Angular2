/**
 * Created by root on 01/04/16.
 */
import {Injectable,EventEmitter,Output} from 'angular2/core';
import {Http} from "angular2/http";
import 'rxjs/add/operator/map';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/Rx";


@Injectable()
export class CouleursService {



    /* METHODE RAPIDE DE RECUPERATION du Sous Menu Couleurs (SUBJECT ) selectionnè */

    public menuCouleursChoisi = new Subject();

    /* Recuperer le couleur selectionne */

    //public couleurChoisi = new Subject();
    public submenuCourant = new Subject();

    //public teinteOrColor=new Subject();
    public teinteOrColor:BehaviorSubject<string> = new BehaviorSubject<string>("#3C599B");


    public compteur:number = 2;
    public colors_list;


    //////////////////////////////////////

    constructor(public http:Http) {

        this.http = http;
        this.http.get('dev/JsonData/couleurs.json').map(res => res.json()).subscribe(couleurs => this.colors_list = couleurs)

    }

    /*parsing  */
    getjson() {
        return this.http.get('dev/JsonData/couleurs.json')
            .map(res => res.json())
    }


    /*actions*/


}
