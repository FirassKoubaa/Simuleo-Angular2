/**
 * Created by root on 09/04/16.
 */

import {Injectable,EventEmitter,Output,Component, Directive} from 'angular2/core';
import {Http} from "angular2/http";
import { BehaviorSubject } from 'rxjs/subject/BehaviorSubject';
import 'rxjs/add/operator/map';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {Dormant} from "../../modeles/dormant/Dormant";


@Injectable()
export class SidebarMenuService {

    /* Recuperation Type 1 et envoie au component component (ts) valeur selectionnèe du type1*/

    public type1S$:BehaviorSubject<number> = new BehaviorSubject<number>(101);


    ///////////////////////////////////////
    /* METHODE RAPIDE DE RECUPERATION type2 (SUBJECT ) valeur selectionnèe du Formes.type2*/


    public LdPF = new Subject();

    public items_list:any;
    public items_niv1:any;


//////////////////////////////////////


    constructor(public http:Http) {

        //this.changeForme(selected)
        this.http = http;
        this.http.get('dev/JsonData/sidebarMenu.json').map(res => res.json()).subscribe(sb => this.items_list = sb);
        this.http.get('dev/JsonData/sidebarMenuNiveau1.json').map(res => res.json()).subscribe(niv1 => this.items_niv1 = niv1)

    }

    /*parsing  */
    getjson() {
        return this.http.get('dev/JsonData/sidebarMenu.json')
            .map(res => res.json())
    }

    //niveau 1 du menu
    getjsonMenuNiveau1() {
        return this.http.get('dev/JsonData/sidebarMenuNiveau1.json')
            .map(res => res.json())
    }


    /*actions*/


}









