/**
 * Created by root on 16/03/16.
 */
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {CouleursService} from "../../../services/couleurs/CouleursService";
import {DefsComponent} from "../defs.component/defs.component";
import {SidebarComponent} from "../../sidebar/sidebar.component";
import {ContentComponent} from "../../../simulation/content.component/content.component";


@Component({
    selector: 'couleurs',
    templateUrl: '../../dev/menu/couleurs/couleurs.component/couleurs.component.html',
    styleUrls: ['../../dev/menu/couleurs/couleurs.component/couleurs.component.css'],
    //directives: [DefsComponent]


})
export class CouleursComponent {


    //menu couleur selectionne
    menuCouleursRecu:any;

    constructor(public CouleurService:CouleursService) {

        //charger le nombre du menu couleur selectionne - ceci pourrait etre place dans ngOnInit()
        this.CouleurService.menuCouleursChoisi.subscribe(color => this.menuCouleursRecu = color);

    }

    ngOnInit() {
    }

    ngOnDestroy() {

    }

    //envoie du couleur (teinte) selectionnee
    onSelectColor(submenu:any, selected:any) {
        this.CouleurService.submenuCourant.next(submenu);
        this.CouleurService.teinteOrColor.next(selected);

        console.log("couleur comp ts " + selected);
    }

}