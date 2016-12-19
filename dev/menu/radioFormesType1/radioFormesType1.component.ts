/**
 * Created by root on 09/03/16.
 */
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

//import {MATERIAL_DIRECTIVES} from "ng2-material/all";
import {MdRadioButton, MdRadioGroup} from "ng2-material/components/radio/radio_button";
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";


import {ROUTER_DIRECTIVES} from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {OnDestroy} from "angular2/core";
import {OnInit} from "angular2/core";
import {FormeService} from "../../services/menu/FormeService";


@Component({
    selector: 'radioFormesType1',
    templateUrl: '../dev/menu/radioFormesType1/radioFormesType1.component.html',
    styleUrls: ['../dev/menu/radioFormesType1/radioFormesType1.component.css'],

    directives: [MdRadioButton, MdRadioGroup]



})
export class RadioFormesType1Component implements OnInit, OnDestroy{

    //valeur initiale du radio box
    data: any = {init: 'Fenêtre'};

    //liste parsèe du service
        //items_list;


    constructor(private formeService: FormeService) {    }

    ngOnInit(){
        //this.formeService.getjson().subscribe(people => this.items_list = people);
    }

    ngOnDestroy(){

    }

    public  onSelectType1(selected:any){
        

    // mettre l'attiribut "nb" de la valeur selectionne  dans le "subjbect" type1
        this.formeService._type1.next(selected.nb);

        this.formeService.type1S=selected.nb


    }

}