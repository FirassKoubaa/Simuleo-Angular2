/**
 * Created by root on 14/03/16.
 */
/**
 * Created by root on 09/03/16.
 */
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

//import {MATERIAL_DIRECTIVES} from "ng2-material/all";
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";
import {MdRadioButton, MdRadioGroup} from "ng2-material/components/radio/radio_button";


import {ROUTER_DIRECTIVES} from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {FormeService} from "../../services/menu/FormeService";


@Component({
    selector: 'radioFormesForme',
    templateUrl: '../dev/menu/radioFormesForme/radioFormesForme.component.html',
    styleUrls: ['../dev/menu/radioFormesForme/radioFormesForme.component.css'],

    directives: [MdRadioButton, MdRadioGroup]

})
export class RadioFormesFormeComponent {
//valeur initiale du radio box
    data:any = {init: 'Rectangle',};


    // variable a en mettre le type1 selectionne
    public  type1Recu:any;

    constructor(public formeService:FormeService) {

        //chargement RAPIDE (METHODE SUBJECT) du type1 dans type1Recu
        this.formeService._type1.subscribe
        (type1 => {
            this.type1Recu = type1;
            if (this.type1Recu == 101) {
                this.data.init = 'Rectangle'
            }
            if (this.type1Recu == 102) {
                this.data.init = 'Rectangle'
            }
        });
    }

    ngOnInit() {
    }

    ngOnDestroy() {

    }

    onSelectFormeGeo(selected:any) {
        // mettre l'attiribut "varDormant" (c  de la valeur selectionne  dans le "subject" formeGeo
        this.formeService.formeGeo.next(selected.varDormant);
    }

}