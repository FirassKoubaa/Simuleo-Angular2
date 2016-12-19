/**
 * Created by root on 23/03/16.
 */
import {Injectable,EventEmitter,Output,Component, Directive} from 'angular2/core';
import {Http} from "angular2/http";
import { BehaviorSubject } from 'rxjs/subject/BehaviorSubject';
import 'rxjs/add/operator/map';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {Dormant} from "../../modeles/dormant/Dormant";


@Injectable()
export class FormeService {

    /* Recuperation Type 1 et envoie au component component (ts) valeur selectionnèe du type1*/

    public type1S$:BehaviorSubject<number> = new BehaviorSubject<number>(101);

    /* si on utilise type1 comme subject*/
    public _type1 = new Subject();  //celle envoyèe comme event

    get type1():any {
        return this._type1;
    }

    set type1(value:any) {
        this._type1 = value;
    }

    ///////////////////////////////////////
    /* METHODE RAPIDE DE RECUPERATION type2 (SUBJECT ) valeur selectionnèe du Formes.type2*/

    public ImposteF = new Subject();
    public AllegeF = new Subject();
    public LgF = new Subject();
    public LdF = new Subject();

    public ImpostePF = new Subject();
    public LgPF = new Subject();
    public LdPF = new Subject();


//////////////////////////////////////
    /* METHODE RAPIDE DE RECUPERATION forme Geo (SUBJECT ) valeur selectionnèe du Formes.forme*/

    public formeGeo = new Subject();

    public dormant:Dormant;
    public items_list;


    //////////////////////////////////////

    constructor(public http:Http) {

        //this.changeForme(selected)
        this.http = http;
        this.http.get('dev/JsonData/formes.json').map(res => res.json()).subscribe(formes => this.items_list = formes)
    }

    /*parsing  */
    getjson() {
        return this.http.get('dev/JsonData/formes.json')
            .map(res => res.json())
    }

    /* TYPE 1 BEHAVIOR SUBJECT */

    set type1S(value:number) {
        this.type1S$.next(value);
        console.log("type1 in sevice " + this.type1S$.value)

    }


}