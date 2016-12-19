/* ____ ___ __  __ _   _ _     _____ ___   __     _______
 / ___|_ _|  \/  | | | | |   | ____/ _ \  \ \   / |___ /
 \___ \| || |\/| | | | | |   |  _|| | | |  \ \ / /  |_ \
 ___) | || |  | | |_| | |___| |__| |_| |   \ V /  ___) |
 |____|___|_|  |_|\___/|_____|_____\___/     \_/  |____/
 */
export class Dormant {
    get hauteur():number {
        return this._hauteur;
    }

    set hauteur(value:number) {
        this._hauteur = value;
    }
    get largeur():number {
        return this._largeur;
    }

    set largeur(value:number) {
        this._largeur = value;
    }
    /*list of attributes Begin*/
    private _X0:number;  /*this*/
    private _Y0:number; /*this*/
    private _Profile_Ext_Larg:number; /*this*/
    private _Profile_Int_Larg:number;
    private _Profile_Ouv_Larg:number;
    private _Parclose_Larg:number;
    private _Centre_Larg:number;  /*this*/
    private _Centre_Haut:number;  /*this*/
    private _Rect_ON:number;  /*this*/
    private _ChanfreinG_ON:number;  /*this  inc gauche totale*/
    private _ChanfreinG_Pourcent_Haut:number;
    private _ChanfreinG_Pourcent_Larg:number;
    private _ChanfreinD_ON:number;  /*this droite totale */
    private _ChanfreinD_Pourcent_Haut:number;
    private _ChanfreinD_Pourcent_Larg:number;
    private _TriangleG_ON:number;
    private _TriangleG_H_ON:number;
    private _TriangleG_H_Pourcent_Haut:number;
    private _TriangleD_ON:number;
    private _TriangleD_H_ON:number;
    private _TriangleD_H_Pourcent_Haut:number;
    private _DemiOctogone_ON:number;
    private _DemiOctogone_Pourcent_Haut:number;
    private _DemiOctogone_Pourcent_Larg:number;
    private _Octogone_ON:number;
    private _Octogone_Pourcent_Haut:number;
    private _Octogone_Pourcent_Larg:number;
    private _DemiHexag_ON:number;
    private _DemiHexagl_Pourcent_Haut:number;
    private _Hexagone_ON:number;
    private _Hexagone_Pourcent_Haut:number;
    private _Triangle_ON:number;  /*this triangle total*/
    private _Losange_ON:number; /*this losange total*/
    private _Ovale_ON:number;  /*this ovale*/
    private _Ovale_Pourcent_Haut:number;
    private _Rond_ON:number;  /*this  Ronde*/
    private _Cercle_Demi_ON:number;
    private _CercleH_Demi_ON:number;
    private _ArcH_ON:number;
    private _Cercle_QuartG_ON:number;
    private _CercleH_QuartG_ON:number;
    private _Cercle_QuartD_ON:number;
    private _CercleH_QuartD_ON:number;
    private _Cintrage_Pourcent_Haut:number;
    private _Gothique_ON:number;
    private _Gothique_H_ON:number;
    private _Gothique_H__Pourcent_Haut:number;
    private _Ellipse_ON:number;
    private _Ellipse_Demi_ON:number;
    private _EllipseH_Demi_ON:number;
    private _Ellipse_QuartG_ON:number;
    private _EllipseH_QuartG_ON:number;
    private _Ellipse_QuartD_ON:number;
    private _EllipseH_QuartD_ON:number;
    private _Ellipse_Pourcent_Haut:number;
    private _Chapeau_ON:number;
    private _Porte_ON:number;
    private _Porte_Pourcent:number;
    private _Imposte_ON:number;  /*this imposte*/
    private _Imposte_Pourcent:number;
    private _Imposte_min:number;
    private _Allege_ON:number;   /*this  allege*/
    private _Allege_Pourcent:number;
    private _Allege_min:number;
    private _Imposte_min:number;
    private _LG_ON:number;  /*this  lateral gauche*/
    private _LG_Pourcent:number;
    private _LG_min:number;
    private _LD_ON:number;  /*this lateral droite*/
    private _LD_Pourcent:number;
    private _LD_min:number;
    private _VueExt_ONN:number;  /*this mode exterieur*/
    private _Crois_LG_Imp_ON:number;
    private _Crois_LG_All_ON:number;
    private _Crois_LD_Imp_ON:number;
    private _Crois_LD_All_ON:number;
    private _Crois_Imp_LG_ON:number;
    private _Crois_Imp_LD_ON:number;
    private _Crois_All_LG_ON:number;
    private _Crois_All_LD_ON:number;
    private _Couleur_Fill:string;
    private _Couleur_Stroke:string;
    private _Stroke_width:number;
    private _Stroke_opacity:number;
    private _Couleur_Ombre:string;
    private _Seuil_Stroke:string;
    private _Seuil_Stroke_Width:number;
    private _Couleur_Lumiere:string;

    private _hauteur:number;
    private _largeur:number;


    /*list of attributes END*/



    /*list of Getter and Setter Begin*/


    /**
     *
     * @returns {number}
     * @constructor
     */
    public get Gothique_H__Pourcent_Haut():number {
        return this._Gothique_H__Pourcent_Haut;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Gothique_H__Pourcent_Haut(value:number) {
        this._Gothique_H__Pourcent_Haut = value;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get X0():number {
        return this._X0;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set X0(value:number) {
        this._X0 = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Y0():number {
        return this._Y0;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Y0(value:number) {
        this._Y0 = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Profile_Ext_Larg():number {
        return this._Profile_Ext_Larg;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Profile_Ext_Larg(value:number) {
        this._Profile_Ext_Larg = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Parclose_Larg():number {
        return this._Parclose_Larg;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Parclose_Larg(value:number) {
        this._Parclose_Larg = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Centre_Larg():number {
        return this._Centre_Larg;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Centre_Larg(value:number) {
        this._Centre_Larg = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Centre_Haut():number {
        return this._Centre_Haut;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Centre_Haut(value:number) {
        this._Centre_Haut = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get ChanfreinG_ON():number {
        return this._ChanfreinG_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set ChanfreinG_ON(value:number) {
        this.setAllEX();
        this._ChanfreinG_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get ChanfreinD_ON():number {
        return this._ChanfreinD_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set ChanfreinD_ON(value:number) {
        this.setAllEX();
        this._ChanfreinD_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get TriangleG_ON():number {
        return this._TriangleG_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set TriangleG_ON(value:number) {
        this.setAllEX();
        this._TriangleG_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get TriangleG_H_ON():number {
        return this._TriangleG_H_ON;
    }


    /**
     *
     * @param value
     * @constructor
     */

    public set TriangleG_H_ON(value:number) {
        this.setAllEX();
        this._TriangleG_H_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get DemiOctogone_ON():number {
        return this._DemiOctogone_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set DemiOctogone_ON(value:number) {
        this.setAllEX();
        this._DemiOctogone_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get DemiOctogone_Pourcent_Haut():number {
        return this._DemiOctogone_Pourcent_Haut;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set DemiOctogone_Pourcent_Haut(value:number) {
        this._DemiOctogone_Pourcent_Haut = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get DemiOctogone_Pourcent_Larg():number {
        return this._DemiOctogone_Pourcent_Larg;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set DemiOctogone_Pourcent_Larg(value:number) {
        this._DemiOctogone_Pourcent_Larg = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Octogone_ON():number {
        return this._Octogone_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Octogone_ON(value:number) {
        this.setAllEX();
        this._Octogone_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Octogone_Pourcent_Haut():number {
        return this._Octogone_Pourcent_Haut;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Octogone_Pourcent_Haut(value:number) {
        this._Octogone_Pourcent_Haut = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get DemiHexagl_Pourcent_Haut():number {
        return this._DemiHexagl_Pourcent_Haut;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set DemiHexagl_Pourcent_Haut(value:number) {
        this._DemiHexagl_Pourcent_Haut = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Hexagone_ON():number {
        return this._Hexagone_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Hexagone_ON(value:number) {
        this.setAllEX();
        this._Hexagone_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Ovale_ON():number {
        return this._Ovale_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Ovale_ON(value:number) {
        this.setAllEX();
        this._Ovale_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Ovale_Pourcent_Haut():number {
        return this._Ovale_Pourcent_Haut;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Ovale_Pourcent_Haut(value:number) {
        this._Ovale_Pourcent_Haut = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Rond_ON():number {
        return this._Rond_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Rond_ON(value:number) {
        this.setAllEX();
        this._Rond_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */


    public get Cercle_Demi_ON():number {
        return this._Cercle_Demi_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Cercle_Demi_ON(value:number) {
        this.setAllEX();
        this._Cercle_Demi_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get CercleH_Demi_ON():number {
        return this._CercleH_Demi_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set CercleH_Demi_ON(value:number) {
        this.setAllEX();
        this._CercleH_Demi_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Cercle_QuartG_ON():number {
        return this._Cercle_QuartG_ON;
    }

    /**
     *
     * @param value
     * @constructor
     *     this.setAllEX();
     */

    public set Cercle_QuartG_ON(value:number) {
        this.setAllEX();
        this._Cercle_QuartG_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get CercleH_QuartG_ON():number {
        return this._CercleH_QuartG_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set CercleH_QuartG_ON(value:number) {
        this.setAllEX();
        this._CercleH_QuartG_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Cercle_QuartD_ON():number {
        return this._Cercle_QuartD_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Cercle_QuartD_ON(value:number) {
        this.setAllEX();
        this._Cercle_QuartD_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get CercleH_QuartD_ON():number {
        return this._CercleH_QuartD_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set CercleH_QuartD_ON(value:number) {
        this.setAllEX();
        this._CercleH_QuartD_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Ellipse_ON():number {
        return this._Ellipse_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Ellipse_ON(value:number) {
        this.setAllEX();
        this._Ellipse_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Ellipse_Demi_ON():number {
        return this._Ellipse_Demi_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Ellipse_Demi_ON(value:number) {
        this.setAllEX();
        this._Ellipse_Demi_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get EllipseH_Demi_ON():number {
        return this._EllipseH_Demi_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set EllipseH_Demi_ON(value:number) {
        this.setAllEX();
        this._EllipseH_Demi_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Ellipse_QuartG_ON():number {
        return this._Ellipse_QuartG_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Ellipse_QuartG_ON(value:number) {
        this.setAllEX();
        this._Ellipse_QuartG_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get EllipseH_QuartG_ON():number {
        return this._EllipseH_QuartG_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set EllipseH_QuartG_ON(value:number) {
        this.setAllEX();
        this._EllipseH_QuartG_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Ellipse_QuartD_ON():number {
        return this._Ellipse_QuartD_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Ellipse_QuartD_ON(value:number) {
        this.setAllEX();
        this._Ellipse_QuartD_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get EllipseH_QuartD_ON():number {
        return this._EllipseH_QuartD_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set EllipseH_QuartD_ON(value:number) {
        this.setAllEX();
        this._EllipseH_QuartD_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Ellipse_Pourcent_Haut():number {
        return this._Ellipse_Pourcent_Haut;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Ellipse_Pourcent_Haut(value:number) {
        this._Ellipse_Pourcent_Haut = value;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Chapeau_ON():number {

        return this._Chapeau_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Chapeau_ON(value:number) {
        this.setAllEX();
        this._Chapeau_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Stroke_width():number {
        return this._Stroke_width;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Stroke_width(value:number) {
        this._Stroke_width = value;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Stroke_opacity():number {
        return this._Stroke_opacity;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Stroke_opacity(value:number) {
        this._Stroke_opacity = value;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Gothique_ON():number {
        return this._Gothique_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Gothique_ON(value:number) {
        this.setAllEX();
        this._Gothique_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Gothique_H_ON():number {
        return this._Gothique_H_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Gothique_H_ON(value:number) {
        this.setAllEX();
        this._Gothique_H_ON = parseFloat(value);
    }


    public get Allege_Pourcent():number {
        return this._Allege_Pourcent;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Allege_Pourcent(value:number) {
        this._Allege_Pourcent = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get LG_Pourcent():number {
        return this._LG_Pourcent;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set LG_Pourcent(value:number) {
        this._LG_Pourcent = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get LD_ON():number {
        return this._LD_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set LD_ON(value:number) {
        this._LD_ON = value;
    }

    /**
     *
     * @returns {string}
     * @constructor
     */

    public get Couleur_Fill():string {
        return this._Couleur_Fill;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Couleur_Fill(value:string) {
        this._Couleur_Fill = value;
    }

    /**
     *
     * @returns {string}
     * @constructor
     */

    public get Couleur_Ombre():string {
        return this._Couleur_Ombre;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Couleur_Ombre(value:string) {
        this._Couleur_Ombre = parseFloat(value);
    }

    /**
     *
     * @returns {string}
     * @constructor
     */

    public get Couleur_Lumiere():string {
        return this._Couleur_Lumiere;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Couleur_Lumiere(value:string) {
        this._Couleur_Lumiere = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Profile_Int_Larg():number {
        return this._Profile_Int_Larg;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Profile_Int_Larg(value:number) {
        this._Profile_Int_Larg = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Profile_Ouv_Larg():number {
        return this._Profile_Ouv_Larg;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Profile_Ouv_Larg(value:number) {
        this._Profile_Ouv_Larg = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Rect_ON():number {
        return this._Rect_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Rect_ON(value:number) {
        this.setAllEX();
        this._Rect_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get ChanfreinG_Pourcent_Haut():number {
        return this._ChanfreinG_Pourcent_Haut;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set ChanfreinG_Pourcent_Haut(value:number) {
        this._ChanfreinG_Pourcent_Haut = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get ChanfreinG_Pourcent_Larg():number {
        return this._ChanfreinG_Pourcent_Larg;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set ChanfreinG_Pourcent_Larg(value:number) {
        this._ChanfreinG_Pourcent_Larg = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get ChanfreinD_Pourcent_Haut():number {
        return this._ChanfreinD_Pourcent_Haut;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set ChanfreinD_Pourcent_Haut(value:number) {
        this._ChanfreinD_Pourcent_Haut = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get ChanfreinD_Pourcent_Larg():number {
        return this._ChanfreinD_Pourcent_Larg;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set ChanfreinD_Pourcent_Larg(value:number) {
        this._ChanfreinD_Pourcent_Larg = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get TriangleG_H_Pourcent_Haut():number {
        return this._TriangleG_H_Pourcent_Haut;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set TriangleG_H_Pourcent_Haut(value:number) {
        this.setAllEX();
        this._TriangleG_H_Pourcent_Haut = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get TriangleD_ON():number {
        return this._TriangleD_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set TriangleD_ON(value:number) {
        this.setAllEX();
        this._TriangleD_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get TriangleD_H_ON():number {
        return this._TriangleD_H_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set TriangleD_H_ON(value:number) {
        this.setAllEX();
        this._TriangleD_H_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get TriangleD_H_Pourcent_Haut():number {
        return this._TriangleD_H_Pourcent_Haut;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set TriangleD_H_Pourcent_Haut(value:number) {
        this._TriangleD_H_Pourcent_Haut = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    public get Octogone_Pourcent_Larg():number {
        return this._Octogone_Pourcent_Larg;
    }

    /**
     *
     * @param value
     * @constructor
     */

    public set Octogone_Pourcent_Larg(value:number) {
        this._Octogone_Pourcent_Larg = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    public get DemiHexag_ON():number {
        return this._DemiHexag_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set DemiHexag_ON(value:number) {
        this.setAllEX();
        this._DemiHexag_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    public get Hexagone_Pourcent_Haut():number {
        return this._Hexagone_Pourcent_Haut;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set Hexagone_Pourcent_Haut(value:number) {
        this._Hexagone_Pourcent_Haut = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */



    public get Triangle_ON():number {
        return this._Triangle_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set Triangle_ON(value:number) {
        this.setAllEX();
        this._Triangle_ON = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    public get Losange_ON():number {

        return this._Losange_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set Losange_ON(value:number) {
        this.setAllEX();
        this._Losange_ON = parseFloat(value);
    }


    public get ArcH_ON():number {
        return this._ArcH_ON;
    }

    public set ArcH_ON(value:number) {
        this.setAllEX();
        this._ArcH_ON = parseFloat(value);
    }

    public get Cintrage_Pourcent_Haut():number {
        return this._Cintrage_Pourcent_Haut;
    }

    public set Cintrage_Pourcent_Haut(value:number) {
        this._Cintrage_Pourcent_Haut = parseFloat(value);
    }

    public get VueExt_ONN():number {
        return this._VueExt_ONN;
    }

    public set VueExt_ONN(value:number) {
        this._VueExt_ONN = value;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    public get Porte_ON():number {
        return this._Porte_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set Porte_ON(value:number) {
        this._Porte_ON = parseFloat(value);
    }

    /**
     *
     * @returns {any}
     * @constructor
     */
    public get Fenetre_ON():number {
        return Math.abs(this._Porte_ON - 1);
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set Fenetre_ON(value:number) {

        this._Porte_ON = Math.abs(1 - parseFloat(value));
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    public get Porte_Pourcent():number {
        return this._Porte_Pourcent;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set Porte_Pourcent(value:number) {
        this._Porte_Pourcent = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    public get Imposte_ON():number {
        return this._Imposte_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set Imposte_ON(value:number) {
        this._Imposte_ON = value;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    public get Imposte_Pourcent():number {
        return this._Imposte_Pourcent;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set Imposte_Pourcent(value:number) {
        this._Imposte_Pourcent = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    public get Allege_ON():number {
        return this._Allege_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set Allege_ON(value:number) {
        this._Allege_ON = value;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    public get LG_ON():number {
        return this._LG_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set LG_ON(value:number) {
        this._LG_ON = value;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    public get LD_Pourcent():number {
        return this._LD_Pourcent;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set LD_Pourcent(value:number) {
        this._LD_Pourcent = parseFloat(value);
    }


    /**
     *
     * @returns {string}
     * @constructor
     */
    public get Couleur_Stroke():string {
        return this._Couleur_Stroke;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set Couleur_Stroke(value:string) {
        this._Couleur_Stroke = value;
    }

    /**
     *
     * @returns {string}
     * @constructor
     */
    public get Seuil_Stroke():string {
        return this._Seuil_Stroke;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set Seuil_Stroke(value:string) {
        this._Seuil_Stroke = value;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    public get Seuil_Stroke_Width():number {
        return this._Seuil_Stroke_Width;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set Seuil_Stroke_Width(value:number) {
        this._Seuil_Stroke_Width = parseFloat(value);
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    public get Allege_min():number {
        return this._Allege_min;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set Allege_min(value:number) {
        this._Allege_min = value;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    public get Imposte_min():number {
        return this._Imposte_min;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set Imposte_min(value:number) {
        this._Imposte_min = value;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    public get LG_min():number {
        return this._LG_min;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set LG_min(value:number) {
        this._LG_min = value;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    public get LD_min():number {
        return this._LD_min;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set LD_min(value:number) {
        this._LD_min = value;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    public get Crois_LG_Imp_ON():number {
        return this._Crois_LG_Imp_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set Crois_LG_Imp_ON(value:number) {
        this._Crois_LG_Imp_ON = value;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    public get Crois_LG_All_ON():number {
        return this._Crois_LG_All_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set Crois_LG_All_ON(value:number) {
        this._Crois_LG_All_ON = value;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    public get Crois_LD_Imp_ON():number {
        return this._Crois_LD_Imp_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set Crois_LD_Imp_ON(value:number) {
        this._Crois_LD_Imp_ON = value;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    public get Crois_LD_All_ON():number {
        return this._Crois_LD_All_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set Crois_LD_All_ON(value:number) {
        this._Crois_LD_All_ON = value;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    public get Crois_Imp_LG_ON():number {
        return this._Crois_Imp_LG_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set Crois_Imp_LG_ON(value:number) {
        this._Crois_Imp_LG_ON = value;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    public get Crois_Imp_LD_ON():number {
        return this._Crois_Imp_LD_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set Crois_Imp_LD_ON(value:number) {
        this._Crois_Imp_LD_ON = value;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    public get Crois_All_LG_ON():number {
        return this._Crois_All_LG_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set Crois_All_LG_ON(value:number) {
        this._Crois_All_LG_ON = value;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    public get Crois_All_LD_ON():number {
        return this._Crois_All_LD_ON;
    }

    /**
     *
     * @param value
     * @constructor
     */
    public set Crois_All_LD_ON(value:number) {
        this._Crois_All_LD_ON = value;
    }





    /*list of Getter and Setter END*/





    /**
     *
     */
    public setAllEX() {
        this._Rect_ON = 0;
        this._ChanfreinG_ON = 0;
        this._ChanfreinD_ON = 0;
        this._Triangle_ON = 0;
        this._TriangleG_ON = 0;
        this._TriangleD_ON = 0;
        this._TriangleG_H_ON = 0;
        this._TriangleD_H_ON = 0;
        this._DemiOctogone_ON = 0;
        this._Octogone_ON = 0;
        this._DemiHexag_ON = 0;
        this._Hexagone_ON = 0;
        this._Losange_ON = 0;
        this._Ovale_ON = 0;
        this._Rond_ON = 0;
        this._Cercle_Demi_ON = 0;
        this._Cercle_QuartD_ON = 0;
        this._Cercle_QuartG_ON = 0;
        this._CercleH_Demi_ON = 0;
        this._CercleH_QuartD_ON = 0;
        this._CercleH_QuartG_ON = 0;
        this._Gothique_ON = 0;
        this._Gothique_H_ON = 0;
        this._Ellipse_ON = 0;
        this._Ellipse_Demi_ON = 0;
        this._Ellipse_QuartD_ON = 0;
        this._Ellipse_QuartG_ON = 0;
        this._EllipseH_Demi_ON = 0;
        this._EllipseH_QuartD_ON = 0;
        this._EllipseH_QuartG_ON = 0;
        this._Chapeau_ON = 0;
        this._CercleH_Demi_ON = 0;
        this._ArcH_ON = 0;
    }

    /**
     *
     * @param value
     */
    public setdata(value:Dormant) {
        this.X0 = value.X0;
        this.Y0 = value.Y0;
        this.Profile_Ext_Larg = value.Profile_Ext_Larg;
        this.Profile_Int_Larg = value.Profile_Int_Larg;
        this.Profile_Ouv_Larg = value.Profile_Ouv_Larg;
        this.Parclose_Larg = value.Parclose_Larg;
        this.Centre_Larg = value.Centre_Larg;
        this.Centre_Haut = value.Centre_Haut;
        this.Rect_ON = value.Rect_ON;
        this.ChanfreinG_ON = value.ChanfreinG_ON;
        this.ChanfreinG_Pourcent_Haut = value.ChanfreinG_Pourcent_Haut;
        this.ChanfreinG_Pourcent_Larg = value.ChanfreinG_Pourcent_Larg;
        this.ChanfreinD_ON = value.ChanfreinD_ON;
        this.ChanfreinD_Pourcent_Haut = value.ChanfreinD_Pourcent_Haut;
        this.ChanfreinD_Pourcent_Larg = value.ChanfreinD_Pourcent_Larg;
        this.TriangleG_ON = value.TriangleG_ON;
        this.TriangleG_H_ON = value.TriangleG_H_ON;
        this.TriangleG_H_Pourcent_Haut = value.TriangleG_H_Pourcent_Haut;
        this.TriangleD_ON = value.TriangleD_ON;
        this.TriangleD_H_ON = value.TriangleD_H_ON;
        this.TriangleD_H_Pourcent_Haut = value.TriangleD_H_Pourcent_Haut;
        this.DemiOctogone_ON = value.DemiOctogone_ON;
        this.DemiOctogone_Pourcent_Haut = value.DemiOctogone_Pourcent_Haut;
        this.DemiOctogone_Pourcent_Larg = value.DemiOctogone_Pourcent_Larg;
        this.Octogone_ON = value.Octogone_ON;
        this.Octogone_Pourcent_Haut = value.Octogone_Pourcent_Haut;
        this.Octogone_Pourcent_Larg = value.Octogone_Pourcent_Larg;
        this.DemiHexag_ON = value.DemiHexag_ON;
        this.DemiHexagl_Pourcent_Haut = value.DemiHexagl_Pourcent_Haut;
        this.Hexagone_ON = value.Hexagone_ON;
        this.Hexagone_Pourcent_Haut = value.Hexagone_Pourcent_Haut;
        this.Triangle_ON = value.Triangle_ON;
        this.Losange_ON = value.Losange_ON;
        this.Ovale_ON = value.Ovale_ON;
        this.Ovale_Pourcent_Haut = value.Ovale_Pourcent_Haut;
        this.Rond_ON = value.Rond_ON;
        this.Cercle_Demi_ON = value.Cercle_Demi_ON;
        this.CercleH_Demi_ON = value.CercleH_Demi_ON;
        this.ArcH_ON = value.ArcH_ON;
        this.Cercle_QuartG_ON = value.Cercle_QuartG_ON;
        this.CercleH_QuartG_ON = value.CercleH_QuartG_ON;
        this.Cercle_QuartD_ON = value.Cercle_QuartD_ON;
        this.CercleH_QuartD_ON = value.CercleH_QuartD_ON;
        this.Cintrage_Pourcent_Haut = value.Cintrage_Pourcent_Haut;
        this.Gothique_ON = value.Gothique_ON;
        this.Gothique_H_ON = value.Gothique_H_ON;
        this.Gothique_H__Pourcent_Haut = value.Gothique_H__Pourcent_Haut;
        this.Ellipse_ON = value.Ellipse_ON;
        this.Ellipse_Demi_ON = value.Ellipse_Demi_ON;
        this.EllipseH_Demi_ON = value.EllipseH_Demi_ON;
        this.Ellipse_QuartG_ON = value.Ellipse_QuartG_ON;
        this.EllipseH_QuartG_ON = value.EllipseH_QuartG_ON;
        this.Ellipse_QuartD_ON = value.Ellipse_QuartD_ON;
        this.EllipseH_QuartD_ON = value.EllipseH_QuartD_ON;
        this.Ellipse_Pourcent_Haut = value.Ellipse_Pourcent_Haut;
        this.Chapeau_ON = value.Chapeau_ON;
        this.Porte_ON = value.Porte_ON;
        this.Porte_Pourcent = value.Porte_Pourcent;
        this.Imposte_ON = value.Imposte_ON;
        this.Imposte_Pourcent = value.Imposte_Pourcent;
        this.Allege_ON = value.Allege_ON;
        this.Allege_Pourcent = value.Allege_Pourcent;
        this.LG_ON = value.LG_ON;
        this.LG_Pourcent = value.LG_Pourcent;
        this.LD_ON = value.LD_ON;
        this.LD_Pourcent = value.LD_Pourcent;
        this.VueExt_ONN = value.VueExt_ON;
        this.Couleur_Fill = value.Couleur_Fill;
        this.Couleur_Stroke = value.Couleur_Stroke;
        this.Stroke_width = value.Stroke_width;
        this.Stroke_opacity = value.Stroke_opacity;
        this.Couleur_Ombre = value.Couleur_Ombre;
        this.Seuil_Stroke = value.Seuil_Stroke;
        this.Seuil_Stroke_Width = value.Seuil_Stroke_Width;
        this.Couleur_Lumiere = value.Couleur_Lumiere;


    }

    constructor(_X0:number,
                      _Y0:number,
                      _Profile_Ext_Larg:number,
                      _Profile_Int_Larg:number,
                      _Profile_Ouv_Larg:number,
                      _Parclose_Larg:number,
                      _Centre_Larg:number,
                      _Centre_Haut:number,
                      _Rect_ON:number,
                      _ChanfreinG_ON:number,
                      _ChanfreinG_Pourcent_Haut:number,
                      _ChanfreinG_Pourcent_Larg:number,
                      _ChanfreinD_ON:number,
                      _ChanfreinD_Pourcent_Haut:number,
                      _ChanfreinD_Pourcent_Larg:number,
                      _TriangleG_ON:number,
                      _TriangleG_H_ON:number,
                      _TriangleG_H_Pourcent_Haut:number,
                      _TriangleD_ON:number,
                      _TriangleD_H_ON:number,
                      _TriangleD_H_Pourcent_Haut:number,
                      _DemiOctogone_ON:number,
                      _DemiOctogone_Pourcent_Haut:number,
                      _DemiOctogone_Pourcent_Larg:number,
                      _Octogone_ON:number,
                      _Octogone_Pourcent_Haut:number,
                      _Octogone_Pourcent_Larg:number,
                      _DemiHexag_ON:number,
                      _DemiHexagl_Pourcent_Haut:number,
                      _Hexagone_ON:number,
                      _Hexagone_Pourcent_Haut:number,
                      _Triangle_ON:number,
                      _Losange_ON:number,
                      _Ovale_ON:number,
                      _Ovale_Pourcent_Haut:number,
                      _Rond_ON:number,
                      _Cercle_Demi_ON:number,
                      _CercleH_Demi_ON:number,
                      _ArcH_ON:number,
                      _Cercle_QuartG_ON:number,
                      _CercleH_QuartG_ON:number,
                      _Cercle_QuartD_ON:number,
                      _CercleH_QuartD_ON:number,
                      _Cintrage_Pourcent_Haut:number,
                      _Gothique_ON:number,
                      _Gothique_H_ON:number,
                      _Gothique_H__Pourcent_Haut:number,
                      _Ellipse_ON:number,
                      _Ellipse_Demi_ON:number,
                      _EllipseH_Demi_ON:number,
                      _Ellipse_QuartG_ON:number,
                      _EllipseH_QuartG_ON:number,
                      _Ellipse_QuartD_ON:number,
                      _EllipseH_QuartD_ON:number,
                      _Ellipse_Pourcent_Haut:number,
                      _Chapeau_ON:number,
                      _Porte_ON:number,
                      _Porte_Pourcent:number,
                      _Imposte_ON:number,
                      _Imposte_Pourcent:number,
                      _Allege_ON:number,
                      _Allege_Pourcent:number,
                      _LG_ON:number,
                      _LG_Pourcent:number,
                      _LD_ON:number,
                      _LD_Pourcent:number,
                      _VueExt_ON:number,
                      _Couleur_Fill:string,
                      _Couleur_Stroke:string,
                      _Stroke_width:number,
                      _Stroke_opacity:number,
                      _Couleur_Ombre:string,
                      _Seuil_Stroke:number,
                      _Seuil_Stroke_Width:number,
                      _Couleur_Lumiere:string) {
        this._X0 = _X0;
        this._Y0 = _Y0;
        this._Profile_Ext_Larg = _Profile_Ext_Larg;
        this._Profile_Int_Larg = _Profile_Int_Larg;
        this._Profile_Ouv_Larg = _Profile_Ouv_Larg;
        this._Parclose_Larg = _Parclose_Larg;
        this._Centre_Larg = _Centre_Larg;
        this._Centre_Haut = _Centre_Haut;
        this._Rect_ON = _Rect_ON;
        this._ChanfreinG_ON = _ChanfreinG_ON;
        this._ChanfreinG_Pourcent_Haut = _ChanfreinG_Pourcent_Haut;
        this._ChanfreinG_Pourcent_Larg = _ChanfreinG_Pourcent_Larg;
        this._ChanfreinD_ON = _ChanfreinD_ON;
        this._ChanfreinD_Pourcent_Haut = _ChanfreinD_Pourcent_Haut;
        this._ChanfreinD_Pourcent_Larg = _ChanfreinD_Pourcent_Larg;
        this._TriangleG_ON = _TriangleG_ON;
        this._TriangleG_H_ON = _TriangleG_H_ON;
        this._TriangleG_H_Pourcent_Haut = _TriangleG_H_Pourcent_Haut;
        this._TriangleD_ON = _TriangleD_ON;
        this._TriangleD_H_ON = _TriangleD_H_ON;
        this._TriangleD_H_Pourcent_Haut = _TriangleD_H_Pourcent_Haut;
        this._DemiOctogone_ON = _DemiOctogone_ON;
        this._DemiOctogone_Pourcent_Haut = _DemiOctogone_Pourcent_Haut;
        this._DemiOctogone_Pourcent_Larg = _DemiOctogone_Pourcent_Larg;
        this._Octogone_ON = _Octogone_ON;
        this._Octogone_Pourcent_Haut = _Octogone_Pourcent_Haut;
        this._Octogone_Pourcent_Larg = _Octogone_Pourcent_Larg;
        this._DemiHexag_ON = _DemiHexag_ON;
        this._DemiHexagl_Pourcent_Haut = _DemiHexagl_Pourcent_Haut;
        this._Hexagone_ON = _Hexagone_ON;
        this._Hexagone_Pourcent_Haut = _Hexagone_Pourcent_Haut;
        this._Triangle_ON = _Triangle_ON;
        this._Losange_ON = _Losange_ON;
        this._Ovale_ON = _Ovale_ON;
        this._Ovale_Pourcent_Haut = _Ovale_Pourcent_Haut;
        this._Rond_ON = _Rond_ON;
        this._Cercle_Demi_ON = _Cercle_Demi_ON;
        this._CercleH_Demi_ON = _CercleH_Demi_ON;
        this._ArcH_ON = _ArcH_ON;
        this._Cercle_QuartG_ON = _Cercle_QuartG_ON;
        this._CercleH_QuartG_ON = _CercleH_QuartG_ON;
        this._Cercle_QuartD_ON = _Cercle_QuartD_ON;
        this._CercleH_QuartD_ON = _CercleH_QuartD_ON;
        this._Cintrage_Pourcent_Haut = _Cintrage_Pourcent_Haut;
        this._Gothique_ON = _Gothique_ON;
        this._Gothique_H_ON = _Gothique_H_ON;
        this._Gothique_H__Pourcent_Haut = _Gothique_H__Pourcent_Haut;
        this._Ellipse_ON = _Ellipse_ON;
        this._Ellipse_Demi_ON = _Ellipse_Demi_ON;
        this._EllipseH_Demi_ON = _EllipseH_Demi_ON;
        this._Ellipse_QuartG_ON = _Ellipse_QuartG_ON;
        this._EllipseH_QuartG_ON = _EllipseH_QuartG_ON;
        this._Ellipse_QuartD_ON = _Ellipse_QuartD_ON;
        this._EllipseH_QuartD_ON = _EllipseH_QuartD_ON;
        this._Ellipse_Pourcent_Haut = _Ellipse_Pourcent_Haut;
        this._Chapeau_ON = _Chapeau_ON;
        this._Porte_ON = _Porte_ON;
        this._Porte_Pourcent = _Porte_Pourcent;
        this._Imposte_ON = _Imposte_ON;
        this._Imposte_Pourcent = _Imposte_Pourcent;
        this._Allege_ON = _Allege_ON;
        this._Allege_Pourcent = _Allege_Pourcent;
        this._LG_ON = _LG_ON;
        this._LG_Pourcent = _LG_Pourcent;
        this._LD_ON = _LD_ON;
        this._LD_Pourcent = _LD_Pourcent;
        this._VueExt_ONN = _VueExt_ON;
        this._Couleur_Fill = _Couleur_Fill;
        this._Couleur_Stroke = _Couleur_Stroke;
        this._Stroke_width = _Stroke_width;
        this._Stroke_opacity = _Stroke_opacity;
        this._Couleur_Ombre = _Couleur_Ombre;
        this._Seuil_Stroke = _Seuil_Stroke;
        this._Seuil_Stroke_Width = _Seuil_Stroke_Width;
        this._Couleur_Lumiere = _Couleur_Lumiere;
        this._LG_min = 1.00;
        this._LD_ON = 1.00;
        this._LD_Pourcent = 0.35;
        this._LD_min = 1.00;
        this._Imposte_min=1.00;
        this._Allege_min=1.00;
        this._Crois_LG_Imp_ON = 1.00;
        this._Crois_LG_All_ON = 1.00;
        this._Crois_LD_Imp_ON = 1.00;
        this._Crois_LD_All_ON = 1.00;
        this._Crois_Imp_LG_ON = 1.00;
        this._Crois_Imp_LD_ON = 1.00;
        this._Crois_All_LG_ON = 1.00;
        this._Crois_All_LD_ON = 1.00;
    }

    CintrageH_ON():number {
        return this._CercleH_Demi_ON + this._ArcH_ON
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    CintrageH_Pourcent_Haut():number {
        return this._ArcH_ON * this._Cintrage_Pourcent_Haut + 0.5 * this._CercleH_Demi_ON
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Elliptique_ON():number {
        return this._Ellipse_Demi_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON + this._EllipseH_Demi_ON
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Gothiq_ON():number {
        return this._Gothique_ON + this._Gothique_H_ON
    }

    /**
     *
     * @returns {any}
     * @constructor
     */
    Circulaire_ON():number {
        return this._Cercle_Demi_ON + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.CintrageH_ON()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    CintrageB_ON():number {
        return this._Ovale_ON + this._Rond_ON + this._Ellipse_ON
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    CintrageHH_ON():number {
        return this.Elliptique_ON() + this.Gothiq_ON() + this.Circulaire_ON() + this.CintrageB_ON()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Imposte_Haut():number {
        return (1 - 0.5 * (this._Cercle_Demi_ON + this._Ellipse_ON + this._Ellipse_Demi_ON)) * this._Imposte_ON * this._Imposte_Pourcent * this._Centre_Haut
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Allege_Haut():number {
        return (1 - 0.5 * (this._Cercle_Demi_ON + this._Ellipse_ON + this._Ellipse_Demi_ON)) * this._Allege_ON * this._Allege_Pourcent * this._Centre_Haut
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    LG_Larg():number {
        return this._LG_ON * this._LG_Pourcent * this._Centre_Larg
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    LD_Larg():number {
        return this._LD_ON * this._LD_Pourcent * this._Centre_Larg
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Total_Larg():number {
        this._largeur =this._Centre_Larg + this.LG_Larg() + this.LD_Larg()
        return this._Centre_Larg + this.LG_Larg() + this.LD_Larg()
    }
    Viewbox_Larg():number{
        return this._Centre_Larg + this.LG_Larg() + this.LD_Larg()+40
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Total_Haut():number {
        this._hauteur =  (1 - this._Ovale_ON - this._Rond_ON - this._Cercle_Demi_ON - this._Cercle_QuartG_ON - this._Cercle_QuartD_ON - this.Gothiq_ON() - this._Ellipse_ON - this._Ellipse_Demi_ON - this._Ellipse_QuartG_ON - this._Ellipse_QuartD_ON) * (this._Centre_Haut + this.Imposte_Haut() + this.Allege_Haut()) + this._Porte_ON * this._Porte_Pourcent * this._Centre_Haut * (1 - this._Cercle_Demi_ON - this._Cercle_QuartG_ON - this._Cercle_QuartD_ON - this._Gothique_ON - this._Ellipse_Demi_ON - this._Ellipse_QuartG_ON - this._Ellipse_QuartD_ON) + ((1 + this._Ovale_Pourcent_Haut) * this._Ovale_ON + this._Rond_ON + 0.5 * this._Cercle_Demi_ON + this._Cercle_QuartG_ON + this._Cercle_QuartD_ON + this._Ellipse_Pourcent_Haut * (this._Ellipse_ON + 0.5 * this._Ellipse_Demi_ON + this._Ellipse_QuartG_ON + this._Ellipse_QuartD_ON) + 0.866 * this.Gothiq_ON() + this._Gothique_H__Pourcent_Haut * this._Gothique_H_ON) * this.Total_Larg()

        return (1 - this._Ovale_ON - this._Rond_ON - this._Cercle_Demi_ON - this._Cercle_QuartG_ON - this._Cercle_QuartD_ON - this.Gothiq_ON() - this._Ellipse_ON - this._Ellipse_Demi_ON - this._Ellipse_QuartG_ON - this._Ellipse_QuartD_ON) * (this._Centre_Haut + this.Imposte_Haut() + this.Allege_Haut()) + this._Porte_ON * this._Porte_Pourcent * this._Centre_Haut * (1 - this._Cercle_Demi_ON - this._Cercle_QuartG_ON - this._Cercle_QuartD_ON - this._Gothique_ON - this._Ellipse_Demi_ON - this._Ellipse_QuartG_ON - this._Ellipse_QuartD_ON) + ((1 + this._Ovale_Pourcent_Haut) * this._Ovale_ON + this._Rond_ON + 0.5 * this._Cercle_Demi_ON + this._Cercle_QuartG_ON + this._Cercle_QuartD_ON + this._Ellipse_Pourcent_Haut * (this._Ellipse_ON + 0.5 * this._Ellipse_Demi_ON + this._Ellipse_QuartG_ON + this._Ellipse_QuartD_ON) + 0.866 * this.Gothiq_ON() + this._Gothique_H__Pourcent_Haut * this._Gothique_H_ON) * this.Total_Larg()
    }
    Viewbox_Haut():number{
        return ((1 - this._Ovale_ON - this._Rond_ON - this._Cercle_Demi_ON - this._Cercle_QuartG_ON - this._Cercle_QuartD_ON - this.Gothiq_ON() - this._Ellipse_ON - this._Ellipse_Demi_ON - this._Ellipse_QuartG_ON - this._Ellipse_QuartD_ON) * (this._Centre_Haut + this.Imposte_Haut() + this.Allege_Haut()) + this._Porte_ON * this._Porte_Pourcent * this._Centre_Haut * (1 - this._Cercle_Demi_ON - this._Cercle_QuartG_ON - this._Cercle_QuartD_ON - this._Gothique_ON - this._Ellipse_Demi_ON - this._Ellipse_QuartG_ON - this._Ellipse_QuartD_ON) + ((1 + this._Ovale_Pourcent_Haut) * this._Ovale_ON + this._Rond_ON + 0.5 * this._Cercle_Demi_ON + this._Cercle_QuartG_ON + this._Cercle_QuartD_ON + this._Ellipse_Pourcent_Haut * (this._Ellipse_ON + 0.5 * this._Ellipse_Demi_ON + this._Ellipse_QuartG_ON + this._Ellipse_QuartD_ON) + 0.866 * this.Gothiq_ON() + this._Gothique_H__Pourcent_Haut * this._Gothique_H_ON) * this.Total_Larg())+140

    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Total_Larg2():number {
        return this.Total_Larg() / 2
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Total_Larg_Profile():number {
        return this.Total_Larg() - this._Profile_Ext_Larg
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    CintrageB_Haut():number {
        return 0.5 * (this._Ovale_ON + this._Rond_ON + this._Ellipse_ON * this._Ellipse_Pourcent_Haut) * this.Total_Larg()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    CintrageH_Haut():number {
        return ( 2 * (this._CercleH_QuartG_ON + this._CercleH_QuartD_ON) * this._Cintrage_Pourcent_Haut + this.CintrageH_ON() * this.CintrageH_Pourcent_Haut() + (this._EllipseH_QuartG_ON + this._EllipseH_QuartD_ON + 0.5 * this._EllipseH_Demi_ON) * this._Ellipse_Pourcent_Haut + this.Gothiq_ON() * 0.866) * this.Total_Larg() + (this._Cercle_Demi_ON + this._Cercle_QuartG_ON + this._Cercle_QuartD_ON + this._Ellipse_Demi_ON + this._Ellipse_QuartG_ON + this._Ellipse_QuartD_ON) * this.Total_Haut() + this.CintrageB_Haut()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_H_RayonX1():number {
        return (this._Ellipse_Demi_ON + this._EllipseH_Demi_ON + this.CintrageB_ON()) * this.Total_Larg2() + (this._Cercle_QuartG_ON + this._Cercle_QuartD_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON + this.Gothiq_ON()) * this.Total_Larg() + 0.5 * (this._Cercle_Demi_ON + this.CintrageH_ON()) * (this.CintrageH_Haut() + this.Total_Larg2() * this.Total_Larg2() / (this.CintrageH_Haut() + 1 - this.Circulaire_ON())) + 0.5 * (this._CercleH_QuartG_ON + this._CercleH_QuartD_ON) * (this.CintrageH_Haut() + this.Total_Larg() * this.Total_Larg() / (this.CintrageH_Haut() + 1 - this.Circulaire_ON()))
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_H_RayonY1():number {
        return (this.CintrageHH_ON() - (1 - this._Ellipse_Pourcent_Haut) * (this.Elliptique_ON() + this._Ellipse_ON)) * this.Dormant_H_RayonX1()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_H_RayonX2():number {
        return this.CintrageHH_ON() * (this.Dormant_H_RayonX1() - this._Profile_Ext_Larg)
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_H_RayonY2():number {
        return this.CintrageHH_ON() * (this.Dormant_H_RayonY1() - this._Profile_Ext_Larg)
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_B_RayonX1():number {
        return this.CintrageB_ON() * this.Dormant_H_RayonX1()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_B_RayonY1():number {
        return this.CintrageB_ON() * this.Dormant_H_RayonY1()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_B_RayonX2():number {
        return this.CintrageB_ON() * this.Dormant_H_RayonX2()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_B_RayonY2():number {
        return this.CintrageB_ON() * this.Dormant_H_RayonY2()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HG_Larg():number {
        return (this._TriangleG_ON + this._TriangleG_H_ON + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON + this._ChanfreinG_ON * this._ChanfreinG_Pourcent_Larg + this._DemiOctogone_ON * this._DemiOctogone_Pourcent_Larg + 0.5 * (this._DemiHexag_ON + this._Triangle_ON + this._Losange_ON + this._Hexagone_ON + this._Gothique_ON + this._Gothique_H_ON) + this._Octogone_ON * this._Octogone_Pourcent_Larg) * this.Total_Larg()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HG_Haut():number {
        return ( this._ChanfreinG_ON * this._ChanfreinG_Pourcent_Haut + this._TriangleG_ON + this._TriangleG_H_ON * this._TriangleG_H_Pourcent_Haut + this._DemiOctogone_ON * this._DemiOctogone_Pourcent_Haut + this._Octogone_ON * this._Octogone_Pourcent_Haut + this._DemiHexag_ON * this._DemiHexagl_Pourcent_Haut + this._Hexagone_ON * this._Hexagone_Pourcent_Haut + this._Triangle_ON + 0.5 * this._Losange_ON + this._Cercle_QuartG_ON) * this.Total_Haut() + (this._CercleH_QuartG_ON + this._Gothique_ON + this._Gothique_H_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) * this.CintrageH_Haut()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HG_Angle():number {
        return Math.atan(this.Dormant_HG_Larg() / (this.Dormant_HG_Haut() + this.Dormant_HG_ON() - 1)) * 180 / Math.PI
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BG_Larg():number {
        return (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.Dormant_HG_Larg() + this._Porte_ON * this._LG_ON * (this.LG_Larg() + this._Profile_Int_Larg)
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BG_Haut():number {
        return (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.Dormant_HG_Haut()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BG_Angle():number {
        return (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.Dormant_HG_Angle() + this._Porte_ON * this._LG_ON * 90
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HD_Larg():number {
        return (this._TriangleD_ON + this._TriangleD_H_ON + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON + this._DemiOctogone_ON * this._DemiOctogone_Pourcent_Larg + this._ChanfreinD_ON * this._ChanfreinD_Pourcent_Larg + 0.5 * (this._DemiHexag_ON + this._Triangle_ON + this._Losange_ON + this._Hexagone_ON + this._Gothique_ON + this._Gothique_H_ON) + this._Octogone_ON * this._Octogone_Pourcent_Larg ) * this.Total_Larg()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HD_Haut():number {
        return (this._Cercle_QuartD_ON + this._TriangleD_ON + this._TriangleD_H_ON * this._TriangleD_H_Pourcent_Haut + this._ChanfreinD_ON * this._ChanfreinD_Pourcent_Haut + this._DemiOctogone_ON * this._DemiOctogone_Pourcent_Haut + this._DemiHexag_ON * this._DemiHexagl_Pourcent_Haut + this._Triangle_ON + 0.5 * this._Losange_ON + this._Hexagone_ON * this._Hexagone_Pourcent_Haut + this._Octogone_ON * this._Octogone_Pourcent_Haut) * this.Total_Haut() + (this._CercleH_QuartD_ON + this._Gothique_ON + this._Gothique_H_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) * this.CintrageH_Haut()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HD_Angle():number {
        return Math.atan(this.Dormant_HD_Larg() / (this.Dormant_HD_Haut() + this.Dormant_HD_ON() - 1)) * 180 / Math.PI
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BD_Larg():number {
        return (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.Dormant_BG_Larg() + this._Porte_ON * this._LD_ON * (this.LD_Larg() + this._Profile_Int_Larg)
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BD_Haut():number {
        return (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.Dormant_BG_Haut()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BD_Angle():number {
        return (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.Dormant_HD_Angle() + this._Porte_ON * this._LD_ON * 90
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Seuil_X():number {
        return this._Porte_ON * (this._Profile_Ext_Larg + this._LG_ON * (this.LG_Larg() + this._Profile_Int_Larg - this._Profile_Ext_Larg))
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Seuil_Y():number {
        return this._Porte_ON * (this.Total_Haut() - 0.5 * this._Seuil_Stroke_Width)
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Seuil_D1():number {
        return this._Porte_ON * (this.Total_Larg() - 2 * this._Profile_Ext_Larg + this._LG_ON * (this._Profile_Ext_Larg - this.LG_Larg() - this._Profile_Int_Larg) + this._LD_ON * (this._Profile_Ext_Larg - this.LD_Larg() - this._Profile_Int_Larg))
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HG_ON():number {
        return this._ChanfreinG_ON + this._TriangleG_ON + this._TriangleG_H_ON + this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON + this._Triangle_ON + this._Losange_ON + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this._Gothique_ON + this._Gothique_H_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HG_X0():number {
        return this.Dormant_HG_ON() * this.Dormant_HG_Larg()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HG_Y0():number {
        return 0
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HG_X1():number {
        return 0
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HG_Y1():number {
        return this.Dormant_HG_ON() * this.Dormant_HG_Haut()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HG_X2():number {
        return this._Profile_Ext_Larg * (this._ChanfreinG_ON + this._TriangleG_H_ON + this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON + this._CercleH_QuartG_ON + this._Gothique_H_ON + this._EllipseH_QuartG_ON + (this._TriangleG_ON + this._Triangle_ON) * (Math.tan((90 + this.Dormant_HG_Angle()) * Math.PI / 360) * (1 - this._Porte_ON * (1 - this._LG_ON))) + (this._Losange_ON + (this._TriangleG_ON + this._Triangle_ON) * this._Porte_ON * (1 - this._LG_ON)) / Math.cos(this.Dormant_HG_Angle() * Math.PI / 180)) + (this._Cercle_QuartG_ON + this._Gothique_ON + this._Ellipse_QuartG_ON) * (this._Profile_Ext_Larg + this.Dormant_H_RayonX2() * (1 - Math.sqrt(1 - (this._Cercle_QuartG_ON + this._Gothique_ON + this._Ellipse_QuartG_ON) * this._Profile_Ext_Larg * this._Profile_Ext_Larg / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - this._Cercle_QuartG_ON - this._Gothique_ON - this._Ellipse_QuartG_ON))))
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HG_Y2():number {
        return this.Dormant_HG_Y1() + this._Profile_Ext_Larg * ( (this._TriangleG_H_ON + this._ChanfreinG_ON + this._DemiOctogone_ON + this._DemiHexag_ON + this._Hexagone_ON + this._Octogone_ON) * Math.tan(this.Dormant_HG_Angle() * Math.PI / 360) - (this._TriangleG_ON + this._Triangle_ON + this._Cercle_QuartG_ON + this._Gothique_ON + this._Ellipse_QuartG_ON) * (1 - this._Porte_ON * (1 - this._LG_ON))) - this._CercleH_QuartG_ON * (this.Dormant_HG_Y1() - (this.Dormant_H_RayonY1() - this.Dormant_H_RayonY2() * Math.sqrt(1 - this._CercleH_QuartG_ON * this.Total_Larg_Profile() * this.Total_Larg_Profile() / ((this.Dormant_H_RayonX2() * this.Dormant_H_RayonX2() + 1 - this._CercleH_QuartG_ON)))))
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HG_X3():number {
        return this.Dormant_HG_X0() + this._Profile_Ext_Larg * ((this._ChanfreinG_ON + this._DemiOctogone_ON + this._Octogone_ON) * Math.tan((90 - this.Dormant_HG_Angle()) * Math.PI / 360) - this._TriangleG_ON - this._TriangleG_H_ON - this._Cercle_QuartG_ON - this._CercleH_QuartG_ON - this._Ellipse_QuartG_ON - this._EllipseH_QuartG_ON)
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HG_Y3():number {
        return this._Profile_Ext_Larg * ( this._ChanfreinG_ON + this._DemiOctogone_ON + this._Octogone_ON + (this._TriangleG_ON + this._TriangleG_H_ON) * Math.tan((180 - this.Dormant_HG_Angle()) * Math.PI / 360) + (this._DemiHexag_ON + this._Triangle_ON + this._Losange_ON + this._Hexagone_ON) / Math.sin((this.Dormant_HG_Angle() + 1 - this.Dormant_HG_ON()) * Math.PI / 180) ) + (this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) * (this.Dormant_H_RayonY1() - this.Dormant_H_RayonY2() * Math.sqrt(1 - (this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) * this._Profile_Ext_Larg * this._Profile_Ext_Larg / (this.Dormant_H_RayonX2() * this.Dormant_H_RayonX2() + 1 - this._Cercle_QuartG_ON - this._CercleH_QuartG_ON - this._Ellipse_QuartG_ON - this._EllipseH_QuartG_ON))) + this.Gothiq_ON() * (this.Dormant_HG_Y1() - Math.sqrt(this.Dormant_H_RayonX2() * this.Dormant_H_RayonX2() - this.Gothiq_ON() * this.Dormant_HG_X3() * this.Dormant_HG_X3()))
    }

    /**
     *
     * @returns {any}
     * @constructor
     */
    Dormant_HG_DY1():number {
        return Math.sqrt(this.Dormant_HG_X0() * this.Dormant_HG_X0() + this.Dormant_HG_Y1() * this.Dormant_HG_Y1())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HG_LX1():number {
        return this.Dormant_HG_ON() * Math.sqrt((this.Dormant_HG_X2() - this.Dormant_HG_X0()) * (this.Dormant_HG_X2() - this.Dormant_HG_X0()) + this.Dormant_HG_Y2() * this.Dormant_HG_Y2() - Math.pow(this.Dormant_HG_X0() * (this.Dormant_HG_X0() - this.Dormant_HG_X2()) + this.Dormant_HG_Y1() * this.Dormant_HG_Y2(), 2) / (this.Dormant_HG_DY1() * this.Dormant_HG_DY1() + 1 - this.Dormant_HG_ON()))
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HG_LY1():number {
        return -this.Dormant_HG_ON() * (this.Dormant_HG_DY1() - (this.Dormant_HG_X0() * (this.Dormant_HG_X0() - this.Dormant_HG_X2()) + this.Dormant_HG_Y1() * this.Dormant_HG_Y2()) / (this.Dormant_HG_DY1() + 1 - this.Dormant_HG_ON()))
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HG_DX2():number {
        return (this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON + this.Gothiq_ON()) * (Math.abs(1 - this._Ellipse_Pourcent_Haut) / (1 - this._Ellipse_Pourcent_Haut) * Math.sqrt((this.Dormant_HG_X0() - this.Dormant_HG_X3()) * (this.Dormant_HG_X0() - this.Dormant_HG_X3()) + this.Dormant_HG_Y3() * this.Dormant_HG_Y3() - Math.pow(this.Dormant_HG_X0() * (this.Dormant_HG_X0() - this.Dormant_HG_X3()) + this.Dormant_HG_Y1() * this.Dormant_HG_Y3(), 2) / (this.Dormant_HG_DY1() * this.Dormant_HG_DY1() + 1 - this.Dormant_HG_ON())) - this.Dormant_HG_LX1())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HG_DY2():number {
        return -Math.sqrt(Math.pow(this.Dormant_HG_X3() - this.Dormant_HG_X2(), 2) + Math.pow(this.Dormant_HG_Y2() - this.Dormant_HG_Y3(), 2))
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HG_LX2():number {
        return -(this.Dormant_HG_LX1() + this.Dormant_HG_DX2())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HG_LY2():number {
        return -this.Dormant_HG_DY2() - this.Dormant_HG_LY1() - this.Dormant_HG_DY1()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HG_Trans_X():number {
        return this.Dormant_HG_ON() * this.Dormant_HG_Larg()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HG_Trans_Y():number {
        return this.Dormant_HG_ON() * (this.Dormant_HG_Y1() - this.Dormant_HG_Haut())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HG_Rotate():number {
        return this.Dormant_HG_ON() * this.Dormant_HG_Angle()
    }

    /**
     *
     * @returns {any}
     * @constructor
     */
    Dormant_GG_ON():number {
        return this._Rect_ON + this._TriangleG_H_ON + this._TriangleD_H_ON + this._ChanfreinG_ON + this._ChanfreinD_ON + this._TriangleD_ON + this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON + this._Ovale_ON + this._CercleH_QuartG_ON + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.CintrageH_ON() + this._Gothique_H_ON + this._EllipseH_QuartG_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON + this._EllipseH_Demi_ON
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_GG_X0():number {
        return 0
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_GG_Y0():number {
        return (this.Dormant_GG_ON() - this._Cercle_QuartD_ON - this._CercleH_QuartD_ON - this._Ellipse_QuartD_ON - this._EllipseH_QuartD_ON) * (this.CintrageH_Haut() + (1 - this._CercleH_QuartG_ON - this._Gothique_H_ON - this._Ellipse_QuartG_ON - this._EllipseH_QuartG_ON) * this.Dormant_HG_Haut())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_GG_X1():number {
        return this.Dormant_GG_X0()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_GG_Y1():number {
        return this.Dormant_GG_ON() * (this.Total_Haut() - this.CintrageB_Haut() - this._Octogone_ON * this.Dormant_BG_Haut() - this._Hexagone_ON * this.Dormant_HG_Y1())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_GG_X2():number {
        return this.Dormant_GG_ON() * this._Profile_Ext_Larg
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_GG_Y2():number {
        return this.Dormant_GG_ON() * (this.Dormant_GG_Y1() - this._Profile_Ext_Larg + (this._Octogone_ON + this._Hexagone_ON) * (this._Profile_Ext_Larg + this.Dormant_HG_LY1()) + (this._Ovale_ON + (1 - this._LG_ON) * this._Porte_ON) * this._Profile_Ext_Larg)
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_GG_X3():number {
        return this.Dormant_GG_X2()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_GG_Y3():number {
        return this.Dormant_GG_ON() * (this.Dormant_HG_ON() * this.Dormant_HG_Y2() + (this._Rect_ON + this._ChanfreinD_ON + (this._TriangleD_ON + this._TriangleD_H_ON) * Math.tan((180 - this.Dormant_HD_Angle()) * Math.PI / 360)) * this._Profile_Ext_Larg + (this._Ovale_ON + this._EllipseH_Demi_ON) * this.Dormant_GG_Y0() + this.CintrageH_ON() * (this.Dormant_H_RayonY1() - this.Dormant_H_RayonY2() * Math.sqrt(1 - this.CintrageH_ON() * Math.pow(this.Total_Larg2() - this._Profile_Ext_Larg, 2) / (this.Dormant_H_RayonX2() * this.Dormant_H_RayonX2() + 1 - this.CintrageH_ON()))) + (this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this._Gothique_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) * (this.Dormant_H_RayonY1() - this.Dormant_H_RayonY2() * Math.sqrt(1 - (this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this._Gothique_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) * this._Profile_Ext_Larg * this._Profile_Ext_Larg / (this.Dormant_H_RayonX2() * this.Dormant_H_RayonX2() + 1 - this.CintrageHH_ON()))))
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_GG_DY1():number {
        return this.Dormant_GG_Y1() - this.Dormant_GG_Y0()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_GG_LX1():number {
        return this.Dormant_GG_ON() * this._Profile_Ext_Larg
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_GG_LY1():number {
        return this.Dormant_GG_Y2() - this.Dormant_GG_Y1()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_GG_DX2():number {
        return 0
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_GG_DY2():number {
        return this.Dormant_GG_Y3() - this.Dormant_GG_Y2()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_GG_LX2():number {
        return -this.Dormant_GG_LX1()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_GG_LY2():number {
        return this.Dormant_GG_Y0() - this.Dormant_GG_Y3()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_GG_Trans_X():number {
        return this.Dormant_GG_X0()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_GG_Trans_Y():number {
        return this.Dormant_GG_Y0()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_GG_Rotate():number {
        return 0
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BG_ON():number {
        return this._Octogone_ON + this._Hexagone_ON + this._Losange_ON + this._Porte_ON * this._LG_ON
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BG_X0():number {
        return 0
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BG_Y0():number {
        return this.Dormant_BG_ON() * (this.Total_Haut() - this.Dormant_BG_Haut())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BG_X1():number {
        return this.Dormant_BG_ON() * this.Dormant_BG_Larg()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BG_Y1():number {
        return this.Dormant_BG_ON() * this.Total_Haut()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BG_X2():number {
        return (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.Dormant_HG_X3() + this._Porte_ON * this._LG_ON * (this.Dormant_BG_X1() - this._Profile_Int_Larg)
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BG_Y2():number {
        return this.Dormant_BG_ON() * (this.Dormant_BG_Y1() - this.Dormant_HG_Y3() - this._Porte_ON * this._LG_ON * (this._Profile_Ext_Larg - this.Dormant_HG_Y3()))
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BG_X3():number {
        return (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.Dormant_HG_X2() + this._Porte_ON * this._LG_ON * (this._Profile_Ext_Larg + this._TriangleG_ON * (this.Dormant_HG_X2() - this._Profile_Ext_Larg) - this._Profile_Ext_Larg * this._Triangle_ON * (1 - Math.tan((90 + this.Dormant_HG_Angle()) * Math.PI / 360)) + (this._Cercle_Demi_ON + this._Gothique_ON + this._Ellipse_Demi_ON) * (this.Dormant_H_RayonX2() * (1 - Math.sqrt(1 - (this._Cercle_Demi_ON + this._Gothique_ON + this._Ellipse_Demi_ON) * this._Profile_Ext_Larg * this._Profile_Ext_Larg / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - this._Cercle_Demi_ON - this._Gothique_ON - this._Ellipse_Demi_ON)))))
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BG_Y3():number {
        return this.Dormant_BG_Y1() - (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.Dormant_HG_Y2() - this._Porte_ON * this._LG_ON * this._Profile_Ext_Larg
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BG_DY1():number {
        return this.Dormant_BG_ON() * Math.sqrt(this.Dormant_BG_X1() * this.Dormant_BG_X1() + this.Dormant_BG_Haut() * this.Dormant_BG_Haut())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BG_LX1():number {
        return this.Dormant_BG_ON() * this._Profile_Ext_Larg
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BG_LY1():number {
        return (this.Dormant_BG_ON() - this._Hexagone_ON - this._Losange_ON) * (1 - 2 * this._Porte_ON * this._LG_ON) * (this.Dormant_BG_X1() - this.Dormant_BG_X2()) + (this._Hexagone_ON + this._Losange_ON) * this.Dormant_HG_LY2()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BG_DX2():number {
        return 0
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BG_DY2():number {
        return -Math.sqrt(Math.pow(this.Dormant_BG_X2() - this.Dormant_BG_X3(), 2) + Math.pow(this.Dormant_BG_Y2() - this.Dormant_BG_Y3(), 2))
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BG_LX2():number {
        return -this.Dormant_BG_LX1()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BG_LY2():number {
        return -this.Dormant_BG_DY1() - this.Dormant_BG_LY1() - this.Dormant_BG_DY2()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BG_Trans_X():number {
        return 0
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BG_Trans_Y():number {
        return this.Dormant_BG_ON() * (this.Total_Haut() - (1 - this._Porte_ON * this._LG_ON) * this.Dormant_BG_Haut())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BG_Rotate():number {
        return this.Dormant_BG_ON() * (360 - this.Dormant_BG_Angle())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BM_ON():number {
        return (1 - this._Hexagone_ON - this._Losange_ON) * (1 - this._Porte_ON)
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BM_X0():number {
        return this._Octogone_ON * this.Dormant_BG_Larg()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BM_Y0():number {
        return this.Dormant_BM_ON() * (this.Total_Haut() - this.CintrageB_Haut())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BM_X1():number {
        return this.Dormant_BM_ON() * (this.Total_Larg() - this._Octogone_ON * this.Dormant_BD_Larg())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BM_Y1():number {
        return this.Dormant_BM_Y0()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BM_X2():number {
        return this.Dormant_BM_ON() * (this.Total_Larg_Profile() - (this._Cercle_Demi_ON + this._Cercle_QuartD_ON + this._Gothique_ON + this._Ellipse_Demi_ON + this._Ellipse_QuartD_ON) * (this.Dormant_H_RayonX2() * (1 - Math.sqrt(1 - (this._Cercle_Demi_ON + this._Cercle_QuartD_ON + this._Gothique_ON + this._Ellipse_Demi_ON + this._Ellipse_QuartD_ON) * this._Profile_Ext_Larg * this._Profile_Ext_Larg / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - (this._Cercle_Demi_ON + this._Cercle_QuartD_ON + this._Gothique_ON + this._Ellipse_Demi_ON + this._Ellipse_QuartD_ON))))) + this._Octogone_ON * (this._Profile_Ext_Larg - this.Dormant_BG_X2()) + this._Triangle_ON * (this._Profile_Ext_Larg - this.Dormant_HG_X2()) + this._TriangleD_ON * this._Profile_Ext_Larg * (1 - Math.tan((90 + this.Dormant_HD_Angle()) * Math.PI / 360)))
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BM_Y2():number {
        return (this.Dormant_BM_ON() - this.CintrageB_ON()) * (this.Total_Haut() - this._Profile_Ext_Larg) + this.CintrageB_ON() * this.Dormant_BM_Y1()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BM_X3():number {
        return this.Dormant_BM_ON() * ( this.Dormant_BM_ON() * this._Profile_Ext_Larg + this._Octogone_ON * (this.Dormant_BG_X2() - this._Profile_Ext_Larg) + (this._TriangleG_ON + this._Triangle_ON + this._Cercle_QuartG_ON + this._Ellipse_QuartG_ON) * (this.Dormant_HG_X2() - this._Profile_Ext_Larg) + (this._Cercle_Demi_ON + this._Gothique_ON + this._Ellipse_Demi_ON) * (this.Dormant_H_RayonX2() * (1 - Math.sqrt(1 - (this._Cercle_Demi_ON + this._Gothique_ON + this._Ellipse_Demi_ON) * this._Profile_Ext_Larg * this._Profile_Ext_Larg / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - (this._Cercle_Demi_ON + this._Gothique_ON + this._Ellipse_Demi_ON))))))
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BM_Y3():number {
        return this.Dormant_BM_Y2()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BM_DY1():number {
        return this.Dormant_BM_X1() - this.Dormant_BM_X0()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BM_LX1():number {
        return (this.Dormant_BM_ON() - this.CintrageB_ON()) * this._Profile_Ext_Larg
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BM_LY1():number {
        return this.Dormant_BM_X2() - this.Dormant_BM_X1()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BM_DX2():number {
        return 0
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BM_DY2():number {
        return this.Dormant_BM_X3() - this.Dormant_BM_X2()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BM_LX2():number {
        return -this.Dormant_BM_LX1()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BM_LY2():number {
        return -this.Dormant_BM_DY2() - this.Dormant_BM_LY1() - this.Dormant_BM_DY1()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BM_Trans_X():number {
        return this.Dormant_BM_X0()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BM_Trans_Y():number {
        return this.Dormant_BM_ON() * (this.Total_Haut() - this.CintrageB_ON() * this.CintrageB_Haut())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BM_Rotate():number {
        return 270 * this.Dormant_BM_ON()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BD_ON():number {
        return this._Octogone_ON + this._Hexagone_ON + this._Losange_ON + this._Porte_ON * this._LD_ON
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BD_X0():number {
        return this.Dormant_BD_ON() * (this.Total_Larg() - this.Dormant_BD_Larg())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BD_Y0():number {
        return this.Dormant_BD_ON() * this.Total_Haut()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BD_X1():number {
        return this.Dormant_BD_ON() * this.Total_Larg()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BD_Y1():number {
        return this.Dormant_BD_ON() * (this.Total_Haut() - this.Dormant_BD_Haut()) + this._Porte_ON * this._LD_ON * this.Dormant_BD_Haut()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BD_X2():number {
        return this.Dormant_BD_ON() * (this.Dormant_BD_X1() - this._Profile_Ext_Larg - this._Losange_ON * (this.Dormant_BG_X3() - this._Profile_Ext_Larg) + this._Porte_ON * this._LD_ON * ( (this._TriangleD_ON + this._Triangle_ON) * this._Profile_Ext_Larg * (1 - Math.tan((90 + this.Dormant_HD_Angle()) * Math.PI / 360)) - (this._Cercle_Demi_ON + this._Cercle_QuartD_ON + this._Gothique_ON + this._Ellipse_Demi_ON + this._Ellipse_QuartD_ON) * (this.Dormant_H_RayonX2() * (1 - Math.sqrt(1 - (this._Cercle_Demi_ON + this._Cercle_QuartD_ON + this._Gothique_ON + this._Ellipse_Demi_ON + this._Ellipse_QuartD_ON) * this._Profile_Ext_Larg * this._Profile_Ext_Larg / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - this._Cercle_Demi_ON - this._Cercle_QuartD_ON - this._Gothique_ON - this._Ellipse_Demi_ON - this._Ellipse_QuartD_ON))))))
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BD_Y2():number {
        return this.Dormant_BD_ON() * (this.Dormant_BG_Y3() + this._Porte_ON * this._LD_ON * (this.Total_Haut() - this._Profile_Ext_Larg - this.Dormant_BG_Y3()))
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BD_X3():number {
        return this.Dormant_BD_ON() * (this.Total_Larg() - this.Dormant_BG_X2()) + this._Porte_ON * this._LD_ON * (this.Dormant_BG_X2() - this.LD_Larg())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BD_Y3():number {
        return this.Dormant_BD_ON() * this.Dormant_BG_Y2() + this._Porte_ON * this._LD_ON * (this.Dormant_BD_Y2() - this.Dormant_BG_Y2())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BD_DY1():number {
        return this.Dormant_BD_ON() * this.Dormant_BG_DY1() + this._Porte_ON * this._LD_ON * (this.Dormant_BD_X1() - this.Dormant_BD_X0() - this.Dormant_BG_DY1())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BD_LX1():number {
        return this.Dormant_BD_ON() * this._Profile_Ext_Larg
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BD_LY1():number {
        return (this.Dormant_BD_ON() - this._TriangleD_ON - this._Triangle_ON - this._Losange_ON - this._Cercle_Demi_ON - this._Cercle_QuartD_ON - this._Gothique_ON - this._Ellipse_Demi_ON - this._Ellipse_QuartD_ON) * (this.Dormant_BD_Y2() - this.Dormant_BD_Y1()) + (this._TriangleD_ON + this._Triangle_ON + this._Cercle_Demi_ON + this._Cercle_QuartD_ON + this._Gothique_ON + this._Ellipse_Demi_ON + this._Ellipse_QuartD_ON) * (this.Dormant_BD_X2() - this.Dormant_BD_X1()) + this._Losange_ON * this.Dormant_BG_LY2()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BD_DX2():number {
        return 0
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BD_DY2():number {
        return this.Dormant_BD_ON() * this.Dormant_BG_DY2() + this._Porte_ON * this._LD_ON * (this.Dormant_BD_X3() - this.Dormant_BD_X2() - this.Dormant_BG_DY2())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BD_LX2():number {
        return -this.Dormant_BD_LX1()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BD_LY2():number {
        return -this.Dormant_BD_DY2() - this.Dormant_BD_LY1() - this.Dormant_BD_DY1()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BD_Trans_X():number {
        return this.Dormant_BD_ON() * (this.Total_Larg() - this.Dormant_BD_Larg())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BD_Trans_Y():number {
        return this.Dormant_BD_ON() * this.Total_Haut()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_BD_Rotate():number {
        return this.Dormant_BD_ON() * (180 + this.Dormant_BD_Angle())
    }

    /**
     *
     * @returns {any}
     * @constructor
     */
    Dormant_DD_ON():number {
        return this._Rect_ON + this._ChanfreinG_ON + this._ChanfreinD_ON + this._TriangleG_ON + this._TriangleG_H_ON + this._TriangleD_H_ON + this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON + this._Ovale_ON + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this._CercleH_QuartD_ON + this.CintrageH_ON() + this._Gothique_H_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON + this._EllipseH_QuartD_ON + this._EllipseH_Demi_ON
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_DD_X0():number {
        return this.Dormant_DD_ON() * this.Total_Larg()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_DD_Y0():number {
        return this.Dormant_DD_ON() * (this.Total_Haut() - this.CintrageB_Haut() - this._Octogone_ON * this.Dormant_BD_Haut() - this._Hexagone_ON * this.Dormant_GG_Y0())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_DD_X1():number {
        return this.Dormant_DD_X0()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_DD_Y1():number {
        return this.Dormant_DD_ON() * ( (this._Ovale_ON + this._CercleH_QuartD_ON + this.CintrageH_ON() + this._Gothique_H_ON + this._EllipseH_QuartD_ON + this._EllipseH_Demi_ON) * this.CintrageH_Haut() + (this._ChanfreinD_ON + this._TriangleD_H_ON + this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON) * this.Dormant_HD_Haut())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_DD_X2():number {
        return this.Dormant_DD_ON() * this.Total_Larg_Profile()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_DD_Y2():number {
        return (this._Rect_ON + this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON + this._Ovale_ON + this.CintrageH_ON() + this._Gothique_H_ON + this._EllipseH_Demi_ON) * this.Dormant_GG_Y3() + this._ChanfreinG_ON * this._Profile_Ext_Larg + this._EllipseH_QuartD_ON * this.Dormant_DD_Y1() + (this._TriangleG_ON + this._TriangleG_H_ON + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) * this.Dormant_HG_Y3() + (this._ChanfreinD_ON + this._TriangleD_H_ON) * (this.Dormant_DD_Y1() + this._Profile_Ext_Larg * Math.tan(this.Dormant_HD_Angle() * Math.PI / 360)) + this._CercleH_QuartD_ON * ((this.Dormant_H_RayonY1() - this.Dormant_H_RayonY2() * Math.sqrt(1 - this._CercleH_QuartD_ON * this.Total_Larg_Profile() * this.Total_Larg_Profile() / ((this.Dormant_H_RayonX2() * this.Dormant_H_RayonX2() + 1 - this._CercleH_QuartD_ON)))))
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_DD_X3():number {
        return this.Dormant_DD_X2()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_DD_Y3():number {
        return (this.Dormant_DD_ON() - this._Octogone_ON - this._Hexagone_ON) * this.Dormant_BM_Y2() + (this._Octogone_ON + this._Hexagone_ON) * this.Dormant_BD_Y2() + this.Dormant_DD_ON() * this._Porte_ON * (this.Total_Haut() - this._LD_ON * this._Profile_Ext_Larg)
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_DD_DY1():number {
        return this.Dormant_DD_Y0() - this.Dormant_DD_Y1()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_DD_LX1():number {
        return this.Dormant_DD_ON() * this._Profile_Ext_Larg
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_DD_LY1():number {
        return this.Dormant_DD_Y1() - this.Dormant_DD_Y2()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_DD_DX2():number {
        return 0
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_DD_DY2():number {
        return this.Dormant_DD_Y2() - this.Dormant_DD_Y3()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_DD_LX2():number {
        return -this.Dormant_DD_LX1()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_DD_LY2():number {
        return this.Dormant_DD_Y3() - this.Dormant_DD_Y0()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_DD_Trans_X():number {
        return this.Dormant_DD_ON() * this.Total_Larg()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_DD_Trans_Y():number {
        return this.Dormant_DD_Y0()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_DD_Rotate():number {
        return this.Dormant_DD_ON() * 180
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HD_ON():number {
        return this._ChanfreinD_ON + this._TriangleD_ON + this._TriangleD_H_ON + this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON + this._Triangle_ON + this._Losange_ON + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this._Gothique_ON + this._Gothique_H_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HD_X0():number {
        return this.Dormant_HD_ON() * this.Total_Larg()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HD_Y0():number {
        return this.Dormant_HD_ON() * this.Dormant_HD_Haut()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HD_X1():number {
        return this.Dormant_HD_ON() * (this.Total_Larg() - this.Dormant_HD_Larg());
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HD_Y1():number {
        return 0;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HD_X2():number {
        return this.Dormant_HD_X1() + this._Profile_Ext_Larg * (this._TriangleD_ON + this._TriangleD_H_ON + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON - (this._ChanfreinD_ON + this._DemiOctogone_ON + this._Octogone_ON) * Math.tan((90 - this.Dormant_HD_Angle()) * Math.PI / 360) );
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HD_Y2():number {
        return (this._ChanfreinD_ON + this._DemiOctogone_ON + this._Octogone_ON + (this._TriangleD_ON + this._TriangleD_H_ON) * Math.tan((180 - this.Dormant_HD_Angle()) * Math.PI / 360)) * this._Profile_Ext_Larg + (this._DemiHexag_ON + this._Triangle_ON + this._Losange_ON + this._Hexagone_ON + this._Gothique_ON + this._Gothique_H_ON) * this.Dormant_HG_Y3() + (this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) * this.Dormant_GG_Y3();
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HD_X3():number {
        return (this._ChanfreinD_ON + this._TriangleD_H_ON + this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON + this._CercleH_QuartD_ON + this._Gothique_H_ON + this._EllipseH_QuartD_ON) * this.Total_Larg_Profile() + this._Losange_ON * (this.Total_Larg() - this.Dormant_HG_X2()) + (this._TriangleD_ON + this._Triangle_ON + this._Cercle_QuartD_ON + this._Gothique_ON + this._Ellipse_QuartD_ON) * ( (1 - this._Porte_ON) * this.Dormant_BM_X2() + this._Porte_ON * this._LD_ON * this.Dormant_BD_X2() + this._Porte_ON * (1 - this._LD_ON) * (this.Total_Larg() - (this._TriangleD_ON + this._Triangle_ON) * this._Profile_Ext_Larg / Math.cos(this.Dormant_HD_Angle() * Math.PI / 180) - (this._Cercle_QuartD_ON + this._Gothique_ON + this._Ellipse_QuartD_ON) * (this._Profile_Ext_Larg + this.Dormant_H_RayonX2() * (1 - Math.sqrt(1 - (this._Cercle_QuartD_ON + this._Gothique_ON + this._Ellipse_QuartD_ON) * this._Profile_Ext_Larg * this._Profile_Ext_Larg / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - this._Cercle_QuartD_ON - this._Gothique_ON - this._Ellipse_QuartD_ON)))) ) );
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HD_Y3():number {
        return this.Dormant_HD_Haut() - this._Profile_Ext_Larg * ( (this._TriangleD_ON + this._Cercle_QuartD_ON + this._Triangle_ON + this._Gothique_ON + this._Ellipse_QuartD_ON) * (1 - this._Porte_ON * (1 - this._LD_ON)) - (this._ChanfreinD_ON + this._TriangleD_H_ON + this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON) * Math.tan(this.Dormant_HD_Angle() * Math.PI / 360) ) + this._CercleH_QuartD_ON * (this.Dormant_DD_Y2() - this.Dormant_HD_Haut());
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HD_DY1():number {
        return this.Dormant_HD_ON() * Math.sqrt(this.Dormant_HD_Larg() * this.Dormant_HD_Larg() + this.Dormant_HD_Haut() * this.Dormant_HD_Haut());
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HD_LX1():number {
        return Math.abs(1 - this._Ellipse_Pourcent_Haut) / (1 - this._Ellipse_Pourcent_Haut) * Math.sqrt(Math.pow(this.Dormant_HD_X0() - this.Dormant_HD_X2(), 2) + Math.pow(this.Dormant_HD_Y0() - this.Dormant_HD_Y2(), 2) - Math.pow(this.Dormant_HD_X0() * (this.Dormant_HD_X0() - this.Dormant_HD_X1() - this.Dormant_HD_X2()) + this.Dormant_HD_X1() * this.Dormant_HD_X2() + this.Dormant_HD_Y0() * (this.Dormant_HD_Y0() - this.Dormant_HD_Y2()), 2) / (this.Dormant_HD_DY1() * this.Dormant_HD_DY1() + 1 - this.Dormant_HD_ON()));
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HD_LY1():number {
        return this.Dormant_HD_DY1() - (this.Dormant_HD_X0() * (this.Dormant_HD_X0() - this.Dormant_HD_X1() - this.Dormant_HD_X2()) + this.Dormant_HD_X1() * this.Dormant_HD_X2() + this.Dormant_HD_Y0() * (this.Dormant_HD_Y0() - this.Dormant_HD_Y2())) / (this.Dormant_HD_DY1() + 1 - this.Dormant_HD_ON());
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HD_DX2():number {
        return (this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON + this.Gothiq_ON()) * (Math.sqrt(Math.pow(this.Dormant_HD_X0() - this.Dormant_HD_X3(), 2) + Math.pow(this.Dormant_HD_Y0() - this.Dormant_HD_Y3(), 2) - Math.pow(this.Dormant_HD_X0() * (this.Dormant_HD_X0() - this.Dormant_HD_X1() - this.Dormant_HD_X3()) + this.Dormant_HD_X1() * this.Dormant_HD_X3() + this.Dormant_HD_Y0() * (this.Dormant_HD_Y0() - this.Dormant_HD_Y3()), 2) / (this.Dormant_HD_DY1() * this.Dormant_HD_DY1() + 1 - this.Dormant_HD_ON())) - this.Dormant_HD_LX1());
    }

    /**
     *
     * @returns {any}
     * @constructor
     */
    Dormant_HD_DY2():number {
        return Math.sqrt(Math.pow(this.Dormant_HD_X3() - this.Dormant_HD_X2(), 2) + Math.pow(this.Dormant_HD_Y3() - this.Dormant_HD_Y2(), 2));
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HD_LX2():number {
        return -this.Dormant_HD_LX1() - this.Dormant_HD_DX2();
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HD_LY2():number {
        return this.Dormant_HD_DY2() + this.Dormant_HD_LY1() - this.Dormant_HD_DY1();
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HD_Trans_X():number {
        return this.Dormant_HD_ON() * this.Total_Larg();
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HD_Trans_Y():number {
        return this.Dormant_HD_ON() * this.Dormant_HD_ON() * this.Dormant_HD_Haut();
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HD_Rotate():number {
        return this.Dormant_HD_ON() * (180 - this.Dormant_HD_Angle());
    }

    /**
     *
     * @returns {any}
     * @constructor
     */
    Dormant_HM_ON():number {
        return this._Rect_ON + this._ChanfreinG_ON + this._ChanfreinD_ON + this._DemiOctogone_ON + this._Octogone_ON + this._Ovale_ON + this._Rond_ON + this._Cercle_Demi_ON + this.CintrageH_ON() + this._Ellipse_ON + this._Ellipse_Demi_ON + this._EllipseH_Demi_ON;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HM_X0():number {
        return this.Dormant_HM_ON() * (this.Total_Larg() - (this._ChanfreinD_ON + this._DemiOctogone_ON + this._Octogone_ON) * this.Dormant_HD_Larg());
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HM_Y0():number {
        return (this._Ovale_ON + this._Rond_ON + this._Cercle_Demi_ON + this.CintrageH_ON() + this._Ellipse_ON + this._Ellipse_Demi_ON + this._EllipseH_Demi_ON) * this.CintrageH_Haut();
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HM_X1():number {
        return (this._ChanfreinG_ON + this._DemiOctogone_ON + this._Octogone_ON) * this.Dormant_HG_Larg();
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HM_Y1():number {
        return this.Dormant_HM_Y0();
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HM_X2():number {
        return this.Dormant_HM_ON() * ((this._Rect_ON + this._ChanfreinD_ON + this._Ovale_ON + this._Rond_ON + this.CintrageH_ON() + this._Ellipse_ON + this._EllipseH_Demi_ON) * this._Profile_Ext_Larg + (this._ChanfreinG_ON + this._DemiOctogone_ON + this._Octogone_ON) * this.Dormant_HG_X3() + (this._Cercle_Demi_ON + this._Gothique_ON + this._Ellipse_Demi_ON) * (this.Dormant_BM_X3() + this.Dormant_BG_X3() + this._Porte_ON * (1 - this._LG_ON) * this._Profile_Ext_Larg));
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HM_Y2():number {
        return (this._Rect_ON + this._ChanfreinG_ON + this._ChanfreinD_ON + this._DemiOctogone_ON + this._Octogone_ON) * this._Profile_Ext_Larg + (this._Ovale_ON + this._Rond_ON + this._Ellipse_ON + this._EllipseH_Demi_ON) * this.Dormant_HM_Y1() + this.CintrageH_ON() * this.Dormant_GG_Y3() + (this._Cercle_Demi_ON + this._Ellipse_Demi_ON) * (this.Dormant_HM_Y1() + ((this._Porte_ON * (1 - this._LG_ON) - 1) * this._Profile_Ext_Larg));
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HM_X3():number {
        return (this._Rect_ON + this._ChanfreinG_ON + this._Ovale_ON + this._Rond_ON + this._Cercle_Demi_ON + this.CintrageH_ON() + this._Ellipse_ON + this._Ellipse_Demi_ON + this._EllipseH_Demi_ON) * this.Total_Larg_Profile() + (this._ChanfreinD_ON + this._DemiOctogone_ON + this._Octogone_ON) * this.Dormant_HD_X2() - (this._Cercle_Demi_ON + this._Ellipse_Demi_ON) * (1 - this._Porte_ON * (1 - this._LD_ON)) * this.Dormant_H_RayonX2() * (1 - Math.sqrt(1 - (this._Cercle_Demi_ON + this._Ellipse_Demi_ON) * this._Profile_Ext_Larg * this._Profile_Ext_Larg / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - (this._Cercle_Demi_ON + this._Ellipse_Demi_ON))));
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HM_Y3():number {
        return this.Dormant_HM_Y0() + (this._Rect_ON + this._ChanfreinG_ON + this._ChanfreinD_ON + this._DemiOctogone_ON + this._Octogone_ON) * this._Profile_Ext_Larg - this._Profile_Ext_Larg * (this._Cercle_Demi_ON + this._Ellipse_Demi_ON) * (1 + this._Porte_ON * (this._LD_ON - 1)) + (this.CintrageH_ON() + this._EllipseH_Demi_ON) * (this.Dormant_DD_Y2() - this.Dormant_HM_Y0());
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HM_DY1():number {
        return this.Dormant_HM_ON() * (this.Total_Larg() - this.Dormant_HG_X0() - this.Dormant_HD_ON() * this.Dormant_HD_Larg());
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HM_LX1():number {
        return this.Dormant_HM_Y2() - this.Dormant_HM_Y1();
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HM_LY1():number {
        return -(this._Rect_ON + this._ChanfreinD_ON + this._Ovale_ON + this._Rond_ON + this.CintrageH_ON() + this._Ellipse_ON + this._EllipseH_Demi_ON) * this._Profile_Ext_Larg + (this._ChanfreinG_ON + this._DemiOctogone_ON + this._Octogone_ON) * this.Dormant_HG_LY2() - (this._Cercle_Demi_ON + this._Ellipse_Demi_ON) * this.Dormant_HM_X2();
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HM_DX2():number {
        return (this._Cercle_Demi_ON + this._Ellipse_Demi_ON) * this._Porte_ON * ((this._LG_ON - 1) * this._LD_ON * this._Profile_Ext_Larg + this._LG_ON * (this._LD_ON - 1) * this.Dormant_HM_LX1());
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HM_DY2():number {
        return this.Dormant_HM_X2() - this.Dormant_HM_X3();
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HM_LX2():number {
        return -this.Dormant_HM_LX1() - this.Dormant_HM_DX2();
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HM_LY2():number {
        return -this.Dormant_HM_DY1() - this.Dormant_HM_LY1() - this.Dormant_HM_DY2();
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HM_Trans_X():number {
        return this.Dormant_HM_ON() * (this.Total_Larg() - (this._DemiOctogone_ON + this._Octogone_ON) * this.Dormant_HG_Larg() - this._ChanfreinD_ON * this.Dormant_HD_Larg());
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HM_Trans_Y():number {
        return this.Dormant_HM_ON() * this.CintrageHH_ON() * this.CintrageH_Haut();
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    Dormant_HM_Rotate():number {
        return this.Dormant_HM_ON() * 90;
    }

    /**
     *
     * @returns {number}
     * @constructor
     */

    Dormant_LG_ON():number {

        return  this._LG_ON*this.bool(this.LG_Larg()>((1-this._Crois_LG_All_ON)*this.bool(this.Dormant_HG_Y2()>(this.Total_Haut()-this.Allege_Haut()-this._Profile_Int_Larg))*this.Dormant_Allege_X3()+this._LG_min*this._Profile_Ext_Larg));
    }

    Crois_LG_Imp0_ON():number {


        return this._Crois_LG_Imp_ON * this.bool(this.LG_Larg() > (this.Dormant_Imposte_X2() + this._LG_min * this._Profile_Ext_Larg));
    }

    Crois_LG_All0_ON():number {


        return this._Crois_LG_All_ON * this.bool(this.LG_Larg() > (this.Dormant_Allege_X3() + this._LG_min * this._Profile_Ext_Larg));
    }

    Dormant_LG_X0():number {


        return this.Dormant_LG_ON() * (this.LG_Larg() + this._Profile_Int_Larg);
    }


    Dormant_LG_Y0():number {

        if ((this._Allege_ON * (1 - this.Crois_LG_All0_ON()) * this.bool(this.Dormant_LG_X0() > this.Dormant_Allege_X3()))) {

            return this.Total_Haut() - this.Allege_Haut() - this._Profile_Int_Larg;
        }
        else {

            return this.Dormant_LG_ON() * ( (1 - this.CintrageB_ON()) * (this.Total_Haut() - this._Profile_Ext_Larg) + this._Porte_ON * this.Dormant_LG_ON() * this._Profile_Ext_Larg + (this.Dormant_BG_ON() - this._Porte_ON * this.Dormant_LG_ON()) * this.bool(this.Dormant_LG_X0() < this.Dormant_BG_X2()) * (this._Profile_Ext_Larg - this.Total_Haut() + this.Dormant_BG_Y3() + (this.Dormant_LG_X0() - this.Dormant_BG_X3()) * Math.tan((90 - this.Dormant_BG_Angle()) * Math.PI / 180)) + this.CintrageB_ON() * (this.Dormant_BM_Y1() + this.Dormant_B_RayonY2() * Math.sqrt(1 - this.Dormant_LG_ON() * this.CintrageB_ON() * (this.Total_Larg2() - this.Dormant_LG_X0()) * (this.Total_Larg2() - this.Dormant_LG_X0()) / (this.Dormant_B_RayonX2() * this.Dormant_B_RayonX2() + 1 - this.CintrageB_ON()))));
        }
    }

    Dormant_LG_Y00():number {

        if (this._Allege_ON * (1 - this.Crois_LG_All0_ON()) * this.bool(this.Dormant_LG_X0() > this.Dormant_Allege_X00())) {

            return this.Total_Haut() - this.Allege_Haut();
        }
        else {

            return this.Dormant_LG_ON() * ( (1 - this.CintrageB_ON()) * this.Total_Haut() + (this.Dormant_BG_ON() - this._Porte_ON * this.Dormant_LG_ON()) * this.bool(this.Dormant_LG_X0() < this.Dormant_BG_X1()) * (this.Dormant_BG_Y0() - this.Total_Haut() + (this.Dormant_LG_X0() - this.Dormant_BG_X0()) * Math.tan((90 - this.Dormant_BG_Angle()) * Math.PI / 180)) + this.CintrageB_ON() * (this.Dormant_BM_Y1() + this.Dormant_B_RayonY1() * Math.sqrt(1 - this.Dormant_LG_ON() * this.CintrageB_ON() * (this.Total_Larg2() - this.Dormant_LG_X0()) * (this.Total_Larg2() - this.Dormant_LG_X0()) / (this.Dormant_B_RayonX1() * this.Dormant_B_RayonX1() + 1 - this.CintrageB_ON()))));
        }
    }

    Dormant_LG_Y1():number {

        if (this._Imposte_ON * (1 - this.Crois_LG_Imp0_ON()) * this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X2()) * this.bool(this.Dormant_LG_X0() < this.Dormant_Imposte_X3())) {

            return this.Imposte_Haut() + this._Profile_Int_Larg;
        }
        else {

            return this.Dormant_LG_ON() * ( this._Profile_Ext_Larg + (this.Dormant_HG_ON() * (1 - this.CintrageHH_ON())) * this.bool(this.Dormant_LG_X0() < this.Dormant_HG_X3()) * (this.Dormant_HG_Y2() - this._Profile_Ext_Larg - (this.Dormant_LG_X0() - this.Dormant_HG_X2()) * Math.tan((90 - this.Dormant_HG_Angle()) * Math.PI / 180)) + this.Dormant_HD_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_LG_X0() > this.Dormant_HD_X2()) * (this.Dormant_HD_Y3() - this._Profile_Ext_Larg - (this.Dormant_HD_X3() - this.Dormant_LG_X0()) * Math.tan((90 - this.Dormant_HD_Angle()) * Math.PI / 180)) + this.CintrageHH_ON() * (-this._Profile_Ext_Larg + this.Dormant_H_RayonY1() * (1 - this.Gothiq_ON() * 0.134) - this.Dormant_H_RayonY2() * Math.sqrt(1 - this.Dormant_LG_ON() * this.CintrageHH_ON() * Math.pow(this.Total_Larg2() * (1 + this.Gothiq_ON() + this.Dormant_HG_ON() - this.Dormant_HD_ON()) - (1 - 2 * (this.Dormant_HD_ON() - this.Gothiq_ON())) * this.Dormant_LG_X0(), 2) / (this.Dormant_H_RayonX2() * this.Dormant_H_RayonX2() + 1 - this.CintrageHH_ON()))));
        }
    }

    Dormant_LG_Y10():number {

        if (this._Imposte_ON * (1 - this.Crois_LG_Imp0_ON()) * this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X10()) * this.bool(this.Dormant_LG_X0() < this.Dormant_Imposte_X00())) {

            return this.Imposte_Haut();
        }
        else {

            return this.Dormant_LG_ON() * (this.Dormant_HG_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_LG_X0() < this.Dormant_HG_X0()) * (this.Dormant_HG_X0() - this.Dormant_LG_X0()) * Math.tan((90 - this.Dormant_HG_Angle()) * Math.PI / 180) + this.Dormant_HD_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_LG_X0() > this.Dormant_HD_X1()) * (this.Dormant_HD_Y0() - (this.Dormant_HD_X0() - this.Dormant_LG_X0()) * Math.tan((90 - this.Dormant_HD_Angle()) * Math.PI / 180)) + this.CintrageHH_ON() * this.Dormant_H_RayonY1() * (1 - this.Gothiq_ON() * 0.134 - Math.sqrt(1 - this.Dormant_LG_ON() * this.CintrageHH_ON() * Math.pow(this.Total_Larg2() * (1 + this.Gothiq_ON() + this.Dormant_HG_ON() - this.Dormant_HD_ON()) - (1 - 2 * (this.Dormant_HD_ON() - this.Gothiq_ON())) * this.Dormant_LG_X0(), 2) / (this.Dormant_H_RayonX1() * this.Dormant_H_RayonX1() + 1 - this.CintrageHH_ON()))));
        }
    }

    Dormant_LG_X2():number {


        return this.Dormant_LG_ON() * this.LG_Larg();
    }


    Dormant_LG_Y2():number {

        if (this._Imposte_ON * (1 - this.Crois_LG_Imp0_ON()) * this.bool(this.Dormant_LG_X2() > this.Dormant_Imposte_X2()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X3())) {

            return this.Imposte_Haut() + this._Profile_Int_Larg;
        }
        else {

            return this.Dormant_LG_ON() * (this._Profile_Ext_Larg + (this.Dormant_HG_ON() * (1 - this.CintrageHH_ON())) * this.bool(this.Dormant_LG_X2() < this.Dormant_HG_X3()) * (this.Dormant_HG_Y2() - this._Profile_Ext_Larg - (this.Dormant_LG_X2() - this.Dormant_HG_X2()) * Math.tan((90 - this.Dormant_HG_Angle()) * Math.PI / 180)) + this.Dormant_HD_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_LG_X2() > this.Dormant_HD_X2()) * (this.Dormant_HD_Y3() - this._Profile_Ext_Larg - (this.Dormant_HD_X3() - this.Dormant_LG_X2()) * Math.tan((90 - this.Dormant_HD_Angle()) * Math.PI / 180)) + this.CintrageHH_ON() * (this.Dormant_H_RayonY1() * (1 - this.Gothiq_ON() * 0.134) - this._Profile_Ext_Larg - this.Dormant_H_RayonY2() * Math.sqrt(1 - this.Dormant_LG_ON() * this.CintrageHH_ON() * Math.pow(this.Total_Larg2() * (1 + this.Gothiq_ON() + this.Dormant_HG_ON() - this.Dormant_HD_ON()) - (1 - 2 * (this.Dormant_HD_ON() - this.Gothiq_ON())) * this.Dormant_LG_X2(), 2) / (this.Dormant_H_RayonX2() * this.Dormant_H_RayonX2() + 1 - this.CintrageHH_ON()))));
        }
    }

    Dormant_LG_Y20():number {

        if (this._Imposte_ON * (1 - this.Crois_LG_Imp0_ON()) * this.bool(this.Dormant_LG_X2() > this.Dormant_Imposte_X10()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X00())) {

            return this.Imposte_Haut();
        }
        else {

            return this.Dormant_LG_ON() * (this.Dormant_HG_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_LG_X2() < this.Dormant_HG_X0()) * (this.Dormant_HG_X0() - this.Dormant_LG_X2()) * Math.tan((90 - this.Dormant_HG_Angle()) * Math.PI / 180) + this.Dormant_HD_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_LG_X2() > this.Dormant_HD_X1()) * this.Dormant_LG_X2() * Math.tan((90 - this.Dormant_HD_Angle()) * Math.PI / 180) + this.CintrageHH_ON() * this.Dormant_H_RayonY1() * (1 - this.Gothiq_ON() * 0.134 - Math.sqrt(1 - this.Dormant_LG_ON() * this.CintrageHH_ON() * Math.pow(this.Total_Larg2() * (1 + this.Gothiq_ON() + this.Dormant_HG_ON() - this.Dormant_HD_ON()) - (1 - 2 * (this.Dormant_HD_ON() - this.Gothiq_ON())) * this.Dormant_LG_X2(), 2) / (this.Dormant_H_RayonX1() * this.Dormant_H_RayonX1() + 1 - this.CintrageHH_ON()))));
        }
    }

    Dormant_LG_X12():number {

        if (this._Imposte_ON * (1 - this.Crois_LG_Imp0_ON()) * (this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X2()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X2()) + this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X3()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X3()))) {

            return this.Dormant_Imposte_X2() * this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X2()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X2()) + this.Dormant_Imposte_X3() * this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X3()) * this.bool(this.Dormant_HM_Trans_X() < this.Dormant_Imposte_X3());
        }
        else {

            return this.Dormant_LG_ON() * (this.Dormant_LG_X0() + this.Dormant_HG_ON() * this.bool(this.Dormant_LG_X2() < this.Dormant_HG_X3()) * this.bool(this.Dormant_LG_X0() > this.Dormant_HG_X3()) * (this.Dormant_HG_X3() - this.Dormant_LG_X0()) + this.Dormant_HD_ON() * this.bool(this.Dormant_LG_X2() < this.Dormant_HD_X2()) * this.bool(this.Dormant_LG_X0() > this.Dormant_HD_X2()) * (this.Dormant_HD_X2() - this.Dormant_LG_X0()));
        }
    }

    Dormant_LG_Y12():number {

        if (this._Imposte_ON * (1 - this.Crois_LG_Imp0_ON()) * (this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X2()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X2()) + this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X3()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X3()))) {

            return this.Dormant_LG_Y1() * this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X2()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X2()) + this.Dormant_LG_Y2() * this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X3()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X3());
        }
        else {

            return this.Dormant_LG_ON() * (this.Dormant_LG_Y1() + this.Dormant_HG_ON() * this.bool(this.Dormant_LG_X2() < this.Dormant_HG_X3()) * this.bool(this.Dormant_LG_X0() > this.Dormant_HG_X3()) * (this.Dormant_HG_Y3() - this.Dormant_LG_Y1()) + this.Dormant_HD_ON() * this.bool(this.Dormant_LG_X2() < this.Dormant_HD_X2()) * this.bool(this.Dormant_LG_X0() > this.Dormant_HD_X2()) * (this.Dormant_HD_Y2() - this.Dormant_LG_Y1()));
        }
    }

    Dormant_LG_X120():number {

        if (this._Imposte_ON * (1 - this.Crois_LG_Imp0_ON()) * (this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X10()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X10()) + this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X00()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X00()))) {

            return this.Dormant_Imposte_X10() * this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X10()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X10()) + this.Dormant_Imposte_X00() * this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X00()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X00());
        }
        else {

            return this.Dormant_LG_ON() * (this.Dormant_LG_X0() + this.Dormant_HG_ON() * this.bool(this.Dormant_LG_X2() < this.Dormant_HG_X0()) * this.bool(this.Dormant_LG_X0() > this.Dormant_HG_X0()) * (this.Dormant_HG_X0() - this.Dormant_LG_X0()) + this.Dormant_HD_ON() * this.bool(this.Dormant_LG_X2() < this.Dormant_HD_X1()) * this.bool(this.Dormant_LG_X0() > this.Dormant_HD_X1()) * (this.Dormant_HD_X1() - this.Dormant_LG_X0()));
        }
    }

    Dormant_LG_Y120():number {

        if (this._Imposte_ON * (1 - this.Crois_LG_Imp0_ON()) * (this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X10()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X10()) + this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X00()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X00()))) {

            return this.Imposte_Haut();
        }
        else {

            return this.Dormant_LG_ON() * (this.Dormant_LG_Y10() + this.Dormant_HG_ON() * this.bool(this.Dormant_LG_X2() < this.Dormant_HG_X0()) * this.bool(this.Dormant_LG_X0() > this.Dormant_HG_X0()) * (this.Dormant_HG_Y0() - this.Dormant_LG_Y10()) + this.Dormant_HD_ON() * this.bool(this.Dormant_LG_X2() < this.Dormant_HD_X1()) * this.bool(this.Dormant_LG_X0() > this.Dormant_HD_X1()) * (this.Dormant_HD_Y1() - this.Dormant_LG_Y10()));
        }
    }

    Dormant_LG_Y3():number {

        if (this._Allege_ON * (1 - this.Crois_LG_All0_ON()) * this.bool(this.Dormant_LG_X2() > this.Dormant_Allege_X3())) {

            return this.Total_Haut() - this.Allege_Haut() - this._Profile_Int_Larg;
        }
        else {

            return this.Dormant_LG_ON() * ( this.Total_Haut() - this._Profile_Ext_Larg - (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.bool(this.Dormant_LG_X2() < this.Dormant_BG_X2()) * (this.Total_Haut() - this._Profile_Ext_Larg - this.Dormant_BG_Y3() - (this.Dormant_LG_X2() - this.Dormant_BG_X3()) * Math.tan((90 - this.Dormant_BG_Angle()) * Math.PI / 180)) - this.CintrageB_ON() * (this.Dormant_B_RayonY1() - this._Profile_Ext_Larg - this.Dormant_B_RayonY2() * Math.sqrt(1 - this.Dormant_LG_ON() * this.CintrageB_ON() * Math.pow(this.Total_Larg2() - this.Dormant_LG_X2(), 2) / (this.Dormant_B_RayonX2() * this.Dormant_B_RayonX2() + 1 - this.CintrageB_ON()))));
        }
    }

    Dormant_LG_Y30():number {

        if (this._Allege_ON * (1 - this.Crois_LG_All0_ON()) * this.bool(this.Dormant_LG_X2() > this.Dormant_Allege_X00())) {

            return this.Total_Haut() - this.Allege_Haut();
        }
        else {

            return this.Dormant_LG_ON() * (this.Total_Haut() - (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.bool(this.Dormant_LG_X2() < this.Dormant_BG_X1()) * (this.Dormant_BG_X1() - this.Dormant_LG_X2()) * Math.tan((90 - this.Dormant_BG_Angle()) * Math.PI / 180) - this.CintrageB_ON() * this.Dormant_B_RayonY1() * (1 - Math.sqrt(1 - this.Dormant_LG_ON() * this.CintrageB_ON() * Math.pow(this.Total_Larg2() - this.Dormant_LG_X2(), 2) / (this.Dormant_B_RayonX1() * this.Dormant_B_RayonX1() + 1 - this.CintrageB_ON()))));
        }
    }

    Dormant_LG_X03():number {

        if (this._Allege_ON * (1 - this.Crois_LG_All0_ON()) * this.bool(this.Dormant_LG_X0() > this.Dormant_Allege_X3()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Allege_X3())) {

            return this.Dormant_Allege_X3();
        }
        else {

            return this.Dormant_LG_ON() * (this.Dormant_LG_X0() + this.Dormant_BG_ON() * this.bool(this.Dormant_LG_X2() < this.Dormant_BG_X2()) * this.bool(this.Dormant_LG_X0() > this.Dormant_BG_X2()) * (this.Dormant_BG_X2() - this.Dormant_LG_X0()));
        }
    }

    Dormant_LG_Y03():number {

        if (this._Allege_ON * (1 - this.Crois_LG_All0_ON()) * this.bool(this.Dormant_LG_X0() > this.Dormant_Allege_X3()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Allege_X3())) {

            return this.Total_Haut() - this.Allege_Haut() - this._Profile_Int_Larg;
        }
        else {

            return this.Dormant_LG_ON() * (this.Dormant_LG_Y0() + this.Dormant_BG_ON() * this.bool(this.Dormant_LG_X2() < this.Dormant_BG_X2()) * this.bool(this.Dormant_LG_X0() > this.Dormant_BG_X2()) * (this.Dormant_BG_Y2() - this.Dormant_LG_Y0()));
        }
    }

    Dormant_LG_X030():number {

        if (this._Allege_ON * (1 - this.Crois_LG_All0_ON()) * this.bool(this.Dormant_LG_X0() > this.Dormant_Allege_X00()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Allege_X00())) {

            return this.Dormant_Allege_X00();
        }
        else {

            return this.Dormant_LG_ON() * (this.Dormant_LG_X0() + this.Dormant_BG_ON() * this.bool(this.Dormant_LG_X2() < this.Dormant_BG_X1()) * this.bool(this.Dormant_LG_X0() > this.Dormant_BG_X1()) * (this.Dormant_BG_X1() - this.Dormant_LG_X0()));
        }
    }

    Dormant_LG_Y030():number {

        if (this._Allege_ON * (1 - this.Crois_LG_All0_ON()) * this.bool(this.Dormant_LG_X0() > this.Dormant_Allege_X00()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Allege_X00())) {

            return this.Total_Haut() - this.Allege_Haut();
        }
        else {

            return this.Dormant_LG_ON() * (this.Dormant_LG_Y00() + this.Dormant_BG_ON() * this.bool(this.Dormant_LG_X2() < this.Dormant_BG_X1()) * this.bool(this.Dormant_LG_X0() > this.Dormant_BG_X1()) * (this.Dormant_BG_Y1() - this.Dormant_LG_Y00()));
        }
    }

    Dormant_LG_DY1():number {


        return this.Dormant_LG_Y0() - this.Dormant_LG_Y1();
    }

    Dormant_LG_LX1():number {


        return this.Dormant_LG_X0() - this.Dormant_LG_X12();
    }

    Dormant_LG_LY1():number {


        return Math.abs(this.Dormant_LG_Y12() - this.Dormant_LG_Y1());
    }

    Dormant_LG_LX2():number {


        return this.Dormant_LG_X12() - this.Dormant_LG_X2();
    }

    Dormant_LG_LY2():number {


        return this.Dormant_LG_Y12() - this.Dormant_LG_Y2();
    }

    Dormant_LG_DY2():number {


        return this.Dormant_LG_Y2() - this.Dormant_LG_Y3();
    }

    Dormant_LG_LX3():number {


        return this.Dormant_LG_X2() - this.Dormant_LG_X03();
    }

    Dormant_LG_LY3():number {


        return this.Dormant_LG_Y3() - this.Dormant_LG_Y03();
    }

    Dormant_LG_LX4():number {


        return this.Dormant_LG_X03() - this.Dormant_LG_X0();
    }

    Dormant_LG_LY4():number {


        return this.Dormant_LG_Y03() - this.Dormant_LG_Y0();
    }

    Dormant_LG_Trans_X():number {


        return this.Dormant_LG_X0();
    }

    Dormant_LG_Trans_Y():number {


        return this.Dormant_LG_Y0();
    }

    Dormant_LG_Rotate():number {


        return this.Dormant_LG_ON() * 180;
    }

    Dormant_LD_ON():number {

        return  this._LD_ON*this.bool(this.LD_Larg()>((1-this._Crois_LD_All_ON)*this.bool(this.Dormant_HD_Y3()>(this.Total_Haut()-this.Allege_Haut()-this._Profile_Int_Larg))*(this.Total_Larg()-this.Dormant_Allege_X2())+this._LD_min*this._Profile_Ext_Larg))
    }

    Crois_LD_Imp0_ON():number {


        return this._Crois_LD_Imp_ON * this.bool(this.LD_Larg() > (this.Total_Larg() - this.Dormant_Imposte_X3() + this._LD_min * this._Profile_Ext_Larg))
    }

    Crois_LD_All0_ON():number {


        return this._Crois_LD_All_ON * this.bool(this.LD_Larg() > (this.Total_Larg() - this.Dormant_Allege_X2() + this._LG_min * this._Profile_Ext_Larg))
    }

    Dormant_LD_X0():number {


        return this.Dormant_LD_ON() * (this.Total_Larg() - this.LD_Larg() - this._Profile_Int_Larg)
    }

    Dormant_LD_Y0():number {

        if (this._Imposte_ON * (1 - this.Crois_LD_Imp0_ON()) * this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X3()) * this.bool(this.Dormant_LD_X0() > this.Dormant_Imposte_X2())) {

            return this.Imposte_Haut() + this._Profile_Int_Larg;
        }
        else {

            return this.Dormant_LD_ON() * (this._Profile_Ext_Larg + this.Dormant_HD_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_LD_X0() > this.Dormant_HD_X2()) * (this.Dormant_HD_Y3() - this._Profile_Ext_Larg - (this.Dormant_HD_X3() - this.Dormant_LD_X0()) * Math.tan((90 - this.Dormant_HD_Angle()) * Math.PI / 180)) + (this.Dormant_HG_ON() * (1 - this.CintrageHH_ON())) * this.bool(this.Dormant_LD_X0() < this.Dormant_HG_X3()) * (this.Dormant_HG_Y2() - this._Profile_Ext_Larg - (this.Dormant_LD_X0() - this.Dormant_HG_X2()) * Math.tan((90 - this.Dormant_HG_Angle()) * Math.PI / 180)) + this.CintrageHH_ON() * (-this._Profile_Ext_Larg + this.Dormant_H_RayonY1() * (1 - this.Gothiq_ON() * 0.134) - this.Dormant_H_RayonY2() * Math.sqrt(1 - this.Dormant_LD_ON() * this.CintrageHH_ON() * Math.pow(this.Total_Larg2() * (1 + this.Dormant_HG_ON() - this.Dormant_HD_ON() - this.Gothiq_ON()) - this.Dormant_LD_X0() * (1 - 2 * this.Dormant_HD_ON()), 2) / (this.Dormant_H_RayonX2() * this.Dormant_H_RayonX2() + 1 - this.CintrageHH_ON()))));
        }
    }

    Dormant_LD_Y00():number {

        if (this._Imposte_ON * (1 - this.Crois_LD_Imp0_ON()) * this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X00()) * this.bool(this.Dormant_LD_X0() > this.Dormant_Imposte_X10())) {

            return this.Imposte_Haut();
        }
        else {

            return this.Dormant_LD_ON() * (this.Dormant_HD_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_LD_X0() > this.Dormant_HD_X1()) * (this.Dormant_HD_Y0() - (this.Dormant_HD_X0() - this.Dormant_LD_X0()) * Math.tan((90 - this.Dormant_HD_Angle()) * Math.PI / 180)) + (this.Dormant_HG_ON() * (1 - this.CintrageHH_ON())) * this.bool(this.Dormant_LD_X0() < this.Dormant_HG_X0()) * (this.Dormant_HG_Y1() - (this.Dormant_LD_X0() - this.Dormant_HG_X1()) * Math.tan((90 - this.Dormant_HG_Angle()) * Math.PI / 180)) + this.CintrageHH_ON() * (this.Dormant_H_RayonY1() * (1 - this.Gothiq_ON() * 0.134 - Math.sqrt(1 - this.Dormant_LD_ON() * this.CintrageHH_ON() * Math.pow(this.Total_Larg2() * (1 + this.Dormant_HG_ON() - this.Dormant_HD_ON() - this.Gothiq_ON()) - this.Dormant_LD_X0() * (1 - 2 * this.Dormant_HD_ON()), 2) / (this.Dormant_H_RayonX1() * this.Dormant_H_RayonX1() + 1 - this.CintrageHH_ON())))));
        }
    }

    Dormant_LD_Y1():number {

        if(this._Allege_ON*(1-this.Crois_LD_All0_ON())*this.bool(this.Dormant_LD_X0()<this.Dormant_Allege_X2()))
            return this.Total_Haut()-this.Allege_Haut()-this._Profile_Int_Larg;
        return this.Dormant_LD_ON()*((1-this.CintrageB_ON())*(this.Total_Haut()-this._Profile_Ext_Larg)+this._Porte_ON*this.Dormant_LD_ON()*this._Profile_Ext_Larg +(this._Octogone_ON+this._Hexagone_ON+this._Losange_ON)*this.bool(this.Dormant_LD_X0()>this.Dormant_BD_X3())*(this._Profile_Ext_Larg-this.Total_Haut()+this.Dormant_BD_Y2()+(this.Dormant_BD_X2()-this.Dormant_LD_X0())*Math.tan((90-this.Dormant_BD_Angle())*Math.PI/180)) + this.CintrageB_ON()*(this.Dormant_BM_Y0()+this.Dormant_B_RayonY2()*Math.sqrt(1-this.CintrageB_ON()*(this.Total_Larg2()-this.Dormant_LD_X0())*(this.Total_Larg2()-this.Dormant_LD_X0())/(this.Dormant_B_RayonX2()*this.Dormant_B_RayonX2()+1-this.CintrageB_ON()))));
    }

    Dormant_LD_Y10():number {
        if (this._Allege_ON * (1 - this.Crois_LD_All0_ON()) * this.bool(this.Dormant_LD_X0() < this.Dormant_Allege_X10()))
            return this.Total_Haut() - this.Allege_Haut();
        return this.Dormant_LD_ON() * ((1 - this.CintrageB_ON()) * this.Total_Haut() + (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.bool(this.Dormant_LD_X0() > this.Dormant_BD_X0()) * (this.Dormant_BD_X0() - this.Dormant_LD_X0()) * Math.tan((90 - this.Dormant_BD_Angle()) * Math.PI / 180) + this.CintrageB_ON() * (this.Dormant_BM_Y0() + this.Dormant_B_RayonY1() * Math.sqrt(1 - this.CintrageB_ON() * Math.pow(this.Total_Larg2() - this.Dormant_LD_X0(), 2) / (this.Dormant_B_RayonX1() * this.Dormant_B_RayonX1() + 1 - this.CintrageB_ON()))));
    }

    Dormant_LD_X2():number {


        return this.Dormant_LD_ON() * (this.Total_Larg() - this.LD_Larg());
    }

    Dormant_LD_Y2():number {
        if(this._Allege_ON * (1 - this.Crois_LD_All0_ON()) * this.bool(this.Dormant_LD_X2() < this.Dormant_Allege_X2()))
            return  this.Total_Haut() - this.Allege_Haut() - this._Profile_Int_Larg;

        return  (this.Dormant_LD_ON() * ((1 - this.CintrageB_ON()) * (this.Total_Haut() - this._Profile_Ext_Larg) + (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.bool(this.Dormant_LD_X2() > this.Dormant_BD_X3()) * (this._Profile_Ext_Larg - this.Total_Haut() + this.Dormant_BD_Y2() + (this.Dormant_BD_X2() - this.Dormant_LD_X2()) * Math.tan((90 - this.Dormant_BD_Angle()) * Math.PI / 180)) + this.CintrageB_ON() * (this.Dormant_BM_Y0() + this.Dormant_B_RayonY2() * Math.sqrt(1 - this.CintrageB_ON() * (this.Total_Larg2() - this.Dormant_LD_X2()) * (this.Total_Larg2() - this.Dormant_LD_X2()) / (this.Dormant_B_RayonX2() * this.Dormant_B_RayonX2() + 1 - this.CintrageB_ON())))));
    }

    Dormant_LD_Y20():number {

        if (this._Allege_ON * (1 - this.Crois_LD_All0_ON()) * this.bool(this.Dormant_LD_X2() < this.Dormant_Allege_X10())) {

            return this.Total_Haut() - this.Allege_Haut();
        }
        else {

            return this.Dormant_LD_ON() * ((1 - this.CintrageB_ON()) * this.Total_Haut() + (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.bool(this.Dormant_LD_X2() > this.Dormant_BD_X0()) * (this.Dormant_BD_X0() - this.Dormant_LD_X2()) * Math.tan((90 - this.Dormant_BD_Angle()) * Math.PI / 180) + this.CintrageB_ON() * (this.Dormant_BM_Y0() + this.Dormant_B_RayonY1() * Math.sqrt(1 - this.CintrageB_ON() * Math.pow(this.Total_Larg2() - this.Dormant_LD_X2(), 2) / (this.Dormant_B_RayonX1() * this.Dormant_B_RayonX1() + 1 - this.CintrageB_ON()))));
        }
    }

    Dormant_LD_X12():number {

        if (this._Allege_ON * (1 - this.Crois_LD_All0_ON()) * this.bool(this.Dormant_LD_X0() < this.Dormant_Allege_X2()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Allege_X2())) {

            return this.Dormant_Allege_X2();
        }
        else {

            return this.Dormant_LD_ON() * (this.Dormant_LD_X0() + this.Dormant_BD_ON() * this.bool(this.Dormant_LD_X0() < this.Dormant_BD_X3()) * this.bool(this.Dormant_LD_X2() > this.Dormant_BD_X3()) * (this.Dormant_BD_X3() - this.Dormant_LD_X0()));
        }
    }

    Dormant_LD_Y12():number {

        if (this._Allege_ON * (1 - this.Crois_LD_All0_ON()) * this.bool(this.Dormant_LD_X0() < this.Dormant_Allege_X2()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Allege_X2())) {

            return this.Dormant_LD_Y1();
        }
        else {

            return this.Dormant_LD_ON() * (this.Dormant_LD_Y1() + this.Dormant_BD_ON() * this.bool(this.Dormant_LD_X0() < this.Dormant_BD_X3()) * this.bool(this.Dormant_LD_X2() > this.Dormant_BD_X3()) * (this.Dormant_BD_Y3() - this.Dormant_LD_Y1()));
        }
    }

    Dormant_LD_X120():number {

        if (this._Allege_ON * (1 - this.Crois_LD_All0_ON()) * this.bool(this.Dormant_LD_X0() < this.Dormant_Allege_X1()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Allege_X1())) {

            return this.Dormant_Allege_X1();
        }
        else {

            return this.Dormant_LD_ON() * (this.Dormant_LD_X0() + this.Dormant_BD_ON() * this.bool(this.Dormant_LD_X0() < this.Dormant_BD_X0()) * this.bool(this.Dormant_LD_X2() > this.Dormant_BD_X0()) * (this.Dormant_BD_X0() - this.Dormant_LD_X0()));
        }
    }

    Dormant_LD_Y120():number {

        if (this._Allege_ON * (1 - this.Crois_LD_All0_ON()) * this.bool(this.Dormant_LD_X0() < this.Dormant_Allege_X1()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Allege_X1())) {

            return this.Dormant_LD_Y10();
        }
        else {

            return this.Dormant_LD_ON() * (this.Dormant_LD_Y10() + this.Dormant_BD_ON() * this.bool(this.Dormant_LD_X0() < this.Dormant_BD_X0()) * this.bool(this.Dormant_LD_X2() > this.Dormant_BD_X0()) * (this.Dormant_BD_Y0() - this.Dormant_LD_Y10()));
        }
    }

    Dormant_LD_Y3():number {

        if (this._Imposte_ON * (1 - this.Crois_LD_Imp0_ON()) * this.bool(this.Dormant_LD_X2() < this.Dormant_Imposte_X3()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X2())) {

            return this.Imposte_Haut() + this._Profile_Int_Larg;
        }
        else {

            return this.Dormant_LD_ON() * (this._Profile_Ext_Larg + (this.Dormant_HD_ON() * (1 - this.CintrageHH_ON())) * this.bool(this.Dormant_LD_X2() > this.Dormant_HD_X2()) * (this.Dormant_HD_Y3() - this._Profile_Ext_Larg - (this.Dormant_HD_X3() - this.Dormant_LD_X2()) * Math.tan((90 - this.Dormant_HD_Angle()) * Math.PI / 180)) + (this.Dormant_HG_ON() * (1 - this.CintrageHH_ON())) * this.bool(this.Dormant_LD_X2() < this.Dormant_HG_X3()) * (this.Dormant_HG_Y2() - this._Profile_Ext_Larg - (this.Dormant_LD_X2() - this.Dormant_HG_X2()) * Math.tan((90 - this.Dormant_HG_Angle()) * Math.PI / 180)) + this.CintrageHH_ON() * (-this._Profile_Ext_Larg + this.Dormant_H_RayonY1() * (1 - this.Gothiq_ON() * 0.134) - this.Dormant_H_RayonY2() * Math.sqrt(1 - this.Dormant_LD_ON() * this.CintrageHH_ON() * Math.pow(this.Total_Larg2() * (1 + this.Dormant_HG_ON() - this.Dormant_HD_ON() - this.Gothiq_ON()) - this.Dormant_LD_X2() * (1 - 2 * this.Dormant_HD_ON()), 2) / (this.Dormant_H_RayonX2() * this.Dormant_H_RayonX2() + 1 - this.CintrageHH_ON()))));
        }
    }

    Dormant_LD_Y30():number {

        if (this._Imposte_ON * (1 - this.Crois_LD_Imp0_ON()) * this.bool(this.Dormant_LD_X2() < this.Dormant_Imposte_X00()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X10())) {

            return this.Imposte_Haut();
        }
        else {

            return this.Dormant_LD_ON() * (this.Dormant_HD_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_LD_X2() > this.Dormant_HD_X1()) * (this.Dormant_HD_Y0() - (this.Dormant_HD_X0() - this.Dormant_LD_X2()) * Math.tan((90 - this.Dormant_HD_Angle()) * Math.PI / 180)) + this.Dormant_HG_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_LD_X2() < this.Dormant_HG_X0()) * (this.Dormant_HG_Y1() - (this.Dormant_LD_X2() - this.Dormant_HG_X1()) * Math.tan((90 - this.Dormant_HG_Angle()) * Math.PI / 180)) + this.CintrageHH_ON() * (this.Dormant_H_RayonY1() * (1 - this.Gothiq_ON() * 0.134 - Math.sqrt(1 - this.Dormant_LD_ON() * this.CintrageHH_ON() * Math.pow(this.Total_Larg2() * (1 + this.Dormant_HG_ON() - this.Dormant_HD_ON() - this.Gothiq_ON()) - this.Dormant_LD_X2() * (1 - 2 * this.Dormant_HD_ON()), 2) / (this.Dormant_H_RayonX1() * this.Dormant_H_RayonX1() + 1 - this.CintrageHH_ON())))));
        }
    }

    Dormant_LD_X03():number {

        if (this._Imposte_ON * (1 - this.Crois_LD_Imp0_ON()) * (this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X3()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X3()) + this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X2()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X2()))) {

            return this.Dormant_Imposte_X3() * this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X3()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X3()) + this.Dormant_Imposte_X2() * this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X2()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X2());
        }
        else {

            return this.Dormant_LD_ON() * (this.Dormant_LD_X0() + this.Dormant_HD_ON() * this.bool(this.Dormant_LD_X0() < this.Dormant_HD_X2()) * this.bool(this.Dormant_LD_X2() > this.Dormant_HD_X2()) * (this.Dormant_HD_X2() - this.Dormant_LD_X0()) + this.Dormant_HG_ON() * this.bool(this.Dormant_LD_X0() < this.Dormant_HG_X3()) * this.bool(this.Dormant_LD_X2() > this.Dormant_HG_X3()) * (this.Dormant_HG_X3() - this.Dormant_LD_X0()));
        }
    }


    Dormant_LD_Y03():number {

        if (this._Imposte_ON * (1 - this.Crois_LD_Imp0_ON()) * (this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X3()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X3()) + this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X2()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X2()))) {

            return this.Dormant_LD_Y0() * this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X3()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X3()) + this.Dormant_LD_Y3() * this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X2()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X2());
        }
        else {

            return this.Dormant_LD_ON() * (this.Dormant_LD_Y0() + this.Dormant_HD_ON() * this.bool(this.Dormant_LD_X0() < this.Dormant_HD_X2()) * this.bool(this.Dormant_LD_X2() > this.Dormant_HD_X2()) * (this.Dormant_HD_Y2() - this.Dormant_LD_Y0()) + this.Dormant_HG_ON() * this.bool(this.Dormant_LD_X0() < this.Dormant_HG_X3()) * this.bool(this.Dormant_LD_X2() > this.Dormant_HG_X3()) * (this.Dormant_HG_Y3() - this.Dormant_LD_Y0()));
        }
    }

    Dormant_LD_X030():number {

        if (this._Imposte_ON * (1 - this.Crois_LD_Imp0_ON()) * (this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X00()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X00()) + this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X10()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X10()))) {

            return this.Dormant_Imposte_X00() * this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X00()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X00()) + this.Dormant_Imposte_X10() * this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X10()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X10());
        }
        else {

            return this.Dormant_LD_ON() * (this.Dormant_LD_X0() + this.Dormant_HD_ON() * this.bool(this.Dormant_LD_X0() < this.Dormant_HD_X1()) * this.bool(this.Dormant_LD_X2() > this.Dormant_HD_X1()) * (this.Dormant_HD_X1() - this.Dormant_LD_X0()) + this.Dormant_HG_ON() * this.bool(this.Dormant_LD_X0() < this.Dormant_HG_X0()) * this.bool(this.Dormant_LD_X2() > this.Dormant_HG_X0()) * (this.Dormant_HG_X0() - this.Dormant_LD_X0()));
        }
    }

    Dormant_LD_Y030():number {

        if (this._Imposte_ON * (1 - this.Crois_LD_Imp0_ON()) * (this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X00()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X00()) + this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X10()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X10()))) {

            return this.Dormant_LD_Y00() * this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X00()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X00()) + this.Dormant_LD_Y30() * this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X10()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X10());
        }
        else {

            return this.Dormant_LD_ON() * (this.Dormant_LD_Y00() + this.Dormant_HD_ON() * this.bool(this.Dormant_LD_X0() < this.Dormant_HD_X1()) * this.bool(this.Dormant_LD_X2() > this.Dormant_HD_X1()) * (this.Dormant_HD_Y1() - this.Dormant_LD_Y00()) + this.Dormant_HG_ON() * this.bool(this.Dormant_LD_X0() < this.Dormant_HG_X0()) * this.bool(this.Dormant_LD_X2() > this.Dormant_HG_X0()) * (this.Dormant_HG_Y0() - this.Dormant_LD_Y00()));
        }
    }

    Dormant_LD_DY1():number {


        return this.Dormant_LD_Y1() - this.Dormant_LD_Y0()
    }

    Dormant_LD_LX1():number {


        return this.Dormant_LD_X12() - this.Dormant_LD_X0()
    }

    Dormant_LD_LY1():number {


        return Math.abs(this.Dormant_LD_Y12() - this.Dormant_LD_Y1())
    }

    Dormant_LD_LX2():number {


        return this.Dormant_LD_X2() - this.Dormant_LD_X12()
    }

    Dormant_LD_LY2():number {


        return this.Dormant_LD_Y2() - this.Dormant_LD_Y12()
    }

    Dormant_LD_DY2():number {


        return this.Dormant_LD_Y3() - this.Dormant_LD_Y2()
    }

    Dormant_LD_LX3():number {


        return this.Dormant_LD_X03() - this.Dormant_LD_X2()
    }

    Dormant_LD_LY3():number {


        return this.Dormant_LD_Y03() - this.Dormant_LD_Y3()
    }

    Dormant_LD_LX4():number {


        return this.Dormant_LD_X0() - this.Dormant_LD_X03()
    }

    Dormant_LD_LY4():number {


        return this.Dormant_LD_Y0() - this.Dormant_LD_Y03()
    }

    Dormant_LD_Trans_X():number {


        return this.Dormant_LD_X0()
    }

    Dormant_LD_Trans_Y():number {


        return this.Dormant_LD_Y0()
    }

    Dormant_LD_Rotate():number {


        return 0
    }

    Dormant_Imposte_ON():number {
     //   console.log("Imposte ON  "+ this._Imposte_ON * this.bool(this.Imposte_Haut() > (this._Imposte_min * this._Profile_Ext_Larg)));
        return  this._Imposte_ON * this.bool(this.Imposte_Haut() > (this._Imposte_min * this._Profile_Ext_Larg))
    }

    Dormant_Imposte_X0():number {
        return this.Dormant_Imposte_ON()*(this.Total_Larg_Profile() + this.Dormant_HD_ON()*(1-this.CintrageHH_ON())*this.bool(this.Imposte_Haut()<this.Dormant_HD_Y3())*(this.Dormant_HD_X2()-this.Total_Larg_Profile()+(this.Imposte_Haut()-this.Dormant_HD_Y2())*Math.tan(this.Dormant_HD_Angle()*Math.PI/180)) + (this.CintrageHH_ON()-this._Cercle_QuartG_ON-this._CercleH_QuartG_ON-this._Ellipse_QuartG_ON-this._EllipseH_QuartG_ON)*this.bool(this.Imposte_Haut()<(this.Dormant_HD_Y3()+this.Dormant_HM_Y3()))*(this._Profile_Ext_Larg-this.Total_Larg2()*(1+this._Cercle_QuartD_ON+this._CercleH_QuartD_ON+this.Gothiq_ON()+this._Ellipse_QuartD_ON+this._EllipseH_QuartD_ON)+this.Dormant_H_RayonX2()*Math.sqrt(1-this.CintrageHH_ON()*Math.pow(this.Dormant_H_RayonY1()*(1-0.134*this.Gothiq_ON())-this.Imposte_Haut(), 2)/(this.Dormant_H_RayonY2()*this.Dormant_H_RayonY2()+1-this.CintrageHH_ON()))))
    }

    Dormant_Imposte_X00():number {
        return this.Dormant_Imposte_ON() * (this.Total_Larg() + this.Dormant_HD_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Imposte_Haut() < this.Dormant_HD_Y0()) * (this.Dormant_HD_X1() - this.Total_Larg() + (this.Imposte_Haut() - this.Dormant_HD_Y1()) * Math.tan(this.Dormant_HD_Angle() * Math.PI / 180)) + (this.CintrageHH_ON() - this._Cercle_QuartG_ON - this._CercleH_QuartG_ON - this._Ellipse_QuartG_ON - this._EllipseH_QuartG_ON) * this.bool(this.Imposte_Haut() < (this.Dormant_HD_Y0() + this.Dormant_HM_Y0())) * (-this.Total_Larg2() * (1 + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) + this.Dormant_H_RayonX1() * Math.sqrt(1 - this.CintrageHH_ON() * Math.pow(this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Imposte_Haut(), 2) / (this.Dormant_H_RayonY1() * this.Dormant_H_RayonY1() + 1 - this.CintrageHH_ON()))))
    }

    Dormant_Imposte_Y0():number {
        return this.Dormant_Imposte_ON() * this.Imposte_Haut()
    }

    Dormant_Imposte_X1():number {
        return this.Dormant_Imposte_ON() * (this._Profile_Ext_Larg + this.Dormant_HG_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_Imposte_Y0() < this.Dormant_HG_Y2()) * (this.Dormant_HG_X3() - this._Profile_Ext_Larg - (this.Dormant_Imposte_Y0() - this.Dormant_HG_Y3()) * Math.tan((this.Dormant_HG_Angle()) * Math.PI / 180) ) + (this.CintrageHH_ON() - this._Cercle_QuartD_ON - this._CercleH_QuartD_ON - this._Ellipse_QuartD_ON - this._EllipseH_QuartD_ON) * this.bool(this.Dormant_Imposte_Y0() < (this.Dormant_HM_Y2() + this.Dormant_HG_Y2())) * (this.Total_Larg2() * (1 + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this.Gothiq_ON() + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) - this._Profile_Ext_Larg - this.Dormant_H_RayonX2() * Math.sqrt(1 - this.CintrageHH_ON() * this.bool(this.Dormant_Imposte_Y0() < (this.Dormant_HM_Y2() + this.Dormant_HG_Y2())) * Math.pow(this.Dormant_Imposte_ON() * this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Dormant_Imposte_Y0(), 2) / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - this.CintrageHH_ON()))) )
    }

    Dormant_Imposte_X10():number {
        return this.Dormant_Imposte_ON() * (this.Dormant_HG_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_Imposte_Y0() < this.Dormant_HG_Y1()) * (this.Dormant_HG_X0() - (this.Dormant_Imposte_Y0() - this.Dormant_HG_Y0()) * Math.tan((this.Dormant_HG_Angle()) * Math.PI / 180) ) + (this.CintrageHH_ON() - this._Cercle_QuartD_ON - this._CercleH_QuartD_ON - this._Ellipse_QuartD_ON - this._EllipseH_QuartD_ON) * this.bool(this.Dormant_Imposte_Y0() < (this.Dormant_HM_Y1() + this.Dormant_HG_Y1())) * (this.Total_Larg2() * (1 + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this.Gothiq_ON() + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) - this.Dormant_H_RayonX1() * Math.sqrt(1 - this.CintrageHH_ON() * this.bool(this.Dormant_Imposte_Y0() < (this.Dormant_HM_Y1() + this.Dormant_HG_Y1())) * Math.pow(this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Dormant_Imposte_Y0(), 2) / (this.Dormant_H_RayonY1() * this.Dormant_H_RayonY1() + 1 - this.CintrageHH_ON()))) )
    }

    Dormant_Imposte_X2():number {
        return this.Dormant_Imposte_ON() * (this._Profile_Ext_Larg + this.Dormant_HG_ON() * (1 - this.CintrageHH_ON()) * this.bool((this.Dormant_Imposte_Y0() + this._Profile_Int_Larg) < (this.Dormant_HG_Y2())) * (this.Dormant_HG_X3() - this._Profile_Ext_Larg - ((this.Dormant_Imposte_Y0() + this._Profile_Int_Larg) - this.Dormant_HG_Y3()) * Math.tan((this.Dormant_HG_Angle()) * Math.PI / 180)) + (this.CintrageHH_ON() - this._Cercle_QuartD_ON - this._CercleH_QuartD_ON - this._Ellipse_QuartD_ON - this._EllipseH_QuartD_ON) * this.bool((this.Dormant_Imposte_Y0() + this._Profile_Int_Larg) < (this.Dormant_HM_Y2() + this.Dormant_HG_Y2())) * (this.Total_Larg2() * (1 + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this.Gothiq_ON() + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) - this._Profile_Ext_Larg - this.Dormant_H_RayonX2() * Math.sqrt(1 - this.CintrageHH_ON() * this.bool((this.Dormant_Imposte_Y0() + this._Profile_Int_Larg) < (this.Dormant_HM_Y2() + this.Dormant_HG_Y2())) * Math.pow(this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - (this.Dormant_Imposte_Y0() + this._Profile_Int_Larg), 2) / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - this.CintrageHH_ON()))))
    }

    Dormant_Imposte_X20():number {
        return this.Dormant_Imposte_ON() * (this.Dormant_HG_ON() * (1 - this.CintrageHH_ON()) * this.bool((this.Dormant_Imposte_Y0() + this._Profile_Int_Larg) < (this.Dormant_HG_Y1())) * (this.Dormant_HG_X0() - ((this.Dormant_Imposte_Y0() + this._Profile_Int_Larg) - this.Dormant_HG_Y0()) * Math.tan((this.Dormant_HG_Angle()) * Math.PI / 180)) + (this.CintrageHH_ON() - this._Cercle_QuartD_ON - this._CercleH_QuartD_ON - this._Ellipse_QuartD_ON - this._EllipseH_QuartD_ON) * this.bool((this.Dormant_Imposte_Y0() + this._Profile_Int_Larg) < (this.Dormant_HM_Y1() + this.Dormant_HG_Y1())) * (this.Total_Larg2() * (1 + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this.Gothiq_ON() + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) - this.Dormant_H_RayonX1() * Math.sqrt(1 - this.CintrageHH_ON() * this.bool((this.Dormant_Imposte_Y0() + this._Profile_Int_Larg) < (this.Dormant_HM_Y1() + this.Dormant_HG_Y1())) * Math.pow(this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - (this.Dormant_Imposte_Y0() + this._Profile_Int_Larg), 2) / (this.Dormant_H_RayonY1() * this.Dormant_H_RayonY1() + 1 - this.CintrageHH_ON()))))
    }

    Dormant_Imposte_Y2():number {
        return this.Dormant_Imposte_ON() * (this.Dormant_Imposte_Y0() + this._Profile_Int_Larg)
    }

    Dormant_Imposte_X12():number {
        return this.Dormant_Imposte_ON() * (this.Dormant_Imposte_X2() + (this.Dormant_HG_ON() + this.CintrageHH_ON()) * this.bool(this.Dormant_Imposte_Y0() < (this.Dormant_HG_Y2() + this.CintrageHH_ON() * this.Dormant_HG_Y2())) * this.bool(this.Dormant_Imposte_Y2() > (this.Dormant_HG_Y2() + this.CintrageHH_ON() * this.Dormant_HG_Y2())) * (this.Dormant_HG_X2() + this.CintrageHH_ON() * this.Dormant_HM_X2() - this.Dormant_Imposte_X2()))
    }

    Dormant_Imposte_X120():number {
        return this.Dormant_Imposte_ON() * (this.Dormant_Imposte_X20() + (this.Dormant_HG_ON() + this.CintrageHH_ON()) * this.bool(this.Dormant_Imposte_Y0() < (this.Dormant_HG_Y1() + this.CintrageHH_ON() * this.Dormant_HM_Y1())) * this.bool(this.Dormant_Imposte_Y2() > (this.Dormant_HG_Y1() + this.CintrageHH_ON() * this.Dormant_HM_Y1())) * (this.Dormant_HG_X1() + this.CintrageHH_ON() * this.Dormant_HM_X1() - this.Dormant_Imposte_X20()))
    }

    Dormant_Imposte_Y12():number {
        return this.Dormant_Imposte_ON() * (this.Dormant_Imposte_Y2() + (this.Dormant_HG_ON() + this.CintrageHH_ON()) * this.bool(this.Dormant_Imposte_Y0() < (this.Dormant_HG_Y2() + this.CintrageHH_ON() * this.Dormant_HM_Y2())) * this.bool(this.Dormant_Imposte_Y2() > (this.Dormant_HG_Y2() + this.CintrageHH_ON() * this.Dormant_HM_Y2())) * (this.Dormant_HG_Y2() + this.CintrageHH_ON() * this.Dormant_HM_Y2() - this.Dormant_Imposte_Y2()) )
    }

    Dormant_Imposte_Y120():number {
        return this.Dormant_Imposte_ON() * (this.Dormant_Imposte_Y2() + (this.Dormant_HG_ON() + this.CintrageHH_ON()) * this.bool(this.Dormant_Imposte_Y0() < (this.Dormant_HG_Y1() + this.CintrageHH_ON() * this.Dormant_HM_Y1())) * this.bool(this.Dormant_Imposte_Y2() > (this.Dormant_HG_Y1() + this.CintrageHH_ON() * this.Dormant_HM_Y1())) * (this.Dormant_HG_Y1() + this.CintrageHH_ON() * this.Dormant_HM_Y1() - this.Dormant_Imposte_Y2()) )
    }

    Dormant_Imposte_X3():number {
        return this.Dormant_Imposte_ON() * ( this.Total_Larg_Profile() + this.Dormant_HD_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_Imposte_Y2() < this.Dormant_HD_Y3()) * (this.Dormant_HD_X2() - this.Total_Larg_Profile() + (this.Dormant_Imposte_Y2() - this.Dormant_HD_Y2()) * Math.tan(this.Dormant_HD_Angle() * Math.PI / 180)) + (this.CintrageHH_ON() - this._Cercle_QuartG_ON - this._CercleH_QuartG_ON - this._Ellipse_QuartG_ON - this._EllipseH_QuartG_ON) * this.bool(this.Dormant_Imposte_Y2() < (this.Dormant_HD_Y3() + this.Dormant_HM_Y3())) * (this._Profile_Ext_Larg - this.Total_Larg2() * (1 + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) + this.Dormant_H_RayonX2() * Math.sqrt(1 - this.CintrageHH_ON() * Math.pow(this.Dormant_Imposte_ON() * this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Dormant_Imposte_Y2(), 2) / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - this.CintrageHH_ON()))) )
    }

    Dormant_Imposte_X30():number {
        return this.Dormant_Imposte_ON() * ( this.Total_Larg() + this.Dormant_HD_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_Imposte_Y2() < this.Dormant_HD_Y0()) * (this.Dormant_HD_X1() - this.Total_Larg() + (this.Dormant_Imposte_Y2() - this.Dormant_HD_Y1()) * Math.tan(this.Dormant_HD_Angle() * Math.PI / 180)) + (this.CintrageHH_ON() - this._Cercle_QuartG_ON - this._CercleH_QuartG_ON - this._Ellipse_QuartG_ON - this._EllipseH_QuartG_ON) * this.bool(this.Dormant_Imposte_Y2() < (this.Dormant_HD_Y0() + this.Dormant_HM_Y0())) * (-this.Total_Larg2() * (1 + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) + this.Dormant_H_RayonX1() * Math.sqrt(1 - this.CintrageHH_ON() * Math.pow(this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Dormant_Imposte_Y2(), 2) / (this.Dormant_H_RayonY1() * this.Dormant_H_RayonY1() + 1 - this.CintrageHH_ON()))) )
    }

    Dormant_Imposte_X03():number {
        return this.Dormant_Imposte_ON() * (this.Dormant_Imposte_X3() + (this.Dormant_HD_ON() + this.CintrageHH_ON()) * this.bool(this.Dormant_Imposte_Y0() < (this.Dormant_HD_Y3() + this.CintrageHH_ON() * this.Dormant_HM_Y3())) * this.bool(this.Dormant_Imposte_Y2() > (this.Dormant_HD_Y3() + this.CintrageHH_ON() * this.Dormant_HM_Y3())) * (this.Dormant_HD_X3() + this.CintrageHH_ON() * this.Dormant_HM_X3() - this.Dormant_Imposte_X3()))
    }

    Dormant_Imposte_X030():number {
        return this.Dormant_Imposte_ON() * (this.Dormant_Imposte_X30() + (this.Dormant_HD_ON() + this.CintrageHH_ON()) * this.bool(this.Dormant_Imposte_Y0() < (this.Dormant_HD_Y0() + this.CintrageHH_ON() * this.Dormant_HM_Y0())) * this.bool(this.Dormant_Imposte_Y2() > (this.Dormant_HD_Y0() + this.CintrageHH_ON() * this.Dormant_HM_Y0())) * (this.Dormant_HD_X0() + this.CintrageHH_ON() * this.Dormant_HM_X0() - this.Dormant_Imposte_X30()))
    }

    Dormant_Imposte_Y03():number {
        return this.Dormant_Imposte_ON() * (this.Dormant_Imposte_Y2() + (this.Dormant_HD_ON() + this.CintrageHH_ON()) * this.bool(this.Dormant_Imposte_Y0() < (this.Dormant_HD_Y3() + this.CintrageHH_ON() * this.Dormant_HM_Y3())) * this.bool(this.Dormant_Imposte_Y2() > (this.Dormant_HD_Y3() + this.CintrageHH_ON() * this.Dormant_HM_Y3())) * (this.Dormant_HD_Y3() + this.CintrageHH_ON() * this.Dormant_HM_Y3() - this.Dormant_Imposte_Y2()))
    }

    Dormant_Imposte_Y030():number {
        return this.Dormant_Imposte_ON() * (this.Dormant_Imposte_Y2() + (this.Dormant_HD_ON() + this.CintrageHH_ON()) * this.bool(this.Dormant_Imposte_Y0() < (this.Dormant_HD_Y0() + this.CintrageHH_ON() * this.Dormant_HM_Y0())) * this.bool(this.Dormant_Imposte_Y2() > (this.Dormant_HD_Y0() + this.CintrageHH_ON() * this.Dormant_HM_Y0())) * (this.Dormant_HD_Y0() + this.CintrageHH_ON() * this.Dormant_HM_Y0() - this.Dormant_Imposte_Y2()))
    }

    Dormant_Imposte_DY1():number {
        return this.Dormant_Imposte_X0() - this.Dormant_Imposte_X1()
    }

    Dormant_Imposte_LX1():number {
        return this.Dormant_Imposte_Y12() - this.Dormant_Imposte_Y0()
    }

    Dormant_Imposte_LY1():number {
        return this.Dormant_Imposte_X1() - this.Dormant_Imposte_X12()
    }

    Dormant_Imposte_LX2():number {
        return this.Dormant_Imposte_Y2() - this.Dormant_Imposte_Y12()
    }

    Dormant_Imposte_LY2():number {
        return this.Dormant_Imposte_X2() - this.Dormant_Imposte_X12()
    }

    Dormant_Imposte_DY2():number {
        return this.Dormant_Imposte_X2() - this.Dormant_Imposte_X3()
    }

    Dormant_Imposte_LX3():number {
        return this.Dormant_Imposte_Y03() - this.Dormant_Imposte_Y2()
    }

    Dormant_Imposte_LY3():number {
        return this.Dormant_Imposte_X03() - this.Dormant_Imposte_X3()
    }

    Dormant_Imposte_LX4():number {
        return this.Dormant_Imposte_Y0() - this.Dormant_Imposte_Y03()
    }

    Dormant_Imposte_LY4():number {
        return this.Dormant_Imposte_X03() - this.Dormant_Imposte_X0()
    }

    Dormant_Imposte_Trans_X():number {
        return this.Dormant_Imposte_X0()
    }

    Dormant_Imposte_Trans_Y():number {
        return this.Dormant_Imposte_Y0()
    }

    Dormant_Imposte_Rotate():number {
        return 90 * this.Dormant_Imposte_ON()
    }

    Dormant_Allege_ON():number {
     //   console.log( "Allege ON   "+this._Allege_ON * this.bool(this.Allege_Haut() > (this._Allege_min * this._Profile_Ext_Larg)));
        return  this._Allege_ON * this.bool(this.Allege_Haut() > (this._Allege_min * this._Profile_Ext_Larg))
    }

    Dormant_Allege_X0():number {
        return this.Dormant_Allege_ON() * (this._Profile_Ext_Larg + this.Dormant_BG_ON() * this.bool((this.Total_Haut() - this.Allege_Haut()) > this.Dormant_BG_Y3()) * ( this.Dormant_BG_X2() - this._Profile_Ext_Larg - (this.Dormant_BG_Y2() - this.Total_Haut() + this.Allege_Haut()) * Math.tan((this.Dormant_BG_Angle()) * Math.PI / 180) ) + (this._ChanfreinG_ON + this._TriangleG_ON + this._TriangleG_H_ON + this._DemiOctogone_ON + this._DemiHexag_ON + this._Triangle_ON) * this.bool((this.Total_Haut() - this.Allege_Haut()) < this.Dormant_HG_Y2()) * (this.Dormant_HG_X2() - this._Profile_Ext_Larg + (this.Dormant_HG_Y2() - this.Dormant_Allege_Y0()) * Math.tan((this.Dormant_HG_Angle()) * Math.PI / 180) ) + this.CintrageB_ON() * this.bool((this.Total_Haut() - this.Allege_Haut()) > this.Dormant_BM_Y3()) * (this.Total_Larg2() - this._Profile_Ext_Larg - this.Dormant_B_RayonX2() * Math.sqrt(1 - this.CintrageB_ON() * this.Dormant_Allege_ON() * (this.Dormant_B_RayonY1() - this.Allege_Haut()) * (this.Dormant_B_RayonY1() - this.Allege_Haut()) / (this.Dormant_B_RayonY2() * this.Dormant_B_RayonY2() + 1 - this.CintrageB_ON()))) + (this._Cercle_Demi_ON + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this.Gothiq_ON() + this._Ellipse_Demi_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) * this.bool((this.Total_Haut() - this.Allege_Haut()) < (this.Dormant_HM_Y2() + this.Dormant_HG_Y2())) * (this.Total_Larg2() * (1 + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this.Gothiq_ON() + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) - this._Profile_Ext_Larg - this.Dormant_H_RayonX2() * Math.sqrt(1 - this.CintrageHH_ON() * this.bool((this.Total_Haut() - this.Allege_Haut()) < (this.Dormant_HM_Y2() + this.Dormant_HG_Y2())) * Math.pow(this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Total_Haut() + this.Allege_Haut(), 2) / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - this.CintrageHH_ON()))))
    }

    Dormant_Allege_X00():number {
        return this.Dormant_Allege_ON() * (this.Dormant_BG_ON() * this.bool((this.Total_Haut() - this.Allege_Haut()) > this.Dormant_BG_Y0()) * ( this.Dormant_BG_X1() - (this.Dormant_BG_Y1() - this.Total_Haut() + this.Allege_Haut()) * Math.tan((this.Dormant_BG_Angle()) * Math.PI / 180) ) + (this._ChanfreinG_ON + this._TriangleG_ON + this._TriangleG_H_ON + this._DemiOctogone_ON + this._DemiHexag_ON + this._Triangle_ON) * this.bool((this.Total_Haut() - this.Allege_Haut()) < this.Dormant_HG_Y1()) * (this.Dormant_HG_X1() + (this.Dormant_HG_Y1() - this.Dormant_Allege_Y0()) * Math.tan((this.Dormant_HG_Angle()) * Math.PI / 180) ) + this.CintrageB_ON() * this.bool((this.Total_Haut() - this.Allege_Haut()) > this.Dormant_BM_Y0()) * (this.Total_Larg2() - this.Dormant_B_RayonX1() * Math.sqrt(1 - this.CintrageB_ON() * this.Dormant_Allege_ON() * Math.pow(this.Dormant_B_RayonY1() - this.Allege_Haut(), 2) / (this.Dormant_B_RayonY1() * this.Dormant_B_RayonY1() + 1 - this.CintrageB_ON()))) + (this._Cercle_Demi_ON + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this.Gothiq_ON() + this._Ellipse_Demi_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) * this.bool((this.Total_Haut() - this.Allege_Haut()) < (this.Dormant_HM_Y1() + this.Dormant_HG_Y1())) * (this.Total_Larg2() * (1 + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this.Gothiq_ON() + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) - this.Dormant_H_RayonX1() * Math.sqrt(1 - this.CintrageHH_ON() * this.bool((this.Total_Haut() - this.Allege_Haut()) < (this.Dormant_HM_Y1() + this.Dormant_HG_Y1())) * Math.pow(this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Total_Haut() + this.Allege_Haut(), 2) / (this.Dormant_H_RayonY1() * this.Dormant_H_RayonY1() + 1 - this.CintrageHH_ON()))))
    }

    Dormant_Allege_Y0():number {
        return this.Dormant_Allege_ON() * (this.Total_Haut() - this.Allege_Haut())
    }

    Dormant_Allege_X1():number {
        return this.Dormant_Allege_ON() * (this.Total_Larg_Profile() + (this._ChanfreinD_ON + this._TriangleD_ON + this._TriangleD_H_ON) * this.bool(this.Dormant_Allege_Y0() < this.Dormant_HD_Y3()) * (this.Dormant_HD_X2() - this.Total_Larg_Profile() + (this.Dormant_Allege_Y0() - this.Dormant_HD_Y2()) * Math.tan((this.Dormant_HD_Angle()) * Math.PI / 180) ) + (this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON + this._Triangle_ON + this._Losange_ON + this.CintrageH_ON() + this.CintrageB_ON()) * (this._Profile_Ext_Larg - this.Dormant_Allege_X0()) + (this._Cercle_Demi_ON + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_Demi_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) * this.bool(this.Dormant_Allege_Y0() < (this.Dormant_HD_Y3() + this.Dormant_HM_Y3())) * (this._Profile_Ext_Larg - this.Total_Larg2() * (1 + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) + this.Dormant_H_RayonX2() * Math.sqrt(1 - (this._Cercle_Demi_ON + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_Demi_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) * Math.pow(this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Dormant_Allege_Y0(), 2) / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - this.CintrageHH_ON()))))
    }

    Dormant_Allege_X10():number {
        return this.Dormant_Allege_ON() * ( this.Total_Larg() + (this._ChanfreinD_ON + this._TriangleD_ON + this._TriangleD_H_ON) * this.bool(this.Dormant_Allege_Y0() < this.Dormant_HD_Y0()) * (this.Dormant_HD_X1() - this.Total_Larg() + (this.Dormant_Allege_Y0() - this.Dormant_HD_Y1()) * Math.tan((this.Dormant_HD_Angle()) * Math.PI / 180) ) - (this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON + this._Triangle_ON + this._Losange_ON + this.CintrageH_ON() + this.CintrageB_ON()) * this.Dormant_Allege_X00() + (this._Cercle_Demi_ON + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_Demi_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) * this.bool(this.Dormant_Allege_Y0() < (this.Dormant_HD_Y0() + this.Dormant_HM_Y0())) * (-this.Total_Larg2() * (1 + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) + this.Dormant_H_RayonX1() * Math.sqrt(1 - this.CintrageHH_ON() * this.bool(this.Dormant_Allege_Y0() < (this.Dormant_HD_Y0() + this.Dormant_HM_Y0())) * Math.pow(this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Dormant_Allege_Y0(), 2) / (this.Dormant_H_RayonY1() * this.Dormant_H_RayonY1() + 1 - this.CintrageHH_ON()))))
    }

    Dormant_Allege_X2():number {
        return this.Dormant_Allege_ON() * (this.Total_Larg_Profile() + this.Dormant_BD_ON() * this.bool((this.Dormant_Allege_Y0() - this._Profile_Int_Larg) > this.Dormant_BD_Y2()) * ( this.Dormant_BD_X3() - this.Total_Larg_Profile() + (this.Dormant_BD_Y3() - this.Dormant_Allege_Y0() + this._Profile_Int_Larg) * Math.tan((this.Dormant_BD_Angle()) * Math.PI / 180)) + (this._ChanfreinD_ON + this._TriangleD_ON + this._TriangleD_H_ON + this._DemiOctogone_ON + this._DemiHexag_ON + this._Triangle_ON) * this.bool((this.Dormant_Allege_Y0() - this._Profile_Int_Larg) < this.Dormant_HD_Y3()) * (this.Dormant_HD_X2() - this.Total_Larg_Profile() + (this.Dormant_Allege_Y0() - this._Profile_Int_Larg - this.Dormant_HD_Y2()) * Math.tan((this.Dormant_HD_Angle()) * Math.PI / 180) ) + this.CintrageB_ON() * this.bool((this.Dormant_Allege_Y0() - this._Profile_Int_Larg) > this.Dormant_BM_Y3()) * (this._Profile_Ext_Larg - this.Total_Larg2() + this.Dormant_B_RayonX2() * Math.sqrt(1 - this.CintrageB_ON() * Math.pow(this.Dormant_B_RayonY1() - this.Allege_Haut() - this._Profile_Int_Larg, 2) / (this.Dormant_B_RayonY2() * this.Dormant_B_RayonY2() + 1 - this.CintrageB_ON()))) + (this._Cercle_Demi_ON + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_Demi_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) * this.bool((this.Dormant_Allege_Y0() - this._Profile_Int_Larg) < (this.Dormant_HD_Y3() + this.Dormant_HM_Y3())) * (this._Profile_Ext_Larg - this.Total_Larg2() * (1 + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) + this.Dormant_H_RayonX2() * Math.sqrt(1 - this.CintrageHH_ON() * this.bool((this.Dormant_Allege_Y0() - this._Profile_Int_Larg) < (this.Dormant_HD_Y3() + this.Dormant_HM_Y3())) * Math.pow(this.Dormant_Allege_ON() * this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) + this._Profile_Int_Larg - this.Dormant_Allege_Y0(), 2) / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - this.CintrageHH_ON()))))
    }

    Dormant_Allege_X20():number {
        return this.Dormant_Allege_ON() * (this.Total_Larg() + this.Dormant_BD_ON() * this.bool((this.Dormant_Allege_Y0() - this._Profile_Int_Larg) > this.Dormant_BD_Y1()) * ( this.Dormant_BD_X0() - this.Total_Larg() + (this.Dormant_BD_Y0() - this.Dormant_Allege_Y0() + this._Profile_Int_Larg) * Math.tan((this.Dormant_BD_Angle()) * Math.PI / 180) ) + (this._ChanfreinD_ON + this._TriangleD_ON + this._TriangleD_H_ON + this._DemiOctogone_ON + this._DemiHexag_ON + this._Triangle_ON) * this.bool((this.Dormant_Allege_Y0() - this._Profile_Int_Larg) < this.Dormant_HD_Y0()) * (this.Dormant_HD_X1() - this.Total_Larg() + (this.Dormant_Allege_Y0() - this._Profile_Int_Larg - this.Dormant_HD_Y1()) * Math.tan((this.Dormant_HD_Angle()) * Math.PI / 180) ) - this.CintrageB_ON() * this.bool((this.Dormant_Allege_Y0() - this._Profile_Int_Larg) > this.Dormant_BM_Y0()) * (this.Total_Larg2() - this.Dormant_B_RayonX1() * Math.sqrt(1 - this.CintrageB_ON() * Math.pow(this.Dormant_B_RayonY1() - this.Allege_Haut() - this._Profile_Int_Larg, 2) / (this.Dormant_B_RayonY1() * this.Dormant_B_RayonY1() + 1 - this.CintrageB_ON()))) + (this._Cercle_Demi_ON + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_Demi_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) * this.bool((this.Dormant_Allege_Y0() - this._Profile_Int_Larg) < (this.Dormant_HD_Y0() + this.Dormant_HM_Y0())) * (-this.Total_Larg2() * (1 + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) + this.Dormant_H_RayonX1() * Math.sqrt(1 - this.CintrageHH_ON() * this.bool((this.Dormant_Allege_Y0() - this._Profile_Int_Larg) < (this.Dormant_HD_Y0() + this.Dormant_HM_Y0())) * Math.pow(this.Dormant_Allege_ON() * this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Dormant_Allege_Y0() + this._Profile_Int_Larg, 2) / (this.Dormant_H_RayonY1() * this.Dormant_H_RayonY1() + 1 - this.CintrageHH_ON()))))
    }

    Dormant_Allege_Y2():number {
        return this.Dormant_Allege_ON() * (this.Dormant_Allege_Y0() - this._Profile_Int_Larg)
    }

    Dormant_Allege_X12():number {
        return this.Dormant_Allege_ON() * (this.Dormant_Allege_X2() + this.Dormant_BD_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_BD_Y2()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_BD_Y2()) * (this.Dormant_BD_X2() - this.Dormant_Allege_X2()) + this.Dormant_HD_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_HD_Y3()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_HD_Y3()) * (this.Dormant_HD_X3() - this.Dormant_Allege_X2()))
    }

    Dormant_Allege_X120():number {
        return this.Dormant_Allege_ON() * (this.Dormant_Allege_X20() + this.Dormant_BD_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_BD_Y1()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_BD_Y1()) * (this.Dormant_BD_X1() - this.Dormant_Allege_X20()) + this.Dormant_HD_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_HD_Y0()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_HD_Y0()) * (this.Dormant_HD_X0() - this.Dormant_Allege_X20()))
    }

    Dormant_Allege_Y12():number {
        return this.Dormant_Allege_ON() * (this.Dormant_Allege_Y2() + this.Dormant_BD_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_BD_Y2()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_BD_Y2()) * (this.Dormant_BD_Y2() - this.Dormant_Allege_Y2()) + this.Dormant_HD_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_HD_Y3()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_HD_Y3()) * (this.Dormant_HD_Y3() - this.Dormant_Allege_Y2()))
    }

    Dormant_Allege_Y120():number {
        return this.Dormant_Allege_ON() * (this.Dormant_Allege_Y2() + this.Dormant_BD_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_BD_Y1()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_BD_Y1()) * (this.Dormant_BD_Y1() - this.Dormant_Allege_Y2()) + this.Dormant_HD_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_HD_Y0()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_HD_Y0()) * (this.Dormant_HD_Y0() - this.Dormant_Allege_Y2()))
    }

    Dormant_Allege_X3():number {
        return this.Dormant_Allege_ON() * ( this._Profile_Ext_Larg + (this._ChanfreinG_ON + this._TriangleG_ON + this._TriangleG_H_ON) * this.bool(this.Dormant_Allege_Y2() < this.Dormant_HG_Y2()) * (this.Dormant_HG_X2() - this._Profile_Ext_Larg + (this.Dormant_HG_Y2() - this.Dormant_Allege_Y2()) * Math.tan((this.Dormant_HG_Angle()) * Math.PI / 180) ) + (this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON + this._Triangle_ON + this._Losange_ON + this.CintrageH_ON() + this.CintrageB_ON()) * (this.Total_Larg_Profile() - this.Dormant_Allege_X2()) + (this._Cercle_Demi_ON + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this._Gothique_ON + this._Gothique_H_ON + this._Ellipse_Demi_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) * this.bool(this.Dormant_Allege_Y2() < (this.Dormant_HM_Y2() + this.Dormant_HG_Y2())) * (this.Total_Larg2() * (1 + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this.Gothiq_ON() + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) - this._Profile_Ext_Larg - this.Dormant_H_RayonX2() * Math.sqrt(1 - this.CintrageHH_ON() * this.bool(this.Dormant_Allege_Y2() < (this.Dormant_HM_Y2() + this.Dormant_HG_Y2())) * Math.pow(this.Dormant_Allege_ON() * this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Dormant_Allege_Y2(), 2) / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - this.CintrageHH_ON()))))
    }

    Dormant_Allege_X30():number {
        return this.Dormant_Allege_ON() * ((this._ChanfreinG_ON + this._TriangleG_ON + this._TriangleG_H_ON) * this.bool(this.Dormant_Allege_Y2() < this.Dormant_HG_Y1()) * (this.Dormant_HG_X1() + (this.Dormant_HG_Y1() - this.Dormant_Allege_Y2()) * Math.tan((this.Dormant_HG_Angle()) * Math.PI / 180) ) + (this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON + this._Triangle_ON + this._Losange_ON + this.CintrageH_ON() + this.CintrageB_ON()) * (this.Total_Larg() - this.Dormant_Allege_X20()) + (this._Cercle_Demi_ON + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this._Gothique_ON + this._Gothique_H_ON + this._Ellipse_Demi_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) * this.bool(this.Dormant_Allege_Y2() < (this.Dormant_HM_Y1() + this.Dormant_HG_Y1())) * (this.Total_Larg2() * (1 + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this.Gothiq_ON() + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) - this.Dormant_H_RayonX1() * Math.sqrt(1 - this.CintrageHH_ON() * this.bool(this.Dormant_Allege_Y2() < (this.Dormant_HM_Y1() + this.Dormant_HG_Y1())) * Math.pow(this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Dormant_Allege_Y2(), 2) / (this.Dormant_H_RayonY1() * this.Dormant_H_RayonY1() + 1 - this.CintrageHH_ON()))))
    }

    Dormant_Allege_X03():number {
        return this.Dormant_Allege_ON() * (this.Dormant_Allege_X3() + this.Dormant_BG_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_BG_Y3()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_BG_Y3()) * (this.Dormant_BG_X3() - this.Dormant_Allege_X3()) + this.Dormant_HG_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_HG_Y2()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_HG_Y2()) * (this.Dormant_HG_X2() - this.Dormant_Allege_X3()))
    }

    Dormant_Allege_X030():number {
        return this.Dormant_Allege_ON() * (this.Dormant_Allege_X30() + this.Dormant_BG_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_BG_Y0()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_BG_Y0()) * (this.Dormant_BG_X0() - this.Dormant_Allege_X30()) + this.Dormant_HG_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_HG_Y1()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_HG_Y1()) * (this.Dormant_HG_X1() - this.Dormant_Allege_X30()))
    }

    Dormant_Allege_Y03():number {
        return this.Dormant_Allege_ON() * (this.Dormant_Allege_Y2() + this.Dormant_BG_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_BG_Y3()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_BG_Y3()) * (this.Dormant_BG_Y3() - this.Dormant_Allege_Y2()) + this.Dormant_HG_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_HG_Y2()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_HG_Y2()) * (this.Dormant_HG_Y2() - this.Dormant_Allege_Y2()))
    }

    Dormant_Allege_Y030():number {
        return this.Dormant_Allege_ON() * (this.Dormant_Allege_Y2() + this.Dormant_BG_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_BG_Y0()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_BG_Y0()) * (this.Dormant_BG_Y0() - this.Dormant_Allege_Y2()) + this.Dormant_HG_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_HG_Y1()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_HG_Y1()) * (this.Dormant_HG_Y1() - this.Dormant_Allege_Y2()))
    }

    Dormant_Allege_DY1():number {
        return this.Dormant_Allege_X1() - this.Dormant_Allege_X0()
    }

    Dormant_Allege_LX1():number {
        return this.Dormant_Allege_Y0() - this.Dormant_Allege_Y12()
    }

    Dormant_Allege_LY1():number {
        return this.Dormant_Allege_X12() - this.Dormant_Allege_X1()
    }

    Dormant_Allege_LX2():number {
        return this.Dormant_Allege_Y12() - this.Dormant_Allege_Y2()
    }

    Dormant_Allege_LY2():number {
        return this.Dormant_Allege_X2() - this.Dormant_Allege_X12()
    }

    Dormant_Allege_DY2():number {
        return this.Dormant_Allege_X3() - this.Dormant_Allege_X2()
    }

    Dormant_Allege_LX3():number {
        return this.Dormant_Allege_Y2() - this.Dormant_Allege_Y03()
    }

    Dormant_Allege_LY3():number {
        return this.Dormant_Allege_X3() - this.Dormant_Allege_X03()
    }

    Dormant_Allege_LX4():number {
        return this.Dormant_Allege_Y03() - this.Dormant_Allege_Y0()
    }

    Dormant_Allege_LY4():number {
        return this.Dormant_Allege_X0() - this.Dormant_Allege_X03()
    }

    Dormant_Allege_Trans_X():number {
        return this.Dormant_Allege_X0()
    }

    Dormant_Allege_Trans_Y():number {
        return this.Dormant_Allege_Y0()
    }

    Dormant_Allege_Rotate():number {
        return -90 * this.Dormant_Allege_ON()
    }


    /**
     *
     * @returns {number}
     * @constructor
     */
    VueExt_ON():number {
        return this._VueExt_ONN
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    VueExt_X0():number {
        return this.VueExt_ON() * (this.Dormant_HM_ON() * this.Dormant_HM_X0() + (1 - this.Dormant_HM_ON()) * this.Dormant_HG_ON() * this.Dormant_HG_X0())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    VueExt_Y0():number {
        return this.VueExt_ON() * (this.Dormant_HM_ON() * this.Dormant_HM_Y0() + (1 - this.Dormant_HM_ON()) * this.Dormant_HG_ON() * this.Dormant_HG_Y0())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    VueExt_X1():number {
        return this.VueExt_ON() * (this.Dormant_HM_ON() * this.Dormant_HM_X1() + (1 - this.Dormant_HM_ON()) * this.Dormant_HG_ON() * this.Dormant_HG_X1())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    VueExt_Y1():number {
        return this.VueExt_ON() * (this.Dormant_HM_ON() * this.Dormant_HM_Y1() + (1 - this.Dormant_HM_ON()) * this.Dormant_HG_ON() * this.Dormant_HG_Y1())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    VueExt_X2():number {
        return this.VueExt_ON() * (this.Dormant_HG_ON() * this.Dormant_HG_X1() + (1 - this.Dormant_HG_ON()) * this.VueExt_X1())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    VueExt_Y2():number {
        return this.VueExt_ON() * (this.Dormant_HG_ON() * this.Dormant_HG_Y1() + (1 - this.Dormant_HG_ON()) * this.VueExt_Y1())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    VueExt_X3():number {
        return this.VueExt_ON() * (this.Dormant_GG_ON() * this.Dormant_GG_X1() + (1 - this.Dormant_GG_ON()) * this.VueExt_X2())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    VueExt_Y3():number {
        return this.VueExt_ON() * (this.Dormant_GG_ON() * this.Dormant_GG_Y1() + (1 - this.Dormant_GG_ON()) * this.VueExt_Y2())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    VueExt_X4():number {
        return this.VueExt_ON() * (this.Dormant_BG_ON() * this.Dormant_BG_X1() + (1 - this.Dormant_BG_ON()) * this.VueExt_X3())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    VueExt_Y4():number {
        return this.VueExt_ON() * (this.Dormant_BG_ON() * this.Dormant_BG_Y1() + (1 - this.Dormant_BG_ON()) * this.VueExt_Y3())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    VueExt_X5():number {
        return this.VueExt_ON() * (this.Dormant_BM_ON() * this.Dormant_BM_X1() + (1 - this.Dormant_BM_ON()) * this.VueExt_X4())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    VueExt_Y5():number {
        return this.VueExt_ON() * (this.Dormant_BM_ON() * this.Dormant_BM_Y1() + (1 - this.Dormant_BM_ON()) * this.VueExt_Y4())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    VueExt_X6():number {
        return this.VueExt_ON() * this.Total_Larg()
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    VueExt_Y6():number {
        return this.VueExt_ON() * ((1 - this._Porte_ON) * (this.Dormant_BD_ON() * this.Dormant_BD_Y1() + (1 - this.Dormant_BD_ON()) * this.VueExt_Y5()) + this._Porte_ON * this.Total_Haut())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    VueExt_X7():number {
        return this.VueExt_ON() * (this.Dormant_DD_ON() * this.Dormant_DD_X1() + (1 - this.Dormant_DD_ON()) * this.VueExt_X6())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    VueExt_Y7():number {
        return this.VueExt_ON() * (this.Dormant_DD_ON() * this.Dormant_DD_Y1() + (1 - this.Dormant_DD_ON()) * this.VueExt_Y6())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    VueExt_X8():number {
        return this.VueExt_ON() * (this.Dormant_HD_ON() * this.Dormant_HD_X1() + (1 - this.Dormant_HD_ON()) * this.VueExt_X7())
    }

    /**
     *
     * @returns {number}
     * @constructor
     */
    VueExt_Y8():number {
        return this.VueExt_ON() * (this.Dormant_HD_ON() * this.Dormant_HD_Y1() + (1 - this.Dormant_HD_ON()) * this.VueExt_Y7())
    }

    /**
     *
     * @param value
     */
    public setType2(value:number) {
        this.Allege_ON = value;
        this.Imposte_ON = value;
        this.LD_ON = value;
        this.LG_ON = value;

    }


    /**
     *
     * @param b
     * @returns {number}
     */
    bool(b:boolean):number {
        return b ? 1 : 0;
    }

    /**
     *
     * @returns {Dormant}
     */
    public getObject() {
        return this;
    }

    /**
     *
     * @returns {boolean}
     */
    public getSTatus():boolean {

        return (this.EllipseH_QuartD_ON + this.EllipseH_QuartG_ON + this.Ellipse_QuartG_ON + this.Ellipse_QuartD_ON > 0);

    }
}
