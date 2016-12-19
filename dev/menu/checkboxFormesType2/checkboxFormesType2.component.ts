/**
 * Created by root on 14/03/16.
 */
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";
import { MdCheckbox} from "ng2-material/all";


import {ROUTER_DIRECTIVES} from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {FormeService} from "../../services/menu/FormeService";
import {RadioFormesType1Component} from "../radioFormesType1/radioFormesType1.component";
//import {MATERIAL_DIRECTIVES} from "ng2-material/all";


@Component({
    selector: 'checkboxFormesType2',
    templateUrl: '../dev/menu/checkboxFormesType2/checkboxFormesType2.component.html',
    styleUrls: ['../dev/menu/checkboxFormesType2/checkboxFormesType2.component.css'],

    directives: [MdCheckbox,RadioFormesType1Component]
})
export  class CheckboxFormesType2 {
    public cb1 = false;
    public cb2 = false;
    public cb3 = false;
    public cb4 = false;

    public cb11 = false;
    public cb33 = false;
    public cb44 = false;


    // variable a en mettre le type1 selectionne
    public  type1Recu: any;


    constructor(public formeService: FormeService) {
  
    //chargement RAPIDE (METHODE SUBJECT) du type1 dans type1Recu
        this.formeService._type1.subscribe
        (type1 =>{
            this.type1Recu = type1
            if (this.type1Recu == 101){
                this.cb11 =false;
                this.cb33 =false;
                this.cb44 =false
            }
            this.type1Recu = type1
            if (this.type1Recu == 102){
                this.cb1 =false;
                this.cb2 =false;
                this.cb3 =false;
                this.cb4 =false;
            }
        });

    }

    ngOnInit(){}

    ngOnDestroy(){

    }

    // methode de selections et envoie au service
       // selection des checkcbox FENETRE (etat selection + etat par defaut)


    onSelectImposteF(selected :any){  //cb1
        this.formeService.ImposteF.next(selected)

    }

    onSelectAllegeF(selected :any){ //cb2
        this.formeService.AllegeF.next(selected)

    }

    onSelectLgF(selected :any){   //cb3
        this.formeService.LgF.next(selected)

    }

    onSelectLdF(selected :any){  //cb4
        this.formeService.LdF.next(selected)

    }

    // selection des checkcbox PORTE FENETRE ////////////

    onSelectImpostePF(selected :any){  //cb11
        this.formeService.ImpostePF.next(selected)

    }

    onSelectLgPF(selected :any){  //cb33
        this.formeService.LgPF.next(selected)

    }

    onSelectLdPF(selected :any){  //cb44
        this.formeService.LdPF.next(selected)

    }
}