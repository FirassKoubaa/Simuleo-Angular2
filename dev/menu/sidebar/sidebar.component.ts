/**
 * Created by root on 24/02/16.
 */

import {Component,NgZone} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RadioFormesType1Component} from "../radioFormesType1/radioFormesType1.component";
import {RadioFormesFormeComponent} from "../radioFormesForme/radioFormesForme.component";
import {CheckboxFormesType2} from "../checkboxFormesType2/checkboxFormesType2.component";
import {HousepicComponent} from "../housepic/housepic.component";
import {CouleursComponent} from "../couleurs/couleurs.component/couleurs.component";
import {CouleursService} from "../../services/couleurs/CouleursService";
import {ParametragesService} from "../../services/parametrages/parametragesService";
import {ContentComponent} from "../../simulation/content.component/content.component";
import {DefsComponent} from "../couleurs/defs.component/defs.component";
import {SidebarMenuService} from "../../services/menu/SidebarMenuService";


@Component({
    selector: 'sidebar',
    templateUrl: '../dev/menu/sidebar/sidebar.component.html',
    styleUrls: ['../dev/menu/sidebar/sidebar.component.css'],
    directives: [RadioFormesType1Component, RadioFormesFormeComponent, CheckboxFormesType2, HousepicComponent,
        CouleursComponent, ContentComponent, DefsComponent,
        ROUTER_DIRECTIVES],
    pipes: []


})
export class SidebarComponent {


    constructor(public CouleursService:CouleursService,
                public ParamService:ParametragesService,
                public menuService:SidebarMenuService) {
    }


    ngOnInit() {
    }

    ngOnDestroy() {
    }

    //selection menu couleurs
    onselect(selected:any) {


        if ((this.CouleursService.compteur ) % 2 == 0) {
            this.CouleursService.menuCouleursChoisi.next(selected);
            this.CouleursService.compteur++;
        }

        else {

            this.CouleursService.compteur++
        }
    }

}
