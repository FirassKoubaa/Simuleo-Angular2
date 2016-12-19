import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {BackgroundService} from "../../services/background/BackgroundService";
import {ContentComponent} from "../../simulation/content.component/content.component";
import {OnInit} from "angular2/core";
import {OnDestroy} from "angular2/core";
import {Http} from "angular2/http";
import {HTTP_PROVIDERS} from "angular2/http";
import 'rxjs/add/operator/map';


@Component({
    selector: 'housepic',
    templateUrl: '../dev/menu/housepic/housepic.component.html',
    styleUrls: ['../dev/menu/housepic/housepic.component.css'],
    /*providers:[BackgroundService],*/
    viewProviders: [HTTP_PROVIDERS],
    directives: [ContentComponent]

})
export class HousepicComponent implements OnInit, OnDestroy {

    images_list;
    VueChoisie:any;

    constructor(public BackService:BackgroundService) {
        //chargement de l'etat du switch vue
        this.BackService.vue.subscribe(vue => this.VueChoisie = vue)

    }

    onSelectImage(lien) {
        console.log("housepic" + lien.toString());
        this.BackService.imageChange(lien);
    }

    ngOnInit() {
        this.BackService.getjson().subscribe(people => this.images_list = people);
    }

    ngOnDestroy() {

    }

}




