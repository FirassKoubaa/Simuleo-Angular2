/**
 * Created by root on 17/03/16.
 */
import {Component, ElementRef, AfterViewInit } from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {BackgroundService} from '../../services/background/BackgroundService'
import {HousepicComponent} from "../../menu/housepic/housepic.component";
import {FORM_DIRECTIVES} from "angular2/common";
import {RadioFormesType1Component} from "../../menu/radioFormesType1/radioFormesType1.component";
import {FormeService} from "../../services/menu/FormeService";
import {CouleursService} from "../../services/couleurs/CouleursService";
import {ParametragesService} from "../../services/parametrages/parametragesService";
import {Dormant} from "../../modeles/dormant/Dormant";
import {DefsComponent} from "../../menu/couleurs/defs.component/defs.component";
import {CouleursComponent} from "../../menu/couleurs/couleurs.component/couleurs.component";


//import {HammerGesturesPluginCommon} from 'angular2/src/platform/dom/events/hammer_common';
//import {HammerGesturesPlugin} from 'angular2/src/platform/dom/events/hammer_gestures'
import {isPresent, CONST_EXPR} from 'angular2/src/facade/lang';
import {BaseException, WrappedException} from 'angular2/src/facade/exceptions';
import {Injectable, Inject, OpaqueToken} from 'angular2/core';
import {HoldersService} from "../../services/holders/HoldersService";


@Component({
    selector: 'content',
    templateUrl: '../../../dev/simulation/content.component/content.component.html',
    styleUrls: ['../../../dev/simulation/content.component/content.component.css'],
    /*providers:[BackgroundService],*/
    directives: [FORM_DIRECTIVES, RadioFormesType1Component, DefsComponent, CouleursComponent],


})
export class ContentComponent implements AfterViewInit {

    static hammerInitialized = false;

    //type1
    public  type1Choisi:number;

    //forme Gèo
    public formeGeoChoisi:any;

    //variable checkbox (type2)
    public ImposteFChoisi = false;
    public AllegeFChoisi = false;
    public LgFChoisi = false;
    public LdFChoisi = false;

    public ImpostePFChoisi = false;
    public LgPFChoisi = false;
    public LdPFChoisi = false;

    //couleur choisi
    public submenuRecu:any;
    public teinteOrColorRecu:any;

    //opacitè choisi
    public opaciteChoisi:any;
    public pvRecu:any;


    constructor(public BackService:BackgroundService,
                public formeService:FormeService,
                public couleursService:CouleursService,
                public ParamService:ParametragesService,
                public holdersService:HoldersService,
                private el:ElementRef) {



        //chargement RAPIDE (METHODE SUBJECT) du type1 dans type1Choisi
        //this.formeService._type1.subscribe(type1 => this.type1Choisi = type1); (si c est declarè subject)
        this.formeService.type1S$.subscribe
        (val => {
            this.type1Choisi = val;

            //---> application sur simulation


            if (this.type1Choisi == 102) {
                this.ParamService.dormant.Porte_ON = 1.00;

                this.ParamService.dormant.Imposte_ON = 0.00;
                this.ParamService.dormant.LG_ON = 0.00;
                this.ParamService.dormant.LD_ON = 0.00;
                this.ParamService.dormant.Allege_ON = 0.00;
                this.ParamService.dormant.Rect_ON = 1.00


            }
            if (this.type1Choisi == 101) {
                this.ParamService.dormant.Porte_ON = 0.00;
                this.ParamService.dormant.Imposte_ON = 0.00;
                this.ParamService.dormant.LG_ON = 0.00;
                this.ParamService.dormant.LD_ON = 0.00;
                this.ParamService.dormant.Allege_ON = 0.00;
                this.ParamService.dormant.Rect_ON = 1.00

            }
        });


        //chargement RAPIDE (METHODE SUBJECT) du formeGeo dans formeGeoChoisi

        this.formeService.formeGeo.subscribe
        (formeGeo => {               //---> application sur simulation

            this.formeGeoChoisi = formeGeo;

            // chargement dynamique de la forme Gèo choisie (avec la variable correspondante au dormant)
            this.ParamService.dormant[this.formeGeoChoisi] = 1.00


        });

        //chargement RAPIDE (METHODE SUBJECT) des valeur du type2:


        this.formeService.ImposteF.subscribe
        (type2 => {
            this.ImposteFChoisi = type2;
            //---> application sur simulation

            // Imposte sur fenetre
            if (this.ImposteFChoisi == true) {
                this.ParamService.dormant.Imposte_ON = 1.00
            }
            if (this.ImposteFChoisi == false) {
                this.ParamService.dormant.Imposte_ON = 0.00
            }

        });

        this.formeService.AllegeF.subscribe
        (type2 => {
            this.AllegeFChoisi = type2;

            // allege sur fenetre
            if (this.AllegeFChoisi == true) {
                this.ParamService.dormant.Allege_ON = 1.00
            }
            if (this.AllegeFChoisi == false) {
                this.ParamService.dormant.Allege_ON = 0.00
            }
        });


        this.formeService.LgF.subscribe
        (type2 => {
            this.LgFChoisi = type2;

            // Lateral gauche sur fenetre
            if (this.LgFChoisi == true) {
                this.ParamService.dormant.LG_ON = 1.00
            }
            if (this.LgFChoisi == false) {
                this.ParamService.dormant.LG_ON = 0.00
            }

        });


        this.formeService.LdF.subscribe
        (type2 => {
            this.LdFChoisi = type2;

            // Lateral droite sur fenetre
            if (this.LdFChoisi == true) {
                this.ParamService.dormant.LD_ON = 1.00
            }
            if (this.LdFChoisi == false) {
                this.ParamService.dormant.LD_ON = 0.00
            }
        });

        this.formeService.ImpostePF.subscribe
        (type2 => {
            this.ImpostePFChoisi = type2;

            // imposte sur porte fenetre
            if (this.ImpostePFChoisi == true) {
                this.ParamService.dormant.Imposte_ON = 1.00
            }
            if (this.ImpostePFChoisi == false) {
                this.ParamService.dormant.Imposte_ON = 0.00
            }
        });

        this.formeService.LgPF.subscribe
        (type2 => {
            this.LgPFChoisi = type2;

            // Lateral gauche sur porte fenetre
            if (this.LgPFChoisi == true) {
                this.ParamService.dormant.LG_ON = 1.00
            }
            if (this.LgPFChoisi == false) {
                this.ParamService.dormant.LG_ON = 0.00
            }
        });

        this.formeService.LdPF.subscribe
        (type2 => {
            this.LdPFChoisi = type2;

            // Lateral droite sur porte fentre
            if (this.LdPFChoisi == true) {
                this.ParamService.dormant.LD_ON = 1.00
            }
            if (this.LdPFChoisi == false) {
                this.ParamService.dormant.LD_ON = 0.00
            }
        });


        //chargement RAPIDE (METHODE SUBJECT) du submenu choisi et la teinteOrColor
        this.couleursService.submenuCourant.subscribe(sb => this.submenuRecu = sb);

        this.couleursService.teinteOrColor.subscribe
        (color => {
            this.teinteOrColorRecu = color;
            this.ParamService.dormant.Couleur_Fill = this.teinteOrColorRecu;

        });
    }

    //DFEINITION DES ACTIONS DEPLACEMENT & DIMENSIONNEMENT

    ngAfterViewInit() {

        ///////EVENEMENT DRAG OBJET (fenetre /porte fenetre)

        var myElement = document.getElementById('mobilite');
        var actionHammer = new Hammer(myElement);
        var actualX = this.ParamService.dormant.X0;
        var actualY = this.ParamService.dormant.Y0;

        //action pan
        actionHammer.get('pan').set({direction: Hammer.DIRECTION_ALL});
        //actionHammer.on("panleft panright panup pandown tap press",hammer);
        //actionHammer.on('pan',hammer);
        actionHammer.on('pan', ev => {
            //console.log(ev);

            this.ParamService.dormant.X0 = actualX + ev.deltaX;
            this.ParamService.dormant.Y0 = actualY + ev.deltaY;

        });

        actionHammer.on("panend", function (ev) {
            actualX = actualX + ev.deltaX;
            actualY = actualY + ev.deltaY;
        });

        ////////////////////////////////DEFINITION
        var actualLarg = this.ParamService.dormant.Centre_Larg;
        var actualHaut = this.ParamService.dormant.Centre_Haut;

        ///////EVENEMNT RESIZE SUR RECT GAUCHE HAUT

        var holderGH = document.getElementById('gaucheHaut');
        var actionGH = new Hammer(holderGH);

        //action pan
        actionGH.get('pan').set({direction: Hammer.DIRECTION_ALL});

        actionGH.on('pan', gh => {

            this.ParamService.dormant.Centre_Larg = actualLarg - gh.deltaX;
            this.ParamService.dormant.Centre_Haut = actualHaut - gh.deltaY;
            this.ParamService.dormant.Y0 = actualY + gh.deltaY;
            this.ParamService.dormant.X0 = actualX + gh.deltaX;

        });

        actionGH.on("panend", function (gh) {
            actualLarg = actualLarg - gh.deltaX;
            actualHaut = actualHaut - gh.deltaY;
            actualY = actualY + gh.deltaY;
            actualX = actualX + gh.deltaX;
        });

        ///////EVENEMNT RESIZE SUR RECT DROITE HAUT

        var holderDH = document.getElementById('droiteHaut');
        var actionDH = new Hammer(holderDH);


        //action pan
        actionDH.get('pan').set({direction: Hammer.DIRECTION_ALL});

        actionDH.on('pan', dh => {
            this.ParamService.dormant.Centre_Larg = actualLarg + dh.deltaX;
            this.ParamService.dormant.Centre_Haut = actualHaut - dh.deltaY;
            this.ParamService.dormant.Y0 = actualY + dh.deltaY;

        });

        actionDH.on("panend", function (dh) {
            actualLarg = actualLarg + dh.deltaX;
            actualHaut = actualHaut - dh.deltaY;
            actualY = actualY + dh.deltaY;

        });

        ///////EVENEMNT RESIZE SUR RECT GAUCHE BAS

        var holderGB = document.getElementById('gaucheBas');
        var actionGB = new Hammer(holderGB);

        //action pan
        actionGB.get('pan').set({direction: Hammer.DIRECTION_ALL});

        actionGB.on('pan', gb => {

            this.ParamService.dormant.Centre_Larg = actualLarg - gb.deltaX;
            this.ParamService.dormant.Centre_Haut = actualHaut + gb.deltaY;
            this.ParamService.dormant.X0 = actualX + gb.deltaX;

        });

        actionGB.on("panend", function (gb) {
            actualLarg = actualLarg - gb.deltaX;
            actualHaut = actualHaut + gb.deltaY;
            actualX = actualX + gb.deltaX;

        });

        ///////EVENEMNT RESIZE SUR RECT DROITE BAS

        var holderDB = document.getElementById('droiteBas');
        var actionDB = new Hammer(holderDB);


        //action pan
        actionDB.get('pan').set({direction: Hammer.DIRECTION_ALL});

        actionDB.on('pan', db => {

            this.ParamService.dormant.Centre_Larg = actualLarg + db.deltaX;
            this.ParamService.dormant.Centre_Haut = actualHaut + db.deltaY;

        });

        actionDB.on("panend", function (db) {
            actualLarg = actualLarg + db.deltaX;
            actualHaut = actualHaut + db.deltaY;
        });

        ///////EVENEMNT RESIZE SUR RECT MILIEU HAUT

        var holderMH = document.getElementById('milieuHaut');
        var actionMH = new Hammer(holderMH);

        //action pan
        actionMH.get('pan').set({direction: Hammer.DIRECTION_ALL});

        actionMH.on('pan', mh => {

            this.ParamService.dormant.Centre_Haut = actualHaut - mh.deltaY;
            this.ParamService.dormant.Y0 = actualY + mh.deltaY;

        });
        actionMH.on("panend", function (mh) {
            actualHaut = actualHaut - mh.deltaY;
            actualY = actualY + mh.deltaY;

        });

        ///////EVENEMNT RESIZE SUR RECT MILIEU GAUCHE

        var holderMG = document.getElementById('milieuGauche');
        var actionMG = new Hammer(holderMG);

        //action pan
        actionMG.get('pan').set({direction: Hammer.DIRECTION_ALL});

        actionMG.on('pan', mg => {

            this.ParamService.dormant.Centre_Larg = actualLarg - mg.deltaX;
            this.ParamService.dormant.X0 = actualX + mg.deltaX;


        });

        actionMG.on("panend", function (mg) {
            actualLarg = actualLarg - mg.deltaX;
            actualX = actualX + mg.deltaX;

        });

        ///////EVENEMNT RESIZE SUR RECT MILIEU DROITE

        var holderMD = document.getElementById('milieuDroite');
        var actionMD = new Hammer(holderMD);

        //action pan
        actionMD.get('pan').set({direction: Hammer.DIRECTION_ALL});

        actionMD.on('pan', md => {

            this.ParamService.dormant.Centre_Larg = actualLarg + md.deltaX;

        });

        actionMD.on("panend", function (md) {
            actualLarg = actualLarg + md.deltaX;
        });

        ///////EVENEMNT RESIZE SUR RECT MILIEU BAS

        var holderMB = document.getElementById('milieuBas');
        var actionMB = new Hammer(holderMB);

        //action pan
        actionMB.get('pan').set({direction: Hammer.DIRECTION_ALL});

        actionMB.on('pan', mb => {

            this.ParamService.dormant.Centre_Haut = actualHaut + mb.deltaY;
        });

        actionMB.on("panend", function (mb) {
            actualHaut = actualHaut + mb.deltaY;
        });


        ///////EVENEMNT RESIZE SUR HOLDER CIRCLE ROTATION

        var holderCIRCLE = document.getElementById('rotation');
        var actionCIRCLE = new Hammer(holderCIRCLE);



        //action pan
        actionCIRCLE.get('pan').set({direction: Hammer.DIRECTION_ALL});

        actionCIRCLE.on('pan', circ => {
            console.log( circ);
            if (circ.angle < 30 && circ.angle > -31)
                this.ParamService.angle = circ.angle; 


        });

        actionCIRCLE.on("panend", function (circ) {
            //this.ParamService.angle = circ.angle;


        });


    }


}

