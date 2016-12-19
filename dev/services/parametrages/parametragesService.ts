/**
 * Created by root on 03/04/16.
 */
import {Injectable,EventEmitter,Output} from 'angular2/core';
import {Http} from "angular2/http";
import 'rxjs/add/operator/map';
import {Subject} from "rxjs/Subject";
import {Dormant} from "../../modeles/dormant/Dormant";
import {BehaviorSubject} from "rxjs/Rx";


@Injectable()
export class ParametragesService {


    // DORMANT
    public dormant:Dormant;
    public opacite= 10;
    public angle = 0;
    //////////////////////////////////////

    constructor(public http:Http) {
        //http
        this.http = http;

        // DORMANT
        this.dormant = new Dormant(
            /*X0*/200.00,
            /*Y0*/36.00,

            /*Profile_Ext_Larg*/25.00,
            /*Profile_Int_Larg*/25.00,
            /*Profile_Ouv_Larg*/35.00,
            /*Parclose_Larg*/8.00,

            /*Centre_Larg*/273,
            /*Centre_Haut*/400,

            /*Rect_ON*/1.00,

            /*ChanfreinG_ON*/0.00,
            /*ChanfreinG_Pourcent_Haut*/0.35,
            /*ChanfreinG_Pourcent_Larg*/0.35,
            /*ChanfreinD_ON*/0.00,
            /*ChanfreinD_Pourcent_Haut*/0.35,
            /*ChanfreinD_Pourcent_Larg*/0.35,

            /*TriangleG_ON*/0.00,
            /*TriangleG_H_ON*/0.00,
            /*TriangleG_H_Pourcent_Haut*/0.35,
            /*TriangleD_ON*/0.00,
            /*TriangleD_H_ON*/0.00,
            /*TriangleD_H_Pourcent_Haut*/0.32,

            /*DemiOctogone_ON*/0.00,
            /*DemiOctogone_Pourcent_Haut*/0.32,
            /*DemiOctogone_Pourcent_Larg*/0.35,

            /*Octogone_ON*/0.00,
            /*Octogone_Pourcent_Haut*/0.35,
            /*Octogone_Pourcent_Larg*/0.35,

            /*DemiHexag_ON*/0.00,
            /*DemiHexagl_Pourcent_Haut*/0.20,

            /*Hexagone_ON*/0.00,
            /*Hexagone_Pourcent_Haut*/0.35,

            /*Triangle_ON*/0.00,

            /*Losange_ON*/0.00,

            /*Ovale_ON*/0.00,
            /*Ovale_Pourcent_Haut*/0.20,

            /*Rond_ON*/0.00,

            /*Cercle_Demi_ON*/0.00,
            /*CercleH_Demi_ON*/0.00,

            /*ArcH_ON*/0.00,

            /*Cercle_QuartG_ON*/0.00,
            /*CercleH_QuartG_ON*/0.00,
            /*Cercle_QuartD_ON*/0.00,
            /*CercleH_QuartD_ON*/0.00,

            /*Cintrage_Pourcent_Haut*/0.30,

            /*Gothique_ON*/0.00,
            /*Gothique_H_ON*/0.00,

            /*Gothique_H__Pourcent_Haut*/0.50,

            /*Ellipse_ON*/0.00,
            /*Ellipse_Demi_ON*/0.00,
            /*EllipseH_Demi_ON*/0.00,
            /*Ellipse_QuartG_ON*/0.00,
            /*EllipseH_QuartG_ON*/0.00,
            /*Ellipse_QuartD_ON*/0.00,
            /*EllipseH_QuartD_ON*/0.00,
            /*Ellipse_Pourcent_Haut*/0.75,

            /*Chapeau_ON*/0.00,

            /*Porte_ON*/0.00,
            /*Porte_Pourcent*/0.40,

            /*Imposte_ON*/0.00,
            /*Imposte_Pourcent*/0.35,

            /*Allege_ON*/0.00,
            /*Allege_Pourcent*/0.35,

            /*LG_ON*/0.00,
            /*LG_Pourcent*/0.35,

            /*LD_ON*/0.00,
            /*LD_Pourcent*/0.35,

            /*VueExt_ON*/1.00,

            /*Couleur_Fill*/"#3C599B",
            /*Couleur_Stroke*/"#3C599B",

            /*Stroke-width*/0.35,
            /*Stroke_opacity*/1.00,

            /*Couleur_Ombre*/"gray",

            /*Seuil_Stroke*/"silver",
            /*Seuil_Stroke_Width*/4.00,

            /*Couleur_Lumiere*/"white");



    }


}
