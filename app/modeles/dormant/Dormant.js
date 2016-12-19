System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Dormant;
    return {
        setters:[],
        execute: function() {
            /* ____ ___ __  __ _   _ _     _____ ___   __     _______
             / ___|_ _|  \/  | | | | |   | ____/ _ \  \ \   / |___ /
             \___ \| || |\/| | | | | |   |  _|| | | |  \ \ / /  |_ \
             ___) | || |  | | |_| | |___| |__| |_| |   \ V /  ___) |
             |____|___|_|  |_|\___/|_____|_____\___/     \_/  |____/
             */
            Dormant = (function () {
                function Dormant(_X0, _Y0, _Profile_Ext_Larg, _Profile_Int_Larg, _Profile_Ouv_Larg, _Parclose_Larg, _Centre_Larg, _Centre_Haut, _Rect_ON, _ChanfreinG_ON, _ChanfreinG_Pourcent_Haut, _ChanfreinG_Pourcent_Larg, _ChanfreinD_ON, _ChanfreinD_Pourcent_Haut, _ChanfreinD_Pourcent_Larg, _TriangleG_ON, _TriangleG_H_ON, _TriangleG_H_Pourcent_Haut, _TriangleD_ON, _TriangleD_H_ON, _TriangleD_H_Pourcent_Haut, _DemiOctogone_ON, _DemiOctogone_Pourcent_Haut, _DemiOctogone_Pourcent_Larg, _Octogone_ON, _Octogone_Pourcent_Haut, _Octogone_Pourcent_Larg, _DemiHexag_ON, _DemiHexagl_Pourcent_Haut, _Hexagone_ON, _Hexagone_Pourcent_Haut, _Triangle_ON, _Losange_ON, _Ovale_ON, _Ovale_Pourcent_Haut, _Rond_ON, _Cercle_Demi_ON, _CercleH_Demi_ON, _ArcH_ON, _Cercle_QuartG_ON, _CercleH_QuartG_ON, _Cercle_QuartD_ON, _CercleH_QuartD_ON, _Cintrage_Pourcent_Haut, _Gothique_ON, _Gothique_H_ON, _Gothique_H__Pourcent_Haut, _Ellipse_ON, _Ellipse_Demi_ON, _EllipseH_Demi_ON, _Ellipse_QuartG_ON, _EllipseH_QuartG_ON, _Ellipse_QuartD_ON, _EllipseH_QuartD_ON, _Ellipse_Pourcent_Haut, _Chapeau_ON, _Porte_ON, _Porte_Pourcent, _Imposte_ON, _Imposte_Pourcent, _Allege_ON, _Allege_Pourcent, _LG_ON, _LG_Pourcent, _LD_ON, _LD_Pourcent, _VueExt_ON, _Couleur_Fill, _Couleur_Stroke, _Stroke_width, _Stroke_opacity, _Couleur_Ombre, _Seuil_Stroke, _Seuil_Stroke_Width, _Couleur_Lumiere) {
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
                    this._Imposte_min = 1.00;
                    this._Allege_min = 1.00;
                    this._Crois_LG_Imp_ON = 1.00;
                    this._Crois_LG_All_ON = 1.00;
                    this._Crois_LD_Imp_ON = 1.00;
                    this._Crois_LD_All_ON = 1.00;
                    this._Crois_Imp_LG_ON = 1.00;
                    this._Crois_Imp_LD_ON = 1.00;
                    this._Crois_All_LG_ON = 1.00;
                    this._Crois_All_LD_ON = 1.00;
                }
                Object.defineProperty(Dormant.prototype, "hauteur", {
                    get: function () {
                        return this._hauteur;
                    },
                    set: function (value) {
                        this._hauteur = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "largeur", {
                    get: function () {
                        return this._largeur;
                    },
                    set: function (value) {
                        this._largeur = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Gothique_H__Pourcent_Haut", {
                    /*list of attributes END*/
                    /*list of Getter and Setter Begin*/
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Gothique_H__Pourcent_Haut;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Gothique_H__Pourcent_Haut = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "X0", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._X0;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._X0 = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Y0", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Y0;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Y0 = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Profile_Ext_Larg", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Profile_Ext_Larg;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Profile_Ext_Larg = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Parclose_Larg", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Parclose_Larg;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Parclose_Larg = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Centre_Larg", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Centre_Larg;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Centre_Larg = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Centre_Haut", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Centre_Haut;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Centre_Haut = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "ChanfreinG_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._ChanfreinG_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._ChanfreinG_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "ChanfreinD_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._ChanfreinD_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._ChanfreinD_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "TriangleG_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._TriangleG_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._TriangleG_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "TriangleG_H_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._TriangleG_H_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._TriangleG_H_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "DemiOctogone_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._DemiOctogone_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._DemiOctogone_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "DemiOctogone_Pourcent_Haut", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._DemiOctogone_Pourcent_Haut;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._DemiOctogone_Pourcent_Haut = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "DemiOctogone_Pourcent_Larg", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._DemiOctogone_Pourcent_Larg;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._DemiOctogone_Pourcent_Larg = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Octogone_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Octogone_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._Octogone_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Octogone_Pourcent_Haut", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Octogone_Pourcent_Haut;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Octogone_Pourcent_Haut = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "DemiHexagl_Pourcent_Haut", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._DemiHexagl_Pourcent_Haut;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._DemiHexagl_Pourcent_Haut = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Hexagone_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Hexagone_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._Hexagone_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Ovale_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Ovale_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._Ovale_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Ovale_Pourcent_Haut", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Ovale_Pourcent_Haut;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Ovale_Pourcent_Haut = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Rond_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Rond_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._Rond_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Cercle_Demi_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Cercle_Demi_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._Cercle_Demi_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "CercleH_Demi_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._CercleH_Demi_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._CercleH_Demi_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Cercle_QuartG_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Cercle_QuartG_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     *     this.setAllEX();
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._Cercle_QuartG_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "CercleH_QuartG_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._CercleH_QuartG_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._CercleH_QuartG_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Cercle_QuartD_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Cercle_QuartD_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._Cercle_QuartD_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "CercleH_QuartD_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._CercleH_QuartD_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._CercleH_QuartD_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Ellipse_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Ellipse_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._Ellipse_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Ellipse_Demi_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Ellipse_Demi_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._Ellipse_Demi_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "EllipseH_Demi_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._EllipseH_Demi_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._EllipseH_Demi_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Ellipse_QuartG_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Ellipse_QuartG_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._Ellipse_QuartG_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "EllipseH_QuartG_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._EllipseH_QuartG_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._EllipseH_QuartG_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Ellipse_QuartD_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Ellipse_QuartD_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._Ellipse_QuartD_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "EllipseH_QuartD_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._EllipseH_QuartD_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._EllipseH_QuartD_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Ellipse_Pourcent_Haut", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Ellipse_Pourcent_Haut;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Ellipse_Pourcent_Haut = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Chapeau_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Chapeau_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._Chapeau_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Stroke_width", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Stroke_width;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Stroke_width = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Stroke_opacity", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Stroke_opacity;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Stroke_opacity = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Gothique_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Gothique_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._Gothique_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Gothique_H_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Gothique_H_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._Gothique_H_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Allege_Pourcent", {
                    get: function () {
                        return this._Allege_Pourcent;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Allege_Pourcent = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "LG_Pourcent", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._LG_Pourcent;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._LG_Pourcent = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "LD_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._LD_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._LD_ON = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Couleur_Fill", {
                    /**
                     *
                     * @returns {string}
                     * @constructor
                     */
                    get: function () {
                        return this._Couleur_Fill;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Couleur_Fill = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Couleur_Ombre", {
                    /**
                     *
                     * @returns {string}
                     * @constructor
                     */
                    get: function () {
                        return this._Couleur_Ombre;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Couleur_Ombre = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Couleur_Lumiere", {
                    /**
                     *
                     * @returns {string}
                     * @constructor
                     */
                    get: function () {
                        return this._Couleur_Lumiere;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Couleur_Lumiere = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Profile_Int_Larg", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Profile_Int_Larg;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Profile_Int_Larg = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Profile_Ouv_Larg", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Profile_Ouv_Larg;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Profile_Ouv_Larg = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Rect_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Rect_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._Rect_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "ChanfreinG_Pourcent_Haut", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._ChanfreinG_Pourcent_Haut;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._ChanfreinG_Pourcent_Haut = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "ChanfreinG_Pourcent_Larg", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._ChanfreinG_Pourcent_Larg;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._ChanfreinG_Pourcent_Larg = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "ChanfreinD_Pourcent_Haut", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._ChanfreinD_Pourcent_Haut;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._ChanfreinD_Pourcent_Haut = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "ChanfreinD_Pourcent_Larg", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._ChanfreinD_Pourcent_Larg;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._ChanfreinD_Pourcent_Larg = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "TriangleG_H_Pourcent_Haut", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._TriangleG_H_Pourcent_Haut;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._TriangleG_H_Pourcent_Haut = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "TriangleD_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._TriangleD_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._TriangleD_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "TriangleD_H_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._TriangleD_H_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._TriangleD_H_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "TriangleD_H_Pourcent_Haut", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._TriangleD_H_Pourcent_Haut;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._TriangleD_H_Pourcent_Haut = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Octogone_Pourcent_Larg", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Octogone_Pourcent_Larg;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Octogone_Pourcent_Larg = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "DemiHexag_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._DemiHexag_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._DemiHexag_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Hexagone_Pourcent_Haut", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Hexagone_Pourcent_Haut;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Hexagone_Pourcent_Haut = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Triangle_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Triangle_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._Triangle_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Losange_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Losange_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this.setAllEX();
                        this._Losange_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "ArcH_ON", {
                    get: function () {
                        return this._ArcH_ON;
                    },
                    set: function (value) {
                        this.setAllEX();
                        this._ArcH_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Cintrage_Pourcent_Haut", {
                    get: function () {
                        return this._Cintrage_Pourcent_Haut;
                    },
                    set: function (value) {
                        this._Cintrage_Pourcent_Haut = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "VueExt_ONN", {
                    get: function () {
                        return this._VueExt_ONN;
                    },
                    set: function (value) {
                        this._VueExt_ONN = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Porte_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Porte_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Porte_ON = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Fenetre_ON", {
                    /**
                     *
                     * @returns {any}
                     * @constructor
                     */
                    get: function () {
                        return Math.abs(this._Porte_ON - 1);
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Porte_ON = Math.abs(1 - parseFloat(value));
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Porte_Pourcent", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Porte_Pourcent;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Porte_Pourcent = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Imposte_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Imposte_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Imposte_ON = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Imposte_Pourcent", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Imposte_Pourcent;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Imposte_Pourcent = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Allege_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Allege_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Allege_ON = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "LG_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._LG_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._LG_ON = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "LD_Pourcent", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._LD_Pourcent;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._LD_Pourcent = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Couleur_Stroke", {
                    /**
                     *
                     * @returns {string}
                     * @constructor
                     */
                    get: function () {
                        return this._Couleur_Stroke;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Couleur_Stroke = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Seuil_Stroke", {
                    /**
                     *
                     * @returns {string}
                     * @constructor
                     */
                    get: function () {
                        return this._Seuil_Stroke;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Seuil_Stroke = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Seuil_Stroke_Width", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Seuil_Stroke_Width;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Seuil_Stroke_Width = parseFloat(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Allege_min", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Allege_min;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Allege_min = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Imposte_min", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Imposte_min;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Imposte_min = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "LG_min", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._LG_min;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._LG_min = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "LD_min", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._LD_min;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._LD_min = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Crois_LG_Imp_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Crois_LG_Imp_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Crois_LG_Imp_ON = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Crois_LG_All_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Crois_LG_All_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Crois_LG_All_ON = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Crois_LD_Imp_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Crois_LD_Imp_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Crois_LD_Imp_ON = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Crois_LD_All_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Crois_LD_All_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Crois_LD_All_ON = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Crois_Imp_LG_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Crois_Imp_LG_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Crois_Imp_LG_ON = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Crois_Imp_LD_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Crois_Imp_LD_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Crois_Imp_LD_ON = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Crois_All_LG_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Crois_All_LG_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Crois_All_LG_ON = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dormant.prototype, "Crois_All_LD_ON", {
                    /**
                     *
                     * @returns {number}
                     * @constructor
                     */
                    get: function () {
                        return this._Crois_All_LD_ON;
                    },
                    /**
                     *
                     * @param value
                     * @constructor
                     */
                    set: function (value) {
                        this._Crois_All_LD_ON = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                /*list of Getter and Setter END*/
                /**
                 *
                 */
                Dormant.prototype.setAllEX = function () {
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
                };
                /**
                 *
                 * @param value
                 */
                Dormant.prototype.setdata = function (value) {
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
                };
                Dormant.prototype.CintrageH_ON = function () {
                    return this._CercleH_Demi_ON + this._ArcH_ON;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.CintrageH_Pourcent_Haut = function () {
                    return this._ArcH_ON * this._Cintrage_Pourcent_Haut + 0.5 * this._CercleH_Demi_ON;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Elliptique_ON = function () {
                    return this._Ellipse_Demi_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON + this._EllipseH_Demi_ON;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Gothiq_ON = function () {
                    return this._Gothique_ON + this._Gothique_H_ON;
                };
                /**
                 *
                 * @returns {any}
                 * @constructor
                 */
                Dormant.prototype.Circulaire_ON = function () {
                    return this._Cercle_Demi_ON + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.CintrageH_ON();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.CintrageB_ON = function () {
                    return this._Ovale_ON + this._Rond_ON + this._Ellipse_ON;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.CintrageHH_ON = function () {
                    return this.Elliptique_ON() + this.Gothiq_ON() + this.Circulaire_ON() + this.CintrageB_ON();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Imposte_Haut = function () {
                    return (1 - 0.5 * (this._Cercle_Demi_ON + this._Ellipse_ON + this._Ellipse_Demi_ON)) * this._Imposte_ON * this._Imposte_Pourcent * this._Centre_Haut;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Allege_Haut = function () {
                    return (1 - 0.5 * (this._Cercle_Demi_ON + this._Ellipse_ON + this._Ellipse_Demi_ON)) * this._Allege_ON * this._Allege_Pourcent * this._Centre_Haut;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.LG_Larg = function () {
                    return this._LG_ON * this._LG_Pourcent * this._Centre_Larg;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.LD_Larg = function () {
                    return this._LD_ON * this._LD_Pourcent * this._Centre_Larg;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Total_Larg = function () {
                    this._largeur = this._Centre_Larg + this.LG_Larg() + this.LD_Larg();
                    return this._Centre_Larg + this.LG_Larg() + this.LD_Larg();
                };
                Dormant.prototype.Viewbox_Larg = function () {
                    return this._Centre_Larg + this.LG_Larg() + this.LD_Larg() + 40;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Total_Haut = function () {
                    this._hauteur = (1 - this._Ovale_ON - this._Rond_ON - this._Cercle_Demi_ON - this._Cercle_QuartG_ON - this._Cercle_QuartD_ON - this.Gothiq_ON() - this._Ellipse_ON - this._Ellipse_Demi_ON - this._Ellipse_QuartG_ON - this._Ellipse_QuartD_ON) * (this._Centre_Haut + this.Imposte_Haut() + this.Allege_Haut()) + this._Porte_ON * this._Porte_Pourcent * this._Centre_Haut * (1 - this._Cercle_Demi_ON - this._Cercle_QuartG_ON - this._Cercle_QuartD_ON - this._Gothique_ON - this._Ellipse_Demi_ON - this._Ellipse_QuartG_ON - this._Ellipse_QuartD_ON) + ((1 + this._Ovale_Pourcent_Haut) * this._Ovale_ON + this._Rond_ON + 0.5 * this._Cercle_Demi_ON + this._Cercle_QuartG_ON + this._Cercle_QuartD_ON + this._Ellipse_Pourcent_Haut * (this._Ellipse_ON + 0.5 * this._Ellipse_Demi_ON + this._Ellipse_QuartG_ON + this._Ellipse_QuartD_ON) + 0.866 * this.Gothiq_ON() + this._Gothique_H__Pourcent_Haut * this._Gothique_H_ON) * this.Total_Larg();
                    return (1 - this._Ovale_ON - this._Rond_ON - this._Cercle_Demi_ON - this._Cercle_QuartG_ON - this._Cercle_QuartD_ON - this.Gothiq_ON() - this._Ellipse_ON - this._Ellipse_Demi_ON - this._Ellipse_QuartG_ON - this._Ellipse_QuartD_ON) * (this._Centre_Haut + this.Imposte_Haut() + this.Allege_Haut()) + this._Porte_ON * this._Porte_Pourcent * this._Centre_Haut * (1 - this._Cercle_Demi_ON - this._Cercle_QuartG_ON - this._Cercle_QuartD_ON - this._Gothique_ON - this._Ellipse_Demi_ON - this._Ellipse_QuartG_ON - this._Ellipse_QuartD_ON) + ((1 + this._Ovale_Pourcent_Haut) * this._Ovale_ON + this._Rond_ON + 0.5 * this._Cercle_Demi_ON + this._Cercle_QuartG_ON + this._Cercle_QuartD_ON + this._Ellipse_Pourcent_Haut * (this._Ellipse_ON + 0.5 * this._Ellipse_Demi_ON + this._Ellipse_QuartG_ON + this._Ellipse_QuartD_ON) + 0.866 * this.Gothiq_ON() + this._Gothique_H__Pourcent_Haut * this._Gothique_H_ON) * this.Total_Larg();
                };
                Dormant.prototype.Viewbox_Haut = function () {
                    return ((1 - this._Ovale_ON - this._Rond_ON - this._Cercle_Demi_ON - this._Cercle_QuartG_ON - this._Cercle_QuartD_ON - this.Gothiq_ON() - this._Ellipse_ON - this._Ellipse_Demi_ON - this._Ellipse_QuartG_ON - this._Ellipse_QuartD_ON) * (this._Centre_Haut + this.Imposte_Haut() + this.Allege_Haut()) + this._Porte_ON * this._Porte_Pourcent * this._Centre_Haut * (1 - this._Cercle_Demi_ON - this._Cercle_QuartG_ON - this._Cercle_QuartD_ON - this._Gothique_ON - this._Ellipse_Demi_ON - this._Ellipse_QuartG_ON - this._Ellipse_QuartD_ON) + ((1 + this._Ovale_Pourcent_Haut) * this._Ovale_ON + this._Rond_ON + 0.5 * this._Cercle_Demi_ON + this._Cercle_QuartG_ON + this._Cercle_QuartD_ON + this._Ellipse_Pourcent_Haut * (this._Ellipse_ON + 0.5 * this._Ellipse_Demi_ON + this._Ellipse_QuartG_ON + this._Ellipse_QuartD_ON) + 0.866 * this.Gothiq_ON() + this._Gothique_H__Pourcent_Haut * this._Gothique_H_ON) * this.Total_Larg()) + 140;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Total_Larg2 = function () {
                    return this.Total_Larg() / 2;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Total_Larg_Profile = function () {
                    return this.Total_Larg() - this._Profile_Ext_Larg;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.CintrageB_Haut = function () {
                    return 0.5 * (this._Ovale_ON + this._Rond_ON + this._Ellipse_ON * this._Ellipse_Pourcent_Haut) * this.Total_Larg();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.CintrageH_Haut = function () {
                    return (2 * (this._CercleH_QuartG_ON + this._CercleH_QuartD_ON) * this._Cintrage_Pourcent_Haut + this.CintrageH_ON() * this.CintrageH_Pourcent_Haut() + (this._EllipseH_QuartG_ON + this._EllipseH_QuartD_ON + 0.5 * this._EllipseH_Demi_ON) * this._Ellipse_Pourcent_Haut + this.Gothiq_ON() * 0.866) * this.Total_Larg() + (this._Cercle_Demi_ON + this._Cercle_QuartG_ON + this._Cercle_QuartD_ON + this._Ellipse_Demi_ON + this._Ellipse_QuartG_ON + this._Ellipse_QuartD_ON) * this.Total_Haut() + this.CintrageB_Haut();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_H_RayonX1 = function () {
                    return (this._Ellipse_Demi_ON + this._EllipseH_Demi_ON + this.CintrageB_ON()) * this.Total_Larg2() + (this._Cercle_QuartG_ON + this._Cercle_QuartD_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON + this.Gothiq_ON()) * this.Total_Larg() + 0.5 * (this._Cercle_Demi_ON + this.CintrageH_ON()) * (this.CintrageH_Haut() + this.Total_Larg2() * this.Total_Larg2() / (this.CintrageH_Haut() + 1 - this.Circulaire_ON())) + 0.5 * (this._CercleH_QuartG_ON + this._CercleH_QuartD_ON) * (this.CintrageH_Haut() + this.Total_Larg() * this.Total_Larg() / (this.CintrageH_Haut() + 1 - this.Circulaire_ON()));
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_H_RayonY1 = function () {
                    return (this.CintrageHH_ON() - (1 - this._Ellipse_Pourcent_Haut) * (this.Elliptique_ON() + this._Ellipse_ON)) * this.Dormant_H_RayonX1();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_H_RayonX2 = function () {
                    return this.CintrageHH_ON() * (this.Dormant_H_RayonX1() - this._Profile_Ext_Larg);
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_H_RayonY2 = function () {
                    return this.CintrageHH_ON() * (this.Dormant_H_RayonY1() - this._Profile_Ext_Larg);
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_B_RayonX1 = function () {
                    return this.CintrageB_ON() * this.Dormant_H_RayonX1();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_B_RayonY1 = function () {
                    return this.CintrageB_ON() * this.Dormant_H_RayonY1();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_B_RayonX2 = function () {
                    return this.CintrageB_ON() * this.Dormant_H_RayonX2();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_B_RayonY2 = function () {
                    return this.CintrageB_ON() * this.Dormant_H_RayonY2();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HG_Larg = function () {
                    return (this._TriangleG_ON + this._TriangleG_H_ON + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON + this._ChanfreinG_ON * this._ChanfreinG_Pourcent_Larg + this._DemiOctogone_ON * this._DemiOctogone_Pourcent_Larg + 0.5 * (this._DemiHexag_ON + this._Triangle_ON + this._Losange_ON + this._Hexagone_ON + this._Gothique_ON + this._Gothique_H_ON) + this._Octogone_ON * this._Octogone_Pourcent_Larg) * this.Total_Larg();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HG_Haut = function () {
                    return (this._ChanfreinG_ON * this._ChanfreinG_Pourcent_Haut + this._TriangleG_ON + this._TriangleG_H_ON * this._TriangleG_H_Pourcent_Haut + this._DemiOctogone_ON * this._DemiOctogone_Pourcent_Haut + this._Octogone_ON * this._Octogone_Pourcent_Haut + this._DemiHexag_ON * this._DemiHexagl_Pourcent_Haut + this._Hexagone_ON * this._Hexagone_Pourcent_Haut + this._Triangle_ON + 0.5 * this._Losange_ON + this._Cercle_QuartG_ON) * this.Total_Haut() + (this._CercleH_QuartG_ON + this._Gothique_ON + this._Gothique_H_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) * this.CintrageH_Haut();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HG_Angle = function () {
                    return Math.atan(this.Dormant_HG_Larg() / (this.Dormant_HG_Haut() + this.Dormant_HG_ON() - 1)) * 180 / Math.PI;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BG_Larg = function () {
                    return (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.Dormant_HG_Larg() + this._Porte_ON * this._LG_ON * (this.LG_Larg() + this._Profile_Int_Larg);
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BG_Haut = function () {
                    return (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.Dormant_HG_Haut();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BG_Angle = function () {
                    return (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.Dormant_HG_Angle() + this._Porte_ON * this._LG_ON * 90;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HD_Larg = function () {
                    return (this._TriangleD_ON + this._TriangleD_H_ON + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON + this._DemiOctogone_ON * this._DemiOctogone_Pourcent_Larg + this._ChanfreinD_ON * this._ChanfreinD_Pourcent_Larg + 0.5 * (this._DemiHexag_ON + this._Triangle_ON + this._Losange_ON + this._Hexagone_ON + this._Gothique_ON + this._Gothique_H_ON) + this._Octogone_ON * this._Octogone_Pourcent_Larg) * this.Total_Larg();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HD_Haut = function () {
                    return (this._Cercle_QuartD_ON + this._TriangleD_ON + this._TriangleD_H_ON * this._TriangleD_H_Pourcent_Haut + this._ChanfreinD_ON * this._ChanfreinD_Pourcent_Haut + this._DemiOctogone_ON * this._DemiOctogone_Pourcent_Haut + this._DemiHexag_ON * this._DemiHexagl_Pourcent_Haut + this._Triangle_ON + 0.5 * this._Losange_ON + this._Hexagone_ON * this._Hexagone_Pourcent_Haut + this._Octogone_ON * this._Octogone_Pourcent_Haut) * this.Total_Haut() + (this._CercleH_QuartD_ON + this._Gothique_ON + this._Gothique_H_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) * this.CintrageH_Haut();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HD_Angle = function () {
                    return Math.atan(this.Dormant_HD_Larg() / (this.Dormant_HD_Haut() + this.Dormant_HD_ON() - 1)) * 180 / Math.PI;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BD_Larg = function () {
                    return (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.Dormant_BG_Larg() + this._Porte_ON * this._LD_ON * (this.LD_Larg() + this._Profile_Int_Larg);
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BD_Haut = function () {
                    return (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.Dormant_BG_Haut();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BD_Angle = function () {
                    return (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.Dormant_HD_Angle() + this._Porte_ON * this._LD_ON * 90;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Seuil_X = function () {
                    return this._Porte_ON * (this._Profile_Ext_Larg + this._LG_ON * (this.LG_Larg() + this._Profile_Int_Larg - this._Profile_Ext_Larg));
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Seuil_Y = function () {
                    return this._Porte_ON * (this.Total_Haut() - 0.5 * this._Seuil_Stroke_Width);
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Seuil_D1 = function () {
                    return this._Porte_ON * (this.Total_Larg() - 2 * this._Profile_Ext_Larg + this._LG_ON * (this._Profile_Ext_Larg - this.LG_Larg() - this._Profile_Int_Larg) + this._LD_ON * (this._Profile_Ext_Larg - this.LD_Larg() - this._Profile_Int_Larg));
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HG_ON = function () {
                    return this._ChanfreinG_ON + this._TriangleG_ON + this._TriangleG_H_ON + this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON + this._Triangle_ON + this._Losange_ON + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this._Gothique_ON + this._Gothique_H_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HG_X0 = function () {
                    return this.Dormant_HG_ON() * this.Dormant_HG_Larg();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HG_Y0 = function () {
                    return 0;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HG_X1 = function () {
                    return 0;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HG_Y1 = function () {
                    return this.Dormant_HG_ON() * this.Dormant_HG_Haut();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HG_X2 = function () {
                    return this._Profile_Ext_Larg * (this._ChanfreinG_ON + this._TriangleG_H_ON + this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON + this._CercleH_QuartG_ON + this._Gothique_H_ON + this._EllipseH_QuartG_ON + (this._TriangleG_ON + this._Triangle_ON) * (Math.tan((90 + this.Dormant_HG_Angle()) * Math.PI / 360) * (1 - this._Porte_ON * (1 - this._LG_ON))) + (this._Losange_ON + (this._TriangleG_ON + this._Triangle_ON) * this._Porte_ON * (1 - this._LG_ON)) / Math.cos(this.Dormant_HG_Angle() * Math.PI / 180)) + (this._Cercle_QuartG_ON + this._Gothique_ON + this._Ellipse_QuartG_ON) * (this._Profile_Ext_Larg + this.Dormant_H_RayonX2() * (1 - Math.sqrt(1 - (this._Cercle_QuartG_ON + this._Gothique_ON + this._Ellipse_QuartG_ON) * this._Profile_Ext_Larg * this._Profile_Ext_Larg / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - this._Cercle_QuartG_ON - this._Gothique_ON - this._Ellipse_QuartG_ON))));
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HG_Y2 = function () {
                    return this.Dormant_HG_Y1() + this._Profile_Ext_Larg * ((this._TriangleG_H_ON + this._ChanfreinG_ON + this._DemiOctogone_ON + this._DemiHexag_ON + this._Hexagone_ON + this._Octogone_ON) * Math.tan(this.Dormant_HG_Angle() * Math.PI / 360) - (this._TriangleG_ON + this._Triangle_ON + this._Cercle_QuartG_ON + this._Gothique_ON + this._Ellipse_QuartG_ON) * (1 - this._Porte_ON * (1 - this._LG_ON))) - this._CercleH_QuartG_ON * (this.Dormant_HG_Y1() - (this.Dormant_H_RayonY1() - this.Dormant_H_RayonY2() * Math.sqrt(1 - this._CercleH_QuartG_ON * this.Total_Larg_Profile() * this.Total_Larg_Profile() / ((this.Dormant_H_RayonX2() * this.Dormant_H_RayonX2() + 1 - this._CercleH_QuartG_ON)))));
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HG_X3 = function () {
                    return this.Dormant_HG_X0() + this._Profile_Ext_Larg * ((this._ChanfreinG_ON + this._DemiOctogone_ON + this._Octogone_ON) * Math.tan((90 - this.Dormant_HG_Angle()) * Math.PI / 360) - this._TriangleG_ON - this._TriangleG_H_ON - this._Cercle_QuartG_ON - this._CercleH_QuartG_ON - this._Ellipse_QuartG_ON - this._EllipseH_QuartG_ON);
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HG_Y3 = function () {
                    return this._Profile_Ext_Larg * (this._ChanfreinG_ON + this._DemiOctogone_ON + this._Octogone_ON + (this._TriangleG_ON + this._TriangleG_H_ON) * Math.tan((180 - this.Dormant_HG_Angle()) * Math.PI / 360) + (this._DemiHexag_ON + this._Triangle_ON + this._Losange_ON + this._Hexagone_ON) / Math.sin((this.Dormant_HG_Angle() + 1 - this.Dormant_HG_ON()) * Math.PI / 180)) + (this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) * (this.Dormant_H_RayonY1() - this.Dormant_H_RayonY2() * Math.sqrt(1 - (this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) * this._Profile_Ext_Larg * this._Profile_Ext_Larg / (this.Dormant_H_RayonX2() * this.Dormant_H_RayonX2() + 1 - this._Cercle_QuartG_ON - this._CercleH_QuartG_ON - this._Ellipse_QuartG_ON - this._EllipseH_QuartG_ON))) + this.Gothiq_ON() * (this.Dormant_HG_Y1() - Math.sqrt(this.Dormant_H_RayonX2() * this.Dormant_H_RayonX2() - this.Gothiq_ON() * this.Dormant_HG_X3() * this.Dormant_HG_X3()));
                };
                /**
                 *
                 * @returns {any}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HG_DY1 = function () {
                    return Math.sqrt(this.Dormant_HG_X0() * this.Dormant_HG_X0() + this.Dormant_HG_Y1() * this.Dormant_HG_Y1());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HG_LX1 = function () {
                    return this.Dormant_HG_ON() * Math.sqrt((this.Dormant_HG_X2() - this.Dormant_HG_X0()) * (this.Dormant_HG_X2() - this.Dormant_HG_X0()) + this.Dormant_HG_Y2() * this.Dormant_HG_Y2() - Math.pow(this.Dormant_HG_X0() * (this.Dormant_HG_X0() - this.Dormant_HG_X2()) + this.Dormant_HG_Y1() * this.Dormant_HG_Y2(), 2) / (this.Dormant_HG_DY1() * this.Dormant_HG_DY1() + 1 - this.Dormant_HG_ON()));
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HG_LY1 = function () {
                    return -this.Dormant_HG_ON() * (this.Dormant_HG_DY1() - (this.Dormant_HG_X0() * (this.Dormant_HG_X0() - this.Dormant_HG_X2()) + this.Dormant_HG_Y1() * this.Dormant_HG_Y2()) / (this.Dormant_HG_DY1() + 1 - this.Dormant_HG_ON()));
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HG_DX2 = function () {
                    return (this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON + this.Gothiq_ON()) * (Math.abs(1 - this._Ellipse_Pourcent_Haut) / (1 - this._Ellipse_Pourcent_Haut) * Math.sqrt((this.Dormant_HG_X0() - this.Dormant_HG_X3()) * (this.Dormant_HG_X0() - this.Dormant_HG_X3()) + this.Dormant_HG_Y3() * this.Dormant_HG_Y3() - Math.pow(this.Dormant_HG_X0() * (this.Dormant_HG_X0() - this.Dormant_HG_X3()) + this.Dormant_HG_Y1() * this.Dormant_HG_Y3(), 2) / (this.Dormant_HG_DY1() * this.Dormant_HG_DY1() + 1 - this.Dormant_HG_ON())) - this.Dormant_HG_LX1());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HG_DY2 = function () {
                    return -Math.sqrt(Math.pow(this.Dormant_HG_X3() - this.Dormant_HG_X2(), 2) + Math.pow(this.Dormant_HG_Y2() - this.Dormant_HG_Y3(), 2));
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HG_LX2 = function () {
                    return -(this.Dormant_HG_LX1() + this.Dormant_HG_DX2());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HG_LY2 = function () {
                    return -this.Dormant_HG_DY2() - this.Dormant_HG_LY1() - this.Dormant_HG_DY1();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HG_Trans_X = function () {
                    return this.Dormant_HG_ON() * this.Dormant_HG_Larg();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HG_Trans_Y = function () {
                    return this.Dormant_HG_ON() * (this.Dormant_HG_Y1() - this.Dormant_HG_Haut());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HG_Rotate = function () {
                    return this.Dormant_HG_ON() * this.Dormant_HG_Angle();
                };
                /**
                 *
                 * @returns {any}
                 * @constructor
                 */
                Dormant.prototype.Dormant_GG_ON = function () {
                    return this._Rect_ON + this._TriangleG_H_ON + this._TriangleD_H_ON + this._ChanfreinG_ON + this._ChanfreinD_ON + this._TriangleD_ON + this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON + this._Ovale_ON + this._CercleH_QuartG_ON + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.CintrageH_ON() + this._Gothique_H_ON + this._EllipseH_QuartG_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON + this._EllipseH_Demi_ON;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_GG_X0 = function () {
                    return 0;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_GG_Y0 = function () {
                    return (this.Dormant_GG_ON() - this._Cercle_QuartD_ON - this._CercleH_QuartD_ON - this._Ellipse_QuartD_ON - this._EllipseH_QuartD_ON) * (this.CintrageH_Haut() + (1 - this._CercleH_QuartG_ON - this._Gothique_H_ON - this._Ellipse_QuartG_ON - this._EllipseH_QuartG_ON) * this.Dormant_HG_Haut());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_GG_X1 = function () {
                    return this.Dormant_GG_X0();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_GG_Y1 = function () {
                    return this.Dormant_GG_ON() * (this.Total_Haut() - this.CintrageB_Haut() - this._Octogone_ON * this.Dormant_BG_Haut() - this._Hexagone_ON * this.Dormant_HG_Y1());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_GG_X2 = function () {
                    return this.Dormant_GG_ON() * this._Profile_Ext_Larg;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_GG_Y2 = function () {
                    return this.Dormant_GG_ON() * (this.Dormant_GG_Y1() - this._Profile_Ext_Larg + (this._Octogone_ON + this._Hexagone_ON) * (this._Profile_Ext_Larg + this.Dormant_HG_LY1()) + (this._Ovale_ON + (1 - this._LG_ON) * this._Porte_ON) * this._Profile_Ext_Larg);
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_GG_X3 = function () {
                    return this.Dormant_GG_X2();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_GG_Y3 = function () {
                    return this.Dormant_GG_ON() * (this.Dormant_HG_ON() * this.Dormant_HG_Y2() + (this._Rect_ON + this._ChanfreinD_ON + (this._TriangleD_ON + this._TriangleD_H_ON) * Math.tan((180 - this.Dormant_HD_Angle()) * Math.PI / 360)) * this._Profile_Ext_Larg + (this._Ovale_ON + this._EllipseH_Demi_ON) * this.Dormant_GG_Y0() + this.CintrageH_ON() * (this.Dormant_H_RayonY1() - this.Dormant_H_RayonY2() * Math.sqrt(1 - this.CintrageH_ON() * Math.pow(this.Total_Larg2() - this._Profile_Ext_Larg, 2) / (this.Dormant_H_RayonX2() * this.Dormant_H_RayonX2() + 1 - this.CintrageH_ON()))) + (this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this._Gothique_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) * (this.Dormant_H_RayonY1() - this.Dormant_H_RayonY2() * Math.sqrt(1 - (this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this._Gothique_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) * this._Profile_Ext_Larg * this._Profile_Ext_Larg / (this.Dormant_H_RayonX2() * this.Dormant_H_RayonX2() + 1 - this.CintrageHH_ON()))));
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_GG_DY1 = function () {
                    return this.Dormant_GG_Y1() - this.Dormant_GG_Y0();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_GG_LX1 = function () {
                    return this.Dormant_GG_ON() * this._Profile_Ext_Larg;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_GG_LY1 = function () {
                    return this.Dormant_GG_Y2() - this.Dormant_GG_Y1();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_GG_DX2 = function () {
                    return 0;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_GG_DY2 = function () {
                    return this.Dormant_GG_Y3() - this.Dormant_GG_Y2();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_GG_LX2 = function () {
                    return -this.Dormant_GG_LX1();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_GG_LY2 = function () {
                    return this.Dormant_GG_Y0() - this.Dormant_GG_Y3();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_GG_Trans_X = function () {
                    return this.Dormant_GG_X0();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_GG_Trans_Y = function () {
                    return this.Dormant_GG_Y0();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_GG_Rotate = function () {
                    return 0;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BG_ON = function () {
                    return this._Octogone_ON + this._Hexagone_ON + this._Losange_ON + this._Porte_ON * this._LG_ON;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BG_X0 = function () {
                    return 0;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BG_Y0 = function () {
                    return this.Dormant_BG_ON() * (this.Total_Haut() - this.Dormant_BG_Haut());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BG_X1 = function () {
                    return this.Dormant_BG_ON() * this.Dormant_BG_Larg();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BG_Y1 = function () {
                    return this.Dormant_BG_ON() * this.Total_Haut();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BG_X2 = function () {
                    return (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.Dormant_HG_X3() + this._Porte_ON * this._LG_ON * (this.Dormant_BG_X1() - this._Profile_Int_Larg);
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BG_Y2 = function () {
                    return this.Dormant_BG_ON() * (this.Dormant_BG_Y1() - this.Dormant_HG_Y3() - this._Porte_ON * this._LG_ON * (this._Profile_Ext_Larg - this.Dormant_HG_Y3()));
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BG_X3 = function () {
                    return (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.Dormant_HG_X2() + this._Porte_ON * this._LG_ON * (this._Profile_Ext_Larg + this._TriangleG_ON * (this.Dormant_HG_X2() - this._Profile_Ext_Larg) - this._Profile_Ext_Larg * this._Triangle_ON * (1 - Math.tan((90 + this.Dormant_HG_Angle()) * Math.PI / 360)) + (this._Cercle_Demi_ON + this._Gothique_ON + this._Ellipse_Demi_ON) * (this.Dormant_H_RayonX2() * (1 - Math.sqrt(1 - (this._Cercle_Demi_ON + this._Gothique_ON + this._Ellipse_Demi_ON) * this._Profile_Ext_Larg * this._Profile_Ext_Larg / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - this._Cercle_Demi_ON - this._Gothique_ON - this._Ellipse_Demi_ON)))));
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BG_Y3 = function () {
                    return this.Dormant_BG_Y1() - (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.Dormant_HG_Y2() - this._Porte_ON * this._LG_ON * this._Profile_Ext_Larg;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BG_DY1 = function () {
                    return this.Dormant_BG_ON() * Math.sqrt(this.Dormant_BG_X1() * this.Dormant_BG_X1() + this.Dormant_BG_Haut() * this.Dormant_BG_Haut());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BG_LX1 = function () {
                    return this.Dormant_BG_ON() * this._Profile_Ext_Larg;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BG_LY1 = function () {
                    return (this.Dormant_BG_ON() - this._Hexagone_ON - this._Losange_ON) * (1 - 2 * this._Porte_ON * this._LG_ON) * (this.Dormant_BG_X1() - this.Dormant_BG_X2()) + (this._Hexagone_ON + this._Losange_ON) * this.Dormant_HG_LY2();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BG_DX2 = function () {
                    return 0;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BG_DY2 = function () {
                    return -Math.sqrt(Math.pow(this.Dormant_BG_X2() - this.Dormant_BG_X3(), 2) + Math.pow(this.Dormant_BG_Y2() - this.Dormant_BG_Y3(), 2));
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BG_LX2 = function () {
                    return -this.Dormant_BG_LX1();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BG_LY2 = function () {
                    return -this.Dormant_BG_DY1() - this.Dormant_BG_LY1() - this.Dormant_BG_DY2();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BG_Trans_X = function () {
                    return 0;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BG_Trans_Y = function () {
                    return this.Dormant_BG_ON() * (this.Total_Haut() - (1 - this._Porte_ON * this._LG_ON) * this.Dormant_BG_Haut());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BG_Rotate = function () {
                    return this.Dormant_BG_ON() * (360 - this.Dormant_BG_Angle());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BM_ON = function () {
                    return (1 - this._Hexagone_ON - this._Losange_ON) * (1 - this._Porte_ON);
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BM_X0 = function () {
                    return this._Octogone_ON * this.Dormant_BG_Larg();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BM_Y0 = function () {
                    return this.Dormant_BM_ON() * (this.Total_Haut() - this.CintrageB_Haut());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BM_X1 = function () {
                    return this.Dormant_BM_ON() * (this.Total_Larg() - this._Octogone_ON * this.Dormant_BD_Larg());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BM_Y1 = function () {
                    return this.Dormant_BM_Y0();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BM_X2 = function () {
                    return this.Dormant_BM_ON() * (this.Total_Larg_Profile() - (this._Cercle_Demi_ON + this._Cercle_QuartD_ON + this._Gothique_ON + this._Ellipse_Demi_ON + this._Ellipse_QuartD_ON) * (this.Dormant_H_RayonX2() * (1 - Math.sqrt(1 - (this._Cercle_Demi_ON + this._Cercle_QuartD_ON + this._Gothique_ON + this._Ellipse_Demi_ON + this._Ellipse_QuartD_ON) * this._Profile_Ext_Larg * this._Profile_Ext_Larg / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - (this._Cercle_Demi_ON + this._Cercle_QuartD_ON + this._Gothique_ON + this._Ellipse_Demi_ON + this._Ellipse_QuartD_ON))))) + this._Octogone_ON * (this._Profile_Ext_Larg - this.Dormant_BG_X2()) + this._Triangle_ON * (this._Profile_Ext_Larg - this.Dormant_HG_X2()) + this._TriangleD_ON * this._Profile_Ext_Larg * (1 - Math.tan((90 + this.Dormant_HD_Angle()) * Math.PI / 360)));
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BM_Y2 = function () {
                    return (this.Dormant_BM_ON() - this.CintrageB_ON()) * (this.Total_Haut() - this._Profile_Ext_Larg) + this.CintrageB_ON() * this.Dormant_BM_Y1();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BM_X3 = function () {
                    return this.Dormant_BM_ON() * (this.Dormant_BM_ON() * this._Profile_Ext_Larg + this._Octogone_ON * (this.Dormant_BG_X2() - this._Profile_Ext_Larg) + (this._TriangleG_ON + this._Triangle_ON + this._Cercle_QuartG_ON + this._Ellipse_QuartG_ON) * (this.Dormant_HG_X2() - this._Profile_Ext_Larg) + (this._Cercle_Demi_ON + this._Gothique_ON + this._Ellipse_Demi_ON) * (this.Dormant_H_RayonX2() * (1 - Math.sqrt(1 - (this._Cercle_Demi_ON + this._Gothique_ON + this._Ellipse_Demi_ON) * this._Profile_Ext_Larg * this._Profile_Ext_Larg / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - (this._Cercle_Demi_ON + this._Gothique_ON + this._Ellipse_Demi_ON))))));
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BM_Y3 = function () {
                    return this.Dormant_BM_Y2();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BM_DY1 = function () {
                    return this.Dormant_BM_X1() - this.Dormant_BM_X0();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BM_LX1 = function () {
                    return (this.Dormant_BM_ON() - this.CintrageB_ON()) * this._Profile_Ext_Larg;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BM_LY1 = function () {
                    return this.Dormant_BM_X2() - this.Dormant_BM_X1();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BM_DX2 = function () {
                    return 0;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BM_DY2 = function () {
                    return this.Dormant_BM_X3() - this.Dormant_BM_X2();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BM_LX2 = function () {
                    return -this.Dormant_BM_LX1();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BM_LY2 = function () {
                    return -this.Dormant_BM_DY2() - this.Dormant_BM_LY1() - this.Dormant_BM_DY1();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BM_Trans_X = function () {
                    return this.Dormant_BM_X0();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BM_Trans_Y = function () {
                    return this.Dormant_BM_ON() * (this.Total_Haut() - this.CintrageB_ON() * this.CintrageB_Haut());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BM_Rotate = function () {
                    return 270 * this.Dormant_BM_ON();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BD_ON = function () {
                    return this._Octogone_ON + this._Hexagone_ON + this._Losange_ON + this._Porte_ON * this._LD_ON;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BD_X0 = function () {
                    return this.Dormant_BD_ON() * (this.Total_Larg() - this.Dormant_BD_Larg());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BD_Y0 = function () {
                    return this.Dormant_BD_ON() * this.Total_Haut();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BD_X1 = function () {
                    return this.Dormant_BD_ON() * this.Total_Larg();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BD_Y1 = function () {
                    return this.Dormant_BD_ON() * (this.Total_Haut() - this.Dormant_BD_Haut()) + this._Porte_ON * this._LD_ON * this.Dormant_BD_Haut();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BD_X2 = function () {
                    return this.Dormant_BD_ON() * (this.Dormant_BD_X1() - this._Profile_Ext_Larg - this._Losange_ON * (this.Dormant_BG_X3() - this._Profile_Ext_Larg) + this._Porte_ON * this._LD_ON * ((this._TriangleD_ON + this._Triangle_ON) * this._Profile_Ext_Larg * (1 - Math.tan((90 + this.Dormant_HD_Angle()) * Math.PI / 360)) - (this._Cercle_Demi_ON + this._Cercle_QuartD_ON + this._Gothique_ON + this._Ellipse_Demi_ON + this._Ellipse_QuartD_ON) * (this.Dormant_H_RayonX2() * (1 - Math.sqrt(1 - (this._Cercle_Demi_ON + this._Cercle_QuartD_ON + this._Gothique_ON + this._Ellipse_Demi_ON + this._Ellipse_QuartD_ON) * this._Profile_Ext_Larg * this._Profile_Ext_Larg / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - this._Cercle_Demi_ON - this._Cercle_QuartD_ON - this._Gothique_ON - this._Ellipse_Demi_ON - this._Ellipse_QuartD_ON))))));
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BD_Y2 = function () {
                    return this.Dormant_BD_ON() * (this.Dormant_BG_Y3() + this._Porte_ON * this._LD_ON * (this.Total_Haut() - this._Profile_Ext_Larg - this.Dormant_BG_Y3()));
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BD_X3 = function () {
                    return this.Dormant_BD_ON() * (this.Total_Larg() - this.Dormant_BG_X2()) + this._Porte_ON * this._LD_ON * (this.Dormant_BG_X2() - this.LD_Larg());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BD_Y3 = function () {
                    return this.Dormant_BD_ON() * this.Dormant_BG_Y2() + this._Porte_ON * this._LD_ON * (this.Dormant_BD_Y2() - this.Dormant_BG_Y2());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BD_DY1 = function () {
                    return this.Dormant_BD_ON() * this.Dormant_BG_DY1() + this._Porte_ON * this._LD_ON * (this.Dormant_BD_X1() - this.Dormant_BD_X0() - this.Dormant_BG_DY1());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BD_LX1 = function () {
                    return this.Dormant_BD_ON() * this._Profile_Ext_Larg;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BD_LY1 = function () {
                    return (this.Dormant_BD_ON() - this._TriangleD_ON - this._Triangle_ON - this._Losange_ON - this._Cercle_Demi_ON - this._Cercle_QuartD_ON - this._Gothique_ON - this._Ellipse_Demi_ON - this._Ellipse_QuartD_ON) * (this.Dormant_BD_Y2() - this.Dormant_BD_Y1()) + (this._TriangleD_ON + this._Triangle_ON + this._Cercle_Demi_ON + this._Cercle_QuartD_ON + this._Gothique_ON + this._Ellipse_Demi_ON + this._Ellipse_QuartD_ON) * (this.Dormant_BD_X2() - this.Dormant_BD_X1()) + this._Losange_ON * this.Dormant_BG_LY2();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BD_DX2 = function () {
                    return 0;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BD_DY2 = function () {
                    return this.Dormant_BD_ON() * this.Dormant_BG_DY2() + this._Porte_ON * this._LD_ON * (this.Dormant_BD_X3() - this.Dormant_BD_X2() - this.Dormant_BG_DY2());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BD_LX2 = function () {
                    return -this.Dormant_BD_LX1();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BD_LY2 = function () {
                    return -this.Dormant_BD_DY2() - this.Dormant_BD_LY1() - this.Dormant_BD_DY1();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BD_Trans_X = function () {
                    return this.Dormant_BD_ON() * (this.Total_Larg() - this.Dormant_BD_Larg());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BD_Trans_Y = function () {
                    return this.Dormant_BD_ON() * this.Total_Haut();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_BD_Rotate = function () {
                    return this.Dormant_BD_ON() * (180 + this.Dormant_BD_Angle());
                };
                /**
                 *
                 * @returns {any}
                 * @constructor
                 */
                Dormant.prototype.Dormant_DD_ON = function () {
                    return this._Rect_ON + this._ChanfreinG_ON + this._ChanfreinD_ON + this._TriangleG_ON + this._TriangleG_H_ON + this._TriangleD_H_ON + this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON + this._Ovale_ON + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this._CercleH_QuartD_ON + this.CintrageH_ON() + this._Gothique_H_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON + this._EllipseH_QuartD_ON + this._EllipseH_Demi_ON;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_DD_X0 = function () {
                    return this.Dormant_DD_ON() * this.Total_Larg();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_DD_Y0 = function () {
                    return this.Dormant_DD_ON() * (this.Total_Haut() - this.CintrageB_Haut() - this._Octogone_ON * this.Dormant_BD_Haut() - this._Hexagone_ON * this.Dormant_GG_Y0());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_DD_X1 = function () {
                    return this.Dormant_DD_X0();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_DD_Y1 = function () {
                    return this.Dormant_DD_ON() * ((this._Ovale_ON + this._CercleH_QuartD_ON + this.CintrageH_ON() + this._Gothique_H_ON + this._EllipseH_QuartD_ON + this._EllipseH_Demi_ON) * this.CintrageH_Haut() + (this._ChanfreinD_ON + this._TriangleD_H_ON + this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON) * this.Dormant_HD_Haut());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_DD_X2 = function () {
                    return this.Dormant_DD_ON() * this.Total_Larg_Profile();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_DD_Y2 = function () {
                    return (this._Rect_ON + this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON + this._Ovale_ON + this.CintrageH_ON() + this._Gothique_H_ON + this._EllipseH_Demi_ON) * this.Dormant_GG_Y3() + this._ChanfreinG_ON * this._Profile_Ext_Larg + this._EllipseH_QuartD_ON * this.Dormant_DD_Y1() + (this._TriangleG_ON + this._TriangleG_H_ON + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) * this.Dormant_HG_Y3() + (this._ChanfreinD_ON + this._TriangleD_H_ON) * (this.Dormant_DD_Y1() + this._Profile_Ext_Larg * Math.tan(this.Dormant_HD_Angle() * Math.PI / 360)) + this._CercleH_QuartD_ON * ((this.Dormant_H_RayonY1() - this.Dormant_H_RayonY2() * Math.sqrt(1 - this._CercleH_QuartD_ON * this.Total_Larg_Profile() * this.Total_Larg_Profile() / ((this.Dormant_H_RayonX2() * this.Dormant_H_RayonX2() + 1 - this._CercleH_QuartD_ON)))));
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_DD_X3 = function () {
                    return this.Dormant_DD_X2();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_DD_Y3 = function () {
                    return (this.Dormant_DD_ON() - this._Octogone_ON - this._Hexagone_ON) * this.Dormant_BM_Y2() + (this._Octogone_ON + this._Hexagone_ON) * this.Dormant_BD_Y2() + this.Dormant_DD_ON() * this._Porte_ON * (this.Total_Haut() - this._LD_ON * this._Profile_Ext_Larg);
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_DD_DY1 = function () {
                    return this.Dormant_DD_Y0() - this.Dormant_DD_Y1();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_DD_LX1 = function () {
                    return this.Dormant_DD_ON() * this._Profile_Ext_Larg;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_DD_LY1 = function () {
                    return this.Dormant_DD_Y1() - this.Dormant_DD_Y2();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_DD_DX2 = function () {
                    return 0;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_DD_DY2 = function () {
                    return this.Dormant_DD_Y2() - this.Dormant_DD_Y3();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_DD_LX2 = function () {
                    return -this.Dormant_DD_LX1();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_DD_LY2 = function () {
                    return this.Dormant_DD_Y3() - this.Dormant_DD_Y0();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_DD_Trans_X = function () {
                    return this.Dormant_DD_ON() * this.Total_Larg();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_DD_Trans_Y = function () {
                    return this.Dormant_DD_Y0();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_DD_Rotate = function () {
                    return this.Dormant_DD_ON() * 180;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HD_ON = function () {
                    return this._ChanfreinD_ON + this._TriangleD_ON + this._TriangleD_H_ON + this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON + this._Triangle_ON + this._Losange_ON + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this._Gothique_ON + this._Gothique_H_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HD_X0 = function () {
                    return this.Dormant_HD_ON() * this.Total_Larg();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HD_Y0 = function () {
                    return this.Dormant_HD_ON() * this.Dormant_HD_Haut();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HD_X1 = function () {
                    return this.Dormant_HD_ON() * (this.Total_Larg() - this.Dormant_HD_Larg());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HD_Y1 = function () {
                    return 0;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HD_X2 = function () {
                    return this.Dormant_HD_X1() + this._Profile_Ext_Larg * (this._TriangleD_ON + this._TriangleD_H_ON + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON - (this._ChanfreinD_ON + this._DemiOctogone_ON + this._Octogone_ON) * Math.tan((90 - this.Dormant_HD_Angle()) * Math.PI / 360));
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HD_Y2 = function () {
                    return (this._ChanfreinD_ON + this._DemiOctogone_ON + this._Octogone_ON + (this._TriangleD_ON + this._TriangleD_H_ON) * Math.tan((180 - this.Dormant_HD_Angle()) * Math.PI / 360)) * this._Profile_Ext_Larg + (this._DemiHexag_ON + this._Triangle_ON + this._Losange_ON + this._Hexagone_ON + this._Gothique_ON + this._Gothique_H_ON) * this.Dormant_HG_Y3() + (this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) * this.Dormant_GG_Y3();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HD_X3 = function () {
                    return (this._ChanfreinD_ON + this._TriangleD_H_ON + this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON + this._CercleH_QuartD_ON + this._Gothique_H_ON + this._EllipseH_QuartD_ON) * this.Total_Larg_Profile() + this._Losange_ON * (this.Total_Larg() - this.Dormant_HG_X2()) + (this._TriangleD_ON + this._Triangle_ON + this._Cercle_QuartD_ON + this._Gothique_ON + this._Ellipse_QuartD_ON) * ((1 - this._Porte_ON) * this.Dormant_BM_X2() + this._Porte_ON * this._LD_ON * this.Dormant_BD_X2() + this._Porte_ON * (1 - this._LD_ON) * (this.Total_Larg() - (this._TriangleD_ON + this._Triangle_ON) * this._Profile_Ext_Larg / Math.cos(this.Dormant_HD_Angle() * Math.PI / 180) - (this._Cercle_QuartD_ON + this._Gothique_ON + this._Ellipse_QuartD_ON) * (this._Profile_Ext_Larg + this.Dormant_H_RayonX2() * (1 - Math.sqrt(1 - (this._Cercle_QuartD_ON + this._Gothique_ON + this._Ellipse_QuartD_ON) * this._Profile_Ext_Larg * this._Profile_Ext_Larg / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - this._Cercle_QuartD_ON - this._Gothique_ON - this._Ellipse_QuartD_ON))))));
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HD_Y3 = function () {
                    return this.Dormant_HD_Haut() - this._Profile_Ext_Larg * ((this._TriangleD_ON + this._Cercle_QuartD_ON + this._Triangle_ON + this._Gothique_ON + this._Ellipse_QuartD_ON) * (1 - this._Porte_ON * (1 - this._LD_ON)) - (this._ChanfreinD_ON + this._TriangleD_H_ON + this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON) * Math.tan(this.Dormant_HD_Angle() * Math.PI / 360)) + this._CercleH_QuartD_ON * (this.Dormant_DD_Y2() - this.Dormant_HD_Haut());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HD_DY1 = function () {
                    return this.Dormant_HD_ON() * Math.sqrt(this.Dormant_HD_Larg() * this.Dormant_HD_Larg() + this.Dormant_HD_Haut() * this.Dormant_HD_Haut());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HD_LX1 = function () {
                    return Math.abs(1 - this._Ellipse_Pourcent_Haut) / (1 - this._Ellipse_Pourcent_Haut) * Math.sqrt(Math.pow(this.Dormant_HD_X0() - this.Dormant_HD_X2(), 2) + Math.pow(this.Dormant_HD_Y0() - this.Dormant_HD_Y2(), 2) - Math.pow(this.Dormant_HD_X0() * (this.Dormant_HD_X0() - this.Dormant_HD_X1() - this.Dormant_HD_X2()) + this.Dormant_HD_X1() * this.Dormant_HD_X2() + this.Dormant_HD_Y0() * (this.Dormant_HD_Y0() - this.Dormant_HD_Y2()), 2) / (this.Dormant_HD_DY1() * this.Dormant_HD_DY1() + 1 - this.Dormant_HD_ON()));
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HD_LY1 = function () {
                    return this.Dormant_HD_DY1() - (this.Dormant_HD_X0() * (this.Dormant_HD_X0() - this.Dormant_HD_X1() - this.Dormant_HD_X2()) + this.Dormant_HD_X1() * this.Dormant_HD_X2() + this.Dormant_HD_Y0() * (this.Dormant_HD_Y0() - this.Dormant_HD_Y2())) / (this.Dormant_HD_DY1() + 1 - this.Dormant_HD_ON());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HD_DX2 = function () {
                    return (this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON + this.Gothiq_ON()) * (Math.sqrt(Math.pow(this.Dormant_HD_X0() - this.Dormant_HD_X3(), 2) + Math.pow(this.Dormant_HD_Y0() - this.Dormant_HD_Y3(), 2) - Math.pow(this.Dormant_HD_X0() * (this.Dormant_HD_X0() - this.Dormant_HD_X1() - this.Dormant_HD_X3()) + this.Dormant_HD_X1() * this.Dormant_HD_X3() + this.Dormant_HD_Y0() * (this.Dormant_HD_Y0() - this.Dormant_HD_Y3()), 2) / (this.Dormant_HD_DY1() * this.Dormant_HD_DY1() + 1 - this.Dormant_HD_ON())) - this.Dormant_HD_LX1());
                };
                /**
                 *
                 * @returns {any}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HD_DY2 = function () {
                    return Math.sqrt(Math.pow(this.Dormant_HD_X3() - this.Dormant_HD_X2(), 2) + Math.pow(this.Dormant_HD_Y3() - this.Dormant_HD_Y2(), 2));
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HD_LX2 = function () {
                    return -this.Dormant_HD_LX1() - this.Dormant_HD_DX2();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HD_LY2 = function () {
                    return this.Dormant_HD_DY2() + this.Dormant_HD_LY1() - this.Dormant_HD_DY1();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HD_Trans_X = function () {
                    return this.Dormant_HD_ON() * this.Total_Larg();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HD_Trans_Y = function () {
                    return this.Dormant_HD_ON() * this.Dormant_HD_ON() * this.Dormant_HD_Haut();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HD_Rotate = function () {
                    return this.Dormant_HD_ON() * (180 - this.Dormant_HD_Angle());
                };
                /**
                 *
                 * @returns {any}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HM_ON = function () {
                    return this._Rect_ON + this._ChanfreinG_ON + this._ChanfreinD_ON + this._DemiOctogone_ON + this._Octogone_ON + this._Ovale_ON + this._Rond_ON + this._Cercle_Demi_ON + this.CintrageH_ON() + this._Ellipse_ON + this._Ellipse_Demi_ON + this._EllipseH_Demi_ON;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HM_X0 = function () {
                    return this.Dormant_HM_ON() * (this.Total_Larg() - (this._ChanfreinD_ON + this._DemiOctogone_ON + this._Octogone_ON) * this.Dormant_HD_Larg());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HM_Y0 = function () {
                    return (this._Ovale_ON + this._Rond_ON + this._Cercle_Demi_ON + this.CintrageH_ON() + this._Ellipse_ON + this._Ellipse_Demi_ON + this._EllipseH_Demi_ON) * this.CintrageH_Haut();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HM_X1 = function () {
                    return (this._ChanfreinG_ON + this._DemiOctogone_ON + this._Octogone_ON) * this.Dormant_HG_Larg();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HM_Y1 = function () {
                    return this.Dormant_HM_Y0();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HM_X2 = function () {
                    return this.Dormant_HM_ON() * ((this._Rect_ON + this._ChanfreinD_ON + this._Ovale_ON + this._Rond_ON + this.CintrageH_ON() + this._Ellipse_ON + this._EllipseH_Demi_ON) * this._Profile_Ext_Larg + (this._ChanfreinG_ON + this._DemiOctogone_ON + this._Octogone_ON) * this.Dormant_HG_X3() + (this._Cercle_Demi_ON + this._Gothique_ON + this._Ellipse_Demi_ON) * (this.Dormant_BM_X3() + this.Dormant_BG_X3() + this._Porte_ON * (1 - this._LG_ON) * this._Profile_Ext_Larg));
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HM_Y2 = function () {
                    return (this._Rect_ON + this._ChanfreinG_ON + this._ChanfreinD_ON + this._DemiOctogone_ON + this._Octogone_ON) * this._Profile_Ext_Larg + (this._Ovale_ON + this._Rond_ON + this._Ellipse_ON + this._EllipseH_Demi_ON) * this.Dormant_HM_Y1() + this.CintrageH_ON() * this.Dormant_GG_Y3() + (this._Cercle_Demi_ON + this._Ellipse_Demi_ON) * (this.Dormant_HM_Y1() + ((this._Porte_ON * (1 - this._LG_ON) - 1) * this._Profile_Ext_Larg));
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HM_X3 = function () {
                    return (this._Rect_ON + this._ChanfreinG_ON + this._Ovale_ON + this._Rond_ON + this._Cercle_Demi_ON + this.CintrageH_ON() + this._Ellipse_ON + this._Ellipse_Demi_ON + this._EllipseH_Demi_ON) * this.Total_Larg_Profile() + (this._ChanfreinD_ON + this._DemiOctogone_ON + this._Octogone_ON) * this.Dormant_HD_X2() - (this._Cercle_Demi_ON + this._Ellipse_Demi_ON) * (1 - this._Porte_ON * (1 - this._LD_ON)) * this.Dormant_H_RayonX2() * (1 - Math.sqrt(1 - (this._Cercle_Demi_ON + this._Ellipse_Demi_ON) * this._Profile_Ext_Larg * this._Profile_Ext_Larg / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - (this._Cercle_Demi_ON + this._Ellipse_Demi_ON))));
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HM_Y3 = function () {
                    return this.Dormant_HM_Y0() + (this._Rect_ON + this._ChanfreinG_ON + this._ChanfreinD_ON + this._DemiOctogone_ON + this._Octogone_ON) * this._Profile_Ext_Larg - this._Profile_Ext_Larg * (this._Cercle_Demi_ON + this._Ellipse_Demi_ON) * (1 + this._Porte_ON * (this._LD_ON - 1)) + (this.CintrageH_ON() + this._EllipseH_Demi_ON) * (this.Dormant_DD_Y2() - this.Dormant_HM_Y0());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HM_DY1 = function () {
                    return this.Dormant_HM_ON() * (this.Total_Larg() - this.Dormant_HG_X0() - this.Dormant_HD_ON() * this.Dormant_HD_Larg());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HM_LX1 = function () {
                    return this.Dormant_HM_Y2() - this.Dormant_HM_Y1();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HM_LY1 = function () {
                    return -(this._Rect_ON + this._ChanfreinD_ON + this._Ovale_ON + this._Rond_ON + this.CintrageH_ON() + this._Ellipse_ON + this._EllipseH_Demi_ON) * this._Profile_Ext_Larg + (this._ChanfreinG_ON + this._DemiOctogone_ON + this._Octogone_ON) * this.Dormant_HG_LY2() - (this._Cercle_Demi_ON + this._Ellipse_Demi_ON) * this.Dormant_HM_X2();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HM_DX2 = function () {
                    return (this._Cercle_Demi_ON + this._Ellipse_Demi_ON) * this._Porte_ON * ((this._LG_ON - 1) * this._LD_ON * this._Profile_Ext_Larg + this._LG_ON * (this._LD_ON - 1) * this.Dormant_HM_LX1());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HM_DY2 = function () {
                    return this.Dormant_HM_X2() - this.Dormant_HM_X3();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HM_LX2 = function () {
                    return -this.Dormant_HM_LX1() - this.Dormant_HM_DX2();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HM_LY2 = function () {
                    return -this.Dormant_HM_DY1() - this.Dormant_HM_LY1() - this.Dormant_HM_DY2();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HM_Trans_X = function () {
                    return this.Dormant_HM_ON() * (this.Total_Larg() - (this._DemiOctogone_ON + this._Octogone_ON) * this.Dormant_HG_Larg() - this._ChanfreinD_ON * this.Dormant_HD_Larg());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HM_Trans_Y = function () {
                    return this.Dormant_HM_ON() * this.CintrageHH_ON() * this.CintrageH_Haut();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_HM_Rotate = function () {
                    return this.Dormant_HM_ON() * 90;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.Dormant_LG_ON = function () {
                    return this._LG_ON * this.bool(this.LG_Larg() > ((1 - this._Crois_LG_All_ON) * this.bool(this.Dormant_HG_Y2() > (this.Total_Haut() - this.Allege_Haut() - this._Profile_Int_Larg)) * this.Dormant_Allege_X3() + this._LG_min * this._Profile_Ext_Larg));
                };
                Dormant.prototype.Crois_LG_Imp0_ON = function () {
                    return this._Crois_LG_Imp_ON * this.bool(this.LG_Larg() > (this.Dormant_Imposte_X2() + this._LG_min * this._Profile_Ext_Larg));
                };
                Dormant.prototype.Crois_LG_All0_ON = function () {
                    return this._Crois_LG_All_ON * this.bool(this.LG_Larg() > (this.Dormant_Allege_X3() + this._LG_min * this._Profile_Ext_Larg));
                };
                Dormant.prototype.Dormant_LG_X0 = function () {
                    return this.Dormant_LG_ON() * (this.LG_Larg() + this._Profile_Int_Larg);
                };
                Dormant.prototype.Dormant_LG_Y0 = function () {
                    if ((this._Allege_ON * (1 - this.Crois_LG_All0_ON()) * this.bool(this.Dormant_LG_X0() > this.Dormant_Allege_X3()))) {
                        return this.Total_Haut() - this.Allege_Haut() - this._Profile_Int_Larg;
                    }
                    else {
                        return this.Dormant_LG_ON() * ((1 - this.CintrageB_ON()) * (this.Total_Haut() - this._Profile_Ext_Larg) + this._Porte_ON * this.Dormant_LG_ON() * this._Profile_Ext_Larg + (this.Dormant_BG_ON() - this._Porte_ON * this.Dormant_LG_ON()) * this.bool(this.Dormant_LG_X0() < this.Dormant_BG_X2()) * (this._Profile_Ext_Larg - this.Total_Haut() + this.Dormant_BG_Y3() + (this.Dormant_LG_X0() - this.Dormant_BG_X3()) * Math.tan((90 - this.Dormant_BG_Angle()) * Math.PI / 180)) + this.CintrageB_ON() * (this.Dormant_BM_Y1() + this.Dormant_B_RayonY2() * Math.sqrt(1 - this.Dormant_LG_ON() * this.CintrageB_ON() * (this.Total_Larg2() - this.Dormant_LG_X0()) * (this.Total_Larg2() - this.Dormant_LG_X0()) / (this.Dormant_B_RayonX2() * this.Dormant_B_RayonX2() + 1 - this.CintrageB_ON()))));
                    }
                };
                Dormant.prototype.Dormant_LG_Y00 = function () {
                    if (this._Allege_ON * (1 - this.Crois_LG_All0_ON()) * this.bool(this.Dormant_LG_X0() > this.Dormant_Allege_X00())) {
                        return this.Total_Haut() - this.Allege_Haut();
                    }
                    else {
                        return this.Dormant_LG_ON() * ((1 - this.CintrageB_ON()) * this.Total_Haut() + (this.Dormant_BG_ON() - this._Porte_ON * this.Dormant_LG_ON()) * this.bool(this.Dormant_LG_X0() < this.Dormant_BG_X1()) * (this.Dormant_BG_Y0() - this.Total_Haut() + (this.Dormant_LG_X0() - this.Dormant_BG_X0()) * Math.tan((90 - this.Dormant_BG_Angle()) * Math.PI / 180)) + this.CintrageB_ON() * (this.Dormant_BM_Y1() + this.Dormant_B_RayonY1() * Math.sqrt(1 - this.Dormant_LG_ON() * this.CintrageB_ON() * (this.Total_Larg2() - this.Dormant_LG_X0()) * (this.Total_Larg2() - this.Dormant_LG_X0()) / (this.Dormant_B_RayonX1() * this.Dormant_B_RayonX1() + 1 - this.CintrageB_ON()))));
                    }
                };
                Dormant.prototype.Dormant_LG_Y1 = function () {
                    if (this._Imposte_ON * (1 - this.Crois_LG_Imp0_ON()) * this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X2()) * this.bool(this.Dormant_LG_X0() < this.Dormant_Imposte_X3())) {
                        return this.Imposte_Haut() + this._Profile_Int_Larg;
                    }
                    else {
                        return this.Dormant_LG_ON() * (this._Profile_Ext_Larg + (this.Dormant_HG_ON() * (1 - this.CintrageHH_ON())) * this.bool(this.Dormant_LG_X0() < this.Dormant_HG_X3()) * (this.Dormant_HG_Y2() - this._Profile_Ext_Larg - (this.Dormant_LG_X0() - this.Dormant_HG_X2()) * Math.tan((90 - this.Dormant_HG_Angle()) * Math.PI / 180)) + this.Dormant_HD_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_LG_X0() > this.Dormant_HD_X2()) * (this.Dormant_HD_Y3() - this._Profile_Ext_Larg - (this.Dormant_HD_X3() - this.Dormant_LG_X0()) * Math.tan((90 - this.Dormant_HD_Angle()) * Math.PI / 180)) + this.CintrageHH_ON() * (-this._Profile_Ext_Larg + this.Dormant_H_RayonY1() * (1 - this.Gothiq_ON() * 0.134) - this.Dormant_H_RayonY2() * Math.sqrt(1 - this.Dormant_LG_ON() * this.CintrageHH_ON() * Math.pow(this.Total_Larg2() * (1 + this.Gothiq_ON() + this.Dormant_HG_ON() - this.Dormant_HD_ON()) - (1 - 2 * (this.Dormant_HD_ON() - this.Gothiq_ON())) * this.Dormant_LG_X0(), 2) / (this.Dormant_H_RayonX2() * this.Dormant_H_RayonX2() + 1 - this.CintrageHH_ON()))));
                    }
                };
                Dormant.prototype.Dormant_LG_Y10 = function () {
                    if (this._Imposte_ON * (1 - this.Crois_LG_Imp0_ON()) * this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X10()) * this.bool(this.Dormant_LG_X0() < this.Dormant_Imposte_X00())) {
                        return this.Imposte_Haut();
                    }
                    else {
                        return this.Dormant_LG_ON() * (this.Dormant_HG_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_LG_X0() < this.Dormant_HG_X0()) * (this.Dormant_HG_X0() - this.Dormant_LG_X0()) * Math.tan((90 - this.Dormant_HG_Angle()) * Math.PI / 180) + this.Dormant_HD_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_LG_X0() > this.Dormant_HD_X1()) * (this.Dormant_HD_Y0() - (this.Dormant_HD_X0() - this.Dormant_LG_X0()) * Math.tan((90 - this.Dormant_HD_Angle()) * Math.PI / 180)) + this.CintrageHH_ON() * this.Dormant_H_RayonY1() * (1 - this.Gothiq_ON() * 0.134 - Math.sqrt(1 - this.Dormant_LG_ON() * this.CintrageHH_ON() * Math.pow(this.Total_Larg2() * (1 + this.Gothiq_ON() + this.Dormant_HG_ON() - this.Dormant_HD_ON()) - (1 - 2 * (this.Dormant_HD_ON() - this.Gothiq_ON())) * this.Dormant_LG_X0(), 2) / (this.Dormant_H_RayonX1() * this.Dormant_H_RayonX1() + 1 - this.CintrageHH_ON()))));
                    }
                };
                Dormant.prototype.Dormant_LG_X2 = function () {
                    return this.Dormant_LG_ON() * this.LG_Larg();
                };
                Dormant.prototype.Dormant_LG_Y2 = function () {
                    if (this._Imposte_ON * (1 - this.Crois_LG_Imp0_ON()) * this.bool(this.Dormant_LG_X2() > this.Dormant_Imposte_X2()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X3())) {
                        return this.Imposte_Haut() + this._Profile_Int_Larg;
                    }
                    else {
                        return this.Dormant_LG_ON() * (this._Profile_Ext_Larg + (this.Dormant_HG_ON() * (1 - this.CintrageHH_ON())) * this.bool(this.Dormant_LG_X2() < this.Dormant_HG_X3()) * (this.Dormant_HG_Y2() - this._Profile_Ext_Larg - (this.Dormant_LG_X2() - this.Dormant_HG_X2()) * Math.tan((90 - this.Dormant_HG_Angle()) * Math.PI / 180)) + this.Dormant_HD_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_LG_X2() > this.Dormant_HD_X2()) * (this.Dormant_HD_Y3() - this._Profile_Ext_Larg - (this.Dormant_HD_X3() - this.Dormant_LG_X2()) * Math.tan((90 - this.Dormant_HD_Angle()) * Math.PI / 180)) + this.CintrageHH_ON() * (this.Dormant_H_RayonY1() * (1 - this.Gothiq_ON() * 0.134) - this._Profile_Ext_Larg - this.Dormant_H_RayonY2() * Math.sqrt(1 - this.Dormant_LG_ON() * this.CintrageHH_ON() * Math.pow(this.Total_Larg2() * (1 + this.Gothiq_ON() + this.Dormant_HG_ON() - this.Dormant_HD_ON()) - (1 - 2 * (this.Dormant_HD_ON() - this.Gothiq_ON())) * this.Dormant_LG_X2(), 2) / (this.Dormant_H_RayonX2() * this.Dormant_H_RayonX2() + 1 - this.CintrageHH_ON()))));
                    }
                };
                Dormant.prototype.Dormant_LG_Y20 = function () {
                    if (this._Imposte_ON * (1 - this.Crois_LG_Imp0_ON()) * this.bool(this.Dormant_LG_X2() > this.Dormant_Imposte_X10()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X00())) {
                        return this.Imposte_Haut();
                    }
                    else {
                        return this.Dormant_LG_ON() * (this.Dormant_HG_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_LG_X2() < this.Dormant_HG_X0()) * (this.Dormant_HG_X0() - this.Dormant_LG_X2()) * Math.tan((90 - this.Dormant_HG_Angle()) * Math.PI / 180) + this.Dormant_HD_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_LG_X2() > this.Dormant_HD_X1()) * this.Dormant_LG_X2() * Math.tan((90 - this.Dormant_HD_Angle()) * Math.PI / 180) + this.CintrageHH_ON() * this.Dormant_H_RayonY1() * (1 - this.Gothiq_ON() * 0.134 - Math.sqrt(1 - this.Dormant_LG_ON() * this.CintrageHH_ON() * Math.pow(this.Total_Larg2() * (1 + this.Gothiq_ON() + this.Dormant_HG_ON() - this.Dormant_HD_ON()) - (1 - 2 * (this.Dormant_HD_ON() - this.Gothiq_ON())) * this.Dormant_LG_X2(), 2) / (this.Dormant_H_RayonX1() * this.Dormant_H_RayonX1() + 1 - this.CintrageHH_ON()))));
                    }
                };
                Dormant.prototype.Dormant_LG_X12 = function () {
                    if (this._Imposte_ON * (1 - this.Crois_LG_Imp0_ON()) * (this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X2()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X2()) + this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X3()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X3()))) {
                        return this.Dormant_Imposte_X2() * this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X2()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X2()) + this.Dormant_Imposte_X3() * this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X3()) * this.bool(this.Dormant_HM_Trans_X() < this.Dormant_Imposte_X3());
                    }
                    else {
                        return this.Dormant_LG_ON() * (this.Dormant_LG_X0() + this.Dormant_HG_ON() * this.bool(this.Dormant_LG_X2() < this.Dormant_HG_X3()) * this.bool(this.Dormant_LG_X0() > this.Dormant_HG_X3()) * (this.Dormant_HG_X3() - this.Dormant_LG_X0()) + this.Dormant_HD_ON() * this.bool(this.Dormant_LG_X2() < this.Dormant_HD_X2()) * this.bool(this.Dormant_LG_X0() > this.Dormant_HD_X2()) * (this.Dormant_HD_X2() - this.Dormant_LG_X0()));
                    }
                };
                Dormant.prototype.Dormant_LG_Y12 = function () {
                    if (this._Imposte_ON * (1 - this.Crois_LG_Imp0_ON()) * (this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X2()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X2()) + this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X3()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X3()))) {
                        return this.Dormant_LG_Y1() * this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X2()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X2()) + this.Dormant_LG_Y2() * this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X3()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X3());
                    }
                    else {
                        return this.Dormant_LG_ON() * (this.Dormant_LG_Y1() + this.Dormant_HG_ON() * this.bool(this.Dormant_LG_X2() < this.Dormant_HG_X3()) * this.bool(this.Dormant_LG_X0() > this.Dormant_HG_X3()) * (this.Dormant_HG_Y3() - this.Dormant_LG_Y1()) + this.Dormant_HD_ON() * this.bool(this.Dormant_LG_X2() < this.Dormant_HD_X2()) * this.bool(this.Dormant_LG_X0() > this.Dormant_HD_X2()) * (this.Dormant_HD_Y2() - this.Dormant_LG_Y1()));
                    }
                };
                Dormant.prototype.Dormant_LG_X120 = function () {
                    if (this._Imposte_ON * (1 - this.Crois_LG_Imp0_ON()) * (this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X10()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X10()) + this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X00()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X00()))) {
                        return this.Dormant_Imposte_X10() * this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X10()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X10()) + this.Dormant_Imposte_X00() * this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X00()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X00());
                    }
                    else {
                        return this.Dormant_LG_ON() * (this.Dormant_LG_X0() + this.Dormant_HG_ON() * this.bool(this.Dormant_LG_X2() < this.Dormant_HG_X0()) * this.bool(this.Dormant_LG_X0() > this.Dormant_HG_X0()) * (this.Dormant_HG_X0() - this.Dormant_LG_X0()) + this.Dormant_HD_ON() * this.bool(this.Dormant_LG_X2() < this.Dormant_HD_X1()) * this.bool(this.Dormant_LG_X0() > this.Dormant_HD_X1()) * (this.Dormant_HD_X1() - this.Dormant_LG_X0()));
                    }
                };
                Dormant.prototype.Dormant_LG_Y120 = function () {
                    if (this._Imposte_ON * (1 - this.Crois_LG_Imp0_ON()) * (this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X10()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X10()) + this.bool(this.Dormant_LG_X0() > this.Dormant_Imposte_X00()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Imposte_X00()))) {
                        return this.Imposte_Haut();
                    }
                    else {
                        return this.Dormant_LG_ON() * (this.Dormant_LG_Y10() + this.Dormant_HG_ON() * this.bool(this.Dormant_LG_X2() < this.Dormant_HG_X0()) * this.bool(this.Dormant_LG_X0() > this.Dormant_HG_X0()) * (this.Dormant_HG_Y0() - this.Dormant_LG_Y10()) + this.Dormant_HD_ON() * this.bool(this.Dormant_LG_X2() < this.Dormant_HD_X1()) * this.bool(this.Dormant_LG_X0() > this.Dormant_HD_X1()) * (this.Dormant_HD_Y1() - this.Dormant_LG_Y10()));
                    }
                };
                Dormant.prototype.Dormant_LG_Y3 = function () {
                    if (this._Allege_ON * (1 - this.Crois_LG_All0_ON()) * this.bool(this.Dormant_LG_X2() > this.Dormant_Allege_X3())) {
                        return this.Total_Haut() - this.Allege_Haut() - this._Profile_Int_Larg;
                    }
                    else {
                        return this.Dormant_LG_ON() * (this.Total_Haut() - this._Profile_Ext_Larg - (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.bool(this.Dormant_LG_X2() < this.Dormant_BG_X2()) * (this.Total_Haut() - this._Profile_Ext_Larg - this.Dormant_BG_Y3() - (this.Dormant_LG_X2() - this.Dormant_BG_X3()) * Math.tan((90 - this.Dormant_BG_Angle()) * Math.PI / 180)) - this.CintrageB_ON() * (this.Dormant_B_RayonY1() - this._Profile_Ext_Larg - this.Dormant_B_RayonY2() * Math.sqrt(1 - this.Dormant_LG_ON() * this.CintrageB_ON() * Math.pow(this.Total_Larg2() - this.Dormant_LG_X2(), 2) / (this.Dormant_B_RayonX2() * this.Dormant_B_RayonX2() + 1 - this.CintrageB_ON()))));
                    }
                };
                Dormant.prototype.Dormant_LG_Y30 = function () {
                    if (this._Allege_ON * (1 - this.Crois_LG_All0_ON()) * this.bool(this.Dormant_LG_X2() > this.Dormant_Allege_X00())) {
                        return this.Total_Haut() - this.Allege_Haut();
                    }
                    else {
                        return this.Dormant_LG_ON() * (this.Total_Haut() - (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.bool(this.Dormant_LG_X2() < this.Dormant_BG_X1()) * (this.Dormant_BG_X1() - this.Dormant_LG_X2()) * Math.tan((90 - this.Dormant_BG_Angle()) * Math.PI / 180) - this.CintrageB_ON() * this.Dormant_B_RayonY1() * (1 - Math.sqrt(1 - this.Dormant_LG_ON() * this.CintrageB_ON() * Math.pow(this.Total_Larg2() - this.Dormant_LG_X2(), 2) / (this.Dormant_B_RayonX1() * this.Dormant_B_RayonX1() + 1 - this.CintrageB_ON()))));
                    }
                };
                Dormant.prototype.Dormant_LG_X03 = function () {
                    if (this._Allege_ON * (1 - this.Crois_LG_All0_ON()) * this.bool(this.Dormant_LG_X0() > this.Dormant_Allege_X3()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Allege_X3())) {
                        return this.Dormant_Allege_X3();
                    }
                    else {
                        return this.Dormant_LG_ON() * (this.Dormant_LG_X0() + this.Dormant_BG_ON() * this.bool(this.Dormant_LG_X2() < this.Dormant_BG_X2()) * this.bool(this.Dormant_LG_X0() > this.Dormant_BG_X2()) * (this.Dormant_BG_X2() - this.Dormant_LG_X0()));
                    }
                };
                Dormant.prototype.Dormant_LG_Y03 = function () {
                    if (this._Allege_ON * (1 - this.Crois_LG_All0_ON()) * this.bool(this.Dormant_LG_X0() > this.Dormant_Allege_X3()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Allege_X3())) {
                        return this.Total_Haut() - this.Allege_Haut() - this._Profile_Int_Larg;
                    }
                    else {
                        return this.Dormant_LG_ON() * (this.Dormant_LG_Y0() + this.Dormant_BG_ON() * this.bool(this.Dormant_LG_X2() < this.Dormant_BG_X2()) * this.bool(this.Dormant_LG_X0() > this.Dormant_BG_X2()) * (this.Dormant_BG_Y2() - this.Dormant_LG_Y0()));
                    }
                };
                Dormant.prototype.Dormant_LG_X030 = function () {
                    if (this._Allege_ON * (1 - this.Crois_LG_All0_ON()) * this.bool(this.Dormant_LG_X0() > this.Dormant_Allege_X00()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Allege_X00())) {
                        return this.Dormant_Allege_X00();
                    }
                    else {
                        return this.Dormant_LG_ON() * (this.Dormant_LG_X0() + this.Dormant_BG_ON() * this.bool(this.Dormant_LG_X2() < this.Dormant_BG_X1()) * this.bool(this.Dormant_LG_X0() > this.Dormant_BG_X1()) * (this.Dormant_BG_X1() - this.Dormant_LG_X0()));
                    }
                };
                Dormant.prototype.Dormant_LG_Y030 = function () {
                    if (this._Allege_ON * (1 - this.Crois_LG_All0_ON()) * this.bool(this.Dormant_LG_X0() > this.Dormant_Allege_X00()) * this.bool(this.Dormant_LG_X2() < this.Dormant_Allege_X00())) {
                        return this.Total_Haut() - this.Allege_Haut();
                    }
                    else {
                        return this.Dormant_LG_ON() * (this.Dormant_LG_Y00() + this.Dormant_BG_ON() * this.bool(this.Dormant_LG_X2() < this.Dormant_BG_X1()) * this.bool(this.Dormant_LG_X0() > this.Dormant_BG_X1()) * (this.Dormant_BG_Y1() - this.Dormant_LG_Y00()));
                    }
                };
                Dormant.prototype.Dormant_LG_DY1 = function () {
                    return this.Dormant_LG_Y0() - this.Dormant_LG_Y1();
                };
                Dormant.prototype.Dormant_LG_LX1 = function () {
                    return this.Dormant_LG_X0() - this.Dormant_LG_X12();
                };
                Dormant.prototype.Dormant_LG_LY1 = function () {
                    return Math.abs(this.Dormant_LG_Y12() - this.Dormant_LG_Y1());
                };
                Dormant.prototype.Dormant_LG_LX2 = function () {
                    return this.Dormant_LG_X12() - this.Dormant_LG_X2();
                };
                Dormant.prototype.Dormant_LG_LY2 = function () {
                    return this.Dormant_LG_Y12() - this.Dormant_LG_Y2();
                };
                Dormant.prototype.Dormant_LG_DY2 = function () {
                    return this.Dormant_LG_Y2() - this.Dormant_LG_Y3();
                };
                Dormant.prototype.Dormant_LG_LX3 = function () {
                    return this.Dormant_LG_X2() - this.Dormant_LG_X03();
                };
                Dormant.prototype.Dormant_LG_LY3 = function () {
                    return this.Dormant_LG_Y3() - this.Dormant_LG_Y03();
                };
                Dormant.prototype.Dormant_LG_LX4 = function () {
                    return this.Dormant_LG_X03() - this.Dormant_LG_X0();
                };
                Dormant.prototype.Dormant_LG_LY4 = function () {
                    return this.Dormant_LG_Y03() - this.Dormant_LG_Y0();
                };
                Dormant.prototype.Dormant_LG_Trans_X = function () {
                    return this.Dormant_LG_X0();
                };
                Dormant.prototype.Dormant_LG_Trans_Y = function () {
                    return this.Dormant_LG_Y0();
                };
                Dormant.prototype.Dormant_LG_Rotate = function () {
                    return this.Dormant_LG_ON() * 180;
                };
                Dormant.prototype.Dormant_LD_ON = function () {
                    return this._LD_ON * this.bool(this.LD_Larg() > ((1 - this._Crois_LD_All_ON) * this.bool(this.Dormant_HD_Y3() > (this.Total_Haut() - this.Allege_Haut() - this._Profile_Int_Larg)) * (this.Total_Larg() - this.Dormant_Allege_X2()) + this._LD_min * this._Profile_Ext_Larg));
                };
                Dormant.prototype.Crois_LD_Imp0_ON = function () {
                    return this._Crois_LD_Imp_ON * this.bool(this.LD_Larg() > (this.Total_Larg() - this.Dormant_Imposte_X3() + this._LD_min * this._Profile_Ext_Larg));
                };
                Dormant.prototype.Crois_LD_All0_ON = function () {
                    return this._Crois_LD_All_ON * this.bool(this.LD_Larg() > (this.Total_Larg() - this.Dormant_Allege_X2() + this._LG_min * this._Profile_Ext_Larg));
                };
                Dormant.prototype.Dormant_LD_X0 = function () {
                    return this.Dormant_LD_ON() * (this.Total_Larg() - this.LD_Larg() - this._Profile_Int_Larg);
                };
                Dormant.prototype.Dormant_LD_Y0 = function () {
                    if (this._Imposte_ON * (1 - this.Crois_LD_Imp0_ON()) * this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X3()) * this.bool(this.Dormant_LD_X0() > this.Dormant_Imposte_X2())) {
                        return this.Imposte_Haut() + this._Profile_Int_Larg;
                    }
                    else {
                        return this.Dormant_LD_ON() * (this._Profile_Ext_Larg + this.Dormant_HD_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_LD_X0() > this.Dormant_HD_X2()) * (this.Dormant_HD_Y3() - this._Profile_Ext_Larg - (this.Dormant_HD_X3() - this.Dormant_LD_X0()) * Math.tan((90 - this.Dormant_HD_Angle()) * Math.PI / 180)) + (this.Dormant_HG_ON() * (1 - this.CintrageHH_ON())) * this.bool(this.Dormant_LD_X0() < this.Dormant_HG_X3()) * (this.Dormant_HG_Y2() - this._Profile_Ext_Larg - (this.Dormant_LD_X0() - this.Dormant_HG_X2()) * Math.tan((90 - this.Dormant_HG_Angle()) * Math.PI / 180)) + this.CintrageHH_ON() * (-this._Profile_Ext_Larg + this.Dormant_H_RayonY1() * (1 - this.Gothiq_ON() * 0.134) - this.Dormant_H_RayonY2() * Math.sqrt(1 - this.Dormant_LD_ON() * this.CintrageHH_ON() * Math.pow(this.Total_Larg2() * (1 + this.Dormant_HG_ON() - this.Dormant_HD_ON() - this.Gothiq_ON()) - this.Dormant_LD_X0() * (1 - 2 * this.Dormant_HD_ON()), 2) / (this.Dormant_H_RayonX2() * this.Dormant_H_RayonX2() + 1 - this.CintrageHH_ON()))));
                    }
                };
                Dormant.prototype.Dormant_LD_Y00 = function () {
                    if (this._Imposte_ON * (1 - this.Crois_LD_Imp0_ON()) * this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X00()) * this.bool(this.Dormant_LD_X0() > this.Dormant_Imposte_X10())) {
                        return this.Imposte_Haut();
                    }
                    else {
                        return this.Dormant_LD_ON() * (this.Dormant_HD_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_LD_X0() > this.Dormant_HD_X1()) * (this.Dormant_HD_Y0() - (this.Dormant_HD_X0() - this.Dormant_LD_X0()) * Math.tan((90 - this.Dormant_HD_Angle()) * Math.PI / 180)) + (this.Dormant_HG_ON() * (1 - this.CintrageHH_ON())) * this.bool(this.Dormant_LD_X0() < this.Dormant_HG_X0()) * (this.Dormant_HG_Y1() - (this.Dormant_LD_X0() - this.Dormant_HG_X1()) * Math.tan((90 - this.Dormant_HG_Angle()) * Math.PI / 180)) + this.CintrageHH_ON() * (this.Dormant_H_RayonY1() * (1 - this.Gothiq_ON() * 0.134 - Math.sqrt(1 - this.Dormant_LD_ON() * this.CintrageHH_ON() * Math.pow(this.Total_Larg2() * (1 + this.Dormant_HG_ON() - this.Dormant_HD_ON() - this.Gothiq_ON()) - this.Dormant_LD_X0() * (1 - 2 * this.Dormant_HD_ON()), 2) / (this.Dormant_H_RayonX1() * this.Dormant_H_RayonX1() + 1 - this.CintrageHH_ON())))));
                    }
                };
                Dormant.prototype.Dormant_LD_Y1 = function () {
                    if (this._Allege_ON * (1 - this.Crois_LD_All0_ON()) * this.bool(this.Dormant_LD_X0() < this.Dormant_Allege_X2()))
                        return this.Total_Haut() - this.Allege_Haut() - this._Profile_Int_Larg;
                    return this.Dormant_LD_ON() * ((1 - this.CintrageB_ON()) * (this.Total_Haut() - this._Profile_Ext_Larg) + this._Porte_ON * this.Dormant_LD_ON() * this._Profile_Ext_Larg + (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.bool(this.Dormant_LD_X0() > this.Dormant_BD_X3()) * (this._Profile_Ext_Larg - this.Total_Haut() + this.Dormant_BD_Y2() + (this.Dormant_BD_X2() - this.Dormant_LD_X0()) * Math.tan((90 - this.Dormant_BD_Angle()) * Math.PI / 180)) + this.CintrageB_ON() * (this.Dormant_BM_Y0() + this.Dormant_B_RayonY2() * Math.sqrt(1 - this.CintrageB_ON() * (this.Total_Larg2() - this.Dormant_LD_X0()) * (this.Total_Larg2() - this.Dormant_LD_X0()) / (this.Dormant_B_RayonX2() * this.Dormant_B_RayonX2() + 1 - this.CintrageB_ON()))));
                };
                Dormant.prototype.Dormant_LD_Y10 = function () {
                    if (this._Allege_ON * (1 - this.Crois_LD_All0_ON()) * this.bool(this.Dormant_LD_X0() < this.Dormant_Allege_X10()))
                        return this.Total_Haut() - this.Allege_Haut();
                    return this.Dormant_LD_ON() * ((1 - this.CintrageB_ON()) * this.Total_Haut() + (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.bool(this.Dormant_LD_X0() > this.Dormant_BD_X0()) * (this.Dormant_BD_X0() - this.Dormant_LD_X0()) * Math.tan((90 - this.Dormant_BD_Angle()) * Math.PI / 180) + this.CintrageB_ON() * (this.Dormant_BM_Y0() + this.Dormant_B_RayonY1() * Math.sqrt(1 - this.CintrageB_ON() * Math.pow(this.Total_Larg2() - this.Dormant_LD_X0(), 2) / (this.Dormant_B_RayonX1() * this.Dormant_B_RayonX1() + 1 - this.CintrageB_ON()))));
                };
                Dormant.prototype.Dormant_LD_X2 = function () {
                    return this.Dormant_LD_ON() * (this.Total_Larg() - this.LD_Larg());
                };
                Dormant.prototype.Dormant_LD_Y2 = function () {
                    if (this._Allege_ON * (1 - this.Crois_LD_All0_ON()) * this.bool(this.Dormant_LD_X2() < this.Dormant_Allege_X2()))
                        return this.Total_Haut() - this.Allege_Haut() - this._Profile_Int_Larg;
                    return (this.Dormant_LD_ON() * ((1 - this.CintrageB_ON()) * (this.Total_Haut() - this._Profile_Ext_Larg) + (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.bool(this.Dormant_LD_X2() > this.Dormant_BD_X3()) * (this._Profile_Ext_Larg - this.Total_Haut() + this.Dormant_BD_Y2() + (this.Dormant_BD_X2() - this.Dormant_LD_X2()) * Math.tan((90 - this.Dormant_BD_Angle()) * Math.PI / 180)) + this.CintrageB_ON() * (this.Dormant_BM_Y0() + this.Dormant_B_RayonY2() * Math.sqrt(1 - this.CintrageB_ON() * (this.Total_Larg2() - this.Dormant_LD_X2()) * (this.Total_Larg2() - this.Dormant_LD_X2()) / (this.Dormant_B_RayonX2() * this.Dormant_B_RayonX2() + 1 - this.CintrageB_ON())))));
                };
                Dormant.prototype.Dormant_LD_Y20 = function () {
                    if (this._Allege_ON * (1 - this.Crois_LD_All0_ON()) * this.bool(this.Dormant_LD_X2() < this.Dormant_Allege_X10())) {
                        return this.Total_Haut() - this.Allege_Haut();
                    }
                    else {
                        return this.Dormant_LD_ON() * ((1 - this.CintrageB_ON()) * this.Total_Haut() + (this._Octogone_ON + this._Hexagone_ON + this._Losange_ON) * this.bool(this.Dormant_LD_X2() > this.Dormant_BD_X0()) * (this.Dormant_BD_X0() - this.Dormant_LD_X2()) * Math.tan((90 - this.Dormant_BD_Angle()) * Math.PI / 180) + this.CintrageB_ON() * (this.Dormant_BM_Y0() + this.Dormant_B_RayonY1() * Math.sqrt(1 - this.CintrageB_ON() * Math.pow(this.Total_Larg2() - this.Dormant_LD_X2(), 2) / (this.Dormant_B_RayonX1() * this.Dormant_B_RayonX1() + 1 - this.CintrageB_ON()))));
                    }
                };
                Dormant.prototype.Dormant_LD_X12 = function () {
                    if (this._Allege_ON * (1 - this.Crois_LD_All0_ON()) * this.bool(this.Dormant_LD_X0() < this.Dormant_Allege_X2()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Allege_X2())) {
                        return this.Dormant_Allege_X2();
                    }
                    else {
                        return this.Dormant_LD_ON() * (this.Dormant_LD_X0() + this.Dormant_BD_ON() * this.bool(this.Dormant_LD_X0() < this.Dormant_BD_X3()) * this.bool(this.Dormant_LD_X2() > this.Dormant_BD_X3()) * (this.Dormant_BD_X3() - this.Dormant_LD_X0()));
                    }
                };
                Dormant.prototype.Dormant_LD_Y12 = function () {
                    if (this._Allege_ON * (1 - this.Crois_LD_All0_ON()) * this.bool(this.Dormant_LD_X0() < this.Dormant_Allege_X2()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Allege_X2())) {
                        return this.Dormant_LD_Y1();
                    }
                    else {
                        return this.Dormant_LD_ON() * (this.Dormant_LD_Y1() + this.Dormant_BD_ON() * this.bool(this.Dormant_LD_X0() < this.Dormant_BD_X3()) * this.bool(this.Dormant_LD_X2() > this.Dormant_BD_X3()) * (this.Dormant_BD_Y3() - this.Dormant_LD_Y1()));
                    }
                };
                Dormant.prototype.Dormant_LD_X120 = function () {
                    if (this._Allege_ON * (1 - this.Crois_LD_All0_ON()) * this.bool(this.Dormant_LD_X0() < this.Dormant_Allege_X1()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Allege_X1())) {
                        return this.Dormant_Allege_X1();
                    }
                    else {
                        return this.Dormant_LD_ON() * (this.Dormant_LD_X0() + this.Dormant_BD_ON() * this.bool(this.Dormant_LD_X0() < this.Dormant_BD_X0()) * this.bool(this.Dormant_LD_X2() > this.Dormant_BD_X0()) * (this.Dormant_BD_X0() - this.Dormant_LD_X0()));
                    }
                };
                Dormant.prototype.Dormant_LD_Y120 = function () {
                    if (this._Allege_ON * (1 - this.Crois_LD_All0_ON()) * this.bool(this.Dormant_LD_X0() < this.Dormant_Allege_X1()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Allege_X1())) {
                        return this.Dormant_LD_Y10();
                    }
                    else {
                        return this.Dormant_LD_ON() * (this.Dormant_LD_Y10() + this.Dormant_BD_ON() * this.bool(this.Dormant_LD_X0() < this.Dormant_BD_X0()) * this.bool(this.Dormant_LD_X2() > this.Dormant_BD_X0()) * (this.Dormant_BD_Y0() - this.Dormant_LD_Y10()));
                    }
                };
                Dormant.prototype.Dormant_LD_Y3 = function () {
                    if (this._Imposte_ON * (1 - this.Crois_LD_Imp0_ON()) * this.bool(this.Dormant_LD_X2() < this.Dormant_Imposte_X3()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X2())) {
                        return this.Imposte_Haut() + this._Profile_Int_Larg;
                    }
                    else {
                        return this.Dormant_LD_ON() * (this._Profile_Ext_Larg + (this.Dormant_HD_ON() * (1 - this.CintrageHH_ON())) * this.bool(this.Dormant_LD_X2() > this.Dormant_HD_X2()) * (this.Dormant_HD_Y3() - this._Profile_Ext_Larg - (this.Dormant_HD_X3() - this.Dormant_LD_X2()) * Math.tan((90 - this.Dormant_HD_Angle()) * Math.PI / 180)) + (this.Dormant_HG_ON() * (1 - this.CintrageHH_ON())) * this.bool(this.Dormant_LD_X2() < this.Dormant_HG_X3()) * (this.Dormant_HG_Y2() - this._Profile_Ext_Larg - (this.Dormant_LD_X2() - this.Dormant_HG_X2()) * Math.tan((90 - this.Dormant_HG_Angle()) * Math.PI / 180)) + this.CintrageHH_ON() * (-this._Profile_Ext_Larg + this.Dormant_H_RayonY1() * (1 - this.Gothiq_ON() * 0.134) - this.Dormant_H_RayonY2() * Math.sqrt(1 - this.Dormant_LD_ON() * this.CintrageHH_ON() * Math.pow(this.Total_Larg2() * (1 + this.Dormant_HG_ON() - this.Dormant_HD_ON() - this.Gothiq_ON()) - this.Dormant_LD_X2() * (1 - 2 * this.Dormant_HD_ON()), 2) / (this.Dormant_H_RayonX2() * this.Dormant_H_RayonX2() + 1 - this.CintrageHH_ON()))));
                    }
                };
                Dormant.prototype.Dormant_LD_Y30 = function () {
                    if (this._Imposte_ON * (1 - this.Crois_LD_Imp0_ON()) * this.bool(this.Dormant_LD_X2() < this.Dormant_Imposte_X00()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X10())) {
                        return this.Imposte_Haut();
                    }
                    else {
                        return this.Dormant_LD_ON() * (this.Dormant_HD_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_LD_X2() > this.Dormant_HD_X1()) * (this.Dormant_HD_Y0() - (this.Dormant_HD_X0() - this.Dormant_LD_X2()) * Math.tan((90 - this.Dormant_HD_Angle()) * Math.PI / 180)) + this.Dormant_HG_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_LD_X2() < this.Dormant_HG_X0()) * (this.Dormant_HG_Y1() - (this.Dormant_LD_X2() - this.Dormant_HG_X1()) * Math.tan((90 - this.Dormant_HG_Angle()) * Math.PI / 180)) + this.CintrageHH_ON() * (this.Dormant_H_RayonY1() * (1 - this.Gothiq_ON() * 0.134 - Math.sqrt(1 - this.Dormant_LD_ON() * this.CintrageHH_ON() * Math.pow(this.Total_Larg2() * (1 + this.Dormant_HG_ON() - this.Dormant_HD_ON() - this.Gothiq_ON()) - this.Dormant_LD_X2() * (1 - 2 * this.Dormant_HD_ON()), 2) / (this.Dormant_H_RayonX1() * this.Dormant_H_RayonX1() + 1 - this.CintrageHH_ON())))));
                    }
                };
                Dormant.prototype.Dormant_LD_X03 = function () {
                    if (this._Imposte_ON * (1 - this.Crois_LD_Imp0_ON()) * (this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X3()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X3()) + this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X2()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X2()))) {
                        return this.Dormant_Imposte_X3() * this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X3()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X3()) + this.Dormant_Imposte_X2() * this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X2()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X2());
                    }
                    else {
                        return this.Dormant_LD_ON() * (this.Dormant_LD_X0() + this.Dormant_HD_ON() * this.bool(this.Dormant_LD_X0() < this.Dormant_HD_X2()) * this.bool(this.Dormant_LD_X2() > this.Dormant_HD_X2()) * (this.Dormant_HD_X2() - this.Dormant_LD_X0()) + this.Dormant_HG_ON() * this.bool(this.Dormant_LD_X0() < this.Dormant_HG_X3()) * this.bool(this.Dormant_LD_X2() > this.Dormant_HG_X3()) * (this.Dormant_HG_X3() - this.Dormant_LD_X0()));
                    }
                };
                Dormant.prototype.Dormant_LD_Y03 = function () {
                    if (this._Imposte_ON * (1 - this.Crois_LD_Imp0_ON()) * (this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X3()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X3()) + this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X2()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X2()))) {
                        return this.Dormant_LD_Y0() * this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X3()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X3()) + this.Dormant_LD_Y3() * this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X2()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X2());
                    }
                    else {
                        return this.Dormant_LD_ON() * (this.Dormant_LD_Y0() + this.Dormant_HD_ON() * this.bool(this.Dormant_LD_X0() < this.Dormant_HD_X2()) * this.bool(this.Dormant_LD_X2() > this.Dormant_HD_X2()) * (this.Dormant_HD_Y2() - this.Dormant_LD_Y0()) + this.Dormant_HG_ON() * this.bool(this.Dormant_LD_X0() < this.Dormant_HG_X3()) * this.bool(this.Dormant_LD_X2() > this.Dormant_HG_X3()) * (this.Dormant_HG_Y3() - this.Dormant_LD_Y0()));
                    }
                };
                Dormant.prototype.Dormant_LD_X030 = function () {
                    if (this._Imposte_ON * (1 - this.Crois_LD_Imp0_ON()) * (this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X00()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X00()) + this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X10()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X10()))) {
                        return this.Dormant_Imposte_X00() * this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X00()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X00()) + this.Dormant_Imposte_X10() * this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X10()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X10());
                    }
                    else {
                        return this.Dormant_LD_ON() * (this.Dormant_LD_X0() + this.Dormant_HD_ON() * this.bool(this.Dormant_LD_X0() < this.Dormant_HD_X1()) * this.bool(this.Dormant_LD_X2() > this.Dormant_HD_X1()) * (this.Dormant_HD_X1() - this.Dormant_LD_X0()) + this.Dormant_HG_ON() * this.bool(this.Dormant_LD_X0() < this.Dormant_HG_X0()) * this.bool(this.Dormant_LD_X2() > this.Dormant_HG_X0()) * (this.Dormant_HG_X0() - this.Dormant_LD_X0()));
                    }
                };
                Dormant.prototype.Dormant_LD_Y030 = function () {
                    if (this._Imposte_ON * (1 - this.Crois_LD_Imp0_ON()) * (this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X00()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X00()) + this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X10()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X10()))) {
                        return this.Dormant_LD_Y00() * this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X00()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X00()) + this.Dormant_LD_Y30() * this.bool(this.Dormant_LD_X0() < this.Dormant_Imposte_X10()) * this.bool(this.Dormant_LD_X2() > this.Dormant_Imposte_X10());
                    }
                    else {
                        return this.Dormant_LD_ON() * (this.Dormant_LD_Y00() + this.Dormant_HD_ON() * this.bool(this.Dormant_LD_X0() < this.Dormant_HD_X1()) * this.bool(this.Dormant_LD_X2() > this.Dormant_HD_X1()) * (this.Dormant_HD_Y1() - this.Dormant_LD_Y00()) + this.Dormant_HG_ON() * this.bool(this.Dormant_LD_X0() < this.Dormant_HG_X0()) * this.bool(this.Dormant_LD_X2() > this.Dormant_HG_X0()) * (this.Dormant_HG_Y0() - this.Dormant_LD_Y00()));
                    }
                };
                Dormant.prototype.Dormant_LD_DY1 = function () {
                    return this.Dormant_LD_Y1() - this.Dormant_LD_Y0();
                };
                Dormant.prototype.Dormant_LD_LX1 = function () {
                    return this.Dormant_LD_X12() - this.Dormant_LD_X0();
                };
                Dormant.prototype.Dormant_LD_LY1 = function () {
                    return Math.abs(this.Dormant_LD_Y12() - this.Dormant_LD_Y1());
                };
                Dormant.prototype.Dormant_LD_LX2 = function () {
                    return this.Dormant_LD_X2() - this.Dormant_LD_X12();
                };
                Dormant.prototype.Dormant_LD_LY2 = function () {
                    return this.Dormant_LD_Y2() - this.Dormant_LD_Y12();
                };
                Dormant.prototype.Dormant_LD_DY2 = function () {
                    return this.Dormant_LD_Y3() - this.Dormant_LD_Y2();
                };
                Dormant.prototype.Dormant_LD_LX3 = function () {
                    return this.Dormant_LD_X03() - this.Dormant_LD_X2();
                };
                Dormant.prototype.Dormant_LD_LY3 = function () {
                    return this.Dormant_LD_Y03() - this.Dormant_LD_Y3();
                };
                Dormant.prototype.Dormant_LD_LX4 = function () {
                    return this.Dormant_LD_X0() - this.Dormant_LD_X03();
                };
                Dormant.prototype.Dormant_LD_LY4 = function () {
                    return this.Dormant_LD_Y0() - this.Dormant_LD_Y03();
                };
                Dormant.prototype.Dormant_LD_Trans_X = function () {
                    return this.Dormant_LD_X0();
                };
                Dormant.prototype.Dormant_LD_Trans_Y = function () {
                    return this.Dormant_LD_Y0();
                };
                Dormant.prototype.Dormant_LD_Rotate = function () {
                    return 0;
                };
                Dormant.prototype.Dormant_Imposte_ON = function () {
                    //   console.log("Imposte ON  "+ this._Imposte_ON * this.bool(this.Imposte_Haut() > (this._Imposte_min * this._Profile_Ext_Larg)));
                    return this._Imposte_ON * this.bool(this.Imposte_Haut() > (this._Imposte_min * this._Profile_Ext_Larg));
                };
                Dormant.prototype.Dormant_Imposte_X0 = function () {
                    return this.Dormant_Imposte_ON() * (this.Total_Larg_Profile() + this.Dormant_HD_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Imposte_Haut() < this.Dormant_HD_Y3()) * (this.Dormant_HD_X2() - this.Total_Larg_Profile() + (this.Imposte_Haut() - this.Dormant_HD_Y2()) * Math.tan(this.Dormant_HD_Angle() * Math.PI / 180)) + (this.CintrageHH_ON() - this._Cercle_QuartG_ON - this._CercleH_QuartG_ON - this._Ellipse_QuartG_ON - this._EllipseH_QuartG_ON) * this.bool(this.Imposte_Haut() < (this.Dormant_HD_Y3() + this.Dormant_HM_Y3())) * (this._Profile_Ext_Larg - this.Total_Larg2() * (1 + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) + this.Dormant_H_RayonX2() * Math.sqrt(1 - this.CintrageHH_ON() * Math.pow(this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Imposte_Haut(), 2) / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - this.CintrageHH_ON()))));
                };
                Dormant.prototype.Dormant_Imposte_X00 = function () {
                    return this.Dormant_Imposte_ON() * (this.Total_Larg() + this.Dormant_HD_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Imposte_Haut() < this.Dormant_HD_Y0()) * (this.Dormant_HD_X1() - this.Total_Larg() + (this.Imposte_Haut() - this.Dormant_HD_Y1()) * Math.tan(this.Dormant_HD_Angle() * Math.PI / 180)) + (this.CintrageHH_ON() - this._Cercle_QuartG_ON - this._CercleH_QuartG_ON - this._Ellipse_QuartG_ON - this._EllipseH_QuartG_ON) * this.bool(this.Imposte_Haut() < (this.Dormant_HD_Y0() + this.Dormant_HM_Y0())) * (-this.Total_Larg2() * (1 + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) + this.Dormant_H_RayonX1() * Math.sqrt(1 - this.CintrageHH_ON() * Math.pow(this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Imposte_Haut(), 2) / (this.Dormant_H_RayonY1() * this.Dormant_H_RayonY1() + 1 - this.CintrageHH_ON()))));
                };
                Dormant.prototype.Dormant_Imposte_Y0 = function () {
                    return this.Dormant_Imposte_ON() * this.Imposte_Haut();
                };
                Dormant.prototype.Dormant_Imposte_X1 = function () {
                    return this.Dormant_Imposte_ON() * (this._Profile_Ext_Larg + this.Dormant_HG_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_Imposte_Y0() < this.Dormant_HG_Y2()) * (this.Dormant_HG_X3() - this._Profile_Ext_Larg - (this.Dormant_Imposte_Y0() - this.Dormant_HG_Y3()) * Math.tan((this.Dormant_HG_Angle()) * Math.PI / 180)) + (this.CintrageHH_ON() - this._Cercle_QuartD_ON - this._CercleH_QuartD_ON - this._Ellipse_QuartD_ON - this._EllipseH_QuartD_ON) * this.bool(this.Dormant_Imposte_Y0() < (this.Dormant_HM_Y2() + this.Dormant_HG_Y2())) * (this.Total_Larg2() * (1 + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this.Gothiq_ON() + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) - this._Profile_Ext_Larg - this.Dormant_H_RayonX2() * Math.sqrt(1 - this.CintrageHH_ON() * this.bool(this.Dormant_Imposte_Y0() < (this.Dormant_HM_Y2() + this.Dormant_HG_Y2())) * Math.pow(this.Dormant_Imposte_ON() * this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Dormant_Imposte_Y0(), 2) / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - this.CintrageHH_ON()))));
                };
                Dormant.prototype.Dormant_Imposte_X10 = function () {
                    return this.Dormant_Imposte_ON() * (this.Dormant_HG_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_Imposte_Y0() < this.Dormant_HG_Y1()) * (this.Dormant_HG_X0() - (this.Dormant_Imposte_Y0() - this.Dormant_HG_Y0()) * Math.tan((this.Dormant_HG_Angle()) * Math.PI / 180)) + (this.CintrageHH_ON() - this._Cercle_QuartD_ON - this._CercleH_QuartD_ON - this._Ellipse_QuartD_ON - this._EllipseH_QuartD_ON) * this.bool(this.Dormant_Imposte_Y0() < (this.Dormant_HM_Y1() + this.Dormant_HG_Y1())) * (this.Total_Larg2() * (1 + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this.Gothiq_ON() + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) - this.Dormant_H_RayonX1() * Math.sqrt(1 - this.CintrageHH_ON() * this.bool(this.Dormant_Imposte_Y0() < (this.Dormant_HM_Y1() + this.Dormant_HG_Y1())) * Math.pow(this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Dormant_Imposte_Y0(), 2) / (this.Dormant_H_RayonY1() * this.Dormant_H_RayonY1() + 1 - this.CintrageHH_ON()))));
                };
                Dormant.prototype.Dormant_Imposte_X2 = function () {
                    return this.Dormant_Imposte_ON() * (this._Profile_Ext_Larg + this.Dormant_HG_ON() * (1 - this.CintrageHH_ON()) * this.bool((this.Dormant_Imposte_Y0() + this._Profile_Int_Larg) < (this.Dormant_HG_Y2())) * (this.Dormant_HG_X3() - this._Profile_Ext_Larg - ((this.Dormant_Imposte_Y0() + this._Profile_Int_Larg) - this.Dormant_HG_Y3()) * Math.tan((this.Dormant_HG_Angle()) * Math.PI / 180)) + (this.CintrageHH_ON() - this._Cercle_QuartD_ON - this._CercleH_QuartD_ON - this._Ellipse_QuartD_ON - this._EllipseH_QuartD_ON) * this.bool((this.Dormant_Imposte_Y0() + this._Profile_Int_Larg) < (this.Dormant_HM_Y2() + this.Dormant_HG_Y2())) * (this.Total_Larg2() * (1 + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this.Gothiq_ON() + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) - this._Profile_Ext_Larg - this.Dormant_H_RayonX2() * Math.sqrt(1 - this.CintrageHH_ON() * this.bool((this.Dormant_Imposte_Y0() + this._Profile_Int_Larg) < (this.Dormant_HM_Y2() + this.Dormant_HG_Y2())) * Math.pow(this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - (this.Dormant_Imposte_Y0() + this._Profile_Int_Larg), 2) / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - this.CintrageHH_ON()))));
                };
                Dormant.prototype.Dormant_Imposte_X20 = function () {
                    return this.Dormant_Imposte_ON() * (this.Dormant_HG_ON() * (1 - this.CintrageHH_ON()) * this.bool((this.Dormant_Imposte_Y0() + this._Profile_Int_Larg) < (this.Dormant_HG_Y1())) * (this.Dormant_HG_X0() - ((this.Dormant_Imposte_Y0() + this._Profile_Int_Larg) - this.Dormant_HG_Y0()) * Math.tan((this.Dormant_HG_Angle()) * Math.PI / 180)) + (this.CintrageHH_ON() - this._Cercle_QuartD_ON - this._CercleH_QuartD_ON - this._Ellipse_QuartD_ON - this._EllipseH_QuartD_ON) * this.bool((this.Dormant_Imposte_Y0() + this._Profile_Int_Larg) < (this.Dormant_HM_Y1() + this.Dormant_HG_Y1())) * (this.Total_Larg2() * (1 + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this.Gothiq_ON() + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) - this.Dormant_H_RayonX1() * Math.sqrt(1 - this.CintrageHH_ON() * this.bool((this.Dormant_Imposte_Y0() + this._Profile_Int_Larg) < (this.Dormant_HM_Y1() + this.Dormant_HG_Y1())) * Math.pow(this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - (this.Dormant_Imposte_Y0() + this._Profile_Int_Larg), 2) / (this.Dormant_H_RayonY1() * this.Dormant_H_RayonY1() + 1 - this.CintrageHH_ON()))));
                };
                Dormant.prototype.Dormant_Imposte_Y2 = function () {
                    return this.Dormant_Imposte_ON() * (this.Dormant_Imposte_Y0() + this._Profile_Int_Larg);
                };
                Dormant.prototype.Dormant_Imposte_X12 = function () {
                    return this.Dormant_Imposte_ON() * (this.Dormant_Imposte_X2() + (this.Dormant_HG_ON() + this.CintrageHH_ON()) * this.bool(this.Dormant_Imposte_Y0() < (this.Dormant_HG_Y2() + this.CintrageHH_ON() * this.Dormant_HG_Y2())) * this.bool(this.Dormant_Imposte_Y2() > (this.Dormant_HG_Y2() + this.CintrageHH_ON() * this.Dormant_HG_Y2())) * (this.Dormant_HG_X2() + this.CintrageHH_ON() * this.Dormant_HM_X2() - this.Dormant_Imposte_X2()));
                };
                Dormant.prototype.Dormant_Imposte_X120 = function () {
                    return this.Dormant_Imposte_ON() * (this.Dormant_Imposte_X20() + (this.Dormant_HG_ON() + this.CintrageHH_ON()) * this.bool(this.Dormant_Imposte_Y0() < (this.Dormant_HG_Y1() + this.CintrageHH_ON() * this.Dormant_HM_Y1())) * this.bool(this.Dormant_Imposte_Y2() > (this.Dormant_HG_Y1() + this.CintrageHH_ON() * this.Dormant_HM_Y1())) * (this.Dormant_HG_X1() + this.CintrageHH_ON() * this.Dormant_HM_X1() - this.Dormant_Imposte_X20()));
                };
                Dormant.prototype.Dormant_Imposte_Y12 = function () {
                    return this.Dormant_Imposte_ON() * (this.Dormant_Imposte_Y2() + (this.Dormant_HG_ON() + this.CintrageHH_ON()) * this.bool(this.Dormant_Imposte_Y0() < (this.Dormant_HG_Y2() + this.CintrageHH_ON() * this.Dormant_HM_Y2())) * this.bool(this.Dormant_Imposte_Y2() > (this.Dormant_HG_Y2() + this.CintrageHH_ON() * this.Dormant_HM_Y2())) * (this.Dormant_HG_Y2() + this.CintrageHH_ON() * this.Dormant_HM_Y2() - this.Dormant_Imposte_Y2()));
                };
                Dormant.prototype.Dormant_Imposte_Y120 = function () {
                    return this.Dormant_Imposte_ON() * (this.Dormant_Imposte_Y2() + (this.Dormant_HG_ON() + this.CintrageHH_ON()) * this.bool(this.Dormant_Imposte_Y0() < (this.Dormant_HG_Y1() + this.CintrageHH_ON() * this.Dormant_HM_Y1())) * this.bool(this.Dormant_Imposte_Y2() > (this.Dormant_HG_Y1() + this.CintrageHH_ON() * this.Dormant_HM_Y1())) * (this.Dormant_HG_Y1() + this.CintrageHH_ON() * this.Dormant_HM_Y1() - this.Dormant_Imposte_Y2()));
                };
                Dormant.prototype.Dormant_Imposte_X3 = function () {
                    return this.Dormant_Imposte_ON() * (this.Total_Larg_Profile() + this.Dormant_HD_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_Imposte_Y2() < this.Dormant_HD_Y3()) * (this.Dormant_HD_X2() - this.Total_Larg_Profile() + (this.Dormant_Imposte_Y2() - this.Dormant_HD_Y2()) * Math.tan(this.Dormant_HD_Angle() * Math.PI / 180)) + (this.CintrageHH_ON() - this._Cercle_QuartG_ON - this._CercleH_QuartG_ON - this._Ellipse_QuartG_ON - this._EllipseH_QuartG_ON) * this.bool(this.Dormant_Imposte_Y2() < (this.Dormant_HD_Y3() + this.Dormant_HM_Y3())) * (this._Profile_Ext_Larg - this.Total_Larg2() * (1 + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) + this.Dormant_H_RayonX2() * Math.sqrt(1 - this.CintrageHH_ON() * Math.pow(this.Dormant_Imposte_ON() * this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Dormant_Imposte_Y2(), 2) / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - this.CintrageHH_ON()))));
                };
                Dormant.prototype.Dormant_Imposte_X30 = function () {
                    return this.Dormant_Imposte_ON() * (this.Total_Larg() + this.Dormant_HD_ON() * (1 - this.CintrageHH_ON()) * this.bool(this.Dormant_Imposte_Y2() < this.Dormant_HD_Y0()) * (this.Dormant_HD_X1() - this.Total_Larg() + (this.Dormant_Imposte_Y2() - this.Dormant_HD_Y1()) * Math.tan(this.Dormant_HD_Angle() * Math.PI / 180)) + (this.CintrageHH_ON() - this._Cercle_QuartG_ON - this._CercleH_QuartG_ON - this._Ellipse_QuartG_ON - this._EllipseH_QuartG_ON) * this.bool(this.Dormant_Imposte_Y2() < (this.Dormant_HD_Y0() + this.Dormant_HM_Y0())) * (-this.Total_Larg2() * (1 + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) + this.Dormant_H_RayonX1() * Math.sqrt(1 - this.CintrageHH_ON() * Math.pow(this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Dormant_Imposte_Y2(), 2) / (this.Dormant_H_RayonY1() * this.Dormant_H_RayonY1() + 1 - this.CintrageHH_ON()))));
                };
                Dormant.prototype.Dormant_Imposte_X03 = function () {
                    return this.Dormant_Imposte_ON() * (this.Dormant_Imposte_X3() + (this.Dormant_HD_ON() + this.CintrageHH_ON()) * this.bool(this.Dormant_Imposte_Y0() < (this.Dormant_HD_Y3() + this.CintrageHH_ON() * this.Dormant_HM_Y3())) * this.bool(this.Dormant_Imposte_Y2() > (this.Dormant_HD_Y3() + this.CintrageHH_ON() * this.Dormant_HM_Y3())) * (this.Dormant_HD_X3() + this.CintrageHH_ON() * this.Dormant_HM_X3() - this.Dormant_Imposte_X3()));
                };
                Dormant.prototype.Dormant_Imposte_X030 = function () {
                    return this.Dormant_Imposte_ON() * (this.Dormant_Imposte_X30() + (this.Dormant_HD_ON() + this.CintrageHH_ON()) * this.bool(this.Dormant_Imposte_Y0() < (this.Dormant_HD_Y0() + this.CintrageHH_ON() * this.Dormant_HM_Y0())) * this.bool(this.Dormant_Imposte_Y2() > (this.Dormant_HD_Y0() + this.CintrageHH_ON() * this.Dormant_HM_Y0())) * (this.Dormant_HD_X0() + this.CintrageHH_ON() * this.Dormant_HM_X0() - this.Dormant_Imposte_X30()));
                };
                Dormant.prototype.Dormant_Imposte_Y03 = function () {
                    return this.Dormant_Imposte_ON() * (this.Dormant_Imposte_Y2() + (this.Dormant_HD_ON() + this.CintrageHH_ON()) * this.bool(this.Dormant_Imposte_Y0() < (this.Dormant_HD_Y3() + this.CintrageHH_ON() * this.Dormant_HM_Y3())) * this.bool(this.Dormant_Imposte_Y2() > (this.Dormant_HD_Y3() + this.CintrageHH_ON() * this.Dormant_HM_Y3())) * (this.Dormant_HD_Y3() + this.CintrageHH_ON() * this.Dormant_HM_Y3() - this.Dormant_Imposte_Y2()));
                };
                Dormant.prototype.Dormant_Imposte_Y030 = function () {
                    return this.Dormant_Imposte_ON() * (this.Dormant_Imposte_Y2() + (this.Dormant_HD_ON() + this.CintrageHH_ON()) * this.bool(this.Dormant_Imposte_Y0() < (this.Dormant_HD_Y0() + this.CintrageHH_ON() * this.Dormant_HM_Y0())) * this.bool(this.Dormant_Imposte_Y2() > (this.Dormant_HD_Y0() + this.CintrageHH_ON() * this.Dormant_HM_Y0())) * (this.Dormant_HD_Y0() + this.CintrageHH_ON() * this.Dormant_HM_Y0() - this.Dormant_Imposte_Y2()));
                };
                Dormant.prototype.Dormant_Imposte_DY1 = function () {
                    return this.Dormant_Imposte_X0() - this.Dormant_Imposte_X1();
                };
                Dormant.prototype.Dormant_Imposte_LX1 = function () {
                    return this.Dormant_Imposte_Y12() - this.Dormant_Imposte_Y0();
                };
                Dormant.prototype.Dormant_Imposte_LY1 = function () {
                    return this.Dormant_Imposte_X1() - this.Dormant_Imposte_X12();
                };
                Dormant.prototype.Dormant_Imposte_LX2 = function () {
                    return this.Dormant_Imposte_Y2() - this.Dormant_Imposte_Y12();
                };
                Dormant.prototype.Dormant_Imposte_LY2 = function () {
                    return this.Dormant_Imposte_X2() - this.Dormant_Imposte_X12();
                };
                Dormant.prototype.Dormant_Imposte_DY2 = function () {
                    return this.Dormant_Imposte_X2() - this.Dormant_Imposte_X3();
                };
                Dormant.prototype.Dormant_Imposte_LX3 = function () {
                    return this.Dormant_Imposte_Y03() - this.Dormant_Imposte_Y2();
                };
                Dormant.prototype.Dormant_Imposte_LY3 = function () {
                    return this.Dormant_Imposte_X03() - this.Dormant_Imposte_X3();
                };
                Dormant.prototype.Dormant_Imposte_LX4 = function () {
                    return this.Dormant_Imposte_Y0() - this.Dormant_Imposte_Y03();
                };
                Dormant.prototype.Dormant_Imposte_LY4 = function () {
                    return this.Dormant_Imposte_X03() - this.Dormant_Imposte_X0();
                };
                Dormant.prototype.Dormant_Imposte_Trans_X = function () {
                    return this.Dormant_Imposte_X0();
                };
                Dormant.prototype.Dormant_Imposte_Trans_Y = function () {
                    return this.Dormant_Imposte_Y0();
                };
                Dormant.prototype.Dormant_Imposte_Rotate = function () {
                    return 90 * this.Dormant_Imposte_ON();
                };
                Dormant.prototype.Dormant_Allege_ON = function () {
                    //   console.log( "Allege ON   "+this._Allege_ON * this.bool(this.Allege_Haut() > (this._Allege_min * this._Profile_Ext_Larg)));
                    return this._Allege_ON * this.bool(this.Allege_Haut() > (this._Allege_min * this._Profile_Ext_Larg));
                };
                Dormant.prototype.Dormant_Allege_X0 = function () {
                    return this.Dormant_Allege_ON() * (this._Profile_Ext_Larg + this.Dormant_BG_ON() * this.bool((this.Total_Haut() - this.Allege_Haut()) > this.Dormant_BG_Y3()) * (this.Dormant_BG_X2() - this._Profile_Ext_Larg - (this.Dormant_BG_Y2() - this.Total_Haut() + this.Allege_Haut()) * Math.tan((this.Dormant_BG_Angle()) * Math.PI / 180)) + (this._ChanfreinG_ON + this._TriangleG_ON + this._TriangleG_H_ON + this._DemiOctogone_ON + this._DemiHexag_ON + this._Triangle_ON) * this.bool((this.Total_Haut() - this.Allege_Haut()) < this.Dormant_HG_Y2()) * (this.Dormant_HG_X2() - this._Profile_Ext_Larg + (this.Dormant_HG_Y2() - this.Dormant_Allege_Y0()) * Math.tan((this.Dormant_HG_Angle()) * Math.PI / 180)) + this.CintrageB_ON() * this.bool((this.Total_Haut() - this.Allege_Haut()) > this.Dormant_BM_Y3()) * (this.Total_Larg2() - this._Profile_Ext_Larg - this.Dormant_B_RayonX2() * Math.sqrt(1 - this.CintrageB_ON() * this.Dormant_Allege_ON() * (this.Dormant_B_RayonY1() - this.Allege_Haut()) * (this.Dormant_B_RayonY1() - this.Allege_Haut()) / (this.Dormant_B_RayonY2() * this.Dormant_B_RayonY2() + 1 - this.CintrageB_ON()))) + (this._Cercle_Demi_ON + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this.Gothiq_ON() + this._Ellipse_Demi_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) * this.bool((this.Total_Haut() - this.Allege_Haut()) < (this.Dormant_HM_Y2() + this.Dormant_HG_Y2())) * (this.Total_Larg2() * (1 + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this.Gothiq_ON() + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) - this._Profile_Ext_Larg - this.Dormant_H_RayonX2() * Math.sqrt(1 - this.CintrageHH_ON() * this.bool((this.Total_Haut() - this.Allege_Haut()) < (this.Dormant_HM_Y2() + this.Dormant_HG_Y2())) * Math.pow(this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Total_Haut() + this.Allege_Haut(), 2) / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - this.CintrageHH_ON()))));
                };
                Dormant.prototype.Dormant_Allege_X00 = function () {
                    return this.Dormant_Allege_ON() * (this.Dormant_BG_ON() * this.bool((this.Total_Haut() - this.Allege_Haut()) > this.Dormant_BG_Y0()) * (this.Dormant_BG_X1() - (this.Dormant_BG_Y1() - this.Total_Haut() + this.Allege_Haut()) * Math.tan((this.Dormant_BG_Angle()) * Math.PI / 180)) + (this._ChanfreinG_ON + this._TriangleG_ON + this._TriangleG_H_ON + this._DemiOctogone_ON + this._DemiHexag_ON + this._Triangle_ON) * this.bool((this.Total_Haut() - this.Allege_Haut()) < this.Dormant_HG_Y1()) * (this.Dormant_HG_X1() + (this.Dormant_HG_Y1() - this.Dormant_Allege_Y0()) * Math.tan((this.Dormant_HG_Angle()) * Math.PI / 180)) + this.CintrageB_ON() * this.bool((this.Total_Haut() - this.Allege_Haut()) > this.Dormant_BM_Y0()) * (this.Total_Larg2() - this.Dormant_B_RayonX1() * Math.sqrt(1 - this.CintrageB_ON() * this.Dormant_Allege_ON() * Math.pow(this.Dormant_B_RayonY1() - this.Allege_Haut(), 2) / (this.Dormant_B_RayonY1() * this.Dormant_B_RayonY1() + 1 - this.CintrageB_ON()))) + (this._Cercle_Demi_ON + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this.Gothiq_ON() + this._Ellipse_Demi_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) * this.bool((this.Total_Haut() - this.Allege_Haut()) < (this.Dormant_HM_Y1() + this.Dormant_HG_Y1())) * (this.Total_Larg2() * (1 + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this.Gothiq_ON() + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) - this.Dormant_H_RayonX1() * Math.sqrt(1 - this.CintrageHH_ON() * this.bool((this.Total_Haut() - this.Allege_Haut()) < (this.Dormant_HM_Y1() + this.Dormant_HG_Y1())) * Math.pow(this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Total_Haut() + this.Allege_Haut(), 2) / (this.Dormant_H_RayonY1() * this.Dormant_H_RayonY1() + 1 - this.CintrageHH_ON()))));
                };
                Dormant.prototype.Dormant_Allege_Y0 = function () {
                    return this.Dormant_Allege_ON() * (this.Total_Haut() - this.Allege_Haut());
                };
                Dormant.prototype.Dormant_Allege_X1 = function () {
                    return this.Dormant_Allege_ON() * (this.Total_Larg_Profile() + (this._ChanfreinD_ON + this._TriangleD_ON + this._TriangleD_H_ON) * this.bool(this.Dormant_Allege_Y0() < this.Dormant_HD_Y3()) * (this.Dormant_HD_X2() - this.Total_Larg_Profile() + (this.Dormant_Allege_Y0() - this.Dormant_HD_Y2()) * Math.tan((this.Dormant_HD_Angle()) * Math.PI / 180)) + (this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON + this._Triangle_ON + this._Losange_ON + this.CintrageH_ON() + this.CintrageB_ON()) * (this._Profile_Ext_Larg - this.Dormant_Allege_X0()) + (this._Cercle_Demi_ON + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_Demi_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) * this.bool(this.Dormant_Allege_Y0() < (this.Dormant_HD_Y3() + this.Dormant_HM_Y3())) * (this._Profile_Ext_Larg - this.Total_Larg2() * (1 + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) + this.Dormant_H_RayonX2() * Math.sqrt(1 - (this._Cercle_Demi_ON + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_Demi_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) * Math.pow(this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Dormant_Allege_Y0(), 2) / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - this.CintrageHH_ON()))));
                };
                Dormant.prototype.Dormant_Allege_X10 = function () {
                    return this.Dormant_Allege_ON() * (this.Total_Larg() + (this._ChanfreinD_ON + this._TriangleD_ON + this._TriangleD_H_ON) * this.bool(this.Dormant_Allege_Y0() < this.Dormant_HD_Y0()) * (this.Dormant_HD_X1() - this.Total_Larg() + (this.Dormant_Allege_Y0() - this.Dormant_HD_Y1()) * Math.tan((this.Dormant_HD_Angle()) * Math.PI / 180)) - (this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON + this._Triangle_ON + this._Losange_ON + this.CintrageH_ON() + this.CintrageB_ON()) * this.Dormant_Allege_X00() + (this._Cercle_Demi_ON + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_Demi_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) * this.bool(this.Dormant_Allege_Y0() < (this.Dormant_HD_Y0() + this.Dormant_HM_Y0())) * (-this.Total_Larg2() * (1 + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) + this.Dormant_H_RayonX1() * Math.sqrt(1 - this.CintrageHH_ON() * this.bool(this.Dormant_Allege_Y0() < (this.Dormant_HD_Y0() + this.Dormant_HM_Y0())) * Math.pow(this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Dormant_Allege_Y0(), 2) / (this.Dormant_H_RayonY1() * this.Dormant_H_RayonY1() + 1 - this.CintrageHH_ON()))));
                };
                Dormant.prototype.Dormant_Allege_X2 = function () {
                    return this.Dormant_Allege_ON() * (this.Total_Larg_Profile() + this.Dormant_BD_ON() * this.bool((this.Dormant_Allege_Y0() - this._Profile_Int_Larg) > this.Dormant_BD_Y2()) * (this.Dormant_BD_X3() - this.Total_Larg_Profile() + (this.Dormant_BD_Y3() - this.Dormant_Allege_Y0() + this._Profile_Int_Larg) * Math.tan((this.Dormant_BD_Angle()) * Math.PI / 180)) + (this._ChanfreinD_ON + this._TriangleD_ON + this._TriangleD_H_ON + this._DemiOctogone_ON + this._DemiHexag_ON + this._Triangle_ON) * this.bool((this.Dormant_Allege_Y0() - this._Profile_Int_Larg) < this.Dormant_HD_Y3()) * (this.Dormant_HD_X2() - this.Total_Larg_Profile() + (this.Dormant_Allege_Y0() - this._Profile_Int_Larg - this.Dormant_HD_Y2()) * Math.tan((this.Dormant_HD_Angle()) * Math.PI / 180)) + this.CintrageB_ON() * this.bool((this.Dormant_Allege_Y0() - this._Profile_Int_Larg) > this.Dormant_BM_Y3()) * (this._Profile_Ext_Larg - this.Total_Larg2() + this.Dormant_B_RayonX2() * Math.sqrt(1 - this.CintrageB_ON() * Math.pow(this.Dormant_B_RayonY1() - this.Allege_Haut() - this._Profile_Int_Larg, 2) / (this.Dormant_B_RayonY2() * this.Dormant_B_RayonY2() + 1 - this.CintrageB_ON()))) + (this._Cercle_Demi_ON + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_Demi_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) * this.bool((this.Dormant_Allege_Y0() - this._Profile_Int_Larg) < (this.Dormant_HD_Y3() + this.Dormant_HM_Y3())) * (this._Profile_Ext_Larg - this.Total_Larg2() * (1 + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) + this.Dormant_H_RayonX2() * Math.sqrt(1 - this.CintrageHH_ON() * this.bool((this.Dormant_Allege_Y0() - this._Profile_Int_Larg) < (this.Dormant_HD_Y3() + this.Dormant_HM_Y3())) * Math.pow(this.Dormant_Allege_ON() * this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) + this._Profile_Int_Larg - this.Dormant_Allege_Y0(), 2) / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - this.CintrageHH_ON()))));
                };
                Dormant.prototype.Dormant_Allege_X20 = function () {
                    return this.Dormant_Allege_ON() * (this.Total_Larg() + this.Dormant_BD_ON() * this.bool((this.Dormant_Allege_Y0() - this._Profile_Int_Larg) > this.Dormant_BD_Y1()) * (this.Dormant_BD_X0() - this.Total_Larg() + (this.Dormant_BD_Y0() - this.Dormant_Allege_Y0() + this._Profile_Int_Larg) * Math.tan((this.Dormant_BD_Angle()) * Math.PI / 180)) + (this._ChanfreinD_ON + this._TriangleD_ON + this._TriangleD_H_ON + this._DemiOctogone_ON + this._DemiHexag_ON + this._Triangle_ON) * this.bool((this.Dormant_Allege_Y0() - this._Profile_Int_Larg) < this.Dormant_HD_Y0()) * (this.Dormant_HD_X1() - this.Total_Larg() + (this.Dormant_Allege_Y0() - this._Profile_Int_Larg - this.Dormant_HD_Y1()) * Math.tan((this.Dormant_HD_Angle()) * Math.PI / 180)) - this.CintrageB_ON() * this.bool((this.Dormant_Allege_Y0() - this._Profile_Int_Larg) > this.Dormant_BM_Y0()) * (this.Total_Larg2() - this.Dormant_B_RayonX1() * Math.sqrt(1 - this.CintrageB_ON() * Math.pow(this.Dormant_B_RayonY1() - this.Allege_Haut() - this._Profile_Int_Larg, 2) / (this.Dormant_B_RayonY1() * this.Dormant_B_RayonY1() + 1 - this.CintrageB_ON()))) + (this._Cercle_Demi_ON + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_Demi_ON + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) * this.bool((this.Dormant_Allege_Y0() - this._Profile_Int_Larg) < (this.Dormant_HD_Y0() + this.Dormant_HM_Y0())) * (-this.Total_Larg2() * (1 + this._Cercle_QuartD_ON + this._CercleH_QuartD_ON + this.Gothiq_ON() + this._Ellipse_QuartD_ON + this._EllipseH_QuartD_ON) + this.Dormant_H_RayonX1() * Math.sqrt(1 - this.CintrageHH_ON() * this.bool((this.Dormant_Allege_Y0() - this._Profile_Int_Larg) < (this.Dormant_HD_Y0() + this.Dormant_HM_Y0())) * Math.pow(this.Dormant_Allege_ON() * this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Dormant_Allege_Y0() + this._Profile_Int_Larg, 2) / (this.Dormant_H_RayonY1() * this.Dormant_H_RayonY1() + 1 - this.CintrageHH_ON()))));
                };
                Dormant.prototype.Dormant_Allege_Y2 = function () {
                    return this.Dormant_Allege_ON() * (this.Dormant_Allege_Y0() - this._Profile_Int_Larg);
                };
                Dormant.prototype.Dormant_Allege_X12 = function () {
                    return this.Dormant_Allege_ON() * (this.Dormant_Allege_X2() + this.Dormant_BD_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_BD_Y2()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_BD_Y2()) * (this.Dormant_BD_X2() - this.Dormant_Allege_X2()) + this.Dormant_HD_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_HD_Y3()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_HD_Y3()) * (this.Dormant_HD_X3() - this.Dormant_Allege_X2()));
                };
                Dormant.prototype.Dormant_Allege_X120 = function () {
                    return this.Dormant_Allege_ON() * (this.Dormant_Allege_X20() + this.Dormant_BD_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_BD_Y1()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_BD_Y1()) * (this.Dormant_BD_X1() - this.Dormant_Allege_X20()) + this.Dormant_HD_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_HD_Y0()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_HD_Y0()) * (this.Dormant_HD_X0() - this.Dormant_Allege_X20()));
                };
                Dormant.prototype.Dormant_Allege_Y12 = function () {
                    return this.Dormant_Allege_ON() * (this.Dormant_Allege_Y2() + this.Dormant_BD_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_BD_Y2()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_BD_Y2()) * (this.Dormant_BD_Y2() - this.Dormant_Allege_Y2()) + this.Dormant_HD_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_HD_Y3()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_HD_Y3()) * (this.Dormant_HD_Y3() - this.Dormant_Allege_Y2()));
                };
                Dormant.prototype.Dormant_Allege_Y120 = function () {
                    return this.Dormant_Allege_ON() * (this.Dormant_Allege_Y2() + this.Dormant_BD_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_BD_Y1()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_BD_Y1()) * (this.Dormant_BD_Y1() - this.Dormant_Allege_Y2()) + this.Dormant_HD_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_HD_Y0()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_HD_Y0()) * (this.Dormant_HD_Y0() - this.Dormant_Allege_Y2()));
                };
                Dormant.prototype.Dormant_Allege_X3 = function () {
                    return this.Dormant_Allege_ON() * (this._Profile_Ext_Larg + (this._ChanfreinG_ON + this._TriangleG_ON + this._TriangleG_H_ON) * this.bool(this.Dormant_Allege_Y2() < this.Dormant_HG_Y2()) * (this.Dormant_HG_X2() - this._Profile_Ext_Larg + (this.Dormant_HG_Y2() - this.Dormant_Allege_Y2()) * Math.tan((this.Dormant_HG_Angle()) * Math.PI / 180)) + (this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON + this._Triangle_ON + this._Losange_ON + this.CintrageH_ON() + this.CintrageB_ON()) * (this.Total_Larg_Profile() - this.Dormant_Allege_X2()) + (this._Cercle_Demi_ON + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this._Gothique_ON + this._Gothique_H_ON + this._Ellipse_Demi_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) * this.bool(this.Dormant_Allege_Y2() < (this.Dormant_HM_Y2() + this.Dormant_HG_Y2())) * (this.Total_Larg2() * (1 + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this.Gothiq_ON() + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) - this._Profile_Ext_Larg - this.Dormant_H_RayonX2() * Math.sqrt(1 - this.CintrageHH_ON() * this.bool(this.Dormant_Allege_Y2() < (this.Dormant_HM_Y2() + this.Dormant_HG_Y2())) * Math.pow(this.Dormant_Allege_ON() * this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Dormant_Allege_Y2(), 2) / (this.Dormant_H_RayonY2() * this.Dormant_H_RayonY2() + 1 - this.CintrageHH_ON()))));
                };
                Dormant.prototype.Dormant_Allege_X30 = function () {
                    return this.Dormant_Allege_ON() * ((this._ChanfreinG_ON + this._TriangleG_ON + this._TriangleG_H_ON) * this.bool(this.Dormant_Allege_Y2() < this.Dormant_HG_Y1()) * (this.Dormant_HG_X1() + (this.Dormant_HG_Y1() - this.Dormant_Allege_Y2()) * Math.tan((this.Dormant_HG_Angle()) * Math.PI / 180)) + (this._DemiOctogone_ON + this._Octogone_ON + this._DemiHexag_ON + this._Hexagone_ON + this._Triangle_ON + this._Losange_ON + this.CintrageH_ON() + this.CintrageB_ON()) * (this.Total_Larg() - this.Dormant_Allege_X20()) + (this._Cercle_Demi_ON + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this._Gothique_ON + this._Gothique_H_ON + this._Ellipse_Demi_ON + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) * this.bool(this.Dormant_Allege_Y2() < (this.Dormant_HM_Y1() + this.Dormant_HG_Y1())) * (this.Total_Larg2() * (1 + this._Cercle_QuartG_ON + this._CercleH_QuartG_ON + this.Gothiq_ON() + this._Ellipse_QuartG_ON + this._EllipseH_QuartG_ON) - this.Dormant_H_RayonX1() * Math.sqrt(1 - this.CintrageHH_ON() * this.bool(this.Dormant_Allege_Y2() < (this.Dormant_HM_Y1() + this.Dormant_HG_Y1())) * Math.pow(this.Dormant_H_RayonY1() * (1 - 0.134 * this.Gothiq_ON()) - this.Dormant_Allege_Y2(), 2) / (this.Dormant_H_RayonY1() * this.Dormant_H_RayonY1() + 1 - this.CintrageHH_ON()))));
                };
                Dormant.prototype.Dormant_Allege_X03 = function () {
                    return this.Dormant_Allege_ON() * (this.Dormant_Allege_X3() + this.Dormant_BG_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_BG_Y3()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_BG_Y3()) * (this.Dormant_BG_X3() - this.Dormant_Allege_X3()) + this.Dormant_HG_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_HG_Y2()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_HG_Y2()) * (this.Dormant_HG_X2() - this.Dormant_Allege_X3()));
                };
                Dormant.prototype.Dormant_Allege_X030 = function () {
                    return this.Dormant_Allege_ON() * (this.Dormant_Allege_X30() + this.Dormant_BG_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_BG_Y0()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_BG_Y0()) * (this.Dormant_BG_X0() - this.Dormant_Allege_X30()) + this.Dormant_HG_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_HG_Y1()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_HG_Y1()) * (this.Dormant_HG_X1() - this.Dormant_Allege_X30()));
                };
                Dormant.prototype.Dormant_Allege_Y03 = function () {
                    return this.Dormant_Allege_ON() * (this.Dormant_Allege_Y2() + this.Dormant_BG_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_BG_Y3()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_BG_Y3()) * (this.Dormant_BG_Y3() - this.Dormant_Allege_Y2()) + this.Dormant_HG_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_HG_Y2()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_HG_Y2()) * (this.Dormant_HG_Y2() - this.Dormant_Allege_Y2()));
                };
                Dormant.prototype.Dormant_Allege_Y030 = function () {
                    return this.Dormant_Allege_ON() * (this.Dormant_Allege_Y2() + this.Dormant_BG_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_BG_Y0()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_BG_Y0()) * (this.Dormant_BG_Y0() - this.Dormant_Allege_Y2()) + this.Dormant_HG_ON() * this.bool(this.Dormant_Allege_Y2() < this.Dormant_HG_Y1()) * this.bool(this.Dormant_Allege_Y0() > this.Dormant_HG_Y1()) * (this.Dormant_HG_Y1() - this.Dormant_Allege_Y2()));
                };
                Dormant.prototype.Dormant_Allege_DY1 = function () {
                    return this.Dormant_Allege_X1() - this.Dormant_Allege_X0();
                };
                Dormant.prototype.Dormant_Allege_LX1 = function () {
                    return this.Dormant_Allege_Y0() - this.Dormant_Allege_Y12();
                };
                Dormant.prototype.Dormant_Allege_LY1 = function () {
                    return this.Dormant_Allege_X12() - this.Dormant_Allege_X1();
                };
                Dormant.prototype.Dormant_Allege_LX2 = function () {
                    return this.Dormant_Allege_Y12() - this.Dormant_Allege_Y2();
                };
                Dormant.prototype.Dormant_Allege_LY2 = function () {
                    return this.Dormant_Allege_X2() - this.Dormant_Allege_X12();
                };
                Dormant.prototype.Dormant_Allege_DY2 = function () {
                    return this.Dormant_Allege_X3() - this.Dormant_Allege_X2();
                };
                Dormant.prototype.Dormant_Allege_LX3 = function () {
                    return this.Dormant_Allege_Y2() - this.Dormant_Allege_Y03();
                };
                Dormant.prototype.Dormant_Allege_LY3 = function () {
                    return this.Dormant_Allege_X3() - this.Dormant_Allege_X03();
                };
                Dormant.prototype.Dormant_Allege_LX4 = function () {
                    return this.Dormant_Allege_Y03() - this.Dormant_Allege_Y0();
                };
                Dormant.prototype.Dormant_Allege_LY4 = function () {
                    return this.Dormant_Allege_X0() - this.Dormant_Allege_X03();
                };
                Dormant.prototype.Dormant_Allege_Trans_X = function () {
                    return this.Dormant_Allege_X0();
                };
                Dormant.prototype.Dormant_Allege_Trans_Y = function () {
                    return this.Dormant_Allege_Y0();
                };
                Dormant.prototype.Dormant_Allege_Rotate = function () {
                    return -90 * this.Dormant_Allege_ON();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.VueExt_ON = function () {
                    return this._VueExt_ONN;
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.VueExt_X0 = function () {
                    return this.VueExt_ON() * (this.Dormant_HM_ON() * this.Dormant_HM_X0() + (1 - this.Dormant_HM_ON()) * this.Dormant_HG_ON() * this.Dormant_HG_X0());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.VueExt_Y0 = function () {
                    return this.VueExt_ON() * (this.Dormant_HM_ON() * this.Dormant_HM_Y0() + (1 - this.Dormant_HM_ON()) * this.Dormant_HG_ON() * this.Dormant_HG_Y0());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.VueExt_X1 = function () {
                    return this.VueExt_ON() * (this.Dormant_HM_ON() * this.Dormant_HM_X1() + (1 - this.Dormant_HM_ON()) * this.Dormant_HG_ON() * this.Dormant_HG_X1());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.VueExt_Y1 = function () {
                    return this.VueExt_ON() * (this.Dormant_HM_ON() * this.Dormant_HM_Y1() + (1 - this.Dormant_HM_ON()) * this.Dormant_HG_ON() * this.Dormant_HG_Y1());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.VueExt_X2 = function () {
                    return this.VueExt_ON() * (this.Dormant_HG_ON() * this.Dormant_HG_X1() + (1 - this.Dormant_HG_ON()) * this.VueExt_X1());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.VueExt_Y2 = function () {
                    return this.VueExt_ON() * (this.Dormant_HG_ON() * this.Dormant_HG_Y1() + (1 - this.Dormant_HG_ON()) * this.VueExt_Y1());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.VueExt_X3 = function () {
                    return this.VueExt_ON() * (this.Dormant_GG_ON() * this.Dormant_GG_X1() + (1 - this.Dormant_GG_ON()) * this.VueExt_X2());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.VueExt_Y3 = function () {
                    return this.VueExt_ON() * (this.Dormant_GG_ON() * this.Dormant_GG_Y1() + (1 - this.Dormant_GG_ON()) * this.VueExt_Y2());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.VueExt_X4 = function () {
                    return this.VueExt_ON() * (this.Dormant_BG_ON() * this.Dormant_BG_X1() + (1 - this.Dormant_BG_ON()) * this.VueExt_X3());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.VueExt_Y4 = function () {
                    return this.VueExt_ON() * (this.Dormant_BG_ON() * this.Dormant_BG_Y1() + (1 - this.Dormant_BG_ON()) * this.VueExt_Y3());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.VueExt_X5 = function () {
                    return this.VueExt_ON() * (this.Dormant_BM_ON() * this.Dormant_BM_X1() + (1 - this.Dormant_BM_ON()) * this.VueExt_X4());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.VueExt_Y5 = function () {
                    return this.VueExt_ON() * (this.Dormant_BM_ON() * this.Dormant_BM_Y1() + (1 - this.Dormant_BM_ON()) * this.VueExt_Y4());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.VueExt_X6 = function () {
                    return this.VueExt_ON() * this.Total_Larg();
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.VueExt_Y6 = function () {
                    return this.VueExt_ON() * ((1 - this._Porte_ON) * (this.Dormant_BD_ON() * this.Dormant_BD_Y1() + (1 - this.Dormant_BD_ON()) * this.VueExt_Y5()) + this._Porte_ON * this.Total_Haut());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.VueExt_X7 = function () {
                    return this.VueExt_ON() * (this.Dormant_DD_ON() * this.Dormant_DD_X1() + (1 - this.Dormant_DD_ON()) * this.VueExt_X6());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.VueExt_Y7 = function () {
                    return this.VueExt_ON() * (this.Dormant_DD_ON() * this.Dormant_DD_Y1() + (1 - this.Dormant_DD_ON()) * this.VueExt_Y6());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.VueExt_X8 = function () {
                    return this.VueExt_ON() * (this.Dormant_HD_ON() * this.Dormant_HD_X1() + (1 - this.Dormant_HD_ON()) * this.VueExt_X7());
                };
                /**
                 *
                 * @returns {number}
                 * @constructor
                 */
                Dormant.prototype.VueExt_Y8 = function () {
                    return this.VueExt_ON() * (this.Dormant_HD_ON() * this.Dormant_HD_Y1() + (1 - this.Dormant_HD_ON()) * this.VueExt_Y7());
                };
                /**
                 *
                 * @param value
                 */
                Dormant.prototype.setType2 = function (value) {
                    this.Allege_ON = value;
                    this.Imposte_ON = value;
                    this.LD_ON = value;
                    this.LG_ON = value;
                };
                /**
                 *
                 * @param b
                 * @returns {number}
                 */
                Dormant.prototype.bool = function (b) {
                    return b ? 1 : 0;
                };
                /**
                 *
                 * @returns {Dormant}
                 */
                Dormant.prototype.getObject = function () {
                    return this;
                };
                /**
                 *
                 * @returns {boolean}
                 */
                Dormant.prototype.getSTatus = function () {
                    return (this.EllipseH_QuartD_ON + this.EllipseH_QuartG_ON + this.Ellipse_QuartG_ON + this.Ellipse_QuartD_ON > 0);
                };
                return Dormant;
            }());
            exports_1("Dormant", Dormant);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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NEJBQVUsR0FBVjtvQkFDSSxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7b0JBRTU1QixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtnQkFDdDVCLENBQUM7Z0JBQ0QsOEJBQVksR0FBWjtvQkFDSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxD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QUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQ25oQyxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILGdDQUFjLEdBQWQ7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUE7Z0JBQy9HLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsZ0NBQWMsR0FBZDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDdlksQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxnQ0FBYyxHQUFkO29CQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQ3RPLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsZ0NBQWMsR0FBZDtvQkFDSSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUE7Z0JBQ3ZsQixDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILGdDQUFjLEdBQWQ7b0JBQ0ksTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQzFJLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsZ0NBQWMsR0FBZDtvQkFDSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQTtnQkFDM0QsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxnQ0FBYyxHQUFkO29CQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO2dCQUNqRixDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILG9DQUFrQixHQUFsQjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtnQkFDeEQsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxvQ0FBa0IsR0FBbEI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQTtnQkFDakYsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxtQ0FBaUIsR0FBakI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtnQkFDekQsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCwrQkFBYSxHQUFiO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUE7Z0JBQy9jLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsK0JBQWEsR0FBYjtvQkFDSSxNQUFNLENBQUMsQ0FBQyxDQUFBO2dCQUNaLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsK0JBQWEsR0FBYjtvQkFDSSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFBO2dCQUN2UyxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILCtCQUFhLEdBQWI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtnQkFDL0IsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCwrQkFBYSxHQUFiO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUE7Z0JBQ3JLLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsK0JBQWEsR0FBYjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQTtnQkFDeEQsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCwrQkFBYSxHQUFiO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUE7Z0JBQy9QLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsK0JBQWEsR0FBYjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO2dCQUMvQixDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILCtCQUFhLEdBQWI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNyZ0MsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxnQ0FBYyxHQUFkO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO2dCQUN0RCxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILGdDQUFjLEdBQWQ7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUE7Z0JBQ3hELENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsZ0NBQWMsR0FBZDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtnQkFDdEQsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxnQ0FBYyxHQUFkO29CQUNJLE1BQU0sQ0FBQyxDQUFDLENBQUE7Z0JBQ1osQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxnQ0FBYyxHQUFkO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO2dCQUN0RCxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILGdDQUFjLEdBQWQ7b0JBQ0ksTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO2dCQUNqQyxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILGdDQUFjLEdBQWQ7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7Z0JBQ3RELENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsb0NBQWtCLEdBQWxCO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7Z0JBQy9CLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsb0NBQWtCLEdBQWxCO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7Z0JBQy9CLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsbUNBQWlCLEdBQWpCO29CQUNJLE1BQU0sQ0FBQyxDQUFDLENBQUE7Z0JBQ1osQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCwrQkFBYSxHQUFiO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7Z0JBQ2xHLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsK0JBQWEsR0FBYjtvQkFDSSxNQUFNLENBQUMsQ0FBQyxDQUFBO2dCQUNaLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsK0JBQWEsR0FBYjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFBO2dCQUM5RSxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILCtCQUFhLEdBQWI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7Z0JBQ3hELENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsK0JBQWEsR0FBYjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtnQkFDbkQsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCwrQkFBYSxHQUFiO29CQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtnQkFDN0ssQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCwrQkFBYSxHQUFiO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUNoSyxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILCtCQUFhLEdBQWI7b0JBQ0ksTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3hyQixDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILCtCQUFhLEdBQWI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUE7Z0JBQzNLLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsZ0NBQWMsR0FBZDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUE7Z0JBQzFJLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsZ0NBQWMsR0FBZDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQTtnQkFDeEQsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxnQ0FBYyxHQUFkO29CQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7Z0JBQ2xPLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsZ0NBQWMsR0FBZDtvQkFDSSxNQUFNLENBQUMsQ0FBQyxDQUFBO2dCQUNaLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsZ0NBQWMsR0FBZDtvQkFDSSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDMUksQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxnQ0FBYyxHQUFkO29CQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtnQkFDakMsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxnQ0FBYyxHQUFkO29CQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO2dCQUNqRixDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILG9DQUFrQixHQUFsQjtvQkFDSSxNQUFNLENBQUMsQ0FBQyxDQUFBO2dCQUNaLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsb0NBQWtCLEdBQWxCO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUE7Z0JBQ25ILENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsbUNBQWlCLEdBQWpCO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQTtnQkFDakUsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCwrQkFBYSxHQUFiO29CQUNJLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7Z0JBQzVFLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsK0JBQWEsR0FBYjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7Z0JBQ3JELENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsK0JBQWEsR0FBYjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFBO2dCQUM3RSxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILCtCQUFhLEdBQWI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFBO2dCQUNsRyxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILCtCQUFhLEdBQWI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtnQkFDL0IsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCwrQkFBYSxHQUFiO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNoMEIsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCwrQkFBYSxHQUFiO29CQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO2dCQUNuSixDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILCtCQUFhLEdBQWI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDdnBCLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsK0JBQWEsR0FBYjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO2dCQUMvQixDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILGdDQUFjLEdBQWQ7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7Z0JBQ3RELENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsZ0NBQWMsR0FBZDtvQkFDSSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFBO2dCQUNoRixDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILGdDQUFjLEdBQWQ7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7Z0JBQ3RELENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsZ0NBQWMsR0FBZDtvQkFDSSxNQUFNLENBQUMsQ0FBQyxDQUFBO2dCQUNaLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsZ0NBQWMsR0FBZDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtnQkFDdEQsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxnQ0FBYyxHQUFkO29CQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtnQkFDakMsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxnQ0FBYyxHQUFkO29CQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO2dCQUNqRixDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILG9DQUFrQixHQUFsQjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO2dCQUMvQixDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILG9DQUFrQixHQUFsQjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQTtnQkFDbkcsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxtQ0FBaUIsR0FBakI7b0JBQ0ksTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7Z0JBQ3JDLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsK0JBQWEsR0FBYjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO2dCQUNsRyxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILCtCQUFhLEdBQWI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQTtnQkFDOUUsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCwrQkFBYSxHQUFiO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO2dCQUNuRCxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILCtCQUFhLEdBQWI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7Z0JBQ25ELENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsK0JBQWEsR0FBYjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7Z0JBQ3RJLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsK0JBQWEsR0FBYjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ24wQixDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILCtCQUFhLEdBQWI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQzdKLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsK0JBQWEsR0FBYjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtnQkFDckosQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCwrQkFBYSxHQUFiO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQTtnQkFDckksQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxnQ0FBYyxHQUFkO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUE7Z0JBQzlKLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsZ0NBQWMsR0FBZDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQTtnQkFDeEQsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxnQ0FBYyxHQUFkO29CQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtnQkFDL2YsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxnQ0FBYyxHQUFkO29CQUNJLE1BQU0sQ0FBQyxDQUFDLENBQUE7Z0JBQ1osQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxnQ0FBYyxHQUFkO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUE7Z0JBQzlKLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsZ0NBQWMsR0FBZDtvQkFDSSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7Z0JBQ2pDLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsZ0NBQWMsR0FBZDtvQkFDSSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtnQkFDakYsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxvQ0FBa0IsR0FBbEI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQTtnQkFDOUUsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxvQ0FBa0IsR0FBbEI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7Z0JBQ25ELENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsbUNBQWlCLEdBQWpCO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQTtnQkFDakUsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCwrQkFBYSxHQUFiO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUE7Z0JBQy9jLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsK0JBQWEsR0FBYjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtnQkFDbkQsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCwrQkFBYSxHQUFiO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUE7Z0JBQ3JLLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsK0JBQWEsR0FBYjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO2dCQUMvQixDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILCtCQUFhLEdBQWI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQTtnQkFDcFcsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCwrQkFBYSxHQUFiO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUE7Z0JBQzNELENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsK0JBQWEsR0FBYjtvQkFDSSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQzU0QixDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILCtCQUFhLEdBQWI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtnQkFDL0IsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCwrQkFBYSxHQUFiO29CQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtnQkFDdFEsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxnQ0FBYyxHQUFkO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO2dCQUN0RCxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILGdDQUFjLEdBQWQ7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUE7Z0JBQ3hELENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsZ0NBQWMsR0FBZDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtnQkFDdEQsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxnQ0FBYyxHQUFkO29CQUNJLE1BQU0sQ0FBQyxDQUFDLENBQUE7Z0JBQ1osQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxnQ0FBYyxHQUFkO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO2dCQUN0RCxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILGdDQUFjLEdBQWQ7b0JBQ0ksTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO2dCQUNqQyxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILGdDQUFjLEdBQWQ7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7Z0JBQ3RELENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsb0NBQWtCLEdBQWxCO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO2dCQUNuRCxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILG9DQUFrQixHQUFsQjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO2dCQUMvQixDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILG1DQUFpQixHQUFqQjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLEdBQUcsQ0FBQTtnQkFDckMsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCwrQkFBYSxHQUFiO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUE7Z0JBQ3hWLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsK0JBQWEsR0FBYjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtnQkFDbkQsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCwrQkFBYSxHQUFiO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO2dCQUN4RCxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILCtCQUFhLEdBQWI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztnQkFDL0UsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCwrQkFBYSxHQUFiO29CQUNJLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCwrQkFBYSxHQUFiO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBRSxDQUFDO2dCQUMvVSxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILCtCQUFhLEdBQWI7b0JBQ0ksTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3BlLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsK0JBQWEsR0FBYjtvQkFDSSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUUsQ0FBQztnQkFDcGxDLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsK0JBQWEsR0FBYjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO2dCQUNoZSxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILGdDQUFjLEdBQWQ7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO2dCQUMvSSxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILGdDQUFjLEdBQWQ7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN2Z0IsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxnQ0FBYyxHQUFkO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEdBQUcs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QUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFFL0ssTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7b0JBQ3hELENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxH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QU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO29CQUN4RCxDQUFDO29CQUNELElBQUksQ0FBQyxDQUFDO3dCQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoaUMsQ0FBQztnQkFDTCxDQUFDO2dCQUVELGdDQUFjLEdBQWQ7b0JBRUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBRWpMLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQy9CLENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2wxQixDQUFDO2dCQUNMLENBQUM7Z0JBRUQsZ0NBQWMsR0FBZDtvQkFFSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUU3UyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO29CQUM5VCxDQUFDO29CQUNELElBQUksQ0FBQyxDQUFDO3dCQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUMz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QUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUVqVCxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztvQkFDL1QsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFFRixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJ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QUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVnQyxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsZ0NBQWMsR0FBZDtvQkFFSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFFakwsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDL0IsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFFRixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFD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QUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOWdDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxnQ0FBYyxHQUFkO29CQUVJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUVqTCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUMvQixDQUFDO29CQUNELElBQUksQ0FBQyxDQUFDO3dCQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsR0FB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QUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFFN1MsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztvQkFDL1MsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFFRixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFh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LEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBRWpULE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7b0JBQ3JULENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxJQUFJLENBQUMs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QyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxD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LENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDaHJDLENBQUM7Z0JBRUQscUNBQW1CLEdBQW5CO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNybUMsQ0FBQztnQkFFRCxvQ0FBa0IsR0FBbEI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUE7Z0JBQzNGLENBQUM7Z0JBRUQscUNBQW1CLEdBQW5CO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDamIsQ0FBQztnQkFFRCxzQ0FBb0IsR0FBcEI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUNuYixDQUFDO2dCQUVELHFDQUFtQixHQUFuQjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFFLENBQUE7Z0JBQ2xiLENBQUM7Z0JBRUQsc0NBQW9CLEdBQXBCO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUUsQ0FBQTtnQkFDbGIsQ0FBQztnQkFFRCxvQ0FBa0IsR0FBbEI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFF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TUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUNuYixDQUFDO2dCQUVELHFDQUFtQixHQUFuQjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcs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QUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ2g1RCxDQUFDO2dCQUVELG9DQUFrQixHQUFsQjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDNXVELENBQUM7Z0JBRUQsbUNBQWlCLEdBQWpCO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQTtnQkFDOUUsQ0FBQztnQkFFRCxtQ0FBaUIsR0FBakI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNsNEMsQ0FBQztnQkFFRCxvQ0FBa0IsR0FBbEI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNsd0MsQ0FBQztnQkFFRCxtQ0FBaUIsR0FBakI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ2gvRCxDQUFDO2dCQUVELG9DQUFrQixHQUFsQjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFB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YUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDbjNDLENBQUM7Z0JBRUQsb0NBQWtCLEdBQWxCO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3J3QyxDQUFDO2dCQUVELG9DQUFrQixHQUFsQjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQzFjLENBQUM7Z0JBRUQscUNBQW1CLEdBQW5CO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDN2MsQ0FBQztnQkFFRCxvQ0FBa0IsR0FBbEI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUMxYyxDQUFDO2dCQUVELHFDQUFtQixHQUFuQjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQzFjLENBQUM7Z0JBRUQsb0NBQWtCLEdBQWxCO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtnQkFDOUQsQ0FBQztnQkFFRCxvQ0FBa0IsR0FBbEI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO2dCQUMvRCxDQUFDO2dCQUVELG9DQUFrQixHQUFsQjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7Z0JBQy9ELENBQUM7Z0JBRUQsb0NBQWtCLEdBQWxCO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtnQkFDL0QsQ0FBQztnQkFFRCxvQ0FBa0IsR0FBbEI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO2dCQUMvRCxDQUFDO2dCQUVELG9DQUFrQixHQUFsQjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7Z0JBQzlELENBQUM7Z0JBRUQsb0NBQWtCLEdBQWxCO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtnQkFDL0QsQ0FBQztnQkFFRCxvQ0FBa0IsR0FBbEI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO2dCQUMvRCxDQUFDO2dCQUVELG9DQUFrQixHQUFsQjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7Z0JBQy9ELENBQUM7Z0JBRUQsb0NBQWtCLEdBQWxCO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtnQkFDL0QsQ0FBQztnQkFFRCx3Q0FBc0IsR0FBdEI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO2dCQUNuQyxDQUFDO2dCQUVELHdDQUFzQixHQUF0QjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7Z0JBQ25DLENBQUM7Z0JBRUQsdUNBQXFCLEdBQXJCO29CQUNJLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtnQkFDekMsQ0FBQztnQkFHRDs7OzttQkFJRztnQkFDSCwyQkFBUyxHQUFUO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFBO2dCQUMzQixDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILDJCQUFTLEdBQVQ7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFBO2dCQUN0SixDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILDJCQUFTLEdBQVQ7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFBO2dCQUN0SixDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILDJCQUFTLEdBQVQ7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFBO2dCQUN0SixDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILDJCQUFTLEdBQVQ7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFBO2dCQUN0SixDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILDJCQUFTLEdBQVQ7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUE7Z0JBQzNILENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsMkJBQVMsR0FBVDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQTtnQkFDM0gsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCwyQkFBUyxHQUFUO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFBO2dCQUMzSCxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILDJCQUFTLEdBQVQ7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUE7Z0JBQzNILENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsMkJBQVMsR0FBVDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQTtnQkFDM0gsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCwyQkFBUyxHQUFUO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFBO2dCQUMzSCxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILDJCQUFTLEdBQVQ7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUE7Z0JBQzNILENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsMkJBQVMsR0FBVDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQTtnQkFDM0gsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCwyQkFBUyxHQUFUO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO2dCQUMvQyxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILDJCQUFTLEdBQVQ7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQTtnQkFDekwsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCwyQkFBUyxHQUFUO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFBO2dCQUMzSCxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILDJCQUFTLEdBQVQ7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUE7Z0JBQzNILENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsMkJBQVMsR0FBVDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQTtnQkFDM0gsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCwyQkFBUyxHQUFUO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFBO2dCQUMzSCxDQUFDO2dCQUVEOzs7bUJBR0c7Z0JBQ0ksMEJBQVEsR0FBZixVQUFnQixLQUFZO29CQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFFdkIsQ0FBQztnQkFHRDs7OzttQkFJRztnQkFDSCxzQkFBSSxHQUFKLFVBQUssQ0FBUztvQkFDVixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLENBQUM7Z0JBRUQ7OzttQkFHRztnQkFDSSwyQkFBUyxHQUFoQjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO2dCQUVEOzs7bUJBR0c7Z0JBQ0ksMkJBQVMsR0FBaEI7b0JBRUksTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUVySCxDQUFDO2dCQUNMLGNBQUM7WUFBRCxDQXB6SkEsQUFvekpDLElBQUE7WUFwekpELDZCQW96SkMsQ0FBQSIsImZpbGUiOiJtb2RlbGVzL2Rvcm1hbnQvRG9ybWFudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIF9fX18gX19fIF9fICBfXyBfICAgXyBfICAgICBfX19fXyBfX18gICBfXyAgICAgX19fX19fX1xyXG4gLyBfX198XyBffCAgXFwvICB8IHwgfCB8IHwgICB8IF9fX18vIF8gXFwgIFxcIFxcICAgLyB8X19fIC9cclxuIFxcX19fIFxcfCB8fCB8XFwvfCB8IHwgfCB8IHwgICB8ICBffHwgfCB8IHwgIFxcIFxcIC8gLyAgfF8gXFxcclxuIF9fXykgfCB8fCB8ICB8IHwgfF98IHwgfF9fX3wgfF9ffCB8X3wgfCAgIFxcIFYgLyAgX19fKSB8XHJcbiB8X19fX3xfX198X3wgIHxffFxcX19fL3xfX19fX3xfX19fX1xcX19fLyAgICAgXFxfLyAgfF9fX18vXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRG9ybWFudCB7XHJcbiAgICBnZXQgaGF1dGV1cigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhdXRldXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGhhdXRldXIodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5faGF1dGV1ciA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGxhcmdldXIoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYXJnZXVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBsYXJnZXVyKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2xhcmdldXIgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8qbGlzdCBvZiBhdHRyaWJ1dGVzIEJlZ2luKi9cclxuICAgIHByaXZhdGUgX1gwOm51bWJlcjsgIC8qdGhpcyovXHJcbiAgICBwcml2YXRlIF9ZMDpudW1iZXI7IC8qdGhpcyovXHJcbiAgICBwcml2YXRlIF9Qcm9maWxlX0V4dF9MYXJnOm51bWJlcjsgLyp0aGlzKi9cclxuICAgIHByaXZhdGUgX1Byb2ZpbGVfSW50X0xhcmc6bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfUHJvZmlsZV9PdXZfTGFyZzpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9QYXJjbG9zZV9MYXJnOm51bWJlcjtcclxuICAgIHByaXZhdGUgX0NlbnRyZV9MYXJnOm51bWJlcjsgIC8qdGhpcyovXHJcbiAgICBwcml2YXRlIF9DZW50cmVfSGF1dDpudW1iZXI7ICAvKnRoaXMqL1xyXG4gICAgcHJpdmF0ZSBfUmVjdF9PTjpudW1iZXI7ICAvKnRoaXMqL1xyXG4gICAgcHJpdmF0ZSBfQ2hhbmZyZWluR19PTjpudW1iZXI7ICAvKnRoaXMgIGluYyBnYXVjaGUgdG90YWxlKi9cclxuICAgIHByaXZhdGUgX0NoYW5mcmVpbkdfUG91cmNlbnRfSGF1dDpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9DaGFuZnJlaW5HX1BvdXJjZW50X0xhcmc6bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfQ2hhbmZyZWluRF9PTjpudW1iZXI7ICAvKnRoaXMgZHJvaXRlIHRvdGFsZSAqL1xyXG4gICAgcHJpdmF0ZSBfQ2hhbmZyZWluRF9Qb3VyY2VudF9IYXV0Om51bWJlcjtcclxuICAgIHByaXZhdGUgX0NoYW5mcmVpbkRfUG91cmNlbnRfTGFyZzpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9UcmlhbmdsZUdfT046bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfVHJpYW5nbGVHX0hfT046bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfVHJpYW5nbGVHX0hfUG91cmNlbnRfSGF1dDpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9UcmlhbmdsZURfT046bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfVHJpYW5nbGVEX0hfT046bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfVHJpYW5nbGVEX0hfUG91cmNlbnRfSGF1dDpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9EZW1pT2N0b2dvbmVfT046bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfRGVtaU9jdG9nb25lX1BvdXJjZW50X0hhdXQ6bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfRGVtaU9jdG9nb25lX1BvdXJjZW50X0xhcmc6bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfT2N0b2dvbmVfT046bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfT2N0b2dvbmVfUG91cmNlbnRfSGF1dDpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9PY3RvZ29uZV9Qb3VyY2VudF9MYXJnOm51bWJlcjtcclxuICAgIHByaXZhdGUgX0RlbWlIZXhhZ19PTjpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9EZW1pSGV4YWdsX1BvdXJjZW50X0hhdXQ6bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfSGV4YWdvbmVfT046bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfSGV4YWdvbmVfUG91cmNlbnRfSGF1dDpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9UcmlhbmdsZV9PTjpudW1iZXI7ICAvKnRoaXMgdHJpYW5nbGUgdG90YWwqL1xyXG4gICAgcHJpdmF0ZSBfTG9zYW5nZV9PTjpudW1iZXI7IC8qdGhpcyBsb3NhbmdlIHRvdGFsKi9cclxuICAgIHByaXZhdGUgX092YWxlX09OOm51bWJlcjsgIC8qdGhpcyBvdmFsZSovXHJcbiAgICBwcml2YXRlIF9PdmFsZV9Qb3VyY2VudF9IYXV0Om51bWJlcjtcclxuICAgIHByaXZhdGUgX1JvbmRfT046bnVtYmVyOyAgLyp0aGlzICBSb25kZSovXHJcbiAgICBwcml2YXRlIF9DZXJjbGVfRGVtaV9PTjpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9DZXJjbGVIX0RlbWlfT046bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfQXJjSF9PTjpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9DZXJjbGVfUXVhcnRHX09OOm51bWJlcjtcclxuICAgIHByaXZhdGUgX0NlcmNsZUhfUXVhcnRHX09OOm51bWJlcjtcclxuICAgIHByaXZhdGUgX0NlcmNsZV9RdWFydERfT046bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfQ2VyY2xlSF9RdWFydERfT046bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfQ2ludHJhZ2VfUG91cmNlbnRfSGF1dDpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9Hb3RoaXF1ZV9PTjpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9Hb3RoaXF1ZV9IX09OOm51bWJlcjtcclxuICAgIHByaXZhdGUgX0dvdGhpcXVlX0hfX1BvdXJjZW50X0hhdXQ6bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfRWxsaXBzZV9PTjpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9FbGxpcHNlX0RlbWlfT046bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfRWxsaXBzZUhfRGVtaV9PTjpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9FbGxpcHNlX1F1YXJ0R19PTjpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9FbGxpcHNlSF9RdWFydEdfT046bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfRWxsaXBzZV9RdWFydERfT046bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfRWxsaXBzZUhfUXVhcnREX09OOm51bWJlcjtcclxuICAgIHByaXZhdGUgX0VsbGlwc2VfUG91cmNlbnRfSGF1dDpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9DaGFwZWF1X09OOm51bWJlcjtcclxuICAgIHByaXZhdGUgX1BvcnRlX09OOm51bWJlcjtcclxuICAgIHByaXZhdGUgX1BvcnRlX1BvdXJjZW50Om51bWJlcjtcclxuICAgIHByaXZhdGUgX0ltcG9zdGVfT046bnVtYmVyOyAgLyp0aGlzIGltcG9zdGUqL1xyXG4gICAgcHJpdmF0ZSBfSW1wb3N0ZV9Qb3VyY2VudDpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9JbXBvc3RlX21pbjpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9BbGxlZ2VfT046bnVtYmVyOyAgIC8qdGhpcyAgYWxsZWdlKi9cclxuICAgIHByaXZhdGUgX0FsbGVnZV9Qb3VyY2VudDpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9BbGxlZ2VfbWluOm51bWJlcjtcclxuICAgIHByaXZhdGUgX0ltcG9zdGVfbWluOm51bWJlcjtcclxuICAgIHByaXZhdGUgX0xHX09OOm51bWJlcjsgIC8qdGhpcyAgbGF0ZXJhbCBnYXVjaGUqL1xyXG4gICAgcHJpdmF0ZSBfTEdfUG91cmNlbnQ6bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfTEdfbWluOm51bWJlcjtcclxuICAgIHByaXZhdGUgX0xEX09OOm51bWJlcjsgIC8qdGhpcyBsYXRlcmFsIGRyb2l0ZSovXHJcbiAgICBwcml2YXRlIF9MRF9Qb3VyY2VudDpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9MRF9taW46bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfVnVlRXh0X09OTjpudW1iZXI7ICAvKnRoaXMgbW9kZSBleHRlcmlldXIqL1xyXG4gICAgcHJpdmF0ZSBfQ3JvaXNfTEdfSW1wX09OOm51bWJlcjtcclxuICAgIHByaXZhdGUgX0Nyb2lzX0xHX0FsbF9PTjpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9Dcm9pc19MRF9JbXBfT046bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfQ3JvaXNfTERfQWxsX09OOm51bWJlcjtcclxuICAgIHByaXZhdGUgX0Nyb2lzX0ltcF9MR19PTjpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9Dcm9pc19JbXBfTERfT046bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfQ3JvaXNfQWxsX0xHX09OOm51bWJlcjtcclxuICAgIHByaXZhdGUgX0Nyb2lzX0FsbF9MRF9PTjpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9Db3VsZXVyX0ZpbGw6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfQ291bGV1cl9TdHJva2U6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfU3Ryb2tlX3dpZHRoOm51bWJlcjtcclxuICAgIHByaXZhdGUgX1N0cm9rZV9vcGFjaXR5Om51bWJlcjtcclxuICAgIHByaXZhdGUgX0NvdWxldXJfT21icmU6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfU2V1aWxfU3Ryb2tlOnN0cmluZztcclxuICAgIHByaXZhdGUgX1NldWlsX1N0cm9rZV9XaWR0aDpudW1iZXI7XHJcbiAgICBwcml2YXRlIF9Db3VsZXVyX0x1bWllcmU6c3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgX2hhdXRldXI6bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfbGFyZ2V1cjpudW1iZXI7XHJcblxyXG5cclxuICAgIC8qbGlzdCBvZiBhdHRyaWJ1dGVzIEVORCovXHJcblxyXG5cclxuXHJcbiAgICAvKmxpc3Qgb2YgR2V0dGVyIGFuZCBTZXR0ZXIgQmVnaW4qL1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgR290aGlxdWVfSF9fUG91cmNlbnRfSGF1dCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dvdGhpcXVlX0hfX1BvdXJjZW50X0hhdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBzZXQgR290aGlxdWVfSF9fUG91cmNlbnRfSGF1dCh2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9Hb3RoaXF1ZV9IX19Qb3VyY2VudF9IYXV0ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIGdldCBYMCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1gwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgc2V0IFgwKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX1gwID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIGdldCBZMCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1kwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgc2V0IFkwKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX1kwID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIGdldCBQcm9maWxlX0V4dF9MYXJnKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fUHJvZmlsZV9FeHRfTGFyZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHNldCBQcm9maWxlX0V4dF9MYXJnKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgZ2V0IFBhcmNsb3NlX0xhcmcoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9QYXJjbG9zZV9MYXJnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgc2V0IFBhcmNsb3NlX0xhcmcodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fUGFyY2xvc2VfTGFyZyA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBnZXQgQ2VudHJlX0xhcmcoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9DZW50cmVfTGFyZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHNldCBDZW50cmVfTGFyZyh2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9DZW50cmVfTGFyZyA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBnZXQgQ2VudHJlX0hhdXQoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9DZW50cmVfSGF1dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHNldCBDZW50cmVfSGF1dCh2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9DZW50cmVfSGF1dCA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBnZXQgQ2hhbmZyZWluR19PTigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NoYW5mcmVpbkdfT047XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBzZXQgQ2hhbmZyZWluR19PTih2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldEFsbEVYKCk7XHJcbiAgICAgICAgdGhpcy5fQ2hhbmZyZWluR19PTiA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBnZXQgQ2hhbmZyZWluRF9PTigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NoYW5mcmVpbkRfT047XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBzZXQgQ2hhbmZyZWluRF9PTih2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldEFsbEVYKCk7XHJcbiAgICAgICAgdGhpcy5fQ2hhbmZyZWluRF9PTiA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBnZXQgVHJpYW5nbGVHX09OKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fVHJpYW5nbGVHX09OO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgc2V0IFRyaWFuZ2xlR19PTih2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldEFsbEVYKCk7XHJcbiAgICAgICAgdGhpcy5fVHJpYW5nbGVHX09OID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIGdldCBUcmlhbmdsZUdfSF9PTigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1RyaWFuZ2xlR19IX09OO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHNldCBUcmlhbmdsZUdfSF9PTih2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldEFsbEVYKCk7XHJcbiAgICAgICAgdGhpcy5fVHJpYW5nbGVHX0hfT04gPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgZ2V0IERlbWlPY3RvZ29uZV9PTigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0RlbWlPY3RvZ29uZV9PTjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHNldCBEZW1pT2N0b2dvbmVfT04odmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbGxFWCgpO1xyXG4gICAgICAgIHRoaXMuX0RlbWlPY3RvZ29uZV9PTiA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBnZXQgRGVtaU9jdG9nb25lX1BvdXJjZW50X0hhdXQoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9EZW1pT2N0b2dvbmVfUG91cmNlbnRfSGF1dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHNldCBEZW1pT2N0b2dvbmVfUG91cmNlbnRfSGF1dCh2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9EZW1pT2N0b2dvbmVfUG91cmNlbnRfSGF1dCA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBnZXQgRGVtaU9jdG9nb25lX1BvdXJjZW50X0xhcmcoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9EZW1pT2N0b2dvbmVfUG91cmNlbnRfTGFyZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHNldCBEZW1pT2N0b2dvbmVfUG91cmNlbnRfTGFyZyh2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9EZW1pT2N0b2dvbmVfUG91cmNlbnRfTGFyZyA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBnZXQgT2N0b2dvbmVfT04oKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9PY3RvZ29uZV9PTjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHNldCBPY3RvZ29uZV9PTih2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldEFsbEVYKCk7XHJcbiAgICAgICAgdGhpcy5fT2N0b2dvbmVfT04gPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgZ2V0IE9jdG9nb25lX1BvdXJjZW50X0hhdXQoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9PY3RvZ29uZV9Qb3VyY2VudF9IYXV0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgc2V0IE9jdG9nb25lX1BvdXJjZW50X0hhdXQodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fT2N0b2dvbmVfUG91cmNlbnRfSGF1dCA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBnZXQgRGVtaUhleGFnbF9Qb3VyY2VudF9IYXV0KCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fRGVtaUhleGFnbF9Qb3VyY2VudF9IYXV0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgc2V0IERlbWlIZXhhZ2xfUG91cmNlbnRfSGF1dCh2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9EZW1pSGV4YWdsX1BvdXJjZW50X0hhdXQgPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgZ2V0IEhleGFnb25lX09OKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fSGV4YWdvbmVfT047XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBzZXQgSGV4YWdvbmVfT04odmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbGxFWCgpO1xyXG4gICAgICAgIHRoaXMuX0hleGFnb25lX09OID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIGdldCBPdmFsZV9PTigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX092YWxlX09OO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgc2V0IE92YWxlX09OKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2V0QWxsRVgoKTtcclxuICAgICAgICB0aGlzLl9PdmFsZV9PTiA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBnZXQgT3ZhbGVfUG91cmNlbnRfSGF1dCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX092YWxlX1BvdXJjZW50X0hhdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBzZXQgT3ZhbGVfUG91cmNlbnRfSGF1dCh2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9PdmFsZV9Qb3VyY2VudF9IYXV0ID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIGdldCBSb25kX09OKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fUm9uZF9PTjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHNldCBSb25kX09OKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2V0QWxsRVgoKTtcclxuICAgICAgICB0aGlzLl9Sb25kX09OID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXQgQ2VyY2xlX0RlbWlfT04oKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9DZXJjbGVfRGVtaV9PTjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHNldCBDZXJjbGVfRGVtaV9PTih2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldEFsbEVYKCk7XHJcbiAgICAgICAgdGhpcy5fQ2VyY2xlX0RlbWlfT04gPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgZ2V0IENlcmNsZUhfRGVtaV9PTigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NlcmNsZUhfRGVtaV9PTjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHNldCBDZXJjbGVIX0RlbWlfT04odmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbGxFWCgpO1xyXG4gICAgICAgIHRoaXMuX0NlcmNsZUhfRGVtaV9PTiA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBnZXQgQ2VyY2xlX1F1YXJ0R19PTigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NlcmNsZV9RdWFydEdfT047XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqICAgICB0aGlzLnNldEFsbEVYKCk7XHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgc2V0IENlcmNsZV9RdWFydEdfT04odmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbGxFWCgpO1xyXG4gICAgICAgIHRoaXMuX0NlcmNsZV9RdWFydEdfT04gPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgZ2V0IENlcmNsZUhfUXVhcnRHX09OKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQ2VyY2xlSF9RdWFydEdfT047XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBzZXQgQ2VyY2xlSF9RdWFydEdfT04odmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbGxFWCgpO1xyXG4gICAgICAgIHRoaXMuX0NlcmNsZUhfUXVhcnRHX09OID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIGdldCBDZXJjbGVfUXVhcnREX09OKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQ2VyY2xlX1F1YXJ0RF9PTjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHNldCBDZXJjbGVfUXVhcnREX09OKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2V0QWxsRVgoKTtcclxuICAgICAgICB0aGlzLl9DZXJjbGVfUXVhcnREX09OID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIGdldCBDZXJjbGVIX1F1YXJ0RF9PTigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NlcmNsZUhfUXVhcnREX09OO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgc2V0IENlcmNsZUhfUXVhcnREX09OKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2V0QWxsRVgoKTtcclxuICAgICAgICB0aGlzLl9DZXJjbGVIX1F1YXJ0RF9PTiA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBnZXQgRWxsaXBzZV9PTigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0VsbGlwc2VfT047XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBzZXQgRWxsaXBzZV9PTih2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldEFsbEVYKCk7XHJcbiAgICAgICAgdGhpcy5fRWxsaXBzZV9PTiA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBnZXQgRWxsaXBzZV9EZW1pX09OKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fRWxsaXBzZV9EZW1pX09OO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgc2V0IEVsbGlwc2VfRGVtaV9PTih2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldEFsbEVYKCk7XHJcbiAgICAgICAgdGhpcy5fRWxsaXBzZV9EZW1pX09OID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIGdldCBFbGxpcHNlSF9EZW1pX09OKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fRWxsaXBzZUhfRGVtaV9PTjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHNldCBFbGxpcHNlSF9EZW1pX09OKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2V0QWxsRVgoKTtcclxuICAgICAgICB0aGlzLl9FbGxpcHNlSF9EZW1pX09OID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIGdldCBFbGxpcHNlX1F1YXJ0R19PTigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0VsbGlwc2VfUXVhcnRHX09OO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgc2V0IEVsbGlwc2VfUXVhcnRHX09OKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2V0QWxsRVgoKTtcclxuICAgICAgICB0aGlzLl9FbGxpcHNlX1F1YXJ0R19PTiA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBnZXQgRWxsaXBzZUhfUXVhcnRHX09OKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fRWxsaXBzZUhfUXVhcnRHX09OO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgc2V0IEVsbGlwc2VIX1F1YXJ0R19PTih2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldEFsbEVYKCk7XHJcbiAgICAgICAgdGhpcy5fRWxsaXBzZUhfUXVhcnRHX09OID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIGdldCBFbGxpcHNlX1F1YXJ0RF9PTigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgc2V0IEVsbGlwc2VfUXVhcnREX09OKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2V0QWxsRVgoKTtcclxuICAgICAgICB0aGlzLl9FbGxpcHNlX1F1YXJ0RF9PTiA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBnZXQgRWxsaXBzZUhfUXVhcnREX09OKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fRWxsaXBzZUhfUXVhcnREX09OO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgc2V0IEVsbGlwc2VIX1F1YXJ0RF9PTih2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldEFsbEVYKCk7XHJcbiAgICAgICAgdGhpcy5fRWxsaXBzZUhfUXVhcnREX09OID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIGdldCBFbGxpcHNlX1BvdXJjZW50X0hhdXQoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9FbGxpcHNlX1BvdXJjZW50X0hhdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBzZXQgRWxsaXBzZV9Qb3VyY2VudF9IYXV0KHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0VsbGlwc2VfUG91cmNlbnRfSGF1dCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBnZXQgQ2hhcGVhdV9PTigpOm51bWJlciB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9DaGFwZWF1X09OO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgc2V0IENoYXBlYXVfT04odmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbGxFWCgpO1xyXG4gICAgICAgIHRoaXMuX0NoYXBlYXVfT04gPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgZ2V0IFN0cm9rZV93aWR0aCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1N0cm9rZV93aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHNldCBTdHJva2Vfd2lkdGgodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fU3Ryb2tlX3dpZHRoID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIGdldCBTdHJva2Vfb3BhY2l0eSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1N0cm9rZV9vcGFjaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgc2V0IFN0cm9rZV9vcGFjaXR5KHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX1N0cm9rZV9vcGFjaXR5ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIGdldCBHb3RoaXF1ZV9PTigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dvdGhpcXVlX09OO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgc2V0IEdvdGhpcXVlX09OKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2V0QWxsRVgoKTtcclxuICAgICAgICB0aGlzLl9Hb3RoaXF1ZV9PTiA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBnZXQgR290aGlxdWVfSF9PTigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dvdGhpcXVlX0hfT047XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBzZXQgR290aGlxdWVfSF9PTih2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldEFsbEVYKCk7XHJcbiAgICAgICAgdGhpcy5fR290aGlxdWVfSF9PTiA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0IEFsbGVnZV9Qb3VyY2VudCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0FsbGVnZV9Qb3VyY2VudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHNldCBBbGxlZ2VfUG91cmNlbnQodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fQWxsZWdlX1BvdXJjZW50ID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIGdldCBMR19Qb3VyY2VudCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0xHX1BvdXJjZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgc2V0IExHX1BvdXJjZW50KHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0xHX1BvdXJjZW50ID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIGdldCBMRF9PTigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0xEX09OO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgc2V0IExEX09OKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0xEX09OID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIGdldCBDb3VsZXVyX0ZpbGwoKTpzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Db3VsZXVyX0ZpbGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBzZXQgQ291bGV1cl9GaWxsKHZhbHVlOnN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX0NvdWxldXJfRmlsbCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBnZXQgQ291bGV1cl9PbWJyZSgpOnN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NvdWxldXJfT21icmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBzZXQgQ291bGV1cl9PbWJyZSh2YWx1ZTpzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9Db3VsZXVyX09tYnJlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIGdldCBDb3VsZXVyX0x1bWllcmUoKTpzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Db3VsZXVyX0x1bWllcmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBzZXQgQ291bGV1cl9MdW1pZXJlKHZhbHVlOnN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX0NvdWxldXJfTHVtaWVyZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBnZXQgUHJvZmlsZV9JbnRfTGFyZygpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1Byb2ZpbGVfSW50X0xhcmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBzZXQgUHJvZmlsZV9JbnRfTGFyZyh2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9Qcm9maWxlX0ludF9MYXJnID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIGdldCBQcm9maWxlX091dl9MYXJnKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fUHJvZmlsZV9PdXZfTGFyZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHNldCBQcm9maWxlX091dl9MYXJnKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX1Byb2ZpbGVfT3V2X0xhcmcgPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgZ2V0IFJlY3RfT04oKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9SZWN0X09OO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgc2V0IFJlY3RfT04odmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbGxFWCgpO1xyXG4gICAgICAgIHRoaXMuX1JlY3RfT04gPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgZ2V0IENoYW5mcmVpbkdfUG91cmNlbnRfSGF1dCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NoYW5mcmVpbkdfUG91cmNlbnRfSGF1dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHNldCBDaGFuZnJlaW5HX1BvdXJjZW50X0hhdXQodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fQ2hhbmZyZWluR19Qb3VyY2VudF9IYXV0ID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIGdldCBDaGFuZnJlaW5HX1BvdXJjZW50X0xhcmcoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9DaGFuZnJlaW5HX1BvdXJjZW50X0xhcmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBzZXQgQ2hhbmZyZWluR19Qb3VyY2VudF9MYXJnKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0NoYW5mcmVpbkdfUG91cmNlbnRfTGFyZyA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBnZXQgQ2hhbmZyZWluRF9Qb3VyY2VudF9IYXV0KCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQ2hhbmZyZWluRF9Qb3VyY2VudF9IYXV0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgc2V0IENoYW5mcmVpbkRfUG91cmNlbnRfSGF1dCh2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9DaGFuZnJlaW5EX1BvdXJjZW50X0hhdXQgPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgZ2V0IENoYW5mcmVpbkRfUG91cmNlbnRfTGFyZygpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NoYW5mcmVpbkRfUG91cmNlbnRfTGFyZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHNldCBDaGFuZnJlaW5EX1BvdXJjZW50X0xhcmcodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fQ2hhbmZyZWluRF9Qb3VyY2VudF9MYXJnID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIGdldCBUcmlhbmdsZUdfSF9Qb3VyY2VudF9IYXV0KCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fVHJpYW5nbGVHX0hfUG91cmNlbnRfSGF1dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHNldCBUcmlhbmdsZUdfSF9Qb3VyY2VudF9IYXV0KHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2V0QWxsRVgoKTtcclxuICAgICAgICB0aGlzLl9UcmlhbmdsZUdfSF9Qb3VyY2VudF9IYXV0ID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIGdldCBUcmlhbmdsZURfT04oKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9UcmlhbmdsZURfT047XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBzZXQgVHJpYW5nbGVEX09OKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2V0QWxsRVgoKTtcclxuICAgICAgICB0aGlzLl9UcmlhbmdsZURfT04gPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgZ2V0IFRyaWFuZ2xlRF9IX09OKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fVHJpYW5nbGVEX0hfT047XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBzZXQgVHJpYW5nbGVEX0hfT04odmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbGxFWCgpO1xyXG4gICAgICAgIHRoaXMuX1RyaWFuZ2xlRF9IX09OID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIGdldCBUcmlhbmdsZURfSF9Qb3VyY2VudF9IYXV0KCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fVHJpYW5nbGVEX0hfUG91cmNlbnRfSGF1dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHNldCBUcmlhbmdsZURfSF9Qb3VyY2VudF9IYXV0KHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX1RyaWFuZ2xlRF9IX1BvdXJjZW50X0hhdXQgPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgZ2V0IE9jdG9nb25lX1BvdXJjZW50X0xhcmcoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9PY3RvZ29uZV9Qb3VyY2VudF9MYXJnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgc2V0IE9jdG9nb25lX1BvdXJjZW50X0xhcmcodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fT2N0b2dvbmVfUG91cmNlbnRfTGFyZyA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBEZW1pSGV4YWdfT04oKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9EZW1pSGV4YWdfT047XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBEZW1pSGV4YWdfT04odmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbGxFWCgpO1xyXG4gICAgICAgIHRoaXMuX0RlbWlIZXhhZ19PTiA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBIZXhhZ29uZV9Qb3VyY2VudF9IYXV0KCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fSGV4YWdvbmVfUG91cmNlbnRfSGF1dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IEhleGFnb25lX1BvdXJjZW50X0hhdXQodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fSGV4YWdvbmVfUG91cmNlbnRfSGF1dCA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGdldCBUcmlhbmdsZV9PTigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1RyaWFuZ2xlX09OO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgVHJpYW5nbGVfT04odmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbGxFWCgpO1xyXG4gICAgICAgIHRoaXMuX1RyaWFuZ2xlX09OID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IExvc2FuZ2VfT04oKTpudW1iZXIge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fTG9zYW5nZV9PTjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IExvc2FuZ2VfT04odmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbGxFWCgpO1xyXG4gICAgICAgIHRoaXMuX0xvc2FuZ2VfT04gPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldCBBcmNIX09OKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQXJjSF9PTjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IEFyY0hfT04odmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbGxFWCgpO1xyXG4gICAgICAgIHRoaXMuX0FyY0hfT04gPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IENpbnRyYWdlX1BvdXJjZW50X0hhdXQoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9DaW50cmFnZV9Qb3VyY2VudF9IYXV0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgQ2ludHJhZ2VfUG91cmNlbnRfSGF1dCh2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9DaW50cmFnZV9Qb3VyY2VudF9IYXV0ID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBWdWVFeHRfT05OKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fVnVlRXh0X09OTjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IFZ1ZUV4dF9PTk4odmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fVnVlRXh0X09OTiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBQb3J0ZV9PTigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1BvcnRlX09OO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgUG9ydGVfT04odmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fUG9ydGVfT04gPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7YW55fVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgRmVuZXRyZV9PTigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuX1BvcnRlX09OIC0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBGZW5ldHJlX09OKHZhbHVlOm51bWJlcikge1xyXG5cclxuICAgICAgICB0aGlzLl9Qb3J0ZV9PTiA9IE1hdGguYWJzKDEgLSBwYXJzZUZsb2F0KHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IFBvcnRlX1BvdXJjZW50KCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fUG9ydGVfUG91cmNlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBQb3J0ZV9Qb3VyY2VudCh2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9Qb3J0ZV9Qb3VyY2VudCA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBJbXBvc3RlX09OKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fSW1wb3N0ZV9PTjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IEltcG9zdGVfT04odmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fSW1wb3N0ZV9PTiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBJbXBvc3RlX1BvdXJjZW50KCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fSW1wb3N0ZV9Qb3VyY2VudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IEltcG9zdGVfUG91cmNlbnQodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fSW1wb3N0ZV9Qb3VyY2VudCA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBBbGxlZ2VfT04oKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9BbGxlZ2VfT047XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBBbGxlZ2VfT04odmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fQWxsZWdlX09OID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IExHX09OKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fTEdfT047XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBMR19PTih2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9MR19PTiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBMRF9Qb3VyY2VudCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0xEX1BvdXJjZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgTERfUG91cmNlbnQodmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fTERfUG91cmNlbnQgPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IENvdWxldXJfU3Ryb2tlKCk6c3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQ291bGV1cl9TdHJva2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBDb3VsZXVyX1N0cm9rZSh2YWx1ZTpzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9Db3VsZXVyX1N0cm9rZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBTZXVpbF9TdHJva2UoKTpzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9TZXVpbF9TdHJva2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBTZXVpbF9TdHJva2UodmFsdWU6c3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fU2V1aWxfU3Ryb2tlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IFNldWlsX1N0cm9rZV9XaWR0aCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1NldWlsX1N0cm9rZV9XaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IFNldWlsX1N0cm9rZV9XaWR0aCh2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9TZXVpbF9TdHJva2VfV2lkdGggPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgQWxsZWdlX21pbigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0FsbGVnZV9taW47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBBbGxlZ2VfbWluKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0FsbGVnZV9taW4gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgSW1wb3N0ZV9taW4oKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9JbXBvc3RlX21pbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IEltcG9zdGVfbWluKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0ltcG9zdGVfbWluID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IExHX21pbigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0xHX21pbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IExHX21pbih2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9MR19taW4gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgTERfbWluKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fTERfbWluO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgTERfbWluKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0xEX21pbiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBDcm9pc19MR19JbXBfT04oKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Dcm9pc19MR19JbXBfT047XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBDcm9pc19MR19JbXBfT04odmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fQ3JvaXNfTEdfSW1wX09OID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IENyb2lzX0xHX0FsbF9PTigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0Nyb2lzX0xHX0FsbF9PTjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IENyb2lzX0xHX0FsbF9PTih2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9Dcm9pc19MR19BbGxfT04gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgQ3JvaXNfTERfSW1wX09OKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQ3JvaXNfTERfSW1wX09OO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgQ3JvaXNfTERfSW1wX09OKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0Nyb2lzX0xEX0ltcF9PTiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBDcm9pc19MRF9BbGxfT04oKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Dcm9pc19MRF9BbGxfT047XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBDcm9pc19MRF9BbGxfT04odmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fQ3JvaXNfTERfQWxsX09OID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IENyb2lzX0ltcF9MR19PTigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0Nyb2lzX0ltcF9MR19PTjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IENyb2lzX0ltcF9MR19PTih2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9Dcm9pc19JbXBfTEdfT04gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgQ3JvaXNfSW1wX0xEX09OKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQ3JvaXNfSW1wX0xEX09OO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgQ3JvaXNfSW1wX0xEX09OKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0Nyb2lzX0ltcF9MRF9PTiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBDcm9pc19BbGxfTEdfT04oKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Dcm9pc19BbGxfTEdfT047XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBDcm9pc19BbGxfTEdfT04odmFsdWU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fQ3JvaXNfQWxsX0xHX09OID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IENyb2lzX0FsbF9MRF9PTigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0Nyb2lzX0FsbF9MRF9PTjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IENyb2lzX0FsbF9MRF9PTih2YWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9Dcm9pc19BbGxfTERfT04gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLypsaXN0IG9mIEdldHRlciBhbmQgU2V0dGVyIEVORCovXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEFsbEVYKCkge1xyXG4gICAgICAgIHRoaXMuX1JlY3RfT04gPSAwO1xyXG4gICAgICAgIHRoaXMuX0NoYW5mcmVpbkdfT04gPSAwO1xyXG4gICAgICAgIHRoaXMuX0NoYW5mcmVpbkRfT04gPSAwO1xyXG4gICAgICAgIHRoaXMuX1RyaWFuZ2xlX09OID0gMDtcclxuICAgICAgICB0aGlzLl9UcmlhbmdsZUdfT04gPSAwO1xyXG4gICAgICAgIHRoaXMuX1RyaWFuZ2xlRF9PTiA9IDA7XHJcbiAgICAgICAgdGhpcy5fVHJpYW5nbGVHX0hfT04gPSAwO1xyXG4gICAgICAgIHRoaXMuX1RyaWFuZ2xlRF9IX09OID0gMDtcclxuICAgICAgICB0aGlzLl9EZW1pT2N0b2dvbmVfT04gPSAwO1xyXG4gICAgICAgIHRoaXMuX09jdG9nb25lX09OID0gMDtcclxuICAgICAgICB0aGlzLl9EZW1pSGV4YWdfT04gPSAwO1xyXG4gICAgICAgIHRoaXMuX0hleGFnb25lX09OID0gMDtcclxuICAgICAgICB0aGlzLl9Mb3NhbmdlX09OID0gMDtcclxuICAgICAgICB0aGlzLl9PdmFsZV9PTiA9IDA7XHJcbiAgICAgICAgdGhpcy5fUm9uZF9PTiA9IDA7XHJcbiAgICAgICAgdGhpcy5fQ2VyY2xlX0RlbWlfT04gPSAwO1xyXG4gICAgICAgIHRoaXMuX0NlcmNsZV9RdWFydERfT04gPSAwO1xyXG4gICAgICAgIHRoaXMuX0NlcmNsZV9RdWFydEdfT04gPSAwO1xyXG4gICAgICAgIHRoaXMuX0NlcmNsZUhfRGVtaV9PTiA9IDA7XHJcbiAgICAgICAgdGhpcy5fQ2VyY2xlSF9RdWFydERfT04gPSAwO1xyXG4gICAgICAgIHRoaXMuX0NlcmNsZUhfUXVhcnRHX09OID0gMDtcclxuICAgICAgICB0aGlzLl9Hb3RoaXF1ZV9PTiA9IDA7XHJcbiAgICAgICAgdGhpcy5fR290aGlxdWVfSF9PTiA9IDA7XHJcbiAgICAgICAgdGhpcy5fRWxsaXBzZV9PTiA9IDA7XHJcbiAgICAgICAgdGhpcy5fRWxsaXBzZV9EZW1pX09OID0gMDtcclxuICAgICAgICB0aGlzLl9FbGxpcHNlX1F1YXJ0RF9PTiA9IDA7XHJcbiAgICAgICAgdGhpcy5fRWxsaXBzZV9RdWFydEdfT04gPSAwO1xyXG4gICAgICAgIHRoaXMuX0VsbGlwc2VIX0RlbWlfT04gPSAwO1xyXG4gICAgICAgIHRoaXMuX0VsbGlwc2VIX1F1YXJ0RF9PTiA9IDA7XHJcbiAgICAgICAgdGhpcy5fRWxsaXBzZUhfUXVhcnRHX09OID0gMDtcclxuICAgICAgICB0aGlzLl9DaGFwZWF1X09OID0gMDtcclxuICAgICAgICB0aGlzLl9DZXJjbGVIX0RlbWlfT04gPSAwO1xyXG4gICAgICAgIHRoaXMuX0FyY0hfT04gPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0ZGF0YSh2YWx1ZTpEb3JtYW50KSB7XHJcbiAgICAgICAgdGhpcy5YMCA9IHZhbHVlLlgwO1xyXG4gICAgICAgIHRoaXMuWTAgPSB2YWx1ZS5ZMDtcclxuICAgICAgICB0aGlzLlByb2ZpbGVfRXh0X0xhcmcgPSB2YWx1ZS5Qcm9maWxlX0V4dF9MYXJnO1xyXG4gICAgICAgIHRoaXMuUHJvZmlsZV9JbnRfTGFyZyA9IHZhbHVlLlByb2ZpbGVfSW50X0xhcmc7XHJcbiAgICAgICAgdGhpcy5Qcm9maWxlX091dl9MYXJnID0gdmFsdWUuUHJvZmlsZV9PdXZfTGFyZztcclxuICAgICAgICB0aGlzLlBhcmNsb3NlX0xhcmcgPSB2YWx1ZS5QYXJjbG9zZV9MYXJnO1xyXG4gICAgICAgIHRoaXMuQ2VudHJlX0xhcmcgPSB2YWx1ZS5DZW50cmVfTGFyZztcclxuICAgICAgICB0aGlzLkNlbnRyZV9IYXV0ID0gdmFsdWUuQ2VudHJlX0hhdXQ7XHJcbiAgICAgICAgdGhpcy5SZWN0X09OID0gdmFsdWUuUmVjdF9PTjtcclxuICAgICAgICB0aGlzLkNoYW5mcmVpbkdfT04gPSB2YWx1ZS5DaGFuZnJlaW5HX09OO1xyXG4gICAgICAgIHRoaXMuQ2hhbmZyZWluR19Qb3VyY2VudF9IYXV0ID0gdmFsdWUuQ2hhbmZyZWluR19Qb3VyY2VudF9IYXV0O1xyXG4gICAgICAgIHRoaXMuQ2hhbmZyZWluR19Qb3VyY2VudF9MYXJnID0gdmFsdWUuQ2hhbmZyZWluR19Qb3VyY2VudF9MYXJnO1xyXG4gICAgICAgIHRoaXMuQ2hhbmZyZWluRF9PTiA9IHZhbHVlLkNoYW5mcmVpbkRfT047XHJcbiAgICAgICAgdGhpcy5DaGFuZnJlaW5EX1BvdXJjZW50X0hhdXQgPSB2YWx1ZS5DaGFuZnJlaW5EX1BvdXJjZW50X0hhdXQ7XHJcbiAgICAgICAgdGhpcy5DaGFuZnJlaW5EX1BvdXJjZW50X0xhcmcgPSB2YWx1ZS5DaGFuZnJlaW5EX1BvdXJjZW50X0xhcmc7XHJcbiAgICAgICAgdGhpcy5UcmlhbmdsZUdfT04gPSB2YWx1ZS5UcmlhbmdsZUdfT047XHJcbiAgICAgICAgdGhpcy5UcmlhbmdsZUdfSF9PTiA9IHZhbHVlLlRyaWFuZ2xlR19IX09OO1xyXG4gICAgICAgIHRoaXMuVHJpYW5nbGVHX0hfUG91cmNlbnRfSGF1dCA9IHZhbHVlLlRyaWFuZ2xlR19IX1BvdXJjZW50X0hhdXQ7XHJcbiAgICAgICAgdGhpcy5UcmlhbmdsZURfT04gPSB2YWx1ZS5UcmlhbmdsZURfT047XHJcbiAgICAgICAgdGhpcy5UcmlhbmdsZURfSF9PTiA9IHZhbHVlLlRyaWFuZ2xlRF9IX09OO1xyXG4gICAgICAgIHRoaXMuVHJpYW5nbGVEX0hfUG91cmNlbnRfSGF1dCA9IHZhbHVlLlRyaWFuZ2xlRF9IX1BvdXJjZW50X0hhdXQ7XHJcbiAgICAgICAgdGhpcy5EZW1pT2N0b2dvbmVfT04gPSB2YWx1ZS5EZW1pT2N0b2dvbmVfT047XHJcbiAgICAgICAgdGhpcy5EZW1pT2N0b2dvbmVfUG91cmNlbnRfSGF1dCA9IHZhbHVlLkRlbWlPY3RvZ29uZV9Qb3VyY2VudF9IYXV0O1xyXG4gICAgICAgIHRoaXMuRGVtaU9jdG9nb25lX1BvdXJjZW50X0xhcmcgPSB2YWx1ZS5EZW1pT2N0b2dvbmVfUG91cmNlbnRfTGFyZztcclxuICAgICAgICB0aGlzLk9jdG9nb25lX09OID0gdmFsdWUuT2N0b2dvbmVfT047XHJcbiAgICAgICAgdGhpcy5PY3RvZ29uZV9Qb3VyY2VudF9IYXV0ID0gdmFsdWUuT2N0b2dvbmVfUG91cmNlbnRfSGF1dDtcclxuICAgICAgICB0aGlzLk9jdG9nb25lX1BvdXJjZW50X0xhcmcgPSB2YWx1ZS5PY3RvZ29uZV9Qb3VyY2VudF9MYXJnO1xyXG4gICAgICAgIHRoaXMuRGVtaUhleGFnX09OID0gdmFsdWUuRGVtaUhleGFnX09OO1xyXG4gICAgICAgIHRoaXMuRGVtaUhleGFnbF9Qb3VyY2VudF9IYXV0ID0gdmFsdWUuRGVtaUhleGFnbF9Qb3VyY2VudF9IYXV0O1xyXG4gICAgICAgIHRoaXMuSGV4YWdvbmVfT04gPSB2YWx1ZS5IZXhhZ29uZV9PTjtcclxuICAgICAgICB0aGlzLkhleGFnb25lX1BvdXJjZW50X0hhdXQgPSB2YWx1ZS5IZXhhZ29uZV9Qb3VyY2VudF9IYXV0O1xyXG4gICAgICAgIHRoaXMuVHJpYW5nbGVfT04gPSB2YWx1ZS5UcmlhbmdsZV9PTjtcclxuICAgICAgICB0aGlzLkxvc2FuZ2VfT04gPSB2YWx1ZS5Mb3NhbmdlX09OO1xyXG4gICAgICAgIHRoaXMuT3ZhbGVfT04gPSB2YWx1ZS5PdmFsZV9PTjtcclxuICAgICAgICB0aGlzLk92YWxlX1BvdXJjZW50X0hhdXQgPSB2YWx1ZS5PdmFsZV9Qb3VyY2VudF9IYXV0O1xyXG4gICAgICAgIHRoaXMuUm9uZF9PTiA9IHZhbHVlLlJvbmRfT047XHJcbiAgICAgICAgdGhpcy5DZXJjbGVfRGVtaV9PTiA9IHZhbHVlLkNlcmNsZV9EZW1pX09OO1xyXG4gICAgICAgIHRoaXMuQ2VyY2xlSF9EZW1pX09OID0gdmFsdWUuQ2VyY2xlSF9EZW1pX09OO1xyXG4gICAgICAgIHRoaXMuQXJjSF9PTiA9IHZhbHVlLkFyY0hfT047XHJcbiAgICAgICAgdGhpcy5DZXJjbGVfUXVhcnRHX09OID0gdmFsdWUuQ2VyY2xlX1F1YXJ0R19PTjtcclxuICAgICAgICB0aGlzLkNlcmNsZUhfUXVhcnRHX09OID0gdmFsdWUuQ2VyY2xlSF9RdWFydEdfT047XHJcbiAgICAgICAgdGhpcy5DZXJjbGVfUXVhcnREX09OID0gdmFsdWUuQ2VyY2xlX1F1YXJ0RF9PTjtcclxuICAgICAgICB0aGlzLkNlcmNsZUhfUXVhcnREX09OID0gdmFsdWUuQ2VyY2xlSF9RdWFydERfT047XHJcbiAgICAgICAgdGhpcy5DaW50cmFnZV9Qb3VyY2VudF9IYXV0ID0gdmFsdWUuQ2ludHJhZ2VfUG91cmNlbnRfSGF1dDtcclxuICAgICAgICB0aGlzLkdvdGhpcXVlX09OID0gdmFsdWUuR290aGlxdWVfT047XHJcbiAgICAgICAgdGhpcy5Hb3RoaXF1ZV9IX09OID0gdmFsdWUuR290aGlxdWVfSF9PTjtcclxuICAgICAgICB0aGlzLkdvdGhpcXVlX0hfX1BvdXJjZW50X0hhdXQgPSB2YWx1ZS5Hb3RoaXF1ZV9IX19Qb3VyY2VudF9IYXV0O1xyXG4gICAgICAgIHRoaXMuRWxsaXBzZV9PTiA9IHZhbHVlLkVsbGlwc2VfT047XHJcbiAgICAgICAgdGhpcy5FbGxpcHNlX0RlbWlfT04gPSB2YWx1ZS5FbGxpcHNlX0RlbWlfT047XHJcbiAgICAgICAgdGhpcy5FbGxpcHNlSF9EZW1pX09OID0gdmFsdWUuRWxsaXBzZUhfRGVtaV9PTjtcclxuICAgICAgICB0aGlzLkVsbGlwc2VfUXVhcnRHX09OID0gdmFsdWUuRWxsaXBzZV9RdWFydEdfT047XHJcbiAgICAgICAgdGhpcy5FbGxpcHNlSF9RdWFydEdfT04gPSB2YWx1ZS5FbGxpcHNlSF9RdWFydEdfT047XHJcbiAgICAgICAgdGhpcy5FbGxpcHNlX1F1YXJ0RF9PTiA9IHZhbHVlLkVsbGlwc2VfUXVhcnREX09OO1xyXG4gICAgICAgIHRoaXMuRWxsaXBzZUhfUXVhcnREX09OID0gdmFsdWUuRWxsaXBzZUhfUXVhcnREX09OO1xyXG4gICAgICAgIHRoaXMuRWxsaXBzZV9Qb3VyY2VudF9IYXV0ID0gdmFsdWUuRWxsaXBzZV9Qb3VyY2VudF9IYXV0O1xyXG4gICAgICAgIHRoaXMuQ2hhcGVhdV9PTiA9IHZhbHVlLkNoYXBlYXVfT047XHJcbiAgICAgICAgdGhpcy5Qb3J0ZV9PTiA9IHZhbHVlLlBvcnRlX09OO1xyXG4gICAgICAgIHRoaXMuUG9ydGVfUG91cmNlbnQgPSB2YWx1ZS5Qb3J0ZV9Qb3VyY2VudDtcclxuICAgICAgICB0aGlzLkltcG9zdGVfT04gPSB2YWx1ZS5JbXBvc3RlX09OO1xyXG4gICAgICAgIHRoaXMuSW1wb3N0ZV9Qb3VyY2VudCA9IHZhbHVlLkltcG9zdGVfUG91cmNlbnQ7XHJcbiAgICAgICAgdGhpcy5BbGxlZ2VfT04gPSB2YWx1ZS5BbGxlZ2VfT047XHJcbiAgICAgICAgdGhpcy5BbGxlZ2VfUG91cmNlbnQgPSB2YWx1ZS5BbGxlZ2VfUG91cmNlbnQ7XHJcbiAgICAgICAgdGhpcy5MR19PTiA9IHZhbHVlLkxHX09OO1xyXG4gICAgICAgIHRoaXMuTEdfUG91cmNlbnQgPSB2YWx1ZS5MR19Qb3VyY2VudDtcclxuICAgICAgICB0aGlzLkxEX09OID0gdmFsdWUuTERfT047XHJcbiAgICAgICAgdGhpcy5MRF9Qb3VyY2VudCA9IHZhbHVlLkxEX1BvdXJjZW50O1xyXG4gICAgICAgIHRoaXMuVnVlRXh0X09OTiA9IHZhbHVlLlZ1ZUV4dF9PTjtcclxuICAgICAgICB0aGlzLkNvdWxldXJfRmlsbCA9IHZhbHVlLkNvdWxldXJfRmlsbDtcclxuICAgICAgICB0aGlzLkNvdWxldXJfU3Ryb2tlID0gdmFsdWUuQ291bGV1cl9TdHJva2U7XHJcbiAgICAgICAgdGhpcy5TdHJva2Vfd2lkdGggPSB2YWx1ZS5TdHJva2Vfd2lkdGg7XHJcbiAgICAgICAgdGhpcy5TdHJva2Vfb3BhY2l0eSA9IHZhbHVlLlN0cm9rZV9vcGFjaXR5O1xyXG4gICAgICAgIHRoaXMuQ291bGV1cl9PbWJyZSA9IHZhbHVlLkNvdWxldXJfT21icmU7XHJcbiAgICAgICAgdGhpcy5TZXVpbF9TdHJva2UgPSB2YWx1ZS5TZXVpbF9TdHJva2U7XHJcbiAgICAgICAgdGhpcy5TZXVpbF9TdHJva2VfV2lkdGggPSB2YWx1ZS5TZXVpbF9TdHJva2VfV2lkdGg7XHJcbiAgICAgICAgdGhpcy5Db3VsZXVyX0x1bWllcmUgPSB2YWx1ZS5Db3VsZXVyX0x1bWllcmU7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihfWDA6bnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgX1kwOm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9Qcm9maWxlX0V4dF9MYXJnOm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9Qcm9maWxlX0ludF9MYXJnOm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9Qcm9maWxlX091dl9MYXJnOm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9QYXJjbG9zZV9MYXJnOm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9DZW50cmVfTGFyZzpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfQ2VudHJlX0hhdXQ6bnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgX1JlY3RfT046bnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgX0NoYW5mcmVpbkdfT046bnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgX0NoYW5mcmVpbkdfUG91cmNlbnRfSGF1dDpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfQ2hhbmZyZWluR19Qb3VyY2VudF9MYXJnOm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9DaGFuZnJlaW5EX09OOm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9DaGFuZnJlaW5EX1BvdXJjZW50X0hhdXQ6bnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgX0NoYW5mcmVpbkRfUG91cmNlbnRfTGFyZzpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfVHJpYW5nbGVHX09OOm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9UcmlhbmdsZUdfSF9PTjpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfVHJpYW5nbGVHX0hfUG91cmNlbnRfSGF1dDpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfVHJpYW5nbGVEX09OOm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9UcmlhbmdsZURfSF9PTjpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfVHJpYW5nbGVEX0hfUG91cmNlbnRfSGF1dDpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfRGVtaU9jdG9nb25lX09OOm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9EZW1pT2N0b2dvbmVfUG91cmNlbnRfSGF1dDpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfRGVtaU9jdG9nb25lX1BvdXJjZW50X0xhcmc6bnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgX09jdG9nb25lX09OOm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9PY3RvZ29uZV9Qb3VyY2VudF9IYXV0Om51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9PY3RvZ29uZV9Qb3VyY2VudF9MYXJnOm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9EZW1pSGV4YWdfT046bnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgX0RlbWlIZXhhZ2xfUG91cmNlbnRfSGF1dDpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfSGV4YWdvbmVfT046bnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgX0hleGFnb25lX1BvdXJjZW50X0hhdXQ6bnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgX1RyaWFuZ2xlX09OOm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9Mb3NhbmdlX09OOm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9PdmFsZV9PTjpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfT3ZhbGVfUG91cmNlbnRfSGF1dDpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfUm9uZF9PTjpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfQ2VyY2xlX0RlbWlfT046bnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgX0NlcmNsZUhfRGVtaV9PTjpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfQXJjSF9PTjpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfQ2VyY2xlX1F1YXJ0R19PTjpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfQ2VyY2xlSF9RdWFydEdfT046bnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgX0NlcmNsZV9RdWFydERfT046bnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgX0NlcmNsZUhfUXVhcnREX09OOm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9DaW50cmFnZV9Qb3VyY2VudF9IYXV0Om51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9Hb3RoaXF1ZV9PTjpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfR290aGlxdWVfSF9PTjpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfR290aGlxdWVfSF9fUG91cmNlbnRfSGF1dDpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfRWxsaXBzZV9PTjpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfRWxsaXBzZV9EZW1pX09OOm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9FbGxpcHNlSF9EZW1pX09OOm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9FbGxpcHNlX1F1YXJ0R19PTjpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfRWxsaXBzZUhfUXVhcnRHX09OOm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9FbGxpcHNlX1F1YXJ0RF9PTjpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfRWxsaXBzZUhfUXVhcnREX09OOm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9FbGxpcHNlX1BvdXJjZW50X0hhdXQ6bnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgX0NoYXBlYXVfT046bnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgX1BvcnRlX09OOm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9Qb3J0ZV9Qb3VyY2VudDpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfSW1wb3N0ZV9PTjpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfSW1wb3N0ZV9Qb3VyY2VudDpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfQWxsZWdlX09OOm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9BbGxlZ2VfUG91cmNlbnQ6bnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgX0xHX09OOm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9MR19Qb3VyY2VudDpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfTERfT046bnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgX0xEX1BvdXJjZW50Om51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9WdWVFeHRfT046bnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgX0NvdWxldXJfRmlsbDpzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfQ291bGV1cl9TdHJva2U6c3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgX1N0cm9rZV93aWR0aDpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfU3Ryb2tlX29wYWNpdHk6bnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgX0NvdWxldXJfT21icmU6c3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgX1NldWlsX1N0cm9rZTpudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBfU2V1aWxfU3Ryb2tlX1dpZHRoOm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgIF9Db3VsZXVyX0x1bWllcmU6c3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fWDAgPSBfWDA7XHJcbiAgICAgICAgdGhpcy5fWTAgPSBfWTA7XHJcbiAgICAgICAgdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyA9IF9Qcm9maWxlX0V4dF9MYXJnO1xyXG4gICAgICAgIHRoaXMuX1Byb2ZpbGVfSW50X0xhcmcgPSBfUHJvZmlsZV9JbnRfTGFyZztcclxuICAgICAgICB0aGlzLl9Qcm9maWxlX091dl9MYXJnID0gX1Byb2ZpbGVfT3V2X0xhcmc7XHJcbiAgICAgICAgdGhpcy5fUGFyY2xvc2VfTGFyZyA9IF9QYXJjbG9zZV9MYXJnO1xyXG4gICAgICAgIHRoaXMuX0NlbnRyZV9MYXJnID0gX0NlbnRyZV9MYXJnO1xyXG4gICAgICAgIHRoaXMuX0NlbnRyZV9IYXV0ID0gX0NlbnRyZV9IYXV0O1xyXG4gICAgICAgIHRoaXMuX1JlY3RfT04gPSBfUmVjdF9PTjtcclxuICAgICAgICB0aGlzLl9DaGFuZnJlaW5HX09OID0gX0NoYW5mcmVpbkdfT047XHJcbiAgICAgICAgdGhpcy5fQ2hhbmZyZWluR19Qb3VyY2VudF9IYXV0ID0gX0NoYW5mcmVpbkdfUG91cmNlbnRfSGF1dDtcclxuICAgICAgICB0aGlzLl9DaGFuZnJlaW5HX1BvdXJjZW50X0xhcmcgPSBfQ2hhbmZyZWluR19Qb3VyY2VudF9MYXJnO1xyXG4gICAgICAgIHRoaXMuX0NoYW5mcmVpbkRfT04gPSBfQ2hhbmZyZWluRF9PTjtcclxuICAgICAgICB0aGlzLl9DaGFuZnJlaW5EX1BvdXJjZW50X0hhdXQgPSBfQ2hhbmZyZWluRF9Qb3VyY2VudF9IYXV0O1xyXG4gICAgICAgIHRoaXMuX0NoYW5mcmVpbkRfUG91cmNlbnRfTGFyZyA9IF9DaGFuZnJlaW5EX1BvdXJjZW50X0xhcmc7XHJcbiAgICAgICAgdGhpcy5fVHJpYW5nbGVHX09OID0gX1RyaWFuZ2xlR19PTjtcclxuICAgICAgICB0aGlzLl9UcmlhbmdsZUdfSF9PTiA9IF9UcmlhbmdsZUdfSF9PTjtcclxuICAgICAgICB0aGlzLl9UcmlhbmdsZUdfSF9Qb3VyY2VudF9IYXV0ID0gX1RyaWFuZ2xlR19IX1BvdXJjZW50X0hhdXQ7XHJcbiAgICAgICAgdGhpcy5fVHJpYW5nbGVEX09OID0gX1RyaWFuZ2xlRF9PTjtcclxuICAgICAgICB0aGlzLl9UcmlhbmdsZURfSF9PTiA9IF9UcmlhbmdsZURfSF9PTjtcclxuICAgICAgICB0aGlzLl9UcmlhbmdsZURfSF9Qb3VyY2VudF9IYXV0ID0gX1RyaWFuZ2xlRF9IX1BvdXJjZW50X0hhdXQ7XHJcbiAgICAgICAgdGhpcy5fRGVtaU9jdG9nb25lX09OID0gX0RlbWlPY3RvZ29uZV9PTjtcclxuICAgICAgICB0aGlzLl9EZW1pT2N0b2dvbmVfUG91cmNlbnRfSGF1dCA9IF9EZW1pT2N0b2dvbmVfUG91cmNlbnRfSGF1dDtcclxuICAgICAgICB0aGlzLl9EZW1pT2N0b2dvbmVfUG91cmNlbnRfTGFyZyA9IF9EZW1pT2N0b2dvbmVfUG91cmNlbnRfTGFyZztcclxuICAgICAgICB0aGlzLl9PY3RvZ29uZV9PTiA9IF9PY3RvZ29uZV9PTjtcclxuICAgICAgICB0aGlzLl9PY3RvZ29uZV9Qb3VyY2VudF9IYXV0ID0gX09jdG9nb25lX1BvdXJjZW50X0hhdXQ7XHJcbiAgICAgICAgdGhpcy5fT2N0b2dvbmVfUG91cmNlbnRfTGFyZyA9IF9PY3RvZ29uZV9Qb3VyY2VudF9MYXJnO1xyXG4gICAgICAgIHRoaXMuX0RlbWlIZXhhZ19PTiA9IF9EZW1pSGV4YWdfT047XHJcbiAgICAgICAgdGhpcy5fRGVtaUhleGFnbF9Qb3VyY2VudF9IYXV0ID0gX0RlbWlIZXhhZ2xfUG91cmNlbnRfSGF1dDtcclxuICAgICAgICB0aGlzLl9IZXhhZ29uZV9PTiA9IF9IZXhhZ29uZV9PTjtcclxuICAgICAgICB0aGlzLl9IZXhhZ29uZV9Qb3VyY2VudF9IYXV0ID0gX0hleGFnb25lX1BvdXJjZW50X0hhdXQ7XHJcbiAgICAgICAgdGhpcy5fVHJpYW5nbGVfT04gPSBfVHJpYW5nbGVfT047XHJcbiAgICAgICAgdGhpcy5fTG9zYW5nZV9PTiA9IF9Mb3NhbmdlX09OO1xyXG4gICAgICAgIHRoaXMuX092YWxlX09OID0gX092YWxlX09OO1xyXG4gICAgICAgIHRoaXMuX092YWxlX1BvdXJjZW50X0hhdXQgPSBfT3ZhbGVfUG91cmNlbnRfSGF1dDtcclxuICAgICAgICB0aGlzLl9Sb25kX09OID0gX1JvbmRfT047XHJcbiAgICAgICAgdGhpcy5fQ2VyY2xlX0RlbWlfT04gPSBfQ2VyY2xlX0RlbWlfT047XHJcbiAgICAgICAgdGhpcy5fQ2VyY2xlSF9EZW1pX09OID0gX0NlcmNsZUhfRGVtaV9PTjtcclxuICAgICAgICB0aGlzLl9BcmNIX09OID0gX0FyY0hfT047XHJcbiAgICAgICAgdGhpcy5fQ2VyY2xlX1F1YXJ0R19PTiA9IF9DZXJjbGVfUXVhcnRHX09OO1xyXG4gICAgICAgIHRoaXMuX0NlcmNsZUhfUXVhcnRHX09OID0gX0NlcmNsZUhfUXVhcnRHX09OO1xyXG4gICAgICAgIHRoaXMuX0NlcmNsZV9RdWFydERfT04gPSBfQ2VyY2xlX1F1YXJ0RF9PTjtcclxuICAgICAgICB0aGlzLl9DZXJjbGVIX1F1YXJ0RF9PTiA9IF9DZXJjbGVIX1F1YXJ0RF9PTjtcclxuICAgICAgICB0aGlzLl9DaW50cmFnZV9Qb3VyY2VudF9IYXV0ID0gX0NpbnRyYWdlX1BvdXJjZW50X0hhdXQ7XHJcbiAgICAgICAgdGhpcy5fR290aGlxdWVfT04gPSBfR290aGlxdWVfT047XHJcbiAgICAgICAgdGhpcy5fR290aGlxdWVfSF9PTiA9IF9Hb3RoaXF1ZV9IX09OO1xyXG4gICAgICAgIHRoaXMuX0dvdGhpcXVlX0hfX1BvdXJjZW50X0hhdXQgPSBfR290aGlxdWVfSF9fUG91cmNlbnRfSGF1dDtcclxuICAgICAgICB0aGlzLl9FbGxpcHNlX09OID0gX0VsbGlwc2VfT047XHJcbiAgICAgICAgdGhpcy5fRWxsaXBzZV9EZW1pX09OID0gX0VsbGlwc2VfRGVtaV9PTjtcclxuICAgICAgICB0aGlzLl9FbGxpcHNlSF9EZW1pX09OID0gX0VsbGlwc2VIX0RlbWlfT047XHJcbiAgICAgICAgdGhpcy5fRWxsaXBzZV9RdWFydEdfT04gPSBfRWxsaXBzZV9RdWFydEdfT047XHJcbiAgICAgICAgdGhpcy5fRWxsaXBzZUhfUXVhcnRHX09OID0gX0VsbGlwc2VIX1F1YXJ0R19PTjtcclxuICAgICAgICB0aGlzLl9FbGxpcHNlX1F1YXJ0RF9PTiA9IF9FbGxpcHNlX1F1YXJ0RF9PTjtcclxuICAgICAgICB0aGlzLl9FbGxpcHNlSF9RdWFydERfT04gPSBfRWxsaXBzZUhfUXVhcnREX09OO1xyXG4gICAgICAgIHRoaXMuX0VsbGlwc2VfUG91cmNlbnRfSGF1dCA9IF9FbGxpcHNlX1BvdXJjZW50X0hhdXQ7XHJcbiAgICAgICAgdGhpcy5fQ2hhcGVhdV9PTiA9IF9DaGFwZWF1X09OO1xyXG4gICAgICAgIHRoaXMuX1BvcnRlX09OID0gX1BvcnRlX09OO1xyXG4gICAgICAgIHRoaXMuX1BvcnRlX1BvdXJjZW50ID0gX1BvcnRlX1BvdXJjZW50O1xyXG4gICAgICAgIHRoaXMuX0ltcG9zdGVfT04gPSBfSW1wb3N0ZV9PTjtcclxuICAgICAgICB0aGlzLl9JbXBvc3RlX1BvdXJjZW50ID0gX0ltcG9zdGVfUG91cmNlbnQ7XHJcbiAgICAgICAgdGhpcy5fQWxsZWdlX09OID0gX0FsbGVnZV9PTjtcclxuICAgICAgICB0aGlzLl9BbGxlZ2VfUG91cmNlbnQgPSBfQWxsZWdlX1BvdXJjZW50O1xyXG4gICAgICAgIHRoaXMuX0xHX09OID0gX0xHX09OO1xyXG4gICAgICAgIHRoaXMuX0xHX1BvdXJjZW50ID0gX0xHX1BvdXJjZW50O1xyXG4gICAgICAgIHRoaXMuX0xEX09OID0gX0xEX09OO1xyXG4gICAgICAgIHRoaXMuX0xEX1BvdXJjZW50ID0gX0xEX1BvdXJjZW50O1xyXG4gICAgICAgIHRoaXMuX1Z1ZUV4dF9PTk4gPSBfVnVlRXh0X09OO1xyXG4gICAgICAgIHRoaXMuX0NvdWxldXJfRmlsbCA9IF9Db3VsZXVyX0ZpbGw7XHJcbiAgICAgICAgdGhpcy5fQ291bGV1cl9TdHJva2UgPSBfQ291bGV1cl9TdHJva2U7XHJcbiAgICAgICAgdGhpcy5fU3Ryb2tlX3dpZHRoID0gX1N0cm9rZV93aWR0aDtcclxuICAgICAgICB0aGlzLl9TdHJva2Vfb3BhY2l0eSA9IF9TdHJva2Vfb3BhY2l0eTtcclxuICAgICAgICB0aGlzLl9Db3VsZXVyX09tYnJlID0gX0NvdWxldXJfT21icmU7XHJcbiAgICAgICAgdGhpcy5fU2V1aWxfU3Ryb2tlID0gX1NldWlsX1N0cm9rZTtcclxuICAgICAgICB0aGlzLl9TZXVpbF9TdHJva2VfV2lkdGggPSBfU2V1aWxfU3Ryb2tlX1dpZHRoO1xyXG4gICAgICAgIHRoaXMuX0NvdWxldXJfTHVtaWVyZSA9IF9Db3VsZXVyX0x1bWllcmU7XHJcbiAgICAgICAgdGhpcy5fTEdfbWluID0gMS4wMDtcclxuICAgICAgICB0aGlzLl9MRF9PTiA9IDEuMDA7XHJcbiAgICAgICAgdGhpcy5fTERfUG91cmNlbnQgPSAwLjM1O1xyXG4gICAgICAgIHRoaXMuX0xEX21pbiA9IDEuMDA7XHJcbiAgICAgICAgdGhpcy5fSW1wb3N0ZV9taW49MS4wMDtcclxuICAgICAgICB0aGlzLl9BbGxlZ2VfbWluPTEuMDA7XHJcbiAgICAgICAgdGhpcy5fQ3JvaXNfTEdfSW1wX09OID0gMS4wMDtcclxuICAgICAgICB0aGlzLl9Dcm9pc19MR19BbGxfT04gPSAxLjAwO1xyXG4gICAgICAgIHRoaXMuX0Nyb2lzX0xEX0ltcF9PTiA9IDEuMDA7XHJcbiAgICAgICAgdGhpcy5fQ3JvaXNfTERfQWxsX09OID0gMS4wMDtcclxuICAgICAgICB0aGlzLl9Dcm9pc19JbXBfTEdfT04gPSAxLjAwO1xyXG4gICAgICAgIHRoaXMuX0Nyb2lzX0ltcF9MRF9PTiA9IDEuMDA7XHJcbiAgICAgICAgdGhpcy5fQ3JvaXNfQWxsX0xHX09OID0gMS4wMDtcclxuICAgICAgICB0aGlzLl9Dcm9pc19BbGxfTERfT04gPSAxLjAwO1xyXG4gICAgfVxyXG5cclxuICAgIENpbnRyYWdlSF9PTigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NlcmNsZUhfRGVtaV9PTiArIHRoaXMuX0FyY0hfT05cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIENpbnRyYWdlSF9Qb3VyY2VudF9IYXV0KCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQXJjSF9PTiAqIHRoaXMuX0NpbnRyYWdlX1BvdXJjZW50X0hhdXQgKyAwLjUgKiB0aGlzLl9DZXJjbGVIX0RlbWlfT05cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIEVsbGlwdGlxdWVfT04oKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9FbGxpcHNlX0RlbWlfT04gKyB0aGlzLl9FbGxpcHNlX1F1YXJ0R19PTiArIHRoaXMuX0VsbGlwc2VIX1F1YXJ0R19PTiArIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OICsgdGhpcy5fRWxsaXBzZUhfUXVhcnREX09OICsgdGhpcy5fRWxsaXBzZUhfRGVtaV9PTlxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgR290aGlxX09OKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR290aGlxdWVfT04gKyB0aGlzLl9Hb3RoaXF1ZV9IX09OXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2FueX1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBDaXJjdWxhaXJlX09OKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQ2VyY2xlX0RlbWlfT04gKyB0aGlzLl9DZXJjbGVfUXVhcnRHX09OICsgdGhpcy5fQ2VyY2xlSF9RdWFydEdfT04gKyB0aGlzLl9DZXJjbGVfUXVhcnREX09OICsgdGhpcy5fQ2VyY2xlSF9RdWFydERfT04gKyB0aGlzLkNpbnRyYWdlSF9PTigpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBDaW50cmFnZUJfT04oKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9PdmFsZV9PTiArIHRoaXMuX1JvbmRfT04gKyB0aGlzLl9FbGxpcHNlX09OXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBDaW50cmFnZUhIX09OKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5FbGxpcHRpcXVlX09OKCkgKyB0aGlzLkdvdGhpcV9PTigpICsgdGhpcy5DaXJjdWxhaXJlX09OKCkgKyB0aGlzLkNpbnRyYWdlQl9PTigpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBJbXBvc3RlX0hhdXQoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAoMSAtIDAuNSAqICh0aGlzLl9DZXJjbGVfRGVtaV9PTiArIHRoaXMuX0VsbGlwc2VfT04gKyB0aGlzLl9FbGxpcHNlX0RlbWlfT04pKSAqIHRoaXMuX0ltcG9zdGVfT04gKiB0aGlzLl9JbXBvc3RlX1BvdXJjZW50ICogdGhpcy5fQ2VudHJlX0hhdXRcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIEFsbGVnZV9IYXV0KCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gKDEgLSAwLjUgKiAodGhpcy5fQ2VyY2xlX0RlbWlfT04gKyB0aGlzLl9FbGxpcHNlX09OICsgdGhpcy5fRWxsaXBzZV9EZW1pX09OKSkgKiB0aGlzLl9BbGxlZ2VfT04gKiB0aGlzLl9BbGxlZ2VfUG91cmNlbnQgKiB0aGlzLl9DZW50cmVfSGF1dFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgTEdfTGFyZygpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0xHX09OICogdGhpcy5fTEdfUG91cmNlbnQgKiB0aGlzLl9DZW50cmVfTGFyZ1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgTERfTGFyZygpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0xEX09OICogdGhpcy5fTERfUG91cmNlbnQgKiB0aGlzLl9DZW50cmVfTGFyZ1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgVG90YWxfTGFyZygpOm51bWJlciB7XHJcbiAgICAgICAgdGhpcy5fbGFyZ2V1ciA9dGhpcy5fQ2VudHJlX0xhcmcgKyB0aGlzLkxHX0xhcmcoKSArIHRoaXMuTERfTGFyZygpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NlbnRyZV9MYXJnICsgdGhpcy5MR19MYXJnKCkgKyB0aGlzLkxEX0xhcmcoKVxyXG4gICAgfVxyXG4gICAgVmlld2JveF9MYXJnKCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9DZW50cmVfTGFyZyArIHRoaXMuTEdfTGFyZygpICsgdGhpcy5MRF9MYXJnKCkrNDBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIFRvdGFsX0hhdXQoKTpudW1iZXIge1xyXG4gICAgICAgIHRoaXMuX2hhdXRldXIgPSAgKDEgLSB0aGlzLl9PdmFsZV9PTiAtIHRoaXMuX1JvbmRfT04gLSB0aGlzLl9DZXJjbGVfRGVtaV9PTiAtIHRoaXMuX0NlcmNsZV9RdWFydEdfT04gLSB0aGlzLl9DZXJjbGVfUXVhcnREX09OIC0gdGhpcy5Hb3RoaXFfT04oKSAtIHRoaXMuX0VsbGlwc2VfT04gLSB0aGlzLl9FbGxpcHNlX0RlbWlfT04gLSB0aGlzLl9FbGxpcHNlX1F1YXJ0R19PTiAtIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OKSAqICh0aGlzLl9DZW50cmVfSGF1dCArIHRoaXMuSW1wb3N0ZV9IYXV0KCkgKyB0aGlzLkFsbGVnZV9IYXV0KCkpICsgdGhpcy5fUG9ydGVfT04gKiB0aGlzLl9Qb3J0ZV9Qb3VyY2VudCAqIHRoaXMuX0NlbnRyZV9IYXV0ICogKDEgLSB0aGlzLl9DZXJjbGVfRGVtaV9PTiAtIHRoaXMuX0NlcmNsZV9RdWFydEdfT04gLSB0aGlzLl9DZXJjbGVfUXVhcnREX09OIC0gdGhpcy5fR290aGlxdWVfT04gLSB0aGlzLl9FbGxpcHNlX0RlbWlfT04gLSB0aGlzLl9FbGxpcHNlX1F1YXJ0R19PTiAtIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OKSArICgoMSArIHRoaXMuX092YWxlX1BvdXJjZW50X0hhdXQpICogdGhpcy5fT3ZhbGVfT04gKyB0aGlzLl9Sb25kX09OICsgMC41ICogdGhpcy5fQ2VyY2xlX0RlbWlfT04gKyB0aGlzLl9DZXJjbGVfUXVhcnRHX09OICsgdGhpcy5fQ2VyY2xlX1F1YXJ0RF9PTiArIHRoaXMuX0VsbGlwc2VfUG91cmNlbnRfSGF1dCAqICh0aGlzLl9FbGxpcHNlX09OICsgMC41ICogdGhpcy5fRWxsaXBzZV9EZW1pX09OICsgdGhpcy5fRWxsaXBzZV9RdWFydEdfT04gKyB0aGlzLl9FbGxpcHNlX1F1YXJ0RF9PTikgKyAwLjg2NiAqIHRoaXMuR290aGlxX09OKCkgKyB0aGlzLl9Hb3RoaXF1ZV9IX19Qb3VyY2VudF9IYXV0ICogdGhpcy5fR290aGlxdWVfSF9PTikgKiB0aGlzLlRvdGFsX0xhcmcoKVxyXG5cclxuICAgICAgICByZXR1cm4gKDEgLSB0aGlzLl9PdmFsZV9PTiAtIHRoaXMuX1JvbmRfT04gLSB0aGlzLl9DZXJjbGVfRGVtaV9PTiAtIHRoaXMuX0NlcmNsZV9RdWFydEdfT04gLSB0aGlzLl9DZXJjbGVfUXVhcnREX09OIC0gdGhpcy5Hb3RoaXFfT04oKSAtIHRoaXMuX0VsbGlwc2VfT04gLSB0aGlzLl9FbGxpcHNlX0RlbWlfT04gLSB0aGlzLl9FbGxpcHNlX1F1YXJ0R19PTiAtIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OKSAqICh0aGlzLl9DZW50cmVfSGF1dCArIHRoaXMuSW1wb3N0ZV9IYXV0KCkgKyB0aGlzLkFsbGVnZV9IYXV0KCkpICsgdGhpcy5fUG9ydGVfT04gKiB0aGlzLl9Qb3J0ZV9Qb3VyY2VudCAqIHRoaXMuX0NlbnRyZV9IYXV0ICogKDEgLSB0aGlzLl9DZXJjbGVfRGVtaV9PTiAtIHRoaXMuX0NlcmNsZV9RdWFydEdfT04gLSB0aGlzLl9DZXJjbGVfUXVhcnREX09OIC0gdGhpcy5fR290aGlxdWVfT04gLSB0aGlzLl9FbGxpcHNlX0RlbWlfT04gLSB0aGlzLl9FbGxpcHNlX1F1YXJ0R19PTiAtIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OKSArICgoMSArIHRoaXMuX092YWxlX1BvdXJjZW50X0hhdXQpICogdGhpcy5fT3ZhbGVfT04gKyB0aGlzLl9Sb25kX09OICsgMC41ICogdGhpcy5fQ2VyY2xlX0RlbWlfT04gKyB0aGlzLl9DZXJjbGVfUXVhcnRHX09OICsgdGhpcy5fQ2VyY2xlX1F1YXJ0RF9PTiArIHRoaXMuX0VsbGlwc2VfUG91cmNlbnRfSGF1dCAqICh0aGlzLl9FbGxpcHNlX09OICsgMC41ICogdGhpcy5fRWxsaXBzZV9EZW1pX09OICsgdGhpcy5fRWxsaXBzZV9RdWFydEdfT04gKyB0aGlzLl9FbGxpcHNlX1F1YXJ0RF9PTikgKyAwLjg2NiAqIHRoaXMuR290aGlxX09OKCkgKyB0aGlzLl9Hb3RoaXF1ZV9IX19Qb3VyY2VudF9IYXV0ICogdGhpcy5fR290aGlxdWVfSF9PTikgKiB0aGlzLlRvdGFsX0xhcmcoKVxyXG4gICAgfVxyXG4gICAgVmlld2JveF9IYXV0KCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiAoKDEgLSB0aGlzLl9PdmFsZV9PTiAtIHRoaXMuX1JvbmRfT04gLSB0aGlzLl9DZXJjbGVfRGVtaV9PTiAtIHRoaXMuX0NlcmNsZV9RdWFydEdfT04gLSB0aGlzLl9DZXJjbGVfUXVhcnREX09OIC0gdGhpcy5Hb3RoaXFfT04oKSAtIHRoaXMuX0VsbGlwc2VfT04gLSB0aGlzLl9FbGxpcHNlX0RlbWlfT04gLSB0aGlzLl9FbGxpcHNlX1F1YXJ0R19PTiAtIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OKSAqICh0aGlzLl9DZW50cmVfSGF1dCArIHRoaXMuSW1wb3N0ZV9IYXV0KCkgKyB0aGlzLkFsbGVnZV9IYXV0KCkpICsgdGhpcy5fUG9ydGVfT04gKiB0aGlzLl9Qb3J0ZV9Qb3VyY2VudCAqIHRoaXMuX0NlbnRyZV9IYXV0ICogKDEgLSB0aGlzLl9DZXJjbGVfRGVtaV9PTiAtIHRoaXMuX0NlcmNsZV9RdWFydEdfT04gLSB0aGlzLl9DZXJjbGVfUXVhcnREX09OIC0gdGhpcy5fR290aGlxdWVfT04gLSB0aGlzLl9FbGxpcHNlX0RlbWlfT04gLSB0aGlzLl9FbGxpcHNlX1F1YXJ0R19PTiAtIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OKSArICgoMSArIHRoaXMuX092YWxlX1BvdXJjZW50X0hhdXQpICogdGhpcy5fT3ZhbGVfT04gKyB0aGlzLl9Sb25kX09OICsgMC41ICogdGhpcy5fQ2VyY2xlX0RlbWlfT04gKyB0aGlzLl9DZXJjbGVfUXVhcnRHX09OICsgdGhpcy5fQ2VyY2xlX1F1YXJ0RF9PTiArIHRoaXMuX0VsbGlwc2VfUG91cmNlbnRfSGF1dCAqICh0aGlzLl9FbGxpcHNlX09OICsgMC41ICogdGhpcy5fRWxsaXBzZV9EZW1pX09OICsgdGhpcy5fRWxsaXBzZV9RdWFydEdfT04gKyB0aGlzLl9FbGxpcHNlX1F1YXJ0RF9PTikgKyAwLjg2NiAqIHRoaXMuR290aGlxX09OKCkgKyB0aGlzLl9Hb3RoaXF1ZV9IX19Qb3VyY2VudF9IYXV0ICogdGhpcy5fR290aGlxdWVfSF9PTikgKiB0aGlzLlRvdGFsX0xhcmcoKSkrMTQwXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgVG90YWxfTGFyZzIoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLlRvdGFsX0xhcmcoKSAvIDJcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIFRvdGFsX0xhcmdfUHJvZmlsZSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuVG90YWxfTGFyZygpIC0gdGhpcy5fUHJvZmlsZV9FeHRfTGFyZ1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgQ2ludHJhZ2VCX0hhdXQoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAwLjUgKiAodGhpcy5fT3ZhbGVfT04gKyB0aGlzLl9Sb25kX09OICsgdGhpcy5fRWxsaXBzZV9PTiAqIHRoaXMuX0VsbGlwc2VfUG91cmNlbnRfSGF1dCkgKiB0aGlzLlRvdGFsX0xhcmcoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgQ2ludHJhZ2VIX0hhdXQoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAoIDIgKiAodGhpcy5fQ2VyY2xlSF9RdWFydEdfT04gKyB0aGlzLl9DZXJjbGVIX1F1YXJ0RF9PTikgKiB0aGlzLl9DaW50cmFnZV9Qb3VyY2VudF9IYXV0ICsgdGhpcy5DaW50cmFnZUhfT04oKSAqIHRoaXMuQ2ludHJhZ2VIX1BvdXJjZW50X0hhdXQoKSArICh0aGlzLl9FbGxpcHNlSF9RdWFydEdfT04gKyB0aGlzLl9FbGxpcHNlSF9RdWFydERfT04gKyAwLjUgKiB0aGlzLl9FbGxpcHNlSF9EZW1pX09OKSAqIHRoaXMuX0VsbGlwc2VfUG91cmNlbnRfSGF1dCArIHRoaXMuR290aGlxX09OKCkgKiAwLjg2NikgKiB0aGlzLlRvdGFsX0xhcmcoKSArICh0aGlzLl9DZXJjbGVfRGVtaV9PTiArIHRoaXMuX0NlcmNsZV9RdWFydEdfT04gKyB0aGlzLl9DZXJjbGVfUXVhcnREX09OICsgdGhpcy5fRWxsaXBzZV9EZW1pX09OICsgdGhpcy5fRWxsaXBzZV9RdWFydEdfT04gKyB0aGlzLl9FbGxpcHNlX1F1YXJ0RF9PTikgKiB0aGlzLlRvdGFsX0hhdXQoKSArIHRoaXMuQ2ludHJhZ2VCX0hhdXQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9IX1JheW9uWDEoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5fRWxsaXBzZV9EZW1pX09OICsgdGhpcy5fRWxsaXBzZUhfRGVtaV9PTiArIHRoaXMuQ2ludHJhZ2VCX09OKCkpICogdGhpcy5Ub3RhbF9MYXJnMigpICsgKHRoaXMuX0NlcmNsZV9RdWFydEdfT04gKyB0aGlzLl9DZXJjbGVfUXVhcnREX09OICsgdGhpcy5fRWxsaXBzZV9RdWFydEdfT04gKyB0aGlzLl9FbGxpcHNlSF9RdWFydEdfT04gKyB0aGlzLl9FbGxpcHNlX1F1YXJ0RF9PTiArIHRoaXMuX0VsbGlwc2VIX1F1YXJ0RF9PTiArIHRoaXMuR290aGlxX09OKCkpICogdGhpcy5Ub3RhbF9MYXJnKCkgKyAwLjUgKiAodGhpcy5fQ2VyY2xlX0RlbWlfT04gKyB0aGlzLkNpbnRyYWdlSF9PTigpKSAqICh0aGlzLkNpbnRyYWdlSF9IYXV0KCkgKyB0aGlzLlRvdGFsX0xhcmcyKCkgKiB0aGlzLlRvdGFsX0xhcmcyKCkgLyAodGhpcy5DaW50cmFnZUhfSGF1dCgpICsgMSAtIHRoaXMuQ2lyY3VsYWlyZV9PTigpKSkgKyAwLjUgKiAodGhpcy5fQ2VyY2xlSF9RdWFydEdfT04gKyB0aGlzLl9DZXJjbGVIX1F1YXJ0RF9PTikgKiAodGhpcy5DaW50cmFnZUhfSGF1dCgpICsgdGhpcy5Ub3RhbF9MYXJnKCkgKiB0aGlzLlRvdGFsX0xhcmcoKSAvICh0aGlzLkNpbnRyYWdlSF9IYXV0KCkgKyAxIC0gdGhpcy5DaXJjdWxhaXJlX09OKCkpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9IX1JheW9uWTEoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5DaW50cmFnZUhIX09OKCkgLSAoMSAtIHRoaXMuX0VsbGlwc2VfUG91cmNlbnRfSGF1dCkgKiAodGhpcy5FbGxpcHRpcXVlX09OKCkgKyB0aGlzLl9FbGxpcHNlX09OKSkgKiB0aGlzLkRvcm1hbnRfSF9SYXlvblgxKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSF9SYXlvblgyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5DaW50cmFnZUhIX09OKCkgKiAodGhpcy5Eb3JtYW50X0hfUmF5b25YMSgpIC0gdGhpcy5fUHJvZmlsZV9FeHRfTGFyZylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSF9SYXlvblkyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5DaW50cmFnZUhIX09OKCkgKiAodGhpcy5Eb3JtYW50X0hfUmF5b25ZMSgpIC0gdGhpcy5fUHJvZmlsZV9FeHRfTGFyZylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfQl9SYXlvblgxKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5DaW50cmFnZUJfT04oKSAqIHRoaXMuRG9ybWFudF9IX1JheW9uWDEoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9CX1JheW9uWTEoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkNpbnRyYWdlQl9PTigpICogdGhpcy5Eb3JtYW50X0hfUmF5b25ZMSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0JfUmF5b25YMigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQ2ludHJhZ2VCX09OKCkgKiB0aGlzLkRvcm1hbnRfSF9SYXlvblgyKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfQl9SYXlvblkyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5DaW50cmFnZUJfT04oKSAqIHRoaXMuRG9ybWFudF9IX1JheW9uWTIoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9IR19MYXJnKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuX1RyaWFuZ2xlR19PTiArIHRoaXMuX1RyaWFuZ2xlR19IX09OICsgdGhpcy5fQ2VyY2xlX1F1YXJ0R19PTiArIHRoaXMuX0NlcmNsZUhfUXVhcnRHX09OICsgdGhpcy5fRWxsaXBzZV9RdWFydEdfT04gKyB0aGlzLl9FbGxpcHNlSF9RdWFydEdfT04gKyB0aGlzLl9DaGFuZnJlaW5HX09OICogdGhpcy5fQ2hhbmZyZWluR19Qb3VyY2VudF9MYXJnICsgdGhpcy5fRGVtaU9jdG9nb25lX09OICogdGhpcy5fRGVtaU9jdG9nb25lX1BvdXJjZW50X0xhcmcgKyAwLjUgKiAodGhpcy5fRGVtaUhleGFnX09OICsgdGhpcy5fVHJpYW5nbGVfT04gKyB0aGlzLl9Mb3NhbmdlX09OICsgdGhpcy5fSGV4YWdvbmVfT04gKyB0aGlzLl9Hb3RoaXF1ZV9PTiArIHRoaXMuX0dvdGhpcXVlX0hfT04pICsgdGhpcy5fT2N0b2dvbmVfT04gKiB0aGlzLl9PY3RvZ29uZV9Qb3VyY2VudF9MYXJnKSAqIHRoaXMuVG90YWxfTGFyZygpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0hHX0hhdXQoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAoIHRoaXMuX0NoYW5mcmVpbkdfT04gKiB0aGlzLl9DaGFuZnJlaW5HX1BvdXJjZW50X0hhdXQgKyB0aGlzLl9UcmlhbmdsZUdfT04gKyB0aGlzLl9UcmlhbmdsZUdfSF9PTiAqIHRoaXMuX1RyaWFuZ2xlR19IX1BvdXJjZW50X0hhdXQgKyB0aGlzLl9EZW1pT2N0b2dvbmVfT04gKiB0aGlzLl9EZW1pT2N0b2dvbmVfUG91cmNlbnRfSGF1dCArIHRoaXMuX09jdG9nb25lX09OICogdGhpcy5fT2N0b2dvbmVfUG91cmNlbnRfSGF1dCArIHRoaXMuX0RlbWlIZXhhZ19PTiAqIHRoaXMuX0RlbWlIZXhhZ2xfUG91cmNlbnRfSGF1dCArIHRoaXMuX0hleGFnb25lX09OICogdGhpcy5fSGV4YWdvbmVfUG91cmNlbnRfSGF1dCArIHRoaXMuX1RyaWFuZ2xlX09OICsgMC41ICogdGhpcy5fTG9zYW5nZV9PTiArIHRoaXMuX0NlcmNsZV9RdWFydEdfT04pICogdGhpcy5Ub3RhbF9IYXV0KCkgKyAodGhpcy5fQ2VyY2xlSF9RdWFydEdfT04gKyB0aGlzLl9Hb3RoaXF1ZV9PTiArIHRoaXMuX0dvdGhpcXVlX0hfT04gKyB0aGlzLl9FbGxpcHNlX1F1YXJ0R19PTiArIHRoaXMuX0VsbGlwc2VIX1F1YXJ0R19PTikgKiB0aGlzLkNpbnRyYWdlSF9IYXV0KClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSEdfQW5nbGUoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4odGhpcy5Eb3JtYW50X0hHX0xhcmcoKSAvICh0aGlzLkRvcm1hbnRfSEdfSGF1dCgpICsgdGhpcy5Eb3JtYW50X0hHX09OKCkgLSAxKSkgKiAxODAgLyBNYXRoLlBJXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0JHX0xhcmcoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5fT2N0b2dvbmVfT04gKyB0aGlzLl9IZXhhZ29uZV9PTiArIHRoaXMuX0xvc2FuZ2VfT04pICogdGhpcy5Eb3JtYW50X0hHX0xhcmcoKSArIHRoaXMuX1BvcnRlX09OICogdGhpcy5fTEdfT04gKiAodGhpcy5MR19MYXJnKCkgKyB0aGlzLl9Qcm9maWxlX0ludF9MYXJnKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9CR19IYXV0KCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuX09jdG9nb25lX09OICsgdGhpcy5fSGV4YWdvbmVfT04gKyB0aGlzLl9Mb3NhbmdlX09OKSAqIHRoaXMuRG9ybWFudF9IR19IYXV0KClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfQkdfQW5nbGUoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5fT2N0b2dvbmVfT04gKyB0aGlzLl9IZXhhZ29uZV9PTiArIHRoaXMuX0xvc2FuZ2VfT04pICogdGhpcy5Eb3JtYW50X0hHX0FuZ2xlKCkgKyB0aGlzLl9Qb3J0ZV9PTiAqIHRoaXMuX0xHX09OICogOTBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSERfTGFyZygpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLl9UcmlhbmdsZURfT04gKyB0aGlzLl9UcmlhbmdsZURfSF9PTiArIHRoaXMuX0NlcmNsZV9RdWFydERfT04gKyB0aGlzLl9DZXJjbGVIX1F1YXJ0RF9PTiArIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OICsgdGhpcy5fRWxsaXBzZUhfUXVhcnREX09OICsgdGhpcy5fRGVtaU9jdG9nb25lX09OICogdGhpcy5fRGVtaU9jdG9nb25lX1BvdXJjZW50X0xhcmcgKyB0aGlzLl9DaGFuZnJlaW5EX09OICogdGhpcy5fQ2hhbmZyZWluRF9Qb3VyY2VudF9MYXJnICsgMC41ICogKHRoaXMuX0RlbWlIZXhhZ19PTiArIHRoaXMuX1RyaWFuZ2xlX09OICsgdGhpcy5fTG9zYW5nZV9PTiArIHRoaXMuX0hleGFnb25lX09OICsgdGhpcy5fR290aGlxdWVfT04gKyB0aGlzLl9Hb3RoaXF1ZV9IX09OKSArIHRoaXMuX09jdG9nb25lX09OICogdGhpcy5fT2N0b2dvbmVfUG91cmNlbnRfTGFyZyApICogdGhpcy5Ub3RhbF9MYXJnKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSERfSGF1dCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLl9DZXJjbGVfUXVhcnREX09OICsgdGhpcy5fVHJpYW5nbGVEX09OICsgdGhpcy5fVHJpYW5nbGVEX0hfT04gKiB0aGlzLl9UcmlhbmdsZURfSF9Qb3VyY2VudF9IYXV0ICsgdGhpcy5fQ2hhbmZyZWluRF9PTiAqIHRoaXMuX0NoYW5mcmVpbkRfUG91cmNlbnRfSGF1dCArIHRoaXMuX0RlbWlPY3RvZ29uZV9PTiAqIHRoaXMuX0RlbWlPY3RvZ29uZV9Qb3VyY2VudF9IYXV0ICsgdGhpcy5fRGVtaUhleGFnX09OICogdGhpcy5fRGVtaUhleGFnbF9Qb3VyY2VudF9IYXV0ICsgdGhpcy5fVHJpYW5nbGVfT04gKyAwLjUgKiB0aGlzLl9Mb3NhbmdlX09OICsgdGhpcy5fSGV4YWdvbmVfT04gKiB0aGlzLl9IZXhhZ29uZV9Qb3VyY2VudF9IYXV0ICsgdGhpcy5fT2N0b2dvbmVfT04gKiB0aGlzLl9PY3RvZ29uZV9Qb3VyY2VudF9IYXV0KSAqIHRoaXMuVG90YWxfSGF1dCgpICsgKHRoaXMuX0NlcmNsZUhfUXVhcnREX09OICsgdGhpcy5fR290aGlxdWVfT04gKyB0aGlzLl9Hb3RoaXF1ZV9IX09OICsgdGhpcy5fRWxsaXBzZV9RdWFydERfT04gKyB0aGlzLl9FbGxpcHNlSF9RdWFydERfT04pICogdGhpcy5DaW50cmFnZUhfSGF1dCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0hEX0FuZ2xlKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5hdGFuKHRoaXMuRG9ybWFudF9IRF9MYXJnKCkgLyAodGhpcy5Eb3JtYW50X0hEX0hhdXQoKSArIHRoaXMuRG9ybWFudF9IRF9PTigpIC0gMSkpICogMTgwIC8gTWF0aC5QSVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9CRF9MYXJnKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuX09jdG9nb25lX09OICsgdGhpcy5fSGV4YWdvbmVfT04gKyB0aGlzLl9Mb3NhbmdlX09OKSAqIHRoaXMuRG9ybWFudF9CR19MYXJnKCkgKyB0aGlzLl9Qb3J0ZV9PTiAqIHRoaXMuX0xEX09OICogKHRoaXMuTERfTGFyZygpICsgdGhpcy5fUHJvZmlsZV9JbnRfTGFyZylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfQkRfSGF1dCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLl9PY3RvZ29uZV9PTiArIHRoaXMuX0hleGFnb25lX09OICsgdGhpcy5fTG9zYW5nZV9PTikgKiB0aGlzLkRvcm1hbnRfQkdfSGF1dCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0JEX0FuZ2xlKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuX09jdG9nb25lX09OICsgdGhpcy5fSGV4YWdvbmVfT04gKyB0aGlzLl9Mb3NhbmdlX09OKSAqIHRoaXMuRG9ybWFudF9IRF9BbmdsZSgpICsgdGhpcy5fUG9ydGVfT04gKiB0aGlzLl9MRF9PTiAqIDkwXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBTZXVpbF9YKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fUG9ydGVfT04gKiAodGhpcy5fUHJvZmlsZV9FeHRfTGFyZyArIHRoaXMuX0xHX09OICogKHRoaXMuTEdfTGFyZygpICsgdGhpcy5fUHJvZmlsZV9JbnRfTGFyZyAtIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgU2V1aWxfWSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1BvcnRlX09OICogKHRoaXMuVG90YWxfSGF1dCgpIC0gMC41ICogdGhpcy5fU2V1aWxfU3Ryb2tlX1dpZHRoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgU2V1aWxfRDEoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Qb3J0ZV9PTiAqICh0aGlzLlRvdGFsX0xhcmcoKSAtIDIgKiB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnICsgdGhpcy5fTEdfT04gKiAodGhpcy5fUHJvZmlsZV9FeHRfTGFyZyAtIHRoaXMuTEdfTGFyZygpIC0gdGhpcy5fUHJvZmlsZV9JbnRfTGFyZykgKyB0aGlzLl9MRF9PTiAqICh0aGlzLl9Qcm9maWxlX0V4dF9MYXJnIC0gdGhpcy5MRF9MYXJnKCkgLSB0aGlzLl9Qcm9maWxlX0ludF9MYXJnKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSEdfT04oKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9DaGFuZnJlaW5HX09OICsgdGhpcy5fVHJpYW5nbGVHX09OICsgdGhpcy5fVHJpYW5nbGVHX0hfT04gKyB0aGlzLl9EZW1pT2N0b2dvbmVfT04gKyB0aGlzLl9PY3RvZ29uZV9PTiArIHRoaXMuX0RlbWlIZXhhZ19PTiArIHRoaXMuX0hleGFnb25lX09OICsgdGhpcy5fVHJpYW5nbGVfT04gKyB0aGlzLl9Mb3NhbmdlX09OICsgdGhpcy5fQ2VyY2xlX1F1YXJ0R19PTiArIHRoaXMuX0NlcmNsZUhfUXVhcnRHX09OICsgdGhpcy5fR290aGlxdWVfT04gKyB0aGlzLl9Hb3RoaXF1ZV9IX09OICsgdGhpcy5fRWxsaXBzZV9RdWFydEdfT04gKyB0aGlzLl9FbGxpcHNlSF9RdWFydEdfT05cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSEdfWDAoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfSEdfT04oKSAqIHRoaXMuRG9ybWFudF9IR19MYXJnKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSEdfWTAoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0hHX1gxKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9IR19ZMSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9IR19PTigpICogdGhpcy5Eb3JtYW50X0hHX0hhdXQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9IR19YMigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgKiAodGhpcy5fQ2hhbmZyZWluR19PTiArIHRoaXMuX1RyaWFuZ2xlR19IX09OICsgdGhpcy5fRGVtaU9jdG9nb25lX09OICsgdGhpcy5fT2N0b2dvbmVfT04gKyB0aGlzLl9EZW1pSGV4YWdfT04gKyB0aGlzLl9IZXhhZ29uZV9PTiArIHRoaXMuX0NlcmNsZUhfUXVhcnRHX09OICsgdGhpcy5fR290aGlxdWVfSF9PTiArIHRoaXMuX0VsbGlwc2VIX1F1YXJ0R19PTiArICh0aGlzLl9UcmlhbmdsZUdfT04gKyB0aGlzLl9UcmlhbmdsZV9PTikgKiAoTWF0aC50YW4oKDkwICsgdGhpcy5Eb3JtYW50X0hHX0FuZ2xlKCkpICogTWF0aC5QSSAvIDM2MCkgKiAoMSAtIHRoaXMuX1BvcnRlX09OICogKDEgLSB0aGlzLl9MR19PTikpKSArICh0aGlzLl9Mb3NhbmdlX09OICsgKHRoaXMuX1RyaWFuZ2xlR19PTiArIHRoaXMuX1RyaWFuZ2xlX09OKSAqIHRoaXMuX1BvcnRlX09OICogKDEgLSB0aGlzLl9MR19PTikpIC8gTWF0aC5jb3ModGhpcy5Eb3JtYW50X0hHX0FuZ2xlKCkgKiBNYXRoLlBJIC8gMTgwKSkgKyAodGhpcy5fQ2VyY2xlX1F1YXJ0R19PTiArIHRoaXMuX0dvdGhpcXVlX09OICsgdGhpcy5fRWxsaXBzZV9RdWFydEdfT04pICogKHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgKyB0aGlzLkRvcm1hbnRfSF9SYXlvblgyKCkgKiAoMSAtIE1hdGguc3FydCgxIC0gKHRoaXMuX0NlcmNsZV9RdWFydEdfT04gKyB0aGlzLl9Hb3RoaXF1ZV9PTiArIHRoaXMuX0VsbGlwc2VfUXVhcnRHX09OKSAqIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgKiB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnIC8gKHRoaXMuRG9ybWFudF9IX1JheW9uWTIoKSAqIHRoaXMuRG9ybWFudF9IX1JheW9uWTIoKSArIDEgLSB0aGlzLl9DZXJjbGVfUXVhcnRHX09OIC0gdGhpcy5fR290aGlxdWVfT04gLSB0aGlzLl9FbGxpcHNlX1F1YXJ0R19PTikpKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSEdfWTIoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfSEdfWTEoKSArIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgKiAoICh0aGlzLl9UcmlhbmdsZUdfSF9PTiArIHRoaXMuX0NoYW5mcmVpbkdfT04gKyB0aGlzLl9EZW1pT2N0b2dvbmVfT04gKyB0aGlzLl9EZW1pSGV4YWdfT04gKyB0aGlzLl9IZXhhZ29uZV9PTiArIHRoaXMuX09jdG9nb25lX09OKSAqIE1hdGgudGFuKHRoaXMuRG9ybWFudF9IR19BbmdsZSgpICogTWF0aC5QSSAvIDM2MCkgLSAodGhpcy5fVHJpYW5nbGVHX09OICsgdGhpcy5fVHJpYW5nbGVfT04gKyB0aGlzLl9DZXJjbGVfUXVhcnRHX09OICsgdGhpcy5fR290aGlxdWVfT04gKyB0aGlzLl9FbGxpcHNlX1F1YXJ0R19PTikgKiAoMSAtIHRoaXMuX1BvcnRlX09OICogKDEgLSB0aGlzLl9MR19PTikpKSAtIHRoaXMuX0NlcmNsZUhfUXVhcnRHX09OICogKHRoaXMuRG9ybWFudF9IR19ZMSgpIC0gKHRoaXMuRG9ybWFudF9IX1JheW9uWTEoKSAtIHRoaXMuRG9ybWFudF9IX1JheW9uWTIoKSAqIE1hdGguc3FydCgxIC0gdGhpcy5fQ2VyY2xlSF9RdWFydEdfT04gKiB0aGlzLlRvdGFsX0xhcmdfUHJvZmlsZSgpICogdGhpcy5Ub3RhbF9MYXJnX1Byb2ZpbGUoKSAvICgodGhpcy5Eb3JtYW50X0hfUmF5b25YMigpICogdGhpcy5Eb3JtYW50X0hfUmF5b25YMigpICsgMSAtIHRoaXMuX0NlcmNsZUhfUXVhcnRHX09OKSkpKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSEdfWDMoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfSEdfWDAoKSArIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgKiAoKHRoaXMuX0NoYW5mcmVpbkdfT04gKyB0aGlzLl9EZW1pT2N0b2dvbmVfT04gKyB0aGlzLl9PY3RvZ29uZV9PTikgKiBNYXRoLnRhbigoOTAgLSB0aGlzLkRvcm1hbnRfSEdfQW5nbGUoKSkgKiBNYXRoLlBJIC8gMzYwKSAtIHRoaXMuX1RyaWFuZ2xlR19PTiAtIHRoaXMuX1RyaWFuZ2xlR19IX09OIC0gdGhpcy5fQ2VyY2xlX1F1YXJ0R19PTiAtIHRoaXMuX0NlcmNsZUhfUXVhcnRHX09OIC0gdGhpcy5fRWxsaXBzZV9RdWFydEdfT04gLSB0aGlzLl9FbGxpcHNlSF9RdWFydEdfT04pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0hHX1kzKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyAqICggdGhpcy5fQ2hhbmZyZWluR19PTiArIHRoaXMuX0RlbWlPY3RvZ29uZV9PTiArIHRoaXMuX09jdG9nb25lX09OICsgKHRoaXMuX1RyaWFuZ2xlR19PTiArIHRoaXMuX1RyaWFuZ2xlR19IX09OKSAqIE1hdGgudGFuKCgxODAgLSB0aGlzLkRvcm1hbnRfSEdfQW5nbGUoKSkgKiBNYXRoLlBJIC8gMzYwKSArICh0aGlzLl9EZW1pSGV4YWdfT04gKyB0aGlzLl9UcmlhbmdsZV9PTiArIHRoaXMuX0xvc2FuZ2VfT04gKyB0aGlzLl9IZXhhZ29uZV9PTikgLyBNYXRoLnNpbigodGhpcy5Eb3JtYW50X0hHX0FuZ2xlKCkgKyAxIC0gdGhpcy5Eb3JtYW50X0hHX09OKCkpICogTWF0aC5QSSAvIDE4MCkgKSArICh0aGlzLl9DZXJjbGVfUXVhcnRHX09OICsgdGhpcy5fQ2VyY2xlSF9RdWFydEdfT04gKyB0aGlzLl9FbGxpcHNlX1F1YXJ0R19PTiArIHRoaXMuX0VsbGlwc2VIX1F1YXJ0R19PTikgKiAodGhpcy5Eb3JtYW50X0hfUmF5b25ZMSgpIC0gdGhpcy5Eb3JtYW50X0hfUmF5b25ZMigpICogTWF0aC5zcXJ0KDEgLSAodGhpcy5fQ2VyY2xlX1F1YXJ0R19PTiArIHRoaXMuX0NlcmNsZUhfUXVhcnRHX09OICsgdGhpcy5fRWxsaXBzZV9RdWFydEdfT04gKyB0aGlzLl9FbGxpcHNlSF9RdWFydEdfT04pICogdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyAqIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgLyAodGhpcy5Eb3JtYW50X0hfUmF5b25YMigpICogdGhpcy5Eb3JtYW50X0hfUmF5b25YMigpICsgMSAtIHRoaXMuX0NlcmNsZV9RdWFydEdfT04gLSB0aGlzLl9DZXJjbGVIX1F1YXJ0R19PTiAtIHRoaXMuX0VsbGlwc2VfUXVhcnRHX09OIC0gdGhpcy5fRWxsaXBzZUhfUXVhcnRHX09OKSkpICsgdGhpcy5Hb3RoaXFfT04oKSAqICh0aGlzLkRvcm1hbnRfSEdfWTEoKSAtIE1hdGguc3FydCh0aGlzLkRvcm1hbnRfSF9SYXlvblgyKCkgKiB0aGlzLkRvcm1hbnRfSF9SYXlvblgyKCkgLSB0aGlzLkdvdGhpcV9PTigpICogdGhpcy5Eb3JtYW50X0hHX1gzKCkgKiB0aGlzLkRvcm1hbnRfSEdfWDMoKSkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2FueX1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0hHX0RZMSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLkRvcm1hbnRfSEdfWDAoKSAqIHRoaXMuRG9ybWFudF9IR19YMCgpICsgdGhpcy5Eb3JtYW50X0hHX1kxKCkgKiB0aGlzLkRvcm1hbnRfSEdfWTEoKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSEdfTFgxKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0hHX09OKCkgKiBNYXRoLnNxcnQoKHRoaXMuRG9ybWFudF9IR19YMigpIC0gdGhpcy5Eb3JtYW50X0hHX1gwKCkpICogKHRoaXMuRG9ybWFudF9IR19YMigpIC0gdGhpcy5Eb3JtYW50X0hHX1gwKCkpICsgdGhpcy5Eb3JtYW50X0hHX1kyKCkgKiB0aGlzLkRvcm1hbnRfSEdfWTIoKSAtIE1hdGgucG93KHRoaXMuRG9ybWFudF9IR19YMCgpICogKHRoaXMuRG9ybWFudF9IR19YMCgpIC0gdGhpcy5Eb3JtYW50X0hHX1gyKCkpICsgdGhpcy5Eb3JtYW50X0hHX1kxKCkgKiB0aGlzLkRvcm1hbnRfSEdfWTIoKSwgMikgLyAodGhpcy5Eb3JtYW50X0hHX0RZMSgpICogdGhpcy5Eb3JtYW50X0hHX0RZMSgpICsgMSAtIHRoaXMuRG9ybWFudF9IR19PTigpKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSEdfTFkxKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gLXRoaXMuRG9ybWFudF9IR19PTigpICogKHRoaXMuRG9ybWFudF9IR19EWTEoKSAtICh0aGlzLkRvcm1hbnRfSEdfWDAoKSAqICh0aGlzLkRvcm1hbnRfSEdfWDAoKSAtIHRoaXMuRG9ybWFudF9IR19YMigpKSArIHRoaXMuRG9ybWFudF9IR19ZMSgpICogdGhpcy5Eb3JtYW50X0hHX1kyKCkpIC8gKHRoaXMuRG9ybWFudF9IR19EWTEoKSArIDEgLSB0aGlzLkRvcm1hbnRfSEdfT04oKSkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0hHX0RYMigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLl9DZXJjbGVfUXVhcnRHX09OICsgdGhpcy5fQ2VyY2xlSF9RdWFydEdfT04gKyB0aGlzLl9FbGxpcHNlX1F1YXJ0R19PTiArIHRoaXMuX0VsbGlwc2VIX1F1YXJ0R19PTiArIHRoaXMuR290aGlxX09OKCkpICogKE1hdGguYWJzKDEgLSB0aGlzLl9FbGxpcHNlX1BvdXJjZW50X0hhdXQpIC8gKDEgLSB0aGlzLl9FbGxpcHNlX1BvdXJjZW50X0hhdXQpICogTWF0aC5zcXJ0KCh0aGlzLkRvcm1hbnRfSEdfWDAoKSAtIHRoaXMuRG9ybWFudF9IR19YMygpKSAqICh0aGlzLkRvcm1hbnRfSEdfWDAoKSAtIHRoaXMuRG9ybWFudF9IR19YMygpKSArIHRoaXMuRG9ybWFudF9IR19ZMygpICogdGhpcy5Eb3JtYW50X0hHX1kzKCkgLSBNYXRoLnBvdyh0aGlzLkRvcm1hbnRfSEdfWDAoKSAqICh0aGlzLkRvcm1hbnRfSEdfWDAoKSAtIHRoaXMuRG9ybWFudF9IR19YMygpKSArIHRoaXMuRG9ybWFudF9IR19ZMSgpICogdGhpcy5Eb3JtYW50X0hHX1kzKCksIDIpIC8gKHRoaXMuRG9ybWFudF9IR19EWTEoKSAqIHRoaXMuRG9ybWFudF9IR19EWTEoKSArIDEgLSB0aGlzLkRvcm1hbnRfSEdfT04oKSkpIC0gdGhpcy5Eb3JtYW50X0hHX0xYMSgpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9IR19EWTIoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAtTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMuRG9ybWFudF9IR19YMygpIC0gdGhpcy5Eb3JtYW50X0hHX1gyKCksIDIpICsgTWF0aC5wb3codGhpcy5Eb3JtYW50X0hHX1kyKCkgLSB0aGlzLkRvcm1hbnRfSEdfWTMoKSwgMikpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0hHX0xYMigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIC0odGhpcy5Eb3JtYW50X0hHX0xYMSgpICsgdGhpcy5Eb3JtYW50X0hHX0RYMigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9IR19MWTIoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAtdGhpcy5Eb3JtYW50X0hHX0RZMigpIC0gdGhpcy5Eb3JtYW50X0hHX0xZMSgpIC0gdGhpcy5Eb3JtYW50X0hHX0RZMSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0hHX1RyYW5zX1goKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfSEdfT04oKSAqIHRoaXMuRG9ybWFudF9IR19MYXJnKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSEdfVHJhbnNfWSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9IR19PTigpICogKHRoaXMuRG9ybWFudF9IR19ZMSgpIC0gdGhpcy5Eb3JtYW50X0hHX0hhdXQoKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSEdfUm90YXRlKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0hHX09OKCkgKiB0aGlzLkRvcm1hbnRfSEdfQW5nbGUoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHthbnl9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9HR19PTigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1JlY3RfT04gKyB0aGlzLl9UcmlhbmdsZUdfSF9PTiArIHRoaXMuX1RyaWFuZ2xlRF9IX09OICsgdGhpcy5fQ2hhbmZyZWluR19PTiArIHRoaXMuX0NoYW5mcmVpbkRfT04gKyB0aGlzLl9UcmlhbmdsZURfT04gKyB0aGlzLl9EZW1pT2N0b2dvbmVfT04gKyB0aGlzLl9PY3RvZ29uZV9PTiArIHRoaXMuX0RlbWlIZXhhZ19PTiArIHRoaXMuX0hleGFnb25lX09OICsgdGhpcy5fT3ZhbGVfT04gKyB0aGlzLl9DZXJjbGVIX1F1YXJ0R19PTiArIHRoaXMuX0NlcmNsZV9RdWFydERfT04gKyB0aGlzLl9DZXJjbGVIX1F1YXJ0RF9PTiArIHRoaXMuQ2ludHJhZ2VIX09OKCkgKyB0aGlzLl9Hb3RoaXF1ZV9IX09OICsgdGhpcy5fRWxsaXBzZUhfUXVhcnRHX09OICsgdGhpcy5fRWxsaXBzZV9RdWFydERfT04gKyB0aGlzLl9FbGxpcHNlSF9RdWFydERfT04gKyB0aGlzLl9FbGxpcHNlSF9EZW1pX09OXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0dHX1gwKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9HR19ZMCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLkRvcm1hbnRfR0dfT04oKSAtIHRoaXMuX0NlcmNsZV9RdWFydERfT04gLSB0aGlzLl9DZXJjbGVIX1F1YXJ0RF9PTiAtIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OIC0gdGhpcy5fRWxsaXBzZUhfUXVhcnREX09OKSAqICh0aGlzLkNpbnRyYWdlSF9IYXV0KCkgKyAoMSAtIHRoaXMuX0NlcmNsZUhfUXVhcnRHX09OIC0gdGhpcy5fR290aGlxdWVfSF9PTiAtIHRoaXMuX0VsbGlwc2VfUXVhcnRHX09OIC0gdGhpcy5fRWxsaXBzZUhfUXVhcnRHX09OKSAqIHRoaXMuRG9ybWFudF9IR19IYXV0KCkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0dHX1gxKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0dHX1gwKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfR0dfWTEoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfR0dfT04oKSAqICh0aGlzLlRvdGFsX0hhdXQoKSAtIHRoaXMuQ2ludHJhZ2VCX0hhdXQoKSAtIHRoaXMuX09jdG9nb25lX09OICogdGhpcy5Eb3JtYW50X0JHX0hhdXQoKSAtIHRoaXMuX0hleGFnb25lX09OICogdGhpcy5Eb3JtYW50X0hHX1kxKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0dHX1gyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0dHX09OKCkgKiB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0dHX1kyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0dHX09OKCkgKiAodGhpcy5Eb3JtYW50X0dHX1kxKCkgLSB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnICsgKHRoaXMuX09jdG9nb25lX09OICsgdGhpcy5fSGV4YWdvbmVfT04pICogKHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgKyB0aGlzLkRvcm1hbnRfSEdfTFkxKCkpICsgKHRoaXMuX092YWxlX09OICsgKDEgLSB0aGlzLl9MR19PTikgKiB0aGlzLl9Qb3J0ZV9PTikgKiB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9HR19YMygpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9HR19YMigpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0dHX1kzKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0dHX09OKCkgKiAodGhpcy5Eb3JtYW50X0hHX09OKCkgKiB0aGlzLkRvcm1hbnRfSEdfWTIoKSArICh0aGlzLl9SZWN0X09OICsgdGhpcy5fQ2hhbmZyZWluRF9PTiArICh0aGlzLl9UcmlhbmdsZURfT04gKyB0aGlzLl9UcmlhbmdsZURfSF9PTikgKiBNYXRoLnRhbigoMTgwIC0gdGhpcy5Eb3JtYW50X0hEX0FuZ2xlKCkpICogTWF0aC5QSSAvIDM2MCkpICogdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyArICh0aGlzLl9PdmFsZV9PTiArIHRoaXMuX0VsbGlwc2VIX0RlbWlfT04pICogdGhpcy5Eb3JtYW50X0dHX1kwKCkgKyB0aGlzLkNpbnRyYWdlSF9PTigpICogKHRoaXMuRG9ybWFudF9IX1JheW9uWTEoKSAtIHRoaXMuRG9ybWFudF9IX1JheW9uWTIoKSAqIE1hdGguc3FydCgxIC0gdGhpcy5DaW50cmFnZUhfT04oKSAqIE1hdGgucG93KHRoaXMuVG90YWxfTGFyZzIoKSAtIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcsIDIpIC8gKHRoaXMuRG9ybWFudF9IX1JheW9uWDIoKSAqIHRoaXMuRG9ybWFudF9IX1JheW9uWDIoKSArIDEgLSB0aGlzLkNpbnRyYWdlSF9PTigpKSkpICsgKHRoaXMuX0NlcmNsZV9RdWFydERfT04gKyB0aGlzLl9DZXJjbGVIX1F1YXJ0RF9PTiArIHRoaXMuX0dvdGhpcXVlX09OICsgdGhpcy5fRWxsaXBzZV9RdWFydERfT04gKyB0aGlzLl9FbGxpcHNlSF9RdWFydERfT04pICogKHRoaXMuRG9ybWFudF9IX1JheW9uWTEoKSAtIHRoaXMuRG9ybWFudF9IX1JheW9uWTIoKSAqIE1hdGguc3FydCgxIC0gKHRoaXMuX0NlcmNsZV9RdWFydERfT04gKyB0aGlzLl9DZXJjbGVIX1F1YXJ0RF9PTiArIHRoaXMuX0dvdGhpcXVlX09OICsgdGhpcy5fRWxsaXBzZV9RdWFydERfT04gKyB0aGlzLl9FbGxpcHNlSF9RdWFydERfT04pICogdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyAqIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgLyAodGhpcy5Eb3JtYW50X0hfUmF5b25YMigpICogdGhpcy5Eb3JtYW50X0hfUmF5b25YMigpICsgMSAtIHRoaXMuQ2ludHJhZ2VISF9PTigpKSkpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9HR19EWTEoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfR0dfWTEoKSAtIHRoaXMuRG9ybWFudF9HR19ZMCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0dHX0xYMSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9HR19PTigpICogdGhpcy5fUHJvZmlsZV9FeHRfTGFyZ1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9HR19MWTEoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfR0dfWTIoKSAtIHRoaXMuRG9ybWFudF9HR19ZMSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0dHX0RYMigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfR0dfRFkyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0dHX1kzKCkgLSB0aGlzLkRvcm1hbnRfR0dfWTIoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9HR19MWDIoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAtdGhpcy5Eb3JtYW50X0dHX0xYMSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0dHX0xZMigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9HR19ZMCgpIC0gdGhpcy5Eb3JtYW50X0dHX1kzKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfR0dfVHJhbnNfWCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9HR19YMCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0dHX1RyYW5zX1koKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfR0dfWTAoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9HR19Sb3RhdGUoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0JHX09OKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fT2N0b2dvbmVfT04gKyB0aGlzLl9IZXhhZ29uZV9PTiArIHRoaXMuX0xvc2FuZ2VfT04gKyB0aGlzLl9Qb3J0ZV9PTiAqIHRoaXMuX0xHX09OXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0JHX1gwKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9CR19ZMCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9CR19PTigpICogKHRoaXMuVG90YWxfSGF1dCgpIC0gdGhpcy5Eb3JtYW50X0JHX0hhdXQoKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfQkdfWDEoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfQkdfT04oKSAqIHRoaXMuRG9ybWFudF9CR19MYXJnKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfQkdfWTEoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfQkdfT04oKSAqIHRoaXMuVG90YWxfSGF1dCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0JHX1gyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuX09jdG9nb25lX09OICsgdGhpcy5fSGV4YWdvbmVfT04gKyB0aGlzLl9Mb3NhbmdlX09OKSAqIHRoaXMuRG9ybWFudF9IR19YMygpICsgdGhpcy5fUG9ydGVfT04gKiB0aGlzLl9MR19PTiAqICh0aGlzLkRvcm1hbnRfQkdfWDEoKSAtIHRoaXMuX1Byb2ZpbGVfSW50X0xhcmcpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0JHX1kyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0JHX09OKCkgKiAodGhpcy5Eb3JtYW50X0JHX1kxKCkgLSB0aGlzLkRvcm1hbnRfSEdfWTMoKSAtIHRoaXMuX1BvcnRlX09OICogdGhpcy5fTEdfT04gKiAodGhpcy5fUHJvZmlsZV9FeHRfTGFyZyAtIHRoaXMuRG9ybWFudF9IR19ZMygpKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfQkdfWDMoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5fT2N0b2dvbmVfT04gKyB0aGlzLl9IZXhhZ29uZV9PTiArIHRoaXMuX0xvc2FuZ2VfT04pICogdGhpcy5Eb3JtYW50X0hHX1gyKCkgKyB0aGlzLl9Qb3J0ZV9PTiAqIHRoaXMuX0xHX09OICogKHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgKyB0aGlzLl9UcmlhbmdsZUdfT04gKiAodGhpcy5Eb3JtYW50X0hHX1gyKCkgLSB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnKSAtIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgKiB0aGlzLl9UcmlhbmdsZV9PTiAqICgxIC0gTWF0aC50YW4oKDkwICsgdGhpcy5Eb3JtYW50X0hHX0FuZ2xlKCkpICogTWF0aC5QSSAvIDM2MCkpICsgKHRoaXMuX0NlcmNsZV9EZW1pX09OICsgdGhpcy5fR290aGlxdWVfT04gKyB0aGlzLl9FbGxpcHNlX0RlbWlfT04pICogKHRoaXMuRG9ybWFudF9IX1JheW9uWDIoKSAqICgxIC0gTWF0aC5zcXJ0KDEgLSAodGhpcy5fQ2VyY2xlX0RlbWlfT04gKyB0aGlzLl9Hb3RoaXF1ZV9PTiArIHRoaXMuX0VsbGlwc2VfRGVtaV9PTikgKiB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnICogdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyAvICh0aGlzLkRvcm1hbnRfSF9SYXlvblkyKCkgKiB0aGlzLkRvcm1hbnRfSF9SYXlvblkyKCkgKyAxIC0gdGhpcy5fQ2VyY2xlX0RlbWlfT04gLSB0aGlzLl9Hb3RoaXF1ZV9PTiAtIHRoaXMuX0VsbGlwc2VfRGVtaV9PTikpKSkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0JHX1kzKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0JHX1kxKCkgLSAodGhpcy5fT2N0b2dvbmVfT04gKyB0aGlzLl9IZXhhZ29uZV9PTiArIHRoaXMuX0xvc2FuZ2VfT04pICogdGhpcy5Eb3JtYW50X0hHX1kyKCkgLSB0aGlzLl9Qb3J0ZV9PTiAqIHRoaXMuX0xHX09OICogdGhpcy5fUHJvZmlsZV9FeHRfTGFyZ1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9CR19EWTEoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfQkdfT04oKSAqIE1hdGguc3FydCh0aGlzLkRvcm1hbnRfQkdfWDEoKSAqIHRoaXMuRG9ybWFudF9CR19YMSgpICsgdGhpcy5Eb3JtYW50X0JHX0hhdXQoKSAqIHRoaXMuRG9ybWFudF9CR19IYXV0KCkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0JHX0xYMSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9CR19PTigpICogdGhpcy5fUHJvZmlsZV9FeHRfTGFyZ1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9CR19MWTEoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5Eb3JtYW50X0JHX09OKCkgLSB0aGlzLl9IZXhhZ29uZV9PTiAtIHRoaXMuX0xvc2FuZ2VfT04pICogKDEgLSAyICogdGhpcy5fUG9ydGVfT04gKiB0aGlzLl9MR19PTikgKiAodGhpcy5Eb3JtYW50X0JHX1gxKCkgLSB0aGlzLkRvcm1hbnRfQkdfWDIoKSkgKyAodGhpcy5fSGV4YWdvbmVfT04gKyB0aGlzLl9Mb3NhbmdlX09OKSAqIHRoaXMuRG9ybWFudF9IR19MWTIoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9CR19EWDIoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0JHX0RZMigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIC1NYXRoLnNxcnQoTWF0aC5wb3codGhpcy5Eb3JtYW50X0JHX1gyKCkgLSB0aGlzLkRvcm1hbnRfQkdfWDMoKSwgMikgKyBNYXRoLnBvdyh0aGlzLkRvcm1hbnRfQkdfWTIoKSAtIHRoaXMuRG9ybWFudF9CR19ZMygpLCAyKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfQkdfTFgyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gLXRoaXMuRG9ybWFudF9CR19MWDEoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9CR19MWTIoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAtdGhpcy5Eb3JtYW50X0JHX0RZMSgpIC0gdGhpcy5Eb3JtYW50X0JHX0xZMSgpIC0gdGhpcy5Eb3JtYW50X0JHX0RZMigpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0JHX1RyYW5zX1goKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0JHX1RyYW5zX1koKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfQkdfT04oKSAqICh0aGlzLlRvdGFsX0hhdXQoKSAtICgxIC0gdGhpcy5fUG9ydGVfT04gKiB0aGlzLl9MR19PTikgKiB0aGlzLkRvcm1hbnRfQkdfSGF1dCgpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9CR19Sb3RhdGUoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfQkdfT04oKSAqICgzNjAgLSB0aGlzLkRvcm1hbnRfQkdfQW5nbGUoKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfQk1fT04oKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAoMSAtIHRoaXMuX0hleGFnb25lX09OIC0gdGhpcy5fTG9zYW5nZV9PTikgKiAoMSAtIHRoaXMuX1BvcnRlX09OKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9CTV9YMCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX09jdG9nb25lX09OICogdGhpcy5Eb3JtYW50X0JHX0xhcmcoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9CTV9ZMCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9CTV9PTigpICogKHRoaXMuVG90YWxfSGF1dCgpIC0gdGhpcy5DaW50cmFnZUJfSGF1dCgpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9CTV9YMSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9CTV9PTigpICogKHRoaXMuVG90YWxfTGFyZygpIC0gdGhpcy5fT2N0b2dvbmVfT04gKiB0aGlzLkRvcm1hbnRfQkRfTGFyZygpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9CTV9ZMSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9CTV9ZMCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0JNX1gyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0JNX09OKCkgKiAodGhpcy5Ub3RhbF9MYXJnX1Byb2ZpbGUoKSAtICh0aGlzLl9DZXJjbGVfRGVtaV9PTiArIHRoaXMuX0NlcmNsZV9RdWFydERfT04gKyB0aGlzLl9Hb3RoaXF1ZV9PTiArIHRoaXMuX0VsbGlwc2VfRGVtaV9PTiArIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OKSAqICh0aGlzLkRvcm1hbnRfSF9SYXlvblgyKCkgKiAoMSAtIE1hdGguc3FydCgxIC0gKHRoaXMuX0NlcmNsZV9EZW1pX09OICsgdGhpcy5fQ2VyY2xlX1F1YXJ0RF9PTiArIHRoaXMuX0dvdGhpcXVlX09OICsgdGhpcy5fRWxsaXBzZV9EZW1pX09OICsgdGhpcy5fRWxsaXBzZV9RdWFydERfT04pICogdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyAqIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgLyAodGhpcy5Eb3JtYW50X0hfUmF5b25ZMigpICogdGhpcy5Eb3JtYW50X0hfUmF5b25ZMigpICsgMSAtICh0aGlzLl9DZXJjbGVfRGVtaV9PTiArIHRoaXMuX0NlcmNsZV9RdWFydERfT04gKyB0aGlzLl9Hb3RoaXF1ZV9PTiArIHRoaXMuX0VsbGlwc2VfRGVtaV9PTiArIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OKSkpKSkgKyB0aGlzLl9PY3RvZ29uZV9PTiAqICh0aGlzLl9Qcm9maWxlX0V4dF9MYXJnIC0gdGhpcy5Eb3JtYW50X0JHX1gyKCkpICsgdGhpcy5fVHJpYW5nbGVfT04gKiAodGhpcy5fUHJvZmlsZV9FeHRfTGFyZyAtIHRoaXMuRG9ybWFudF9IR19YMigpKSArIHRoaXMuX1RyaWFuZ2xlRF9PTiAqIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgKiAoMSAtIE1hdGgudGFuKCg5MCArIHRoaXMuRG9ybWFudF9IRF9BbmdsZSgpKSAqIE1hdGguUEkgLyAzNjApKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfQk1fWTIoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5Eb3JtYW50X0JNX09OKCkgLSB0aGlzLkNpbnRyYWdlQl9PTigpKSAqICh0aGlzLlRvdGFsX0hhdXQoKSAtIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcpICsgdGhpcy5DaW50cmFnZUJfT04oKSAqIHRoaXMuRG9ybWFudF9CTV9ZMSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0JNX1gzKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0JNX09OKCkgKiAoIHRoaXMuRG9ybWFudF9CTV9PTigpICogdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyArIHRoaXMuX09jdG9nb25lX09OICogKHRoaXMuRG9ybWFudF9CR19YMigpIC0gdGhpcy5fUHJvZmlsZV9FeHRfTGFyZykgKyAodGhpcy5fVHJpYW5nbGVHX09OICsgdGhpcy5fVHJpYW5nbGVfT04gKyB0aGlzLl9DZXJjbGVfUXVhcnRHX09OICsgdGhpcy5fRWxsaXBzZV9RdWFydEdfT04pICogKHRoaXMuRG9ybWFudF9IR19YMigpIC0gdGhpcy5fUHJvZmlsZV9FeHRfTGFyZykgKyAodGhpcy5fQ2VyY2xlX0RlbWlfT04gKyB0aGlzLl9Hb3RoaXF1ZV9PTiArIHRoaXMuX0VsbGlwc2VfRGVtaV9PTikgKiAodGhpcy5Eb3JtYW50X0hfUmF5b25YMigpICogKDEgLSBNYXRoLnNxcnQoMSAtICh0aGlzLl9DZXJjbGVfRGVtaV9PTiArIHRoaXMuX0dvdGhpcXVlX09OICsgdGhpcy5fRWxsaXBzZV9EZW1pX09OKSAqIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgKiB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnIC8gKHRoaXMuRG9ybWFudF9IX1JheW9uWTIoKSAqIHRoaXMuRG9ybWFudF9IX1JheW9uWTIoKSArIDEgLSAodGhpcy5fQ2VyY2xlX0RlbWlfT04gKyB0aGlzLl9Hb3RoaXF1ZV9PTiArIHRoaXMuX0VsbGlwc2VfRGVtaV9PTikpKSkpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9CTV9ZMygpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9CTV9ZMigpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0JNX0RZMSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9CTV9YMSgpIC0gdGhpcy5Eb3JtYW50X0JNX1gwKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfQk1fTFgxKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuRG9ybWFudF9CTV9PTigpIC0gdGhpcy5DaW50cmFnZUJfT04oKSkgKiB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0JNX0xZMSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9CTV9YMigpIC0gdGhpcy5Eb3JtYW50X0JNX1gxKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfQk1fRFgyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9CTV9EWTIoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfQk1fWDMoKSAtIHRoaXMuRG9ybWFudF9CTV9YMigpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0JNX0xYMigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIC10aGlzLkRvcm1hbnRfQk1fTFgxKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfQk1fTFkyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gLXRoaXMuRG9ybWFudF9CTV9EWTIoKSAtIHRoaXMuRG9ybWFudF9CTV9MWTEoKSAtIHRoaXMuRG9ybWFudF9CTV9EWTEoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9CTV9UcmFuc19YKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0JNX1gwKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfQk1fVHJhbnNfWSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9CTV9PTigpICogKHRoaXMuVG90YWxfSGF1dCgpIC0gdGhpcy5DaW50cmFnZUJfT04oKSAqIHRoaXMuQ2ludHJhZ2VCX0hhdXQoKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfQk1fUm90YXRlKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMjcwICogdGhpcy5Eb3JtYW50X0JNX09OKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfQkRfT04oKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9PY3RvZ29uZV9PTiArIHRoaXMuX0hleGFnb25lX09OICsgdGhpcy5fTG9zYW5nZV9PTiArIHRoaXMuX1BvcnRlX09OICogdGhpcy5fTERfT05cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfQkRfWDAoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfQkRfT04oKSAqICh0aGlzLlRvdGFsX0xhcmcoKSAtIHRoaXMuRG9ybWFudF9CRF9MYXJnKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0JEX1kwKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0JEX09OKCkgKiB0aGlzLlRvdGFsX0hhdXQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9CRF9YMSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9CRF9PTigpICogdGhpcy5Ub3RhbF9MYXJnKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfQkRfWTEoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfQkRfT04oKSAqICh0aGlzLlRvdGFsX0hhdXQoKSAtIHRoaXMuRG9ybWFudF9CRF9IYXV0KCkpICsgdGhpcy5fUG9ydGVfT04gKiB0aGlzLl9MRF9PTiAqIHRoaXMuRG9ybWFudF9CRF9IYXV0KClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfQkRfWDIoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfQkRfT04oKSAqICh0aGlzLkRvcm1hbnRfQkRfWDEoKSAtIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgLSB0aGlzLl9Mb3NhbmdlX09OICogKHRoaXMuRG9ybWFudF9CR19YMygpIC0gdGhpcy5fUHJvZmlsZV9FeHRfTGFyZykgKyB0aGlzLl9Qb3J0ZV9PTiAqIHRoaXMuX0xEX09OICogKCAodGhpcy5fVHJpYW5nbGVEX09OICsgdGhpcy5fVHJpYW5nbGVfT04pICogdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyAqICgxIC0gTWF0aC50YW4oKDkwICsgdGhpcy5Eb3JtYW50X0hEX0FuZ2xlKCkpICogTWF0aC5QSSAvIDM2MCkpIC0gKHRoaXMuX0NlcmNsZV9EZW1pX09OICsgdGhpcy5fQ2VyY2xlX1F1YXJ0RF9PTiArIHRoaXMuX0dvdGhpcXVlX09OICsgdGhpcy5fRWxsaXBzZV9EZW1pX09OICsgdGhpcy5fRWxsaXBzZV9RdWFydERfT04pICogKHRoaXMuRG9ybWFudF9IX1JheW9uWDIoKSAqICgxIC0gTWF0aC5zcXJ0KDEgLSAodGhpcy5fQ2VyY2xlX0RlbWlfT04gKyB0aGlzLl9DZXJjbGVfUXVhcnREX09OICsgdGhpcy5fR290aGlxdWVfT04gKyB0aGlzLl9FbGxpcHNlX0RlbWlfT04gKyB0aGlzLl9FbGxpcHNlX1F1YXJ0RF9PTikgKiB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnICogdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyAvICh0aGlzLkRvcm1hbnRfSF9SYXlvblkyKCkgKiB0aGlzLkRvcm1hbnRfSF9SYXlvblkyKCkgKyAxIC0gdGhpcy5fQ2VyY2xlX0RlbWlfT04gLSB0aGlzLl9DZXJjbGVfUXVhcnREX09OIC0gdGhpcy5fR290aGlxdWVfT04gLSB0aGlzLl9FbGxpcHNlX0RlbWlfT04gLSB0aGlzLl9FbGxpcHNlX1F1YXJ0RF9PTikpKSkpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9CRF9ZMigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9CRF9PTigpICogKHRoaXMuRG9ybWFudF9CR19ZMygpICsgdGhpcy5fUG9ydGVfT04gKiB0aGlzLl9MRF9PTiAqICh0aGlzLlRvdGFsX0hhdXQoKSAtIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgLSB0aGlzLkRvcm1hbnRfQkdfWTMoKSkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0JEX1gzKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0JEX09OKCkgKiAodGhpcy5Ub3RhbF9MYXJnKCkgLSB0aGlzLkRvcm1hbnRfQkdfWDIoKSkgKyB0aGlzLl9Qb3J0ZV9PTiAqIHRoaXMuX0xEX09OICogKHRoaXMuRG9ybWFudF9CR19YMigpIC0gdGhpcy5MRF9MYXJnKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0JEX1kzKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0JEX09OKCkgKiB0aGlzLkRvcm1hbnRfQkdfWTIoKSArIHRoaXMuX1BvcnRlX09OICogdGhpcy5fTERfT04gKiAodGhpcy5Eb3JtYW50X0JEX1kyKCkgLSB0aGlzLkRvcm1hbnRfQkdfWTIoKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfQkRfRFkxKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0JEX09OKCkgKiB0aGlzLkRvcm1hbnRfQkdfRFkxKCkgKyB0aGlzLl9Qb3J0ZV9PTiAqIHRoaXMuX0xEX09OICogKHRoaXMuRG9ybWFudF9CRF9YMSgpIC0gdGhpcy5Eb3JtYW50X0JEX1gwKCkgLSB0aGlzLkRvcm1hbnRfQkdfRFkxKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0JEX0xYMSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9CRF9PTigpICogdGhpcy5fUHJvZmlsZV9FeHRfTGFyZ1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9CRF9MWTEoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5Eb3JtYW50X0JEX09OKCkgLSB0aGlzLl9UcmlhbmdsZURfT04gLSB0aGlzLl9UcmlhbmdsZV9PTiAtIHRoaXMuX0xvc2FuZ2VfT04gLSB0aGlzLl9DZXJjbGVfRGVtaV9PTiAtIHRoaXMuX0NlcmNsZV9RdWFydERfT04gLSB0aGlzLl9Hb3RoaXF1ZV9PTiAtIHRoaXMuX0VsbGlwc2VfRGVtaV9PTiAtIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OKSAqICh0aGlzLkRvcm1hbnRfQkRfWTIoKSAtIHRoaXMuRG9ybWFudF9CRF9ZMSgpKSArICh0aGlzLl9UcmlhbmdsZURfT04gKyB0aGlzLl9UcmlhbmdsZV9PTiArIHRoaXMuX0NlcmNsZV9EZW1pX09OICsgdGhpcy5fQ2VyY2xlX1F1YXJ0RF9PTiArIHRoaXMuX0dvdGhpcXVlX09OICsgdGhpcy5fRWxsaXBzZV9EZW1pX09OICsgdGhpcy5fRWxsaXBzZV9RdWFydERfT04pICogKHRoaXMuRG9ybWFudF9CRF9YMigpIC0gdGhpcy5Eb3JtYW50X0JEX1gxKCkpICsgdGhpcy5fTG9zYW5nZV9PTiAqIHRoaXMuRG9ybWFudF9CR19MWTIoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9CRF9EWDIoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0JEX0RZMigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9CRF9PTigpICogdGhpcy5Eb3JtYW50X0JHX0RZMigpICsgdGhpcy5fUG9ydGVfT04gKiB0aGlzLl9MRF9PTiAqICh0aGlzLkRvcm1hbnRfQkRfWDMoKSAtIHRoaXMuRG9ybWFudF9CRF9YMigpIC0gdGhpcy5Eb3JtYW50X0JHX0RZMigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9CRF9MWDIoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAtdGhpcy5Eb3JtYW50X0JEX0xYMSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0JEX0xZMigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIC10aGlzLkRvcm1hbnRfQkRfRFkyKCkgLSB0aGlzLkRvcm1hbnRfQkRfTFkxKCkgLSB0aGlzLkRvcm1hbnRfQkRfRFkxKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfQkRfVHJhbnNfWCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9CRF9PTigpICogKHRoaXMuVG90YWxfTGFyZygpIC0gdGhpcy5Eb3JtYW50X0JEX0xhcmcoKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfQkRfVHJhbnNfWSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9CRF9PTigpICogdGhpcy5Ub3RhbF9IYXV0KClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfQkRfUm90YXRlKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0JEX09OKCkgKiAoMTgwICsgdGhpcy5Eb3JtYW50X0JEX0FuZ2xlKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2FueX1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0REX09OKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fUmVjdF9PTiArIHRoaXMuX0NoYW5mcmVpbkdfT04gKyB0aGlzLl9DaGFuZnJlaW5EX09OICsgdGhpcy5fVHJpYW5nbGVHX09OICsgdGhpcy5fVHJpYW5nbGVHX0hfT04gKyB0aGlzLl9UcmlhbmdsZURfSF9PTiArIHRoaXMuX0RlbWlPY3RvZ29uZV9PTiArIHRoaXMuX09jdG9nb25lX09OICsgdGhpcy5fRGVtaUhleGFnX09OICsgdGhpcy5fSGV4YWdvbmVfT04gKyB0aGlzLl9PdmFsZV9PTiArIHRoaXMuX0NlcmNsZV9RdWFydEdfT04gKyB0aGlzLl9DZXJjbGVIX1F1YXJ0R19PTiArIHRoaXMuX0NlcmNsZUhfUXVhcnREX09OICsgdGhpcy5DaW50cmFnZUhfT04oKSArIHRoaXMuX0dvdGhpcXVlX0hfT04gKyB0aGlzLl9FbGxpcHNlX1F1YXJ0R19PTiArIHRoaXMuX0VsbGlwc2VIX1F1YXJ0R19PTiArIHRoaXMuX0VsbGlwc2VIX1F1YXJ0RF9PTiArIHRoaXMuX0VsbGlwc2VIX0RlbWlfT05cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfRERfWDAoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfRERfT04oKSAqIHRoaXMuVG90YWxfTGFyZygpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0REX1kwKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0REX09OKCkgKiAodGhpcy5Ub3RhbF9IYXV0KCkgLSB0aGlzLkNpbnRyYWdlQl9IYXV0KCkgLSB0aGlzLl9PY3RvZ29uZV9PTiAqIHRoaXMuRG9ybWFudF9CRF9IYXV0KCkgLSB0aGlzLl9IZXhhZ29uZV9PTiAqIHRoaXMuRG9ybWFudF9HR19ZMCgpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9ERF9YMSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9ERF9YMCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0REX1kxKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0REX09OKCkgKiAoICh0aGlzLl9PdmFsZV9PTiArIHRoaXMuX0NlcmNsZUhfUXVhcnREX09OICsgdGhpcy5DaW50cmFnZUhfT04oKSArIHRoaXMuX0dvdGhpcXVlX0hfT04gKyB0aGlzLl9FbGxpcHNlSF9RdWFydERfT04gKyB0aGlzLl9FbGxpcHNlSF9EZW1pX09OKSAqIHRoaXMuQ2ludHJhZ2VIX0hhdXQoKSArICh0aGlzLl9DaGFuZnJlaW5EX09OICsgdGhpcy5fVHJpYW5nbGVEX0hfT04gKyB0aGlzLl9EZW1pT2N0b2dvbmVfT04gKyB0aGlzLl9PY3RvZ29uZV9PTiArIHRoaXMuX0RlbWlIZXhhZ19PTiArIHRoaXMuX0hleGFnb25lX09OKSAqIHRoaXMuRG9ybWFudF9IRF9IYXV0KCkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0REX1gyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0REX09OKCkgKiB0aGlzLlRvdGFsX0xhcmdfUHJvZmlsZSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0REX1kyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuX1JlY3RfT04gKyB0aGlzLl9EZW1pT2N0b2dvbmVfT04gKyB0aGlzLl9PY3RvZ29uZV9PTiArIHRoaXMuX0RlbWlIZXhhZ19PTiArIHRoaXMuX0hleGFnb25lX09OICsgdGhpcy5fT3ZhbGVfT04gKyB0aGlzLkNpbnRyYWdlSF9PTigpICsgdGhpcy5fR290aGlxdWVfSF9PTiArIHRoaXMuX0VsbGlwc2VIX0RlbWlfT04pICogdGhpcy5Eb3JtYW50X0dHX1kzKCkgKyB0aGlzLl9DaGFuZnJlaW5HX09OICogdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyArIHRoaXMuX0VsbGlwc2VIX1F1YXJ0RF9PTiAqIHRoaXMuRG9ybWFudF9ERF9ZMSgpICsgKHRoaXMuX1RyaWFuZ2xlR19PTiArIHRoaXMuX1RyaWFuZ2xlR19IX09OICsgdGhpcy5fQ2VyY2xlX1F1YXJ0R19PTiArIHRoaXMuX0NlcmNsZUhfUXVhcnRHX09OICsgdGhpcy5fRWxsaXBzZV9RdWFydEdfT04gKyB0aGlzLl9FbGxpcHNlSF9RdWFydEdfT04pICogdGhpcy5Eb3JtYW50X0hHX1kzKCkgKyAodGhpcy5fQ2hhbmZyZWluRF9PTiArIHRoaXMuX1RyaWFuZ2xlRF9IX09OKSAqICh0aGlzLkRvcm1hbnRfRERfWTEoKSArIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgKiBNYXRoLnRhbih0aGlzLkRvcm1hbnRfSERfQW5nbGUoKSAqIE1hdGguUEkgLyAzNjApKSArIHRoaXMuX0NlcmNsZUhfUXVhcnREX09OICogKCh0aGlzLkRvcm1hbnRfSF9SYXlvblkxKCkgLSB0aGlzLkRvcm1hbnRfSF9SYXlvblkyKCkgKiBNYXRoLnNxcnQoMSAtIHRoaXMuX0NlcmNsZUhfUXVhcnREX09OICogdGhpcy5Ub3RhbF9MYXJnX1Byb2ZpbGUoKSAqIHRoaXMuVG90YWxfTGFyZ19Qcm9maWxlKCkgLyAoKHRoaXMuRG9ybWFudF9IX1JheW9uWDIoKSAqIHRoaXMuRG9ybWFudF9IX1JheW9uWDIoKSArIDEgLSB0aGlzLl9DZXJjbGVIX1F1YXJ0RF9PTikpKSkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0REX1gzKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0REX1gyKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfRERfWTMoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5Eb3JtYW50X0REX09OKCkgLSB0aGlzLl9PY3RvZ29uZV9PTiAtIHRoaXMuX0hleGFnb25lX09OKSAqIHRoaXMuRG9ybWFudF9CTV9ZMigpICsgKHRoaXMuX09jdG9nb25lX09OICsgdGhpcy5fSGV4YWdvbmVfT04pICogdGhpcy5Eb3JtYW50X0JEX1kyKCkgKyB0aGlzLkRvcm1hbnRfRERfT04oKSAqIHRoaXMuX1BvcnRlX09OICogKHRoaXMuVG90YWxfSGF1dCgpIC0gdGhpcy5fTERfT04gKiB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9ERF9EWTEoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfRERfWTAoKSAtIHRoaXMuRG9ybWFudF9ERF9ZMSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0REX0xYMSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9ERF9PTigpICogdGhpcy5fUHJvZmlsZV9FeHRfTGFyZ1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9ERF9MWTEoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfRERfWTEoKSAtIHRoaXMuRG9ybWFudF9ERF9ZMigpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0REX0RYMigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfRERfRFkyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0REX1kyKCkgLSB0aGlzLkRvcm1hbnRfRERfWTMoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9ERF9MWDIoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAtdGhpcy5Eb3JtYW50X0REX0xYMSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0REX0xZMigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9ERF9ZMygpIC0gdGhpcy5Eb3JtYW50X0REX1kwKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfRERfVHJhbnNfWCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9ERF9PTigpICogdGhpcy5Ub3RhbF9MYXJnKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfRERfVHJhbnNfWSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9ERF9ZMCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0REX1JvdGF0ZSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9ERF9PTigpICogMTgwXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0hEX09OKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQ2hhbmZyZWluRF9PTiArIHRoaXMuX1RyaWFuZ2xlRF9PTiArIHRoaXMuX1RyaWFuZ2xlRF9IX09OICsgdGhpcy5fRGVtaU9jdG9nb25lX09OICsgdGhpcy5fT2N0b2dvbmVfT04gKyB0aGlzLl9EZW1pSGV4YWdfT04gKyB0aGlzLl9IZXhhZ29uZV9PTiArIHRoaXMuX1RyaWFuZ2xlX09OICsgdGhpcy5fTG9zYW5nZV9PTiArIHRoaXMuX0NlcmNsZV9RdWFydERfT04gKyB0aGlzLl9DZXJjbGVIX1F1YXJ0RF9PTiArIHRoaXMuX0dvdGhpcXVlX09OICsgdGhpcy5fR290aGlxdWVfSF9PTiArIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OICsgdGhpcy5fRWxsaXBzZUhfUXVhcnREX09OXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0hEX1gwKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0hEX09OKCkgKiB0aGlzLlRvdGFsX0xhcmcoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9IRF9ZMCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9IRF9PTigpICogdGhpcy5Eb3JtYW50X0hEX0hhdXQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9IRF9YMSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9IRF9PTigpICogKHRoaXMuVG90YWxfTGFyZygpIC0gdGhpcy5Eb3JtYW50X0hEX0xhcmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0hEX1kxKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSERfWDIoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfSERfWDEoKSArIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgKiAodGhpcy5fVHJpYW5nbGVEX09OICsgdGhpcy5fVHJpYW5nbGVEX0hfT04gKyB0aGlzLl9DZXJjbGVfUXVhcnREX09OICsgdGhpcy5fQ2VyY2xlSF9RdWFydERfT04gKyB0aGlzLl9FbGxpcHNlX1F1YXJ0RF9PTiArIHRoaXMuX0VsbGlwc2VIX1F1YXJ0RF9PTiAtICh0aGlzLl9DaGFuZnJlaW5EX09OICsgdGhpcy5fRGVtaU9jdG9nb25lX09OICsgdGhpcy5fT2N0b2dvbmVfT04pICogTWF0aC50YW4oKDkwIC0gdGhpcy5Eb3JtYW50X0hEX0FuZ2xlKCkpICogTWF0aC5QSSAvIDM2MCkgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSERfWTIoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5fQ2hhbmZyZWluRF9PTiArIHRoaXMuX0RlbWlPY3RvZ29uZV9PTiArIHRoaXMuX09jdG9nb25lX09OICsgKHRoaXMuX1RyaWFuZ2xlRF9PTiArIHRoaXMuX1RyaWFuZ2xlRF9IX09OKSAqIE1hdGgudGFuKCgxODAgLSB0aGlzLkRvcm1hbnRfSERfQW5nbGUoKSkgKiBNYXRoLlBJIC8gMzYwKSkgKiB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnICsgKHRoaXMuX0RlbWlIZXhhZ19PTiArIHRoaXMuX1RyaWFuZ2xlX09OICsgdGhpcy5fTG9zYW5nZV9PTiArIHRoaXMuX0hleGFnb25lX09OICsgdGhpcy5fR290aGlxdWVfT04gKyB0aGlzLl9Hb3RoaXF1ZV9IX09OKSAqIHRoaXMuRG9ybWFudF9IR19ZMygpICsgKHRoaXMuX0NlcmNsZV9RdWFydERfT04gKyB0aGlzLl9DZXJjbGVIX1F1YXJ0RF9PTiArIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OICsgdGhpcy5fRWxsaXBzZUhfUXVhcnREX09OKSAqIHRoaXMuRG9ybWFudF9HR19ZMygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9IRF9YMygpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLl9DaGFuZnJlaW5EX09OICsgdGhpcy5fVHJpYW5nbGVEX0hfT04gKyB0aGlzLl9EZW1pT2N0b2dvbmVfT04gKyB0aGlzLl9PY3RvZ29uZV9PTiArIHRoaXMuX0RlbWlIZXhhZ19PTiArIHRoaXMuX0hleGFnb25lX09OICsgdGhpcy5fQ2VyY2xlSF9RdWFydERfT04gKyB0aGlzLl9Hb3RoaXF1ZV9IX09OICsgdGhpcy5fRWxsaXBzZUhfUXVhcnREX09OKSAqIHRoaXMuVG90YWxfTGFyZ19Qcm9maWxlKCkgKyB0aGlzLl9Mb3NhbmdlX09OICogKHRoaXMuVG90YWxfTGFyZygpIC0gdGhpcy5Eb3JtYW50X0hHX1gyKCkpICsgKHRoaXMuX1RyaWFuZ2xlRF9PTiArIHRoaXMuX1RyaWFuZ2xlX09OICsgdGhpcy5fQ2VyY2xlX1F1YXJ0RF9PTiArIHRoaXMuX0dvdGhpcXVlX09OICsgdGhpcy5fRWxsaXBzZV9RdWFydERfT04pICogKCAoMSAtIHRoaXMuX1BvcnRlX09OKSAqIHRoaXMuRG9ybWFudF9CTV9YMigpICsgdGhpcy5fUG9ydGVfT04gKiB0aGlzLl9MRF9PTiAqIHRoaXMuRG9ybWFudF9CRF9YMigpICsgdGhpcy5fUG9ydGVfT04gKiAoMSAtIHRoaXMuX0xEX09OKSAqICh0aGlzLlRvdGFsX0xhcmcoKSAtICh0aGlzLl9UcmlhbmdsZURfT04gKyB0aGlzLl9UcmlhbmdsZV9PTikgKiB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnIC8gTWF0aC5jb3ModGhpcy5Eb3JtYW50X0hEX0FuZ2xlKCkgKiBNYXRoLlBJIC8gMTgwKSAtICh0aGlzLl9DZXJjbGVfUXVhcnREX09OICsgdGhpcy5fR290aGlxdWVfT04gKyB0aGlzLl9FbGxpcHNlX1F1YXJ0RF9PTikgKiAodGhpcy5fUHJvZmlsZV9FeHRfTGFyZyArIHRoaXMuRG9ybWFudF9IX1JheW9uWDIoKSAqICgxIC0gTWF0aC5zcXJ0KDEgLSAodGhpcy5fQ2VyY2xlX1F1YXJ0RF9PTiArIHRoaXMuX0dvdGhpcXVlX09OICsgdGhpcy5fRWxsaXBzZV9RdWFydERfT04pICogdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyAqIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgLyAodGhpcy5Eb3JtYW50X0hfUmF5b25ZMigpICogdGhpcy5Eb3JtYW50X0hfUmF5b25ZMigpICsgMSAtIHRoaXMuX0NlcmNsZV9RdWFydERfT04gLSB0aGlzLl9Hb3RoaXF1ZV9PTiAtIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OKSkpKSApICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0hEX1kzKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0hEX0hhdXQoKSAtIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgKiAoICh0aGlzLl9UcmlhbmdsZURfT04gKyB0aGlzLl9DZXJjbGVfUXVhcnREX09OICsgdGhpcy5fVHJpYW5nbGVfT04gKyB0aGlzLl9Hb3RoaXF1ZV9PTiArIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OKSAqICgxIC0gdGhpcy5fUG9ydGVfT04gKiAoMSAtIHRoaXMuX0xEX09OKSkgLSAodGhpcy5fQ2hhbmZyZWluRF9PTiArIHRoaXMuX1RyaWFuZ2xlRF9IX09OICsgdGhpcy5fRGVtaU9jdG9nb25lX09OICsgdGhpcy5fT2N0b2dvbmVfT04gKyB0aGlzLl9EZW1pSGV4YWdfT04gKyB0aGlzLl9IZXhhZ29uZV9PTikgKiBNYXRoLnRhbih0aGlzLkRvcm1hbnRfSERfQW5nbGUoKSAqIE1hdGguUEkgLyAzNjApICkgKyB0aGlzLl9DZXJjbGVIX1F1YXJ0RF9PTiAqICh0aGlzLkRvcm1hbnRfRERfWTIoKSAtIHRoaXMuRG9ybWFudF9IRF9IYXV0KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9IRF9EWTEoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfSERfT04oKSAqIE1hdGguc3FydCh0aGlzLkRvcm1hbnRfSERfTGFyZygpICogdGhpcy5Eb3JtYW50X0hEX0xhcmcoKSArIHRoaXMuRG9ybWFudF9IRF9IYXV0KCkgKiB0aGlzLkRvcm1hbnRfSERfSGF1dCgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSERfTFgxKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5hYnMoMSAtIHRoaXMuX0VsbGlwc2VfUG91cmNlbnRfSGF1dCkgLyAoMSAtIHRoaXMuX0VsbGlwc2VfUG91cmNlbnRfSGF1dCkgKiBNYXRoLnNxcnQoTWF0aC5wb3codGhpcy5Eb3JtYW50X0hEX1gwKCkgLSB0aGlzLkRvcm1hbnRfSERfWDIoKSwgMikgKyBNYXRoLnBvdyh0aGlzLkRvcm1hbnRfSERfWTAoKSAtIHRoaXMuRG9ybWFudF9IRF9ZMigpLCAyKSAtIE1hdGgucG93KHRoaXMuRG9ybWFudF9IRF9YMCgpICogKHRoaXMuRG9ybWFudF9IRF9YMCgpIC0gdGhpcy5Eb3JtYW50X0hEX1gxKCkgLSB0aGlzLkRvcm1hbnRfSERfWDIoKSkgKyB0aGlzLkRvcm1hbnRfSERfWDEoKSAqIHRoaXMuRG9ybWFudF9IRF9YMigpICsgdGhpcy5Eb3JtYW50X0hEX1kwKCkgKiAodGhpcy5Eb3JtYW50X0hEX1kwKCkgLSB0aGlzLkRvcm1hbnRfSERfWTIoKSksIDIpIC8gKHRoaXMuRG9ybWFudF9IRF9EWTEoKSAqIHRoaXMuRG9ybWFudF9IRF9EWTEoKSArIDEgLSB0aGlzLkRvcm1hbnRfSERfT04oKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9IRF9MWTEoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfSERfRFkxKCkgLSAodGhpcy5Eb3JtYW50X0hEX1gwKCkgKiAodGhpcy5Eb3JtYW50X0hEX1gwKCkgLSB0aGlzLkRvcm1hbnRfSERfWDEoKSAtIHRoaXMuRG9ybWFudF9IRF9YMigpKSArIHRoaXMuRG9ybWFudF9IRF9YMSgpICogdGhpcy5Eb3JtYW50X0hEX1gyKCkgKyB0aGlzLkRvcm1hbnRfSERfWTAoKSAqICh0aGlzLkRvcm1hbnRfSERfWTAoKSAtIHRoaXMuRG9ybWFudF9IRF9ZMigpKSkgLyAodGhpcy5Eb3JtYW50X0hEX0RZMSgpICsgMSAtIHRoaXMuRG9ybWFudF9IRF9PTigpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSERfRFgyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuX0NlcmNsZV9RdWFydERfT04gKyB0aGlzLl9DZXJjbGVIX1F1YXJ0RF9PTiArIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OICsgdGhpcy5fRWxsaXBzZUhfUXVhcnREX09OICsgdGhpcy5Hb3RoaXFfT04oKSkgKiAoTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMuRG9ybWFudF9IRF9YMCgpIC0gdGhpcy5Eb3JtYW50X0hEX1gzKCksIDIpICsgTWF0aC5wb3codGhpcy5Eb3JtYW50X0hEX1kwKCkgLSB0aGlzLkRvcm1hbnRfSERfWTMoKSwgMikgLSBNYXRoLnBvdyh0aGlzLkRvcm1hbnRfSERfWDAoKSAqICh0aGlzLkRvcm1hbnRfSERfWDAoKSAtIHRoaXMuRG9ybWFudF9IRF9YMSgpIC0gdGhpcy5Eb3JtYW50X0hEX1gzKCkpICsgdGhpcy5Eb3JtYW50X0hEX1gxKCkgKiB0aGlzLkRvcm1hbnRfSERfWDMoKSArIHRoaXMuRG9ybWFudF9IRF9ZMCgpICogKHRoaXMuRG9ybWFudF9IRF9ZMCgpIC0gdGhpcy5Eb3JtYW50X0hEX1kzKCkpLCAyKSAvICh0aGlzLkRvcm1hbnRfSERfRFkxKCkgKiB0aGlzLkRvcm1hbnRfSERfRFkxKCkgKyAxIC0gdGhpcy5Eb3JtYW50X0hEX09OKCkpKSAtIHRoaXMuRG9ybWFudF9IRF9MWDEoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2FueX1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0hEX0RZMigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh0aGlzLkRvcm1hbnRfSERfWDMoKSAtIHRoaXMuRG9ybWFudF9IRF9YMigpLCAyKSArIE1hdGgucG93KHRoaXMuRG9ybWFudF9IRF9ZMygpIC0gdGhpcy5Eb3JtYW50X0hEX1kyKCksIDIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSERfTFgyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gLXRoaXMuRG9ybWFudF9IRF9MWDEoKSAtIHRoaXMuRG9ybWFudF9IRF9EWDIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSERfTFkyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0hEX0RZMigpICsgdGhpcy5Eb3JtYW50X0hEX0xZMSgpIC0gdGhpcy5Eb3JtYW50X0hEX0RZMSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9IRF9UcmFuc19YKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0hEX09OKCkgKiB0aGlzLlRvdGFsX0xhcmcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSERfVHJhbnNfWSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9IRF9PTigpICogdGhpcy5Eb3JtYW50X0hEX09OKCkgKiB0aGlzLkRvcm1hbnRfSERfSGF1dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9IRF9Sb3RhdGUoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfSERfT04oKSAqICgxODAgLSB0aGlzLkRvcm1hbnRfSERfQW5nbGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2FueX1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0hNX09OKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fUmVjdF9PTiArIHRoaXMuX0NoYW5mcmVpbkdfT04gKyB0aGlzLl9DaGFuZnJlaW5EX09OICsgdGhpcy5fRGVtaU9jdG9nb25lX09OICsgdGhpcy5fT2N0b2dvbmVfT04gKyB0aGlzLl9PdmFsZV9PTiArIHRoaXMuX1JvbmRfT04gKyB0aGlzLl9DZXJjbGVfRGVtaV9PTiArIHRoaXMuQ2ludHJhZ2VIX09OKCkgKyB0aGlzLl9FbGxpcHNlX09OICsgdGhpcy5fRWxsaXBzZV9EZW1pX09OICsgdGhpcy5fRWxsaXBzZUhfRGVtaV9PTjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSE1fWDAoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfSE1fT04oKSAqICh0aGlzLlRvdGFsX0xhcmcoKSAtICh0aGlzLl9DaGFuZnJlaW5EX09OICsgdGhpcy5fRGVtaU9jdG9nb25lX09OICsgdGhpcy5fT2N0b2dvbmVfT04pICogdGhpcy5Eb3JtYW50X0hEX0xhcmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0hNX1kwKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuX092YWxlX09OICsgdGhpcy5fUm9uZF9PTiArIHRoaXMuX0NlcmNsZV9EZW1pX09OICsgdGhpcy5DaW50cmFnZUhfT04oKSArIHRoaXMuX0VsbGlwc2VfT04gKyB0aGlzLl9FbGxpcHNlX0RlbWlfT04gKyB0aGlzLl9FbGxpcHNlSF9EZW1pX09OKSAqIHRoaXMuQ2ludHJhZ2VIX0hhdXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSE1fWDEoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5fQ2hhbmZyZWluR19PTiArIHRoaXMuX0RlbWlPY3RvZ29uZV9PTiArIHRoaXMuX09jdG9nb25lX09OKSAqIHRoaXMuRG9ybWFudF9IR19MYXJnKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0hNX1kxKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0hNX1kwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0hNX1gyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0hNX09OKCkgKiAoKHRoaXMuX1JlY3RfT04gKyB0aGlzLl9DaGFuZnJlaW5EX09OICsgdGhpcy5fT3ZhbGVfT04gKyB0aGlzLl9Sb25kX09OICsgdGhpcy5DaW50cmFnZUhfT04oKSArIHRoaXMuX0VsbGlwc2VfT04gKyB0aGlzLl9FbGxpcHNlSF9EZW1pX09OKSAqIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgKyAodGhpcy5fQ2hhbmZyZWluR19PTiArIHRoaXMuX0RlbWlPY3RvZ29uZV9PTiArIHRoaXMuX09jdG9nb25lX09OKSAqIHRoaXMuRG9ybWFudF9IR19YMygpICsgKHRoaXMuX0NlcmNsZV9EZW1pX09OICsgdGhpcy5fR290aGlxdWVfT04gKyB0aGlzLl9FbGxpcHNlX0RlbWlfT04pICogKHRoaXMuRG9ybWFudF9CTV9YMygpICsgdGhpcy5Eb3JtYW50X0JHX1gzKCkgKyB0aGlzLl9Qb3J0ZV9PTiAqICgxIC0gdGhpcy5fTEdfT04pICogdGhpcy5fUHJvZmlsZV9FeHRfTGFyZykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9ITV9ZMigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLl9SZWN0X09OICsgdGhpcy5fQ2hhbmZyZWluR19PTiArIHRoaXMuX0NoYW5mcmVpbkRfT04gKyB0aGlzLl9EZW1pT2N0b2dvbmVfT04gKyB0aGlzLl9PY3RvZ29uZV9PTikgKiB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnICsgKHRoaXMuX092YWxlX09OICsgdGhpcy5fUm9uZF9PTiArIHRoaXMuX0VsbGlwc2VfT04gKyB0aGlzLl9FbGxpcHNlSF9EZW1pX09OKSAqIHRoaXMuRG9ybWFudF9ITV9ZMSgpICsgdGhpcy5DaW50cmFnZUhfT04oKSAqIHRoaXMuRG9ybWFudF9HR19ZMygpICsgKHRoaXMuX0NlcmNsZV9EZW1pX09OICsgdGhpcy5fRWxsaXBzZV9EZW1pX09OKSAqICh0aGlzLkRvcm1hbnRfSE1fWTEoKSArICgodGhpcy5fUG9ydGVfT04gKiAoMSAtIHRoaXMuX0xHX09OKSAtIDEpICogdGhpcy5fUHJvZmlsZV9FeHRfTGFyZykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9ITV9YMygpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLl9SZWN0X09OICsgdGhpcy5fQ2hhbmZyZWluR19PTiArIHRoaXMuX092YWxlX09OICsgdGhpcy5fUm9uZF9PTiArIHRoaXMuX0NlcmNsZV9EZW1pX09OICsgdGhpcy5DaW50cmFnZUhfT04oKSArIHRoaXMuX0VsbGlwc2VfT04gKyB0aGlzLl9FbGxpcHNlX0RlbWlfT04gKyB0aGlzLl9FbGxpcHNlSF9EZW1pX09OKSAqIHRoaXMuVG90YWxfTGFyZ19Qcm9maWxlKCkgKyAodGhpcy5fQ2hhbmZyZWluRF9PTiArIHRoaXMuX0RlbWlPY3RvZ29uZV9PTiArIHRoaXMuX09jdG9nb25lX09OKSAqIHRoaXMuRG9ybWFudF9IRF9YMigpIC0gKHRoaXMuX0NlcmNsZV9EZW1pX09OICsgdGhpcy5fRWxsaXBzZV9EZW1pX09OKSAqICgxIC0gdGhpcy5fUG9ydGVfT04gKiAoMSAtIHRoaXMuX0xEX09OKSkgKiB0aGlzLkRvcm1hbnRfSF9SYXlvblgyKCkgKiAoMSAtIE1hdGguc3FydCgxIC0gKHRoaXMuX0NlcmNsZV9EZW1pX09OICsgdGhpcy5fRWxsaXBzZV9EZW1pX09OKSAqIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgKiB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnIC8gKHRoaXMuRG9ybWFudF9IX1JheW9uWTIoKSAqIHRoaXMuRG9ybWFudF9IX1JheW9uWTIoKSArIDEgLSAodGhpcy5fQ2VyY2xlX0RlbWlfT04gKyB0aGlzLl9FbGxpcHNlX0RlbWlfT04pKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9ITV9ZMygpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9ITV9ZMCgpICsgKHRoaXMuX1JlY3RfT04gKyB0aGlzLl9DaGFuZnJlaW5HX09OICsgdGhpcy5fQ2hhbmZyZWluRF9PTiArIHRoaXMuX0RlbWlPY3RvZ29uZV9PTiArIHRoaXMuX09jdG9nb25lX09OKSAqIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgLSB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnICogKHRoaXMuX0NlcmNsZV9EZW1pX09OICsgdGhpcy5fRWxsaXBzZV9EZW1pX09OKSAqICgxICsgdGhpcy5fUG9ydGVfT04gKiAodGhpcy5fTERfT04gLSAxKSkgKyAodGhpcy5DaW50cmFnZUhfT04oKSArIHRoaXMuX0VsbGlwc2VIX0RlbWlfT04pICogKHRoaXMuRG9ybWFudF9ERF9ZMigpIC0gdGhpcy5Eb3JtYW50X0hNX1kwKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9ITV9EWTEoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfSE1fT04oKSAqICh0aGlzLlRvdGFsX0xhcmcoKSAtIHRoaXMuRG9ybWFudF9IR19YMCgpIC0gdGhpcy5Eb3JtYW50X0hEX09OKCkgKiB0aGlzLkRvcm1hbnRfSERfTGFyZygpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSE1fTFgxKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0hNX1kyKCkgLSB0aGlzLkRvcm1hbnRfSE1fWTEoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSE1fTFkxKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gLSh0aGlzLl9SZWN0X09OICsgdGhpcy5fQ2hhbmZyZWluRF9PTiArIHRoaXMuX092YWxlX09OICsgdGhpcy5fUm9uZF9PTiArIHRoaXMuQ2ludHJhZ2VIX09OKCkgKyB0aGlzLl9FbGxpcHNlX09OICsgdGhpcy5fRWxsaXBzZUhfRGVtaV9PTikgKiB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnICsgKHRoaXMuX0NoYW5mcmVpbkdfT04gKyB0aGlzLl9EZW1pT2N0b2dvbmVfT04gKyB0aGlzLl9PY3RvZ29uZV9PTikgKiB0aGlzLkRvcm1hbnRfSEdfTFkyKCkgLSAodGhpcy5fQ2VyY2xlX0RlbWlfT04gKyB0aGlzLl9FbGxpcHNlX0RlbWlfT04pICogdGhpcy5Eb3JtYW50X0hNX1gyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0hNX0RYMigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLl9DZXJjbGVfRGVtaV9PTiArIHRoaXMuX0VsbGlwc2VfRGVtaV9PTikgKiB0aGlzLl9Qb3J0ZV9PTiAqICgodGhpcy5fTEdfT04gLSAxKSAqIHRoaXMuX0xEX09OICogdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyArIHRoaXMuX0xHX09OICogKHRoaXMuX0xEX09OIC0gMSkgKiB0aGlzLkRvcm1hbnRfSE1fTFgxKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9ITV9EWTIoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfSE1fWDIoKSAtIHRoaXMuRG9ybWFudF9ITV9YMygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9ITV9MWDIoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAtdGhpcy5Eb3JtYW50X0hNX0xYMSgpIC0gdGhpcy5Eb3JtYW50X0hNX0RYMigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9ITV9MWTIoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAtdGhpcy5Eb3JtYW50X0hNX0RZMSgpIC0gdGhpcy5Eb3JtYW50X0hNX0xZMSgpIC0gdGhpcy5Eb3JtYW50X0hNX0RZMigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgRG9ybWFudF9ITV9UcmFuc19YKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0hNX09OKCkgKiAodGhpcy5Ub3RhbF9MYXJnKCkgLSAodGhpcy5fRGVtaU9jdG9nb25lX09OICsgdGhpcy5fT2N0b2dvbmVfT04pICogdGhpcy5Eb3JtYW50X0hHX0xhcmcoKSAtIHRoaXMuX0NoYW5mcmVpbkRfT04gKiB0aGlzLkRvcm1hbnRfSERfTGFyZygpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIERvcm1hbnRfSE1fVHJhbnNfWSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9ITV9PTigpICogdGhpcy5DaW50cmFnZUhIX09OKCkgKiB0aGlzLkNpbnRyYWdlSF9IYXV0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBEb3JtYW50X0hNX1JvdGF0ZSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9ITV9PTigpICogOTA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcblxyXG4gICAgRG9ybWFudF9MR19PTigpOm51bWJlciB7XHJcblxyXG4gICAgICAgIHJldHVybiAgdGhpcy5fTEdfT04qdGhpcy5ib29sKHRoaXMuTEdfTGFyZygpPigoMS10aGlzLl9Dcm9pc19MR19BbGxfT04pKnRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfSEdfWTIoKT4odGhpcy5Ub3RhbF9IYXV0KCktdGhpcy5BbGxlZ2VfSGF1dCgpLXRoaXMuX1Byb2ZpbGVfSW50X0xhcmcpKSp0aGlzLkRvcm1hbnRfQWxsZWdlX1gzKCkrdGhpcy5fTEdfbWluKnRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcpKTtcclxuICAgIH1cclxuXHJcbiAgICBDcm9pc19MR19JbXAwX09OKCk6bnVtYmVyIHtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9Dcm9pc19MR19JbXBfT04gKiB0aGlzLmJvb2wodGhpcy5MR19MYXJnKCkgPiAodGhpcy5Eb3JtYW50X0ltcG9zdGVfWDIoKSArIHRoaXMuX0xHX21pbiAqIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcpKTtcclxuICAgIH1cclxuXHJcbiAgICBDcm9pc19MR19BbGwwX09OKCk6bnVtYmVyIHtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9Dcm9pc19MR19BbGxfT04gKiB0aGlzLmJvb2wodGhpcy5MR19MYXJnKCkgPiAodGhpcy5Eb3JtYW50X0FsbGVnZV9YMygpICsgdGhpcy5fTEdfbWluICogdGhpcy5fUHJvZmlsZV9FeHRfTGFyZykpO1xyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfTEdfWDAoKTpudW1iZXIge1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9MR19PTigpICogKHRoaXMuTEdfTGFyZygpICsgdGhpcy5fUHJvZmlsZV9JbnRfTGFyZyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIERvcm1hbnRfTEdfWTAoKTpudW1iZXIge1xyXG5cclxuICAgICAgICBpZiAoKHRoaXMuX0FsbGVnZV9PTiAqICgxIC0gdGhpcy5Dcm9pc19MR19BbGwwX09OKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MR19YMCgpID4gdGhpcy5Eb3JtYW50X0FsbGVnZV9YMygpKSkpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLlRvdGFsX0hhdXQoKSAtIHRoaXMuQWxsZWdlX0hhdXQoKSAtIHRoaXMuX1Byb2ZpbGVfSW50X0xhcmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9MR19PTigpICogKCAoMSAtIHRoaXMuQ2ludHJhZ2VCX09OKCkpICogKHRoaXMuVG90YWxfSGF1dCgpIC0gdGhpcy5fUHJvZmlsZV9FeHRfTGFyZykgKyB0aGlzLl9Qb3J0ZV9PTiAqIHRoaXMuRG9ybWFudF9MR19PTigpICogdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyArICh0aGlzLkRvcm1hbnRfQkdfT04oKSAtIHRoaXMuX1BvcnRlX09OICogdGhpcy5Eb3JtYW50X0xHX09OKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MR19YMCgpIDwgdGhpcy5Eb3JtYW50X0JHX1gyKCkpICogKHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgLSB0aGlzLlRvdGFsX0hhdXQoKSArIHRoaXMuRG9ybWFudF9CR19ZMygpICsgKHRoaXMuRG9ybWFudF9MR19YMCgpIC0gdGhpcy5Eb3JtYW50X0JHX1gzKCkpICogTWF0aC50YW4oKDkwIC0gdGhpcy5Eb3JtYW50X0JHX0FuZ2xlKCkpICogTWF0aC5QSSAvIDE4MCkpICsgdGhpcy5DaW50cmFnZUJfT04oKSAqICh0aGlzLkRvcm1hbnRfQk1fWTEoKSArIHRoaXMuRG9ybWFudF9CX1JheW9uWTIoKSAqIE1hdGguc3FydCgxIC0gdGhpcy5Eb3JtYW50X0xHX09OKCkgKiB0aGlzLkNpbnRyYWdlQl9PTigpICogKHRoaXMuVG90YWxfTGFyZzIoKSAtIHRoaXMuRG9ybWFudF9MR19YMCgpKSAqICh0aGlzLlRvdGFsX0xhcmcyKCkgLSB0aGlzLkRvcm1hbnRfTEdfWDAoKSkgLyAodGhpcy5Eb3JtYW50X0JfUmF5b25YMigpICogdGhpcy5Eb3JtYW50X0JfUmF5b25YMigpICsgMSAtIHRoaXMuQ2ludHJhZ2VCX09OKCkpKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0xHX1kwMCgpOm51bWJlciB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9BbGxlZ2VfT04gKiAoMSAtIHRoaXMuQ3JvaXNfTEdfQWxsMF9PTigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDAoKSA+IHRoaXMuRG9ybWFudF9BbGxlZ2VfWDAwKCkpKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Ub3RhbF9IYXV0KCkgLSB0aGlzLkFsbGVnZV9IYXV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9MR19PTigpICogKCAoMSAtIHRoaXMuQ2ludHJhZ2VCX09OKCkpICogdGhpcy5Ub3RhbF9IYXV0KCkgKyAodGhpcy5Eb3JtYW50X0JHX09OKCkgLSB0aGlzLl9Qb3J0ZV9PTiAqIHRoaXMuRG9ybWFudF9MR19PTigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDAoKSA8IHRoaXMuRG9ybWFudF9CR19YMSgpKSAqICh0aGlzLkRvcm1hbnRfQkdfWTAoKSAtIHRoaXMuVG90YWxfSGF1dCgpICsgKHRoaXMuRG9ybWFudF9MR19YMCgpIC0gdGhpcy5Eb3JtYW50X0JHX1gwKCkpICogTWF0aC50YW4oKDkwIC0gdGhpcy5Eb3JtYW50X0JHX0FuZ2xlKCkpICogTWF0aC5QSSAvIDE4MCkpICsgdGhpcy5DaW50cmFnZUJfT04oKSAqICh0aGlzLkRvcm1hbnRfQk1fWTEoKSArIHRoaXMuRG9ybWFudF9CX1JheW9uWTEoKSAqIE1hdGguc3FydCgxIC0gdGhpcy5Eb3JtYW50X0xHX09OKCkgKiB0aGlzLkNpbnRyYWdlQl9PTigpICogKHRoaXMuVG90YWxfTGFyZzIoKSAtIHRoaXMuRG9ybWFudF9MR19YMCgpKSAqICh0aGlzLlRvdGFsX0xhcmcyKCkgLSB0aGlzLkRvcm1hbnRfTEdfWDAoKSkgLyAodGhpcy5Eb3JtYW50X0JfUmF5b25YMSgpICogdGhpcy5Eb3JtYW50X0JfUmF5b25YMSgpICsgMSAtIHRoaXMuQ2ludHJhZ2VCX09OKCkpKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0xHX1kxKCk6bnVtYmVyIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX0ltcG9zdGVfT04gKiAoMSAtIHRoaXMuQ3JvaXNfTEdfSW1wMF9PTigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDAoKSA+IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gyKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MR19YMCgpIDwgdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDMoKSkpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkltcG9zdGVfSGF1dCgpICsgdGhpcy5fUHJvZmlsZV9JbnRfTGFyZztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0xHX09OKCkgKiAoIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgKyAodGhpcy5Eb3JtYW50X0hHX09OKCkgKiAoMSAtIHRoaXMuQ2ludHJhZ2VISF9PTigpKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gwKCkgPCB0aGlzLkRvcm1hbnRfSEdfWDMoKSkgKiAodGhpcy5Eb3JtYW50X0hHX1kyKCkgLSB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnIC0gKHRoaXMuRG9ybWFudF9MR19YMCgpIC0gdGhpcy5Eb3JtYW50X0hHX1gyKCkpICogTWF0aC50YW4oKDkwIC0gdGhpcy5Eb3JtYW50X0hHX0FuZ2xlKCkpICogTWF0aC5QSSAvIDE4MCkpICsgdGhpcy5Eb3JtYW50X0hEX09OKCkgKiAoMSAtIHRoaXMuQ2ludHJhZ2VISF9PTigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDAoKSA+IHRoaXMuRG9ybWFudF9IRF9YMigpKSAqICh0aGlzLkRvcm1hbnRfSERfWTMoKSAtIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgLSAodGhpcy5Eb3JtYW50X0hEX1gzKCkgLSB0aGlzLkRvcm1hbnRfTEdfWDAoKSkgKiBNYXRoLnRhbigoOTAgLSB0aGlzLkRvcm1hbnRfSERfQW5nbGUoKSkgKiBNYXRoLlBJIC8gMTgwKSkgKyB0aGlzLkNpbnRyYWdlSEhfT04oKSAqICgtdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyArIHRoaXMuRG9ybWFudF9IX1JheW9uWTEoKSAqICgxIC0gdGhpcy5Hb3RoaXFfT04oKSAqIDAuMTM0KSAtIHRoaXMuRG9ybWFudF9IX1JheW9uWTIoKSAqIE1hdGguc3FydCgxIC0gdGhpcy5Eb3JtYW50X0xHX09OKCkgKiB0aGlzLkNpbnRyYWdlSEhfT04oKSAqIE1hdGgucG93KHRoaXMuVG90YWxfTGFyZzIoKSAqICgxICsgdGhpcy5Hb3RoaXFfT04oKSArIHRoaXMuRG9ybWFudF9IR19PTigpIC0gdGhpcy5Eb3JtYW50X0hEX09OKCkpIC0gKDEgLSAyICogKHRoaXMuRG9ybWFudF9IRF9PTigpIC0gdGhpcy5Hb3RoaXFfT04oKSkpICogdGhpcy5Eb3JtYW50X0xHX1gwKCksIDIpIC8gKHRoaXMuRG9ybWFudF9IX1JheW9uWDIoKSAqIHRoaXMuRG9ybWFudF9IX1JheW9uWDIoKSArIDEgLSB0aGlzLkNpbnRyYWdlSEhfT04oKSkpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfTEdfWTEwKCk6bnVtYmVyIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX0ltcG9zdGVfT04gKiAoMSAtIHRoaXMuQ3JvaXNfTEdfSW1wMF9PTigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDAoKSA+IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gxMCgpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDAoKSA8IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gwMCgpKSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuSW1wb3N0ZV9IYXV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9MR19PTigpICogKHRoaXMuRG9ybWFudF9IR19PTigpICogKDEgLSB0aGlzLkNpbnRyYWdlSEhfT04oKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gwKCkgPCB0aGlzLkRvcm1hbnRfSEdfWDAoKSkgKiAodGhpcy5Eb3JtYW50X0hHX1gwKCkgLSB0aGlzLkRvcm1hbnRfTEdfWDAoKSkgKiBNYXRoLnRhbigoOTAgLSB0aGlzLkRvcm1hbnRfSEdfQW5nbGUoKSkgKiBNYXRoLlBJIC8gMTgwKSArIHRoaXMuRG9ybWFudF9IRF9PTigpICogKDEgLSB0aGlzLkNpbnRyYWdlSEhfT04oKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gwKCkgPiB0aGlzLkRvcm1hbnRfSERfWDEoKSkgKiAodGhpcy5Eb3JtYW50X0hEX1kwKCkgLSAodGhpcy5Eb3JtYW50X0hEX1gwKCkgLSB0aGlzLkRvcm1hbnRfTEdfWDAoKSkgKiBNYXRoLnRhbigoOTAgLSB0aGlzLkRvcm1hbnRfSERfQW5nbGUoKSkgKiBNYXRoLlBJIC8gMTgwKSkgKyB0aGlzLkNpbnRyYWdlSEhfT04oKSAqIHRoaXMuRG9ybWFudF9IX1JheW9uWTEoKSAqICgxIC0gdGhpcy5Hb3RoaXFfT04oKSAqIDAuMTM0IC0gTWF0aC5zcXJ0KDEgLSB0aGlzLkRvcm1hbnRfTEdfT04oKSAqIHRoaXMuQ2ludHJhZ2VISF9PTigpICogTWF0aC5wb3codGhpcy5Ub3RhbF9MYXJnMigpICogKDEgKyB0aGlzLkdvdGhpcV9PTigpICsgdGhpcy5Eb3JtYW50X0hHX09OKCkgLSB0aGlzLkRvcm1hbnRfSERfT04oKSkgLSAoMSAtIDIgKiAodGhpcy5Eb3JtYW50X0hEX09OKCkgLSB0aGlzLkdvdGhpcV9PTigpKSkgKiB0aGlzLkRvcm1hbnRfTEdfWDAoKSwgMikgLyAodGhpcy5Eb3JtYW50X0hfUmF5b25YMSgpICogdGhpcy5Eb3JtYW50X0hfUmF5b25YMSgpICsgMSAtIHRoaXMuQ2ludHJhZ2VISF9PTigpKSkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MR19YMigpOm51bWJlciB7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0xHX09OKCkgKiB0aGlzLkxHX0xhcmcoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgRG9ybWFudF9MR19ZMigpOm51bWJlciB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9JbXBvc3RlX09OICogKDEgLSB0aGlzLkNyb2lzX0xHX0ltcDBfT04oKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gyKCkgPiB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDIoKSA8IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gzKCkpKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5JbXBvc3RlX0hhdXQoKSArIHRoaXMuX1Byb2ZpbGVfSW50X0xhcmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9MR19PTigpICogKHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgKyAodGhpcy5Eb3JtYW50X0hHX09OKCkgKiAoMSAtIHRoaXMuQ2ludHJhZ2VISF9PTigpKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gyKCkgPCB0aGlzLkRvcm1hbnRfSEdfWDMoKSkgKiAodGhpcy5Eb3JtYW50X0hHX1kyKCkgLSB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnIC0gKHRoaXMuRG9ybWFudF9MR19YMigpIC0gdGhpcy5Eb3JtYW50X0hHX1gyKCkpICogTWF0aC50YW4oKDkwIC0gdGhpcy5Eb3JtYW50X0hHX0FuZ2xlKCkpICogTWF0aC5QSSAvIDE4MCkpICsgdGhpcy5Eb3JtYW50X0hEX09OKCkgKiAoMSAtIHRoaXMuQ2ludHJhZ2VISF9PTigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDIoKSA+IHRoaXMuRG9ybWFudF9IRF9YMigpKSAqICh0aGlzLkRvcm1hbnRfSERfWTMoKSAtIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgLSAodGhpcy5Eb3JtYW50X0hEX1gzKCkgLSB0aGlzLkRvcm1hbnRfTEdfWDIoKSkgKiBNYXRoLnRhbigoOTAgLSB0aGlzLkRvcm1hbnRfSERfQW5nbGUoKSkgKiBNYXRoLlBJIC8gMTgwKSkgKyB0aGlzLkNpbnRyYWdlSEhfT04oKSAqICh0aGlzLkRvcm1hbnRfSF9SYXlvblkxKCkgKiAoMSAtIHRoaXMuR290aGlxX09OKCkgKiAwLjEzNCkgLSB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnIC0gdGhpcy5Eb3JtYW50X0hfUmF5b25ZMigpICogTWF0aC5zcXJ0KDEgLSB0aGlzLkRvcm1hbnRfTEdfT04oKSAqIHRoaXMuQ2ludHJhZ2VISF9PTigpICogTWF0aC5wb3codGhpcy5Ub3RhbF9MYXJnMigpICogKDEgKyB0aGlzLkdvdGhpcV9PTigpICsgdGhpcy5Eb3JtYW50X0hHX09OKCkgLSB0aGlzLkRvcm1hbnRfSERfT04oKSkgLSAoMSAtIDIgKiAodGhpcy5Eb3JtYW50X0hEX09OKCkgLSB0aGlzLkdvdGhpcV9PTigpKSkgKiB0aGlzLkRvcm1hbnRfTEdfWDIoKSwgMikgLyAodGhpcy5Eb3JtYW50X0hfUmF5b25YMigpICogdGhpcy5Eb3JtYW50X0hfUmF5b25YMigpICsgMSAtIHRoaXMuQ2ludHJhZ2VISF9PTigpKSkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MR19ZMjAoKTpudW1iZXIge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fSW1wb3N0ZV9PTiAqICgxIC0gdGhpcy5Dcm9pc19MR19JbXAwX09OKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MR19YMigpID4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDEwKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MR19YMigpIDwgdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDAwKCkpKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5JbXBvc3RlX0hhdXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0xHX09OKCkgKiAodGhpcy5Eb3JtYW50X0hHX09OKCkgKiAoMSAtIHRoaXMuQ2ludHJhZ2VISF9PTigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDIoKSA8IHRoaXMuRG9ybWFudF9IR19YMCgpKSAqICh0aGlzLkRvcm1hbnRfSEdfWDAoKSAtIHRoaXMuRG9ybWFudF9MR19YMigpKSAqIE1hdGgudGFuKCg5MCAtIHRoaXMuRG9ybWFudF9IR19BbmdsZSgpKSAqIE1hdGguUEkgLyAxODApICsgdGhpcy5Eb3JtYW50X0hEX09OKCkgKiAoMSAtIHRoaXMuQ2ludHJhZ2VISF9PTigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDIoKSA+IHRoaXMuRG9ybWFudF9IRF9YMSgpKSAqIHRoaXMuRG9ybWFudF9MR19YMigpICogTWF0aC50YW4oKDkwIC0gdGhpcy5Eb3JtYW50X0hEX0FuZ2xlKCkpICogTWF0aC5QSSAvIDE4MCkgKyB0aGlzLkNpbnRyYWdlSEhfT04oKSAqIHRoaXMuRG9ybWFudF9IX1JheW9uWTEoKSAqICgxIC0gdGhpcy5Hb3RoaXFfT04oKSAqIDAuMTM0IC0gTWF0aC5zcXJ0KDEgLSB0aGlzLkRvcm1hbnRfTEdfT04oKSAqIHRoaXMuQ2ludHJhZ2VISF9PTigpICogTWF0aC5wb3codGhpcy5Ub3RhbF9MYXJnMigpICogKDEgKyB0aGlzLkdvdGhpcV9PTigpICsgdGhpcy5Eb3JtYW50X0hHX09OKCkgLSB0aGlzLkRvcm1hbnRfSERfT04oKSkgLSAoMSAtIDIgKiAodGhpcy5Eb3JtYW50X0hEX09OKCkgLSB0aGlzLkdvdGhpcV9PTigpKSkgKiB0aGlzLkRvcm1hbnRfTEdfWDIoKSwgMikgLyAodGhpcy5Eb3JtYW50X0hfUmF5b25YMSgpICogdGhpcy5Eb3JtYW50X0hfUmF5b25YMSgpICsgMSAtIHRoaXMuQ2ludHJhZ2VISF9PTigpKSkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MR19YMTIoKTpudW1iZXIge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fSW1wb3N0ZV9PTiAqICgxIC0gdGhpcy5Dcm9pc19MR19JbXAwX09OKCkpICogKHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDAoKSA+IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gyKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MR19YMigpIDwgdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDIoKSkgKyB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gwKCkgPiB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMygpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDIoKSA8IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gzKCkpKSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9JbXBvc3RlX1gyKCkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gwKCkgPiB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDIoKSA8IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gyKCkpICsgdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDMoKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDAoKSA+IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gzKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9ITV9UcmFuc19YKCkgPCB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0xHX09OKCkgKiAodGhpcy5Eb3JtYW50X0xHX1gwKCkgKyB0aGlzLkRvcm1hbnRfSEdfT04oKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDIoKSA8IHRoaXMuRG9ybWFudF9IR19YMygpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDAoKSA+IHRoaXMuRG9ybWFudF9IR19YMygpKSAqICh0aGlzLkRvcm1hbnRfSEdfWDMoKSAtIHRoaXMuRG9ybWFudF9MR19YMCgpKSArIHRoaXMuRG9ybWFudF9IRF9PTigpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MR19YMigpIDwgdGhpcy5Eb3JtYW50X0hEX1gyKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MR19YMCgpID4gdGhpcy5Eb3JtYW50X0hEX1gyKCkpICogKHRoaXMuRG9ybWFudF9IRF9YMigpIC0gdGhpcy5Eb3JtYW50X0xHX1gwKCkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MR19ZMTIoKTpudW1iZXIge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fSW1wb3N0ZV9PTiAqICgxIC0gdGhpcy5Dcm9pc19MR19JbXAwX09OKCkpICogKHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDAoKSA+IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gyKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MR19YMigpIDwgdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDIoKSkgKyB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gwKCkgPiB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMygpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDIoKSA8IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gzKCkpKSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9MR19ZMSgpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MR19YMCgpID4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDIoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gyKCkgPCB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMigpKSArIHRoaXMuRG9ybWFudF9MR19ZMigpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MR19YMCgpID4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDMoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gyKCkgPCB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0xHX09OKCkgKiAodGhpcy5Eb3JtYW50X0xHX1kxKCkgKyB0aGlzLkRvcm1hbnRfSEdfT04oKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDIoKSA8IHRoaXMuRG9ybWFudF9IR19YMygpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDAoKSA+IHRoaXMuRG9ybWFudF9IR19YMygpKSAqICh0aGlzLkRvcm1hbnRfSEdfWTMoKSAtIHRoaXMuRG9ybWFudF9MR19ZMSgpKSArIHRoaXMuRG9ybWFudF9IRF9PTigpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MR19YMigpIDwgdGhpcy5Eb3JtYW50X0hEX1gyKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MR19YMCgpID4gdGhpcy5Eb3JtYW50X0hEX1gyKCkpICogKHRoaXMuRG9ybWFudF9IRF9ZMigpIC0gdGhpcy5Eb3JtYW50X0xHX1kxKCkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MR19YMTIwKCk6bnVtYmVyIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX0ltcG9zdGVfT04gKiAoMSAtIHRoaXMuQ3JvaXNfTEdfSW1wMF9PTigpKSAqICh0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gwKCkgPiB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMTAoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gyKCkgPCB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMTAoKSkgKyB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gwKCkgPiB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMDAoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gyKCkgPCB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMDAoKSkpKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDEwKCkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gwKCkgPiB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMTAoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gyKCkgPCB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMTAoKSkgKyB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMDAoKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDAoKSA+IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gwMCgpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDIoKSA8IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gwMCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0xHX09OKCkgKiAodGhpcy5Eb3JtYW50X0xHX1gwKCkgKyB0aGlzLkRvcm1hbnRfSEdfT04oKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDIoKSA8IHRoaXMuRG9ybWFudF9IR19YMCgpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDAoKSA+IHRoaXMuRG9ybWFudF9IR19YMCgpKSAqICh0aGlzLkRvcm1hbnRfSEdfWDAoKSAtIHRoaXMuRG9ybWFudF9MR19YMCgpKSArIHRoaXMuRG9ybWFudF9IRF9PTigpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MR19YMigpIDwgdGhpcy5Eb3JtYW50X0hEX1gxKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MR19YMCgpID4gdGhpcy5Eb3JtYW50X0hEX1gxKCkpICogKHRoaXMuRG9ybWFudF9IRF9YMSgpIC0gdGhpcy5Eb3JtYW50X0xHX1gwKCkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MR19ZMTIwKCk6bnVtYmVyIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX0ltcG9zdGVfT04gKiAoMSAtIHRoaXMuQ3JvaXNfTEdfSW1wMF9PTigpKSAqICh0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gwKCkgPiB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMTAoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gyKCkgPCB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMTAoKSkgKyB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gwKCkgPiB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMDAoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gyKCkgPCB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMDAoKSkpKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5JbXBvc3RlX0hhdXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0xHX09OKCkgKiAodGhpcy5Eb3JtYW50X0xHX1kxMCgpICsgdGhpcy5Eb3JtYW50X0hHX09OKCkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gyKCkgPCB0aGlzLkRvcm1hbnRfSEdfWDAoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gwKCkgPiB0aGlzLkRvcm1hbnRfSEdfWDAoKSkgKiAodGhpcy5Eb3JtYW50X0hHX1kwKCkgLSB0aGlzLkRvcm1hbnRfTEdfWTEwKCkpICsgdGhpcy5Eb3JtYW50X0hEX09OKCkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gyKCkgPCB0aGlzLkRvcm1hbnRfSERfWDEoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gwKCkgPiB0aGlzLkRvcm1hbnRfSERfWDEoKSkgKiAodGhpcy5Eb3JtYW50X0hEX1kxKCkgLSB0aGlzLkRvcm1hbnRfTEdfWTEwKCkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MR19ZMygpOm51bWJlciB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9BbGxlZ2VfT04gKiAoMSAtIHRoaXMuQ3JvaXNfTEdfQWxsMF9PTigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDIoKSA+IHRoaXMuRG9ybWFudF9BbGxlZ2VfWDMoKSkpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLlRvdGFsX0hhdXQoKSAtIHRoaXMuQWxsZWdlX0hhdXQoKSAtIHRoaXMuX1Byb2ZpbGVfSW50X0xhcmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9MR19PTigpICogKCB0aGlzLlRvdGFsX0hhdXQoKSAtIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgLSAodGhpcy5fT2N0b2dvbmVfT04gKyB0aGlzLl9IZXhhZ29uZV9PTiArIHRoaXMuX0xvc2FuZ2VfT04pICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MR19YMigpIDwgdGhpcy5Eb3JtYW50X0JHX1gyKCkpICogKHRoaXMuVG90YWxfSGF1dCgpIC0gdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyAtIHRoaXMuRG9ybWFudF9CR19ZMygpIC0gKHRoaXMuRG9ybWFudF9MR19YMigpIC0gdGhpcy5Eb3JtYW50X0JHX1gzKCkpICogTWF0aC50YW4oKDkwIC0gdGhpcy5Eb3JtYW50X0JHX0FuZ2xlKCkpICogTWF0aC5QSSAvIDE4MCkpIC0gdGhpcy5DaW50cmFnZUJfT04oKSAqICh0aGlzLkRvcm1hbnRfQl9SYXlvblkxKCkgLSB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnIC0gdGhpcy5Eb3JtYW50X0JfUmF5b25ZMigpICogTWF0aC5zcXJ0KDEgLSB0aGlzLkRvcm1hbnRfTEdfT04oKSAqIHRoaXMuQ2ludHJhZ2VCX09OKCkgKiBNYXRoLnBvdyh0aGlzLlRvdGFsX0xhcmcyKCkgLSB0aGlzLkRvcm1hbnRfTEdfWDIoKSwgMikgLyAodGhpcy5Eb3JtYW50X0JfUmF5b25YMigpICogdGhpcy5Eb3JtYW50X0JfUmF5b25YMigpICsgMSAtIHRoaXMuQ2ludHJhZ2VCX09OKCkpKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0xHX1kzMCgpOm51bWJlciB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9BbGxlZ2VfT04gKiAoMSAtIHRoaXMuQ3JvaXNfTEdfQWxsMF9PTigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDIoKSA+IHRoaXMuRG9ybWFudF9BbGxlZ2VfWDAwKCkpKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Ub3RhbF9IYXV0KCkgLSB0aGlzLkFsbGVnZV9IYXV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9MR19PTigpICogKHRoaXMuVG90YWxfSGF1dCgpIC0gKHRoaXMuX09jdG9nb25lX09OICsgdGhpcy5fSGV4YWdvbmVfT04gKyB0aGlzLl9Mb3NhbmdlX09OKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDIoKSA8IHRoaXMuRG9ybWFudF9CR19YMSgpKSAqICh0aGlzLkRvcm1hbnRfQkdfWDEoKSAtIHRoaXMuRG9ybWFudF9MR19YMigpKSAqIE1hdGgudGFuKCg5MCAtIHRoaXMuRG9ybWFudF9CR19BbmdsZSgpKSAqIE1hdGguUEkgLyAxODApIC0gdGhpcy5DaW50cmFnZUJfT04oKSAqIHRoaXMuRG9ybWFudF9CX1JheW9uWTEoKSAqICgxIC0gTWF0aC5zcXJ0KDEgLSB0aGlzLkRvcm1hbnRfTEdfT04oKSAqIHRoaXMuQ2ludHJhZ2VCX09OKCkgKiBNYXRoLnBvdyh0aGlzLlRvdGFsX0xhcmcyKCkgLSB0aGlzLkRvcm1hbnRfTEdfWDIoKSwgMikgLyAodGhpcy5Eb3JtYW50X0JfUmF5b25YMSgpICogdGhpcy5Eb3JtYW50X0JfUmF5b25YMSgpICsgMSAtIHRoaXMuQ2ludHJhZ2VCX09OKCkpKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0xHX1gwMygpOm51bWJlciB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9BbGxlZ2VfT04gKiAoMSAtIHRoaXMuQ3JvaXNfTEdfQWxsMF9PTigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDAoKSA+IHRoaXMuRG9ybWFudF9BbGxlZ2VfWDMoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gyKCkgPCB0aGlzLkRvcm1hbnRfQWxsZWdlX1gzKCkpKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0FsbGVnZV9YMygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfTEdfT04oKSAqICh0aGlzLkRvcm1hbnRfTEdfWDAoKSArIHRoaXMuRG9ybWFudF9CR19PTigpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MR19YMigpIDwgdGhpcy5Eb3JtYW50X0JHX1gyKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MR19YMCgpID4gdGhpcy5Eb3JtYW50X0JHX1gyKCkpICogKHRoaXMuRG9ybWFudF9CR19YMigpIC0gdGhpcy5Eb3JtYW50X0xHX1gwKCkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MR19ZMDMoKTpudW1iZXIge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fQWxsZWdlX09OICogKDEgLSB0aGlzLkNyb2lzX0xHX0FsbDBfT04oKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gwKCkgPiB0aGlzLkRvcm1hbnRfQWxsZWdlX1gzKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MR19YMigpIDwgdGhpcy5Eb3JtYW50X0FsbGVnZV9YMygpKSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuVG90YWxfSGF1dCgpIC0gdGhpcy5BbGxlZ2VfSGF1dCgpIC0gdGhpcy5fUHJvZmlsZV9JbnRfTGFyZztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0xHX09OKCkgKiAodGhpcy5Eb3JtYW50X0xHX1kwKCkgKyB0aGlzLkRvcm1hbnRfQkdfT04oKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDIoKSA8IHRoaXMuRG9ybWFudF9CR19YMigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDAoKSA+IHRoaXMuRG9ybWFudF9CR19YMigpKSAqICh0aGlzLkRvcm1hbnRfQkdfWTIoKSAtIHRoaXMuRG9ybWFudF9MR19ZMCgpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfTEdfWDAzMCgpOm51bWJlciB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9BbGxlZ2VfT04gKiAoMSAtIHRoaXMuQ3JvaXNfTEdfQWxsMF9PTigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDAoKSA+IHRoaXMuRG9ybWFudF9BbGxlZ2VfWDAwKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MR19YMigpIDwgdGhpcy5Eb3JtYW50X0FsbGVnZV9YMDAoKSkpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfQWxsZWdlX1gwMCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfTEdfT04oKSAqICh0aGlzLkRvcm1hbnRfTEdfWDAoKSArIHRoaXMuRG9ybWFudF9CR19PTigpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MR19YMigpIDwgdGhpcy5Eb3JtYW50X0JHX1gxKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MR19YMCgpID4gdGhpcy5Eb3JtYW50X0JHX1gxKCkpICogKHRoaXMuRG9ybWFudF9CR19YMSgpIC0gdGhpcy5Eb3JtYW50X0xHX1gwKCkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MR19ZMDMwKCk6bnVtYmVyIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX0FsbGVnZV9PTiAqICgxIC0gdGhpcy5Dcm9pc19MR19BbGwwX09OKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MR19YMCgpID4gdGhpcy5Eb3JtYW50X0FsbGVnZV9YMDAoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xHX1gyKCkgPCB0aGlzLkRvcm1hbnRfQWxsZWdlX1gwMCgpKSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuVG90YWxfSGF1dCgpIC0gdGhpcy5BbGxlZ2VfSGF1dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfTEdfT04oKSAqICh0aGlzLkRvcm1hbnRfTEdfWTAwKCkgKyB0aGlzLkRvcm1hbnRfQkdfT04oKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDIoKSA8IHRoaXMuRG9ybWFudF9CR19YMSgpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTEdfWDAoKSA+IHRoaXMuRG9ybWFudF9CR19YMSgpKSAqICh0aGlzLkRvcm1hbnRfQkdfWTEoKSAtIHRoaXMuRG9ybWFudF9MR19ZMDAoKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0xHX0RZMSgpOm51bWJlciB7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0xHX1kwKCkgLSB0aGlzLkRvcm1hbnRfTEdfWTEoKTtcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0xHX0xYMSgpOm51bWJlciB7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0xHX1gwKCkgLSB0aGlzLkRvcm1hbnRfTEdfWDEyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MR19MWTEoKTpudW1iZXIge1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuRG9ybWFudF9MR19ZMTIoKSAtIHRoaXMuRG9ybWFudF9MR19ZMSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0xHX0xYMigpOm51bWJlciB7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0xHX1gxMigpIC0gdGhpcy5Eb3JtYW50X0xHX1gyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MR19MWTIoKTpudW1iZXIge1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9MR19ZMTIoKSAtIHRoaXMuRG9ybWFudF9MR19ZMigpO1xyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfTEdfRFkyKCk6bnVtYmVyIHtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfTEdfWTIoKSAtIHRoaXMuRG9ybWFudF9MR19ZMygpO1xyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfTEdfTFgzKCk6bnVtYmVyIHtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfTEdfWDIoKSAtIHRoaXMuRG9ybWFudF9MR19YMDMoKTtcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0xHX0xZMygpOm51bWJlciB7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0xHX1kzKCkgLSB0aGlzLkRvcm1hbnRfTEdfWTAzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MR19MWDQoKTpudW1iZXIge1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9MR19YMDMoKSAtIHRoaXMuRG9ybWFudF9MR19YMCgpO1xyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfTEdfTFk0KCk6bnVtYmVyIHtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfTEdfWTAzKCkgLSB0aGlzLkRvcm1hbnRfTEdfWTAoKTtcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0xHX1RyYW5zX1goKTpudW1iZXIge1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9MR19YMCgpO1xyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfTEdfVHJhbnNfWSgpOm51bWJlciB7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0xHX1kwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MR19Sb3RhdGUoKTpudW1iZXIge1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9MR19PTigpICogMTgwO1xyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfTERfT04oKTpudW1iZXIge1xyXG5cclxuICAgICAgICByZXR1cm4gIHRoaXMuX0xEX09OKnRoaXMuYm9vbCh0aGlzLkxEX0xhcmcoKT4oKDEtdGhpcy5fQ3JvaXNfTERfQWxsX09OKSp0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0hEX1kzKCk+KHRoaXMuVG90YWxfSGF1dCgpLXRoaXMuQWxsZWdlX0hhdXQoKS10aGlzLl9Qcm9maWxlX0ludF9MYXJnKSkqKHRoaXMuVG90YWxfTGFyZygpLXRoaXMuRG9ybWFudF9BbGxlZ2VfWDIoKSkrdGhpcy5fTERfbWluKnRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcpKVxyXG4gICAgfVxyXG5cclxuICAgIENyb2lzX0xEX0ltcDBfT04oKTpudW1iZXIge1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0Nyb2lzX0xEX0ltcF9PTiAqIHRoaXMuYm9vbCh0aGlzLkxEX0xhcmcoKSA+ICh0aGlzLlRvdGFsX0xhcmcoKSAtIHRoaXMuRG9ybWFudF9JbXBvc3RlX1gzKCkgKyB0aGlzLl9MRF9taW4gKiB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnKSlcclxuICAgIH1cclxuXHJcbiAgICBDcm9pc19MRF9BbGwwX09OKCk6bnVtYmVyIHtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9Dcm9pc19MRF9BbGxfT04gKiB0aGlzLmJvb2wodGhpcy5MRF9MYXJnKCkgPiAodGhpcy5Ub3RhbF9MYXJnKCkgLSB0aGlzLkRvcm1hbnRfQWxsZWdlX1gyKCkgKyB0aGlzLl9MR19taW4gKiB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnKSlcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0xEX1gwKCk6bnVtYmVyIHtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfTERfT04oKSAqICh0aGlzLlRvdGFsX0xhcmcoKSAtIHRoaXMuTERfTGFyZygpIC0gdGhpcy5fUHJvZmlsZV9JbnRfTGFyZylcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0xEX1kwKCk6bnVtYmVyIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX0ltcG9zdGVfT04gKiAoMSAtIHRoaXMuQ3JvaXNfTERfSW1wMF9PTigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDAoKSA8IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gzKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMCgpID4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDIoKSkpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkltcG9zdGVfSGF1dCgpICsgdGhpcy5fUHJvZmlsZV9JbnRfTGFyZztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0xEX09OKCkgKiAodGhpcy5fUHJvZmlsZV9FeHRfTGFyZyArIHRoaXMuRG9ybWFudF9IRF9PTigpICogKDEgLSB0aGlzLkNpbnRyYWdlSEhfT04oKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xEX1gwKCkgPiB0aGlzLkRvcm1hbnRfSERfWDIoKSkgKiAodGhpcy5Eb3JtYW50X0hEX1kzKCkgLSB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnIC0gKHRoaXMuRG9ybWFudF9IRF9YMygpIC0gdGhpcy5Eb3JtYW50X0xEX1gwKCkpICogTWF0aC50YW4oKDkwIC0gdGhpcy5Eb3JtYW50X0hEX0FuZ2xlKCkpICogTWF0aC5QSSAvIDE4MCkpICsgKHRoaXMuRG9ybWFudF9IR19PTigpICogKDEgLSB0aGlzLkNpbnRyYWdlSEhfT04oKSkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMCgpIDwgdGhpcy5Eb3JtYW50X0hHX1gzKCkpICogKHRoaXMuRG9ybWFudF9IR19ZMigpIC0gdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyAtICh0aGlzLkRvcm1hbnRfTERfWDAoKSAtIHRoaXMuRG9ybWFudF9IR19YMigpKSAqIE1hdGgudGFuKCg5MCAtIHRoaXMuRG9ybWFudF9IR19BbmdsZSgpKSAqIE1hdGguUEkgLyAxODApKSArIHRoaXMuQ2ludHJhZ2VISF9PTigpICogKC10aGlzLl9Qcm9maWxlX0V4dF9MYXJnICsgdGhpcy5Eb3JtYW50X0hfUmF5b25ZMSgpICogKDEgLSB0aGlzLkdvdGhpcV9PTigpICogMC4xMzQpIC0gdGhpcy5Eb3JtYW50X0hfUmF5b25ZMigpICogTWF0aC5zcXJ0KDEgLSB0aGlzLkRvcm1hbnRfTERfT04oKSAqIHRoaXMuQ2ludHJhZ2VISF9PTigpICogTWF0aC5wb3codGhpcy5Ub3RhbF9MYXJnMigpICogKDEgKyB0aGlzLkRvcm1hbnRfSEdfT04oKSAtIHRoaXMuRG9ybWFudF9IRF9PTigpIC0gdGhpcy5Hb3RoaXFfT04oKSkgLSB0aGlzLkRvcm1hbnRfTERfWDAoKSAqICgxIC0gMiAqIHRoaXMuRG9ybWFudF9IRF9PTigpKSwgMikgLyAodGhpcy5Eb3JtYW50X0hfUmF5b25YMigpICogdGhpcy5Eb3JtYW50X0hfUmF5b25YMigpICsgMSAtIHRoaXMuQ2ludHJhZ2VISF9PTigpKSkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MRF9ZMDAoKTpudW1iZXIge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fSW1wb3N0ZV9PTiAqICgxIC0gdGhpcy5Dcm9pc19MRF9JbXAwX09OKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMCgpIDwgdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDAwKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMCgpID4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDEwKCkpKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5JbXBvc3RlX0hhdXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0xEX09OKCkgKiAodGhpcy5Eb3JtYW50X0hEX09OKCkgKiAoMSAtIHRoaXMuQ2ludHJhZ2VISF9PTigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDAoKSA+IHRoaXMuRG9ybWFudF9IRF9YMSgpKSAqICh0aGlzLkRvcm1hbnRfSERfWTAoKSAtICh0aGlzLkRvcm1hbnRfSERfWDAoKSAtIHRoaXMuRG9ybWFudF9MRF9YMCgpKSAqIE1hdGgudGFuKCg5MCAtIHRoaXMuRG9ybWFudF9IRF9BbmdsZSgpKSAqIE1hdGguUEkgLyAxODApKSArICh0aGlzLkRvcm1hbnRfSEdfT04oKSAqICgxIC0gdGhpcy5DaW50cmFnZUhIX09OKCkpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDAoKSA8IHRoaXMuRG9ybWFudF9IR19YMCgpKSAqICh0aGlzLkRvcm1hbnRfSEdfWTEoKSAtICh0aGlzLkRvcm1hbnRfTERfWDAoKSAtIHRoaXMuRG9ybWFudF9IR19YMSgpKSAqIE1hdGgudGFuKCg5MCAtIHRoaXMuRG9ybWFudF9IR19BbmdsZSgpKSAqIE1hdGguUEkgLyAxODApKSArIHRoaXMuQ2ludHJhZ2VISF9PTigpICogKHRoaXMuRG9ybWFudF9IX1JheW9uWTEoKSAqICgxIC0gdGhpcy5Hb3RoaXFfT04oKSAqIDAuMTM0IC0gTWF0aC5zcXJ0KDEgLSB0aGlzLkRvcm1hbnRfTERfT04oKSAqIHRoaXMuQ2ludHJhZ2VISF9PTigpICogTWF0aC5wb3codGhpcy5Ub3RhbF9MYXJnMigpICogKDEgKyB0aGlzLkRvcm1hbnRfSEdfT04oKSAtIHRoaXMuRG9ybWFudF9IRF9PTigpIC0gdGhpcy5Hb3RoaXFfT04oKSkgLSB0aGlzLkRvcm1hbnRfTERfWDAoKSAqICgxIC0gMiAqIHRoaXMuRG9ybWFudF9IRF9PTigpKSwgMikgLyAodGhpcy5Eb3JtYW50X0hfUmF5b25YMSgpICogdGhpcy5Eb3JtYW50X0hfUmF5b25YMSgpICsgMSAtIHRoaXMuQ2ludHJhZ2VISF9PTigpKSkpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfTERfWTEoKTpudW1iZXIge1xyXG5cclxuICAgICAgICBpZih0aGlzLl9BbGxlZ2VfT04qKDEtdGhpcy5Dcm9pc19MRF9BbGwwX09OKCkpKnRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDAoKTx0aGlzLkRvcm1hbnRfQWxsZWdlX1gyKCkpKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Ub3RhbF9IYXV0KCktdGhpcy5BbGxlZ2VfSGF1dCgpLXRoaXMuX1Byb2ZpbGVfSW50X0xhcmc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9MRF9PTigpKigoMS10aGlzLkNpbnRyYWdlQl9PTigpKSoodGhpcy5Ub3RhbF9IYXV0KCktdGhpcy5fUHJvZmlsZV9FeHRfTGFyZykrdGhpcy5fUG9ydGVfT04qdGhpcy5Eb3JtYW50X0xEX09OKCkqdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyArKHRoaXMuX09jdG9nb25lX09OK3RoaXMuX0hleGFnb25lX09OK3RoaXMuX0xvc2FuZ2VfT04pKnRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDAoKT50aGlzLkRvcm1hbnRfQkRfWDMoKSkqKHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmctdGhpcy5Ub3RhbF9IYXV0KCkrdGhpcy5Eb3JtYW50X0JEX1kyKCkrKHRoaXMuRG9ybWFudF9CRF9YMigpLXRoaXMuRG9ybWFudF9MRF9YMCgpKSpNYXRoLnRhbigoOTAtdGhpcy5Eb3JtYW50X0JEX0FuZ2xlKCkpKk1hdGguUEkvMTgwKSkgKyB0aGlzLkNpbnRyYWdlQl9PTigpKih0aGlzLkRvcm1hbnRfQk1fWTAoKSt0aGlzLkRvcm1hbnRfQl9SYXlvblkyKCkqTWF0aC5zcXJ0KDEtdGhpcy5DaW50cmFnZUJfT04oKSoodGhpcy5Ub3RhbF9MYXJnMigpLXRoaXMuRG9ybWFudF9MRF9YMCgpKSoodGhpcy5Ub3RhbF9MYXJnMigpLXRoaXMuRG9ybWFudF9MRF9YMCgpKS8odGhpcy5Eb3JtYW50X0JfUmF5b25YMigpKnRoaXMuRG9ybWFudF9CX1JheW9uWDIoKSsxLXRoaXMuQ2ludHJhZ2VCX09OKCkpKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfTERfWTEwKCk6bnVtYmVyIHtcclxuICAgICAgICBpZiAodGhpcy5fQWxsZWdlX09OICogKDEgLSB0aGlzLkNyb2lzX0xEX0FsbDBfT04oKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xEX1gwKCkgPCB0aGlzLkRvcm1hbnRfQWxsZWdlX1gxMCgpKSlcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuVG90YWxfSGF1dCgpIC0gdGhpcy5BbGxlZ2VfSGF1dCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfTERfT04oKSAqICgoMSAtIHRoaXMuQ2ludHJhZ2VCX09OKCkpICogdGhpcy5Ub3RhbF9IYXV0KCkgKyAodGhpcy5fT2N0b2dvbmVfT04gKyB0aGlzLl9IZXhhZ29uZV9PTiArIHRoaXMuX0xvc2FuZ2VfT04pICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMCgpID4gdGhpcy5Eb3JtYW50X0JEX1gwKCkpICogKHRoaXMuRG9ybWFudF9CRF9YMCgpIC0gdGhpcy5Eb3JtYW50X0xEX1gwKCkpICogTWF0aC50YW4oKDkwIC0gdGhpcy5Eb3JtYW50X0JEX0FuZ2xlKCkpICogTWF0aC5QSSAvIDE4MCkgKyB0aGlzLkNpbnRyYWdlQl9PTigpICogKHRoaXMuRG9ybWFudF9CTV9ZMCgpICsgdGhpcy5Eb3JtYW50X0JfUmF5b25ZMSgpICogTWF0aC5zcXJ0KDEgLSB0aGlzLkNpbnRyYWdlQl9PTigpICogTWF0aC5wb3codGhpcy5Ub3RhbF9MYXJnMigpIC0gdGhpcy5Eb3JtYW50X0xEX1gwKCksIDIpIC8gKHRoaXMuRG9ybWFudF9CX1JheW9uWDEoKSAqIHRoaXMuRG9ybWFudF9CX1JheW9uWDEoKSArIDEgLSB0aGlzLkNpbnRyYWdlQl9PTigpKSkpKTtcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0xEX1gyKCk6bnVtYmVyIHtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfTERfT04oKSAqICh0aGlzLlRvdGFsX0xhcmcoKSAtIHRoaXMuTERfTGFyZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0xEX1kyKCk6bnVtYmVyIHtcclxuICAgICAgICBpZih0aGlzLl9BbGxlZ2VfT04gKiAoMSAtIHRoaXMuQ3JvaXNfTERfQWxsMF9PTigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDIoKSA8IHRoaXMuRG9ybWFudF9BbGxlZ2VfWDIoKSkpXHJcbiAgICAgICAgICAgIHJldHVybiAgdGhpcy5Ub3RhbF9IYXV0KCkgLSB0aGlzLkFsbGVnZV9IYXV0KCkgLSB0aGlzLl9Qcm9maWxlX0ludF9MYXJnO1xyXG5cclxuICAgICAgICByZXR1cm4gICh0aGlzLkRvcm1hbnRfTERfT04oKSAqICgoMSAtIHRoaXMuQ2ludHJhZ2VCX09OKCkpICogKHRoaXMuVG90YWxfSGF1dCgpIC0gdGhpcy5fUHJvZmlsZV9FeHRfTGFyZykgKyAodGhpcy5fT2N0b2dvbmVfT04gKyB0aGlzLl9IZXhhZ29uZV9PTiArIHRoaXMuX0xvc2FuZ2VfT04pICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMigpID4gdGhpcy5Eb3JtYW50X0JEX1gzKCkpICogKHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgLSB0aGlzLlRvdGFsX0hhdXQoKSArIHRoaXMuRG9ybWFudF9CRF9ZMigpICsgKHRoaXMuRG9ybWFudF9CRF9YMigpIC0gdGhpcy5Eb3JtYW50X0xEX1gyKCkpICogTWF0aC50YW4oKDkwIC0gdGhpcy5Eb3JtYW50X0JEX0FuZ2xlKCkpICogTWF0aC5QSSAvIDE4MCkpICsgdGhpcy5DaW50cmFnZUJfT04oKSAqICh0aGlzLkRvcm1hbnRfQk1fWTAoKSArIHRoaXMuRG9ybWFudF9CX1JheW9uWTIoKSAqIE1hdGguc3FydCgxIC0gdGhpcy5DaW50cmFnZUJfT04oKSAqICh0aGlzLlRvdGFsX0xhcmcyKCkgLSB0aGlzLkRvcm1hbnRfTERfWDIoKSkgKiAodGhpcy5Ub3RhbF9MYXJnMigpIC0gdGhpcy5Eb3JtYW50X0xEX1gyKCkpIC8gKHRoaXMuRG9ybWFudF9CX1JheW9uWDIoKSAqIHRoaXMuRG9ybWFudF9CX1JheW9uWDIoKSArIDEgLSB0aGlzLkNpbnRyYWdlQl9PTigpKSkpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MRF9ZMjAoKTpudW1iZXIge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fQWxsZWdlX09OICogKDEgLSB0aGlzLkNyb2lzX0xEX0FsbDBfT04oKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xEX1gyKCkgPCB0aGlzLkRvcm1hbnRfQWxsZWdlX1gxMCgpKSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuVG90YWxfSGF1dCgpIC0gdGhpcy5BbGxlZ2VfSGF1dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfTERfT04oKSAqICgoMSAtIHRoaXMuQ2ludHJhZ2VCX09OKCkpICogdGhpcy5Ub3RhbF9IYXV0KCkgKyAodGhpcy5fT2N0b2dvbmVfT04gKyB0aGlzLl9IZXhhZ29uZV9PTiArIHRoaXMuX0xvc2FuZ2VfT04pICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMigpID4gdGhpcy5Eb3JtYW50X0JEX1gwKCkpICogKHRoaXMuRG9ybWFudF9CRF9YMCgpIC0gdGhpcy5Eb3JtYW50X0xEX1gyKCkpICogTWF0aC50YW4oKDkwIC0gdGhpcy5Eb3JtYW50X0JEX0FuZ2xlKCkpICogTWF0aC5QSSAvIDE4MCkgKyB0aGlzLkNpbnRyYWdlQl9PTigpICogKHRoaXMuRG9ybWFudF9CTV9ZMCgpICsgdGhpcy5Eb3JtYW50X0JfUmF5b25ZMSgpICogTWF0aC5zcXJ0KDEgLSB0aGlzLkNpbnRyYWdlQl9PTigpICogTWF0aC5wb3codGhpcy5Ub3RhbF9MYXJnMigpIC0gdGhpcy5Eb3JtYW50X0xEX1gyKCksIDIpIC8gKHRoaXMuRG9ybWFudF9CX1JheW9uWDEoKSAqIHRoaXMuRG9ybWFudF9CX1JheW9uWDEoKSArIDEgLSB0aGlzLkNpbnRyYWdlQl9PTigpKSkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MRF9YMTIoKTpudW1iZXIge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fQWxsZWdlX09OICogKDEgLSB0aGlzLkNyb2lzX0xEX0FsbDBfT04oKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xEX1gwKCkgPCB0aGlzLkRvcm1hbnRfQWxsZWdlX1gyKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMigpID4gdGhpcy5Eb3JtYW50X0FsbGVnZV9YMigpKSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9BbGxlZ2VfWDIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0xEX09OKCkgKiAodGhpcy5Eb3JtYW50X0xEX1gwKCkgKyB0aGlzLkRvcm1hbnRfQkRfT04oKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDAoKSA8IHRoaXMuRG9ybWFudF9CRF9YMygpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDIoKSA+IHRoaXMuRG9ybWFudF9CRF9YMygpKSAqICh0aGlzLkRvcm1hbnRfQkRfWDMoKSAtIHRoaXMuRG9ybWFudF9MRF9YMCgpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfTERfWTEyKCk6bnVtYmVyIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX0FsbGVnZV9PTiAqICgxIC0gdGhpcy5Dcm9pc19MRF9BbGwwX09OKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMCgpIDwgdGhpcy5Eb3JtYW50X0FsbGVnZV9YMigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDIoKSA+IHRoaXMuRG9ybWFudF9BbGxlZ2VfWDIoKSkpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfTERfWTEoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0xEX09OKCkgKiAodGhpcy5Eb3JtYW50X0xEX1kxKCkgKyB0aGlzLkRvcm1hbnRfQkRfT04oKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDAoKSA8IHRoaXMuRG9ybWFudF9CRF9YMygpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDIoKSA+IHRoaXMuRG9ybWFudF9CRF9YMygpKSAqICh0aGlzLkRvcm1hbnRfQkRfWTMoKSAtIHRoaXMuRG9ybWFudF9MRF9ZMSgpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfTERfWDEyMCgpOm51bWJlciB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9BbGxlZ2VfT04gKiAoMSAtIHRoaXMuQ3JvaXNfTERfQWxsMF9PTigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDAoKSA8IHRoaXMuRG9ybWFudF9BbGxlZ2VfWDEoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xEX1gyKCkgPiB0aGlzLkRvcm1hbnRfQWxsZWdlX1gxKCkpKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0FsbGVnZV9YMSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfTERfT04oKSAqICh0aGlzLkRvcm1hbnRfTERfWDAoKSArIHRoaXMuRG9ybWFudF9CRF9PTigpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMCgpIDwgdGhpcy5Eb3JtYW50X0JEX1gwKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMigpID4gdGhpcy5Eb3JtYW50X0JEX1gwKCkpICogKHRoaXMuRG9ybWFudF9CRF9YMCgpIC0gdGhpcy5Eb3JtYW50X0xEX1gwKCkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MRF9ZMTIwKCk6bnVtYmVyIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX0FsbGVnZV9PTiAqICgxIC0gdGhpcy5Dcm9pc19MRF9BbGwwX09OKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMCgpIDwgdGhpcy5Eb3JtYW50X0FsbGVnZV9YMSgpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDIoKSA+IHRoaXMuRG9ybWFudF9BbGxlZ2VfWDEoKSkpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfTERfWTEwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9MRF9PTigpICogKHRoaXMuRG9ybWFudF9MRF9ZMTAoKSArIHRoaXMuRG9ybWFudF9CRF9PTigpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMCgpIDwgdGhpcy5Eb3JtYW50X0JEX1gwKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMigpID4gdGhpcy5Eb3JtYW50X0JEX1gwKCkpICogKHRoaXMuRG9ybWFudF9CRF9ZMCgpIC0gdGhpcy5Eb3JtYW50X0xEX1kxMCgpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfTERfWTMoKTpudW1iZXIge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fSW1wb3N0ZV9PTiAqICgxIC0gdGhpcy5Dcm9pc19MRF9JbXAwX09OKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMigpIDwgdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDMoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xEX1gyKCkgPiB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMigpKSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuSW1wb3N0ZV9IYXV0KCkgKyB0aGlzLl9Qcm9maWxlX0ludF9MYXJnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfTERfT04oKSAqICh0aGlzLl9Qcm9maWxlX0V4dF9MYXJnICsgKHRoaXMuRG9ybWFudF9IRF9PTigpICogKDEgLSB0aGlzLkNpbnRyYWdlSEhfT04oKSkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMigpID4gdGhpcy5Eb3JtYW50X0hEX1gyKCkpICogKHRoaXMuRG9ybWFudF9IRF9ZMygpIC0gdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyAtICh0aGlzLkRvcm1hbnRfSERfWDMoKSAtIHRoaXMuRG9ybWFudF9MRF9YMigpKSAqIE1hdGgudGFuKCg5MCAtIHRoaXMuRG9ybWFudF9IRF9BbmdsZSgpKSAqIE1hdGguUEkgLyAxODApKSArICh0aGlzLkRvcm1hbnRfSEdfT04oKSAqICgxIC0gdGhpcy5DaW50cmFnZUhIX09OKCkpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDIoKSA8IHRoaXMuRG9ybWFudF9IR19YMygpKSAqICh0aGlzLkRvcm1hbnRfSEdfWTIoKSAtIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgLSAodGhpcy5Eb3JtYW50X0xEX1gyKCkgLSB0aGlzLkRvcm1hbnRfSEdfWDIoKSkgKiBNYXRoLnRhbigoOTAgLSB0aGlzLkRvcm1hbnRfSEdfQW5nbGUoKSkgKiBNYXRoLlBJIC8gMTgwKSkgKyB0aGlzLkNpbnRyYWdlSEhfT04oKSAqICgtdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyArIHRoaXMuRG9ybWFudF9IX1JheW9uWTEoKSAqICgxIC0gdGhpcy5Hb3RoaXFfT04oKSAqIDAuMTM0KSAtIHRoaXMuRG9ybWFudF9IX1JheW9uWTIoKSAqIE1hdGguc3FydCgxIC0gdGhpcy5Eb3JtYW50X0xEX09OKCkgKiB0aGlzLkNpbnRyYWdlSEhfT04oKSAqIE1hdGgucG93KHRoaXMuVG90YWxfTGFyZzIoKSAqICgxICsgdGhpcy5Eb3JtYW50X0hHX09OKCkgLSB0aGlzLkRvcm1hbnRfSERfT04oKSAtIHRoaXMuR290aGlxX09OKCkpIC0gdGhpcy5Eb3JtYW50X0xEX1gyKCkgKiAoMSAtIDIgKiB0aGlzLkRvcm1hbnRfSERfT04oKSksIDIpIC8gKHRoaXMuRG9ybWFudF9IX1JheW9uWDIoKSAqIHRoaXMuRG9ybWFudF9IX1JheW9uWDIoKSArIDEgLSB0aGlzLkNpbnRyYWdlSEhfT04oKSkpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfTERfWTMwKCk6bnVtYmVyIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX0ltcG9zdGVfT04gKiAoMSAtIHRoaXMuQ3JvaXNfTERfSW1wMF9PTigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDIoKSA8IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gwMCgpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDIoKSA+IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gxMCgpKSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuSW1wb3N0ZV9IYXV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9MRF9PTigpICogKHRoaXMuRG9ybWFudF9IRF9PTigpICogKDEgLSB0aGlzLkNpbnRyYWdlSEhfT04oKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xEX1gyKCkgPiB0aGlzLkRvcm1hbnRfSERfWDEoKSkgKiAodGhpcy5Eb3JtYW50X0hEX1kwKCkgLSAodGhpcy5Eb3JtYW50X0hEX1gwKCkgLSB0aGlzLkRvcm1hbnRfTERfWDIoKSkgKiBNYXRoLnRhbigoOTAgLSB0aGlzLkRvcm1hbnRfSERfQW5nbGUoKSkgKiBNYXRoLlBJIC8gMTgwKSkgKyB0aGlzLkRvcm1hbnRfSEdfT04oKSAqICgxIC0gdGhpcy5DaW50cmFnZUhIX09OKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMigpIDwgdGhpcy5Eb3JtYW50X0hHX1gwKCkpICogKHRoaXMuRG9ybWFudF9IR19ZMSgpIC0gKHRoaXMuRG9ybWFudF9MRF9YMigpIC0gdGhpcy5Eb3JtYW50X0hHX1gxKCkpICogTWF0aC50YW4oKDkwIC0gdGhpcy5Eb3JtYW50X0hHX0FuZ2xlKCkpICogTWF0aC5QSSAvIDE4MCkpICsgdGhpcy5DaW50cmFnZUhIX09OKCkgKiAodGhpcy5Eb3JtYW50X0hfUmF5b25ZMSgpICogKDEgLSB0aGlzLkdvdGhpcV9PTigpICogMC4xMzQgLSBNYXRoLnNxcnQoMSAtIHRoaXMuRG9ybWFudF9MRF9PTigpICogdGhpcy5DaW50cmFnZUhIX09OKCkgKiBNYXRoLnBvdyh0aGlzLlRvdGFsX0xhcmcyKCkgKiAoMSArIHRoaXMuRG9ybWFudF9IR19PTigpIC0gdGhpcy5Eb3JtYW50X0hEX09OKCkgLSB0aGlzLkdvdGhpcV9PTigpKSAtIHRoaXMuRG9ybWFudF9MRF9YMigpICogKDEgLSAyICogdGhpcy5Eb3JtYW50X0hEX09OKCkpLCAyKSAvICh0aGlzLkRvcm1hbnRfSF9SYXlvblgxKCkgKiB0aGlzLkRvcm1hbnRfSF9SYXlvblgxKCkgKyAxIC0gdGhpcy5DaW50cmFnZUhIX09OKCkpKSkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MRF9YMDMoKTpudW1iZXIge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fSW1wb3N0ZV9PTiAqICgxIC0gdGhpcy5Dcm9pc19MRF9JbXAwX09OKCkpICogKHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDAoKSA8IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gzKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMigpID4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDMoKSkgKyB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xEX1gwKCkgPCB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDIoKSA+IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gyKCkpKSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9JbXBvc3RlX1gzKCkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xEX1gwKCkgPCB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMygpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDIoKSA+IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gzKCkpICsgdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDIoKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDAoKSA8IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gyKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMigpID4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDIoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9MRF9PTigpICogKHRoaXMuRG9ybWFudF9MRF9YMCgpICsgdGhpcy5Eb3JtYW50X0hEX09OKCkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xEX1gwKCkgPCB0aGlzLkRvcm1hbnRfSERfWDIoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xEX1gyKCkgPiB0aGlzLkRvcm1hbnRfSERfWDIoKSkgKiAodGhpcy5Eb3JtYW50X0hEX1gyKCkgLSB0aGlzLkRvcm1hbnRfTERfWDAoKSkgKyB0aGlzLkRvcm1hbnRfSEdfT04oKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDAoKSA8IHRoaXMuRG9ybWFudF9IR19YMygpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDIoKSA+IHRoaXMuRG9ybWFudF9IR19YMygpKSAqICh0aGlzLkRvcm1hbnRfSEdfWDMoKSAtIHRoaXMuRG9ybWFudF9MRF9YMCgpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBEb3JtYW50X0xEX1kwMygpOm51bWJlciB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9JbXBvc3RlX09OICogKDEgLSB0aGlzLkNyb2lzX0xEX0ltcDBfT04oKSkgKiAodGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMCgpIDwgdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDMoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xEX1gyKCkgPiB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMygpKSArIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDAoKSA8IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gyKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMigpID4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDIoKSkpKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0xEX1kwKCkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xEX1gwKCkgPCB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMygpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDIoKSA+IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gzKCkpICsgdGhpcy5Eb3JtYW50X0xEX1kzKCkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xEX1gwKCkgPCB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDIoKSA+IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gyKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfTERfT04oKSAqICh0aGlzLkRvcm1hbnRfTERfWTAoKSArIHRoaXMuRG9ybWFudF9IRF9PTigpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMCgpIDwgdGhpcy5Eb3JtYW50X0hEX1gyKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMigpID4gdGhpcy5Eb3JtYW50X0hEX1gyKCkpICogKHRoaXMuRG9ybWFudF9IRF9ZMigpIC0gdGhpcy5Eb3JtYW50X0xEX1kwKCkpICsgdGhpcy5Eb3JtYW50X0hHX09OKCkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xEX1gwKCkgPCB0aGlzLkRvcm1hbnRfSEdfWDMoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xEX1gyKCkgPiB0aGlzLkRvcm1hbnRfSEdfWDMoKSkgKiAodGhpcy5Eb3JtYW50X0hHX1kzKCkgLSB0aGlzLkRvcm1hbnRfTERfWTAoKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0xEX1gwMzAoKTpudW1iZXIge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fSW1wb3N0ZV9PTiAqICgxIC0gdGhpcy5Dcm9pc19MRF9JbXAwX09OKCkpICogKHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDAoKSA8IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gwMCgpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDIoKSA+IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gwMCgpKSArIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDAoKSA8IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gxMCgpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDIoKSA+IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gxMCgpKSkpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMDAoKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDAoKSA8IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gwMCgpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDIoKSA+IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gwMCgpKSArIHRoaXMuRG9ybWFudF9JbXBvc3RlX1gxMCgpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMCgpIDwgdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDEwKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMigpID4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDEwKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfTERfT04oKSAqICh0aGlzLkRvcm1hbnRfTERfWDAoKSArIHRoaXMuRG9ybWFudF9IRF9PTigpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMCgpIDwgdGhpcy5Eb3JtYW50X0hEX1gxKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMigpID4gdGhpcy5Eb3JtYW50X0hEX1gxKCkpICogKHRoaXMuRG9ybWFudF9IRF9YMSgpIC0gdGhpcy5Eb3JtYW50X0xEX1gwKCkpICsgdGhpcy5Eb3JtYW50X0hHX09OKCkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xEX1gwKCkgPCB0aGlzLkRvcm1hbnRfSEdfWDAoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xEX1gyKCkgPiB0aGlzLkRvcm1hbnRfSEdfWDAoKSkgKiAodGhpcy5Eb3JtYW50X0hHX1gwKCkgLSB0aGlzLkRvcm1hbnRfTERfWDAoKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0xEX1kwMzAoKTpudW1iZXIge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fSW1wb3N0ZV9PTiAqICgxIC0gdGhpcy5Dcm9pc19MRF9JbXAwX09OKCkpICogKHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDAoKSA8IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gwMCgpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDIoKSA+IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gwMCgpKSArIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDAoKSA8IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gxMCgpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfTERfWDIoKSA+IHRoaXMuRG9ybWFudF9JbXBvc3RlX1gxMCgpKSkpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfTERfWTAwKCkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xEX1gwKCkgPCB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMDAoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xEX1gyKCkgPiB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMDAoKSkgKyB0aGlzLkRvcm1hbnRfTERfWTMwKCkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xEX1gwKCkgPCB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMTAoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0xEX1gyKCkgPiB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMTAoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9MRF9PTigpICogKHRoaXMuRG9ybWFudF9MRF9ZMDAoKSArIHRoaXMuRG9ybWFudF9IRF9PTigpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMCgpIDwgdGhpcy5Eb3JtYW50X0hEX1gxKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMigpID4gdGhpcy5Eb3JtYW50X0hEX1gxKCkpICogKHRoaXMuRG9ybWFudF9IRF9ZMSgpIC0gdGhpcy5Eb3JtYW50X0xEX1kwMCgpKSArIHRoaXMuRG9ybWFudF9IR19PTigpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMCgpIDwgdGhpcy5Eb3JtYW50X0hHX1gwKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9MRF9YMigpID4gdGhpcy5Eb3JtYW50X0hHX1gwKCkpICogKHRoaXMuRG9ybWFudF9IR19ZMCgpIC0gdGhpcy5Eb3JtYW50X0xEX1kwMCgpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfTERfRFkxKCk6bnVtYmVyIHtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfTERfWTEoKSAtIHRoaXMuRG9ybWFudF9MRF9ZMCgpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MRF9MWDEoKTpudW1iZXIge1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9MRF9YMTIoKSAtIHRoaXMuRG9ybWFudF9MRF9YMCgpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MRF9MWTEoKTpudW1iZXIge1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuRG9ybWFudF9MRF9ZMTIoKSAtIHRoaXMuRG9ybWFudF9MRF9ZMSgpKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfTERfTFgyKCk6bnVtYmVyIHtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfTERfWDIoKSAtIHRoaXMuRG9ybWFudF9MRF9YMTIoKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfTERfTFkyKCk6bnVtYmVyIHtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfTERfWTIoKSAtIHRoaXMuRG9ybWFudF9MRF9ZMTIoKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfTERfRFkyKCk6bnVtYmVyIHtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfTERfWTMoKSAtIHRoaXMuRG9ybWFudF9MRF9ZMigpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MRF9MWDMoKTpudW1iZXIge1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9MRF9YMDMoKSAtIHRoaXMuRG9ybWFudF9MRF9YMigpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MRF9MWTMoKTpudW1iZXIge1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9MRF9ZMDMoKSAtIHRoaXMuRG9ybWFudF9MRF9ZMygpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MRF9MWDQoKTpudW1iZXIge1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9MRF9YMCgpIC0gdGhpcy5Eb3JtYW50X0xEX1gwMygpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MRF9MWTQoKTpudW1iZXIge1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9MRF9ZMCgpIC0gdGhpcy5Eb3JtYW50X0xEX1kwMygpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9MRF9UcmFuc19YKCk6bnVtYmVyIHtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfTERfWDAoKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfTERfVHJhbnNfWSgpOm51bWJlciB7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0xEX1kwKClcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0xEX1JvdGF0ZSgpOm51bWJlciB7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gMFxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfSW1wb3N0ZV9PTigpOm51bWJlciB7XHJcbiAgICAgLy8gICBjb25zb2xlLmxvZyhcIkltcG9zdGUgT04gIFwiKyB0aGlzLl9JbXBvc3RlX09OICogdGhpcy5ib29sKHRoaXMuSW1wb3N0ZV9IYXV0KCkgPiAodGhpcy5fSW1wb3N0ZV9taW4gKiB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnKSkpO1xyXG4gICAgICAgIHJldHVybiAgdGhpcy5fSW1wb3N0ZV9PTiAqIHRoaXMuYm9vbCh0aGlzLkltcG9zdGVfSGF1dCgpID4gKHRoaXMuX0ltcG9zdGVfbWluICogdGhpcy5fUHJvZmlsZV9FeHRfTGFyZykpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9JbXBvc3RlX1gwKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfT04oKSoodGhpcy5Ub3RhbF9MYXJnX1Byb2ZpbGUoKSArIHRoaXMuRG9ybWFudF9IRF9PTigpKigxLXRoaXMuQ2ludHJhZ2VISF9PTigpKSp0aGlzLmJvb2wodGhpcy5JbXBvc3RlX0hhdXQoKTx0aGlzLkRvcm1hbnRfSERfWTMoKSkqKHRoaXMuRG9ybWFudF9IRF9YMigpLXRoaXMuVG90YWxfTGFyZ19Qcm9maWxlKCkrKHRoaXMuSW1wb3N0ZV9IYXV0KCktdGhpcy5Eb3JtYW50X0hEX1kyKCkpKk1hdGgudGFuKHRoaXMuRG9ybWFudF9IRF9BbmdsZSgpKk1hdGguUEkvMTgwKSkgKyAodGhpcy5DaW50cmFnZUhIX09OKCktdGhpcy5fQ2VyY2xlX1F1YXJ0R19PTi10aGlzLl9DZXJjbGVIX1F1YXJ0R19PTi10aGlzLl9FbGxpcHNlX1F1YXJ0R19PTi10aGlzLl9FbGxpcHNlSF9RdWFydEdfT04pKnRoaXMuYm9vbCh0aGlzLkltcG9zdGVfSGF1dCgpPCh0aGlzLkRvcm1hbnRfSERfWTMoKSt0aGlzLkRvcm1hbnRfSE1fWTMoKSkpKih0aGlzLl9Qcm9maWxlX0V4dF9MYXJnLXRoaXMuVG90YWxfTGFyZzIoKSooMSt0aGlzLl9DZXJjbGVfUXVhcnREX09OK3RoaXMuX0NlcmNsZUhfUXVhcnREX09OK3RoaXMuR290aGlxX09OKCkrdGhpcy5fRWxsaXBzZV9RdWFydERfT04rdGhpcy5fRWxsaXBzZUhfUXVhcnREX09OKSt0aGlzLkRvcm1hbnRfSF9SYXlvblgyKCkqTWF0aC5zcXJ0KDEtdGhpcy5DaW50cmFnZUhIX09OKCkqTWF0aC5wb3codGhpcy5Eb3JtYW50X0hfUmF5b25ZMSgpKigxLTAuMTM0KnRoaXMuR290aGlxX09OKCkpLXRoaXMuSW1wb3N0ZV9IYXV0KCksIDIpLyh0aGlzLkRvcm1hbnRfSF9SYXlvblkyKCkqdGhpcy5Eb3JtYW50X0hfUmF5b25ZMigpKzEtdGhpcy5DaW50cmFnZUhIX09OKCkpKSkpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9JbXBvc3RlX1gwMCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9JbXBvc3RlX09OKCkgKiAodGhpcy5Ub3RhbF9MYXJnKCkgKyB0aGlzLkRvcm1hbnRfSERfT04oKSAqICgxIC0gdGhpcy5DaW50cmFnZUhIX09OKCkpICogdGhpcy5ib29sKHRoaXMuSW1wb3N0ZV9IYXV0KCkgPCB0aGlzLkRvcm1hbnRfSERfWTAoKSkgKiAodGhpcy5Eb3JtYW50X0hEX1gxKCkgLSB0aGlzLlRvdGFsX0xhcmcoKSArICh0aGlzLkltcG9zdGVfSGF1dCgpIC0gdGhpcy5Eb3JtYW50X0hEX1kxKCkpICogTWF0aC50YW4odGhpcy5Eb3JtYW50X0hEX0FuZ2xlKCkgKiBNYXRoLlBJIC8gMTgwKSkgKyAodGhpcy5DaW50cmFnZUhIX09OKCkgLSB0aGlzLl9DZXJjbGVfUXVhcnRHX09OIC0gdGhpcy5fQ2VyY2xlSF9RdWFydEdfT04gLSB0aGlzLl9FbGxpcHNlX1F1YXJ0R19PTiAtIHRoaXMuX0VsbGlwc2VIX1F1YXJ0R19PTikgKiB0aGlzLmJvb2wodGhpcy5JbXBvc3RlX0hhdXQoKSA8ICh0aGlzLkRvcm1hbnRfSERfWTAoKSArIHRoaXMuRG9ybWFudF9ITV9ZMCgpKSkgKiAoLXRoaXMuVG90YWxfTGFyZzIoKSAqICgxICsgdGhpcy5fQ2VyY2xlX1F1YXJ0RF9PTiArIHRoaXMuX0NlcmNsZUhfUXVhcnREX09OICsgdGhpcy5Hb3RoaXFfT04oKSArIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OICsgdGhpcy5fRWxsaXBzZUhfUXVhcnREX09OKSArIHRoaXMuRG9ybWFudF9IX1JheW9uWDEoKSAqIE1hdGguc3FydCgxIC0gdGhpcy5DaW50cmFnZUhIX09OKCkgKiBNYXRoLnBvdyh0aGlzLkRvcm1hbnRfSF9SYXlvblkxKCkgKiAoMSAtIDAuMTM0ICogdGhpcy5Hb3RoaXFfT04oKSkgLSB0aGlzLkltcG9zdGVfSGF1dCgpLCAyKSAvICh0aGlzLkRvcm1hbnRfSF9SYXlvblkxKCkgKiB0aGlzLkRvcm1hbnRfSF9SYXlvblkxKCkgKyAxIC0gdGhpcy5DaW50cmFnZUhIX09OKCkpKSkpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9JbXBvc3RlX1kwKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfT04oKSAqIHRoaXMuSW1wb3N0ZV9IYXV0KClcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0ltcG9zdGVfWDEoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9PTigpICogKHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgKyB0aGlzLkRvcm1hbnRfSEdfT04oKSAqICgxIC0gdGhpcy5DaW50cmFnZUhIX09OKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9JbXBvc3RlX1kwKCkgPCB0aGlzLkRvcm1hbnRfSEdfWTIoKSkgKiAodGhpcy5Eb3JtYW50X0hHX1gzKCkgLSB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnIC0gKHRoaXMuRG9ybWFudF9JbXBvc3RlX1kwKCkgLSB0aGlzLkRvcm1hbnRfSEdfWTMoKSkgKiBNYXRoLnRhbigodGhpcy5Eb3JtYW50X0hHX0FuZ2xlKCkpICogTWF0aC5QSSAvIDE4MCkgKSArICh0aGlzLkNpbnRyYWdlSEhfT04oKSAtIHRoaXMuX0NlcmNsZV9RdWFydERfT04gLSB0aGlzLl9DZXJjbGVIX1F1YXJ0RF9PTiAtIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OIC0gdGhpcy5fRWxsaXBzZUhfUXVhcnREX09OKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMCgpIDwgKHRoaXMuRG9ybWFudF9ITV9ZMigpICsgdGhpcy5Eb3JtYW50X0hHX1kyKCkpKSAqICh0aGlzLlRvdGFsX0xhcmcyKCkgKiAoMSArIHRoaXMuX0NlcmNsZV9RdWFydEdfT04gKyB0aGlzLl9DZXJjbGVIX1F1YXJ0R19PTiArIHRoaXMuR290aGlxX09OKCkgKyB0aGlzLl9FbGxpcHNlX1F1YXJ0R19PTiArIHRoaXMuX0VsbGlwc2VIX1F1YXJ0R19PTikgLSB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnIC0gdGhpcy5Eb3JtYW50X0hfUmF5b25YMigpICogTWF0aC5zcXJ0KDEgLSB0aGlzLkNpbnRyYWdlSEhfT04oKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMCgpIDwgKHRoaXMuRG9ybWFudF9ITV9ZMigpICsgdGhpcy5Eb3JtYW50X0hHX1kyKCkpKSAqIE1hdGgucG93KHRoaXMuRG9ybWFudF9JbXBvc3RlX09OKCkgKiB0aGlzLkRvcm1hbnRfSF9SYXlvblkxKCkgKiAoMSAtIDAuMTM0ICogdGhpcy5Hb3RoaXFfT04oKSkgLSB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMCgpLCAyKSAvICh0aGlzLkRvcm1hbnRfSF9SYXlvblkyKCkgKiB0aGlzLkRvcm1hbnRfSF9SYXlvblkyKCkgKyAxIC0gdGhpcy5DaW50cmFnZUhIX09OKCkpKSkgKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfSW1wb3N0ZV9YMTAoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9PTigpICogKHRoaXMuRG9ybWFudF9IR19PTigpICogKDEgLSB0aGlzLkNpbnRyYWdlSEhfT04oKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0ltcG9zdGVfWTAoKSA8IHRoaXMuRG9ybWFudF9IR19ZMSgpKSAqICh0aGlzLkRvcm1hbnRfSEdfWDAoKSAtICh0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMCgpIC0gdGhpcy5Eb3JtYW50X0hHX1kwKCkpICogTWF0aC50YW4oKHRoaXMuRG9ybWFudF9IR19BbmdsZSgpKSAqIE1hdGguUEkgLyAxODApICkgKyAodGhpcy5DaW50cmFnZUhIX09OKCkgLSB0aGlzLl9DZXJjbGVfUXVhcnREX09OIC0gdGhpcy5fQ2VyY2xlSF9RdWFydERfT04gLSB0aGlzLl9FbGxpcHNlX1F1YXJ0RF9PTiAtIHRoaXMuX0VsbGlwc2VIX1F1YXJ0RF9PTikgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0ltcG9zdGVfWTAoKSA8ICh0aGlzLkRvcm1hbnRfSE1fWTEoKSArIHRoaXMuRG9ybWFudF9IR19ZMSgpKSkgKiAodGhpcy5Ub3RhbF9MYXJnMigpICogKDEgKyB0aGlzLl9DZXJjbGVfUXVhcnRHX09OICsgdGhpcy5fQ2VyY2xlSF9RdWFydEdfT04gKyB0aGlzLkdvdGhpcV9PTigpICsgdGhpcy5fRWxsaXBzZV9RdWFydEdfT04gKyB0aGlzLl9FbGxpcHNlSF9RdWFydEdfT04pIC0gdGhpcy5Eb3JtYW50X0hfUmF5b25YMSgpICogTWF0aC5zcXJ0KDEgLSB0aGlzLkNpbnRyYWdlSEhfT04oKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMCgpIDwgKHRoaXMuRG9ybWFudF9ITV9ZMSgpICsgdGhpcy5Eb3JtYW50X0hHX1kxKCkpKSAqIE1hdGgucG93KHRoaXMuRG9ybWFudF9IX1JheW9uWTEoKSAqICgxIC0gMC4xMzQgKiB0aGlzLkdvdGhpcV9PTigpKSAtIHRoaXMuRG9ybWFudF9JbXBvc3RlX1kwKCksIDIpIC8gKHRoaXMuRG9ybWFudF9IX1JheW9uWTEoKSAqIHRoaXMuRG9ybWFudF9IX1JheW9uWTEoKSArIDEgLSB0aGlzLkNpbnRyYWdlSEhfT04oKSkpKSApXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9JbXBvc3RlX1gyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfT04oKSAqICh0aGlzLl9Qcm9maWxlX0V4dF9MYXJnICsgdGhpcy5Eb3JtYW50X0hHX09OKCkgKiAoMSAtIHRoaXMuQ2ludHJhZ2VISF9PTigpKSAqIHRoaXMuYm9vbCgodGhpcy5Eb3JtYW50X0ltcG9zdGVfWTAoKSArIHRoaXMuX1Byb2ZpbGVfSW50X0xhcmcpIDwgKHRoaXMuRG9ybWFudF9IR19ZMigpKSkgKiAodGhpcy5Eb3JtYW50X0hHX1gzKCkgLSB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnIC0gKCh0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMCgpICsgdGhpcy5fUHJvZmlsZV9JbnRfTGFyZykgLSB0aGlzLkRvcm1hbnRfSEdfWTMoKSkgKiBNYXRoLnRhbigodGhpcy5Eb3JtYW50X0hHX0FuZ2xlKCkpICogTWF0aC5QSSAvIDE4MCkpICsgKHRoaXMuQ2ludHJhZ2VISF9PTigpIC0gdGhpcy5fQ2VyY2xlX1F1YXJ0RF9PTiAtIHRoaXMuX0NlcmNsZUhfUXVhcnREX09OIC0gdGhpcy5fRWxsaXBzZV9RdWFydERfT04gLSB0aGlzLl9FbGxpcHNlSF9RdWFydERfT04pICogdGhpcy5ib29sKCh0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMCgpICsgdGhpcy5fUHJvZmlsZV9JbnRfTGFyZykgPCAodGhpcy5Eb3JtYW50X0hNX1kyKCkgKyB0aGlzLkRvcm1hbnRfSEdfWTIoKSkpICogKHRoaXMuVG90YWxfTGFyZzIoKSAqICgxICsgdGhpcy5fQ2VyY2xlX1F1YXJ0R19PTiArIHRoaXMuX0NlcmNsZUhfUXVhcnRHX09OICsgdGhpcy5Hb3RoaXFfT04oKSArIHRoaXMuX0VsbGlwc2VfUXVhcnRHX09OICsgdGhpcy5fRWxsaXBzZUhfUXVhcnRHX09OKSAtIHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgLSB0aGlzLkRvcm1hbnRfSF9SYXlvblgyKCkgKiBNYXRoLnNxcnQoMSAtIHRoaXMuQ2ludHJhZ2VISF9PTigpICogdGhpcy5ib29sKCh0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMCgpICsgdGhpcy5fUHJvZmlsZV9JbnRfTGFyZykgPCAodGhpcy5Eb3JtYW50X0hNX1kyKCkgKyB0aGlzLkRvcm1hbnRfSEdfWTIoKSkpICogTWF0aC5wb3codGhpcy5Eb3JtYW50X0hfUmF5b25ZMSgpICogKDEgLSAwLjEzNCAqIHRoaXMuR290aGlxX09OKCkpIC0gKHRoaXMuRG9ybWFudF9JbXBvc3RlX1kwKCkgKyB0aGlzLl9Qcm9maWxlX0ludF9MYXJnKSwgMikgLyAodGhpcy5Eb3JtYW50X0hfUmF5b25ZMigpICogdGhpcy5Eb3JtYW50X0hfUmF5b25ZMigpICsgMSAtIHRoaXMuQ2ludHJhZ2VISF9PTigpKSkpKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfSW1wb3N0ZV9YMjAoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9PTigpICogKHRoaXMuRG9ybWFudF9IR19PTigpICogKDEgLSB0aGlzLkNpbnRyYWdlSEhfT04oKSkgKiB0aGlzLmJvb2woKHRoaXMuRG9ybWFudF9JbXBvc3RlX1kwKCkgKyB0aGlzLl9Qcm9maWxlX0ludF9MYXJnKSA8ICh0aGlzLkRvcm1hbnRfSEdfWTEoKSkpICogKHRoaXMuRG9ybWFudF9IR19YMCgpIC0gKCh0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMCgpICsgdGhpcy5fUHJvZmlsZV9JbnRfTGFyZykgLSB0aGlzLkRvcm1hbnRfSEdfWTAoKSkgKiBNYXRoLnRhbigodGhpcy5Eb3JtYW50X0hHX0FuZ2xlKCkpICogTWF0aC5QSSAvIDE4MCkpICsgKHRoaXMuQ2ludHJhZ2VISF9PTigpIC0gdGhpcy5fQ2VyY2xlX1F1YXJ0RF9PTiAtIHRoaXMuX0NlcmNsZUhfUXVhcnREX09OIC0gdGhpcy5fRWxsaXBzZV9RdWFydERfT04gLSB0aGlzLl9FbGxpcHNlSF9RdWFydERfT04pICogdGhpcy5ib29sKCh0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMCgpICsgdGhpcy5fUHJvZmlsZV9JbnRfTGFyZykgPCAodGhpcy5Eb3JtYW50X0hNX1kxKCkgKyB0aGlzLkRvcm1hbnRfSEdfWTEoKSkpICogKHRoaXMuVG90YWxfTGFyZzIoKSAqICgxICsgdGhpcy5fQ2VyY2xlX1F1YXJ0R19PTiArIHRoaXMuX0NlcmNsZUhfUXVhcnRHX09OICsgdGhpcy5Hb3RoaXFfT04oKSArIHRoaXMuX0VsbGlwc2VfUXVhcnRHX09OICsgdGhpcy5fRWxsaXBzZUhfUXVhcnRHX09OKSAtIHRoaXMuRG9ybWFudF9IX1JheW9uWDEoKSAqIE1hdGguc3FydCgxIC0gdGhpcy5DaW50cmFnZUhIX09OKCkgKiB0aGlzLmJvb2woKHRoaXMuRG9ybWFudF9JbXBvc3RlX1kwKCkgKyB0aGlzLl9Qcm9maWxlX0ludF9MYXJnKSA8ICh0aGlzLkRvcm1hbnRfSE1fWTEoKSArIHRoaXMuRG9ybWFudF9IR19ZMSgpKSkgKiBNYXRoLnBvdyh0aGlzLkRvcm1hbnRfSF9SYXlvblkxKCkgKiAoMSAtIDAuMTM0ICogdGhpcy5Hb3RoaXFfT04oKSkgLSAodGhpcy5Eb3JtYW50X0ltcG9zdGVfWTAoKSArIHRoaXMuX1Byb2ZpbGVfSW50X0xhcmcpLCAyKSAvICh0aGlzLkRvcm1hbnRfSF9SYXlvblkxKCkgKiB0aGlzLkRvcm1hbnRfSF9SYXlvblkxKCkgKyAxIC0gdGhpcy5DaW50cmFnZUhIX09OKCkpKSkpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9JbXBvc3RlX1kyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfT04oKSAqICh0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMCgpICsgdGhpcy5fUHJvZmlsZV9JbnRfTGFyZylcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0ltcG9zdGVfWDEyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfT04oKSAqICh0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMigpICsgKHRoaXMuRG9ybWFudF9IR19PTigpICsgdGhpcy5DaW50cmFnZUhIX09OKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9JbXBvc3RlX1kwKCkgPCAodGhpcy5Eb3JtYW50X0hHX1kyKCkgKyB0aGlzLkNpbnRyYWdlSEhfT04oKSAqIHRoaXMuRG9ybWFudF9IR19ZMigpKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0ltcG9zdGVfWTIoKSA+ICh0aGlzLkRvcm1hbnRfSEdfWTIoKSArIHRoaXMuQ2ludHJhZ2VISF9PTigpICogdGhpcy5Eb3JtYW50X0hHX1kyKCkpKSAqICh0aGlzLkRvcm1hbnRfSEdfWDIoKSArIHRoaXMuQ2ludHJhZ2VISF9PTigpICogdGhpcy5Eb3JtYW50X0hNX1gyKCkgLSB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMigpKSlcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0ltcG9zdGVfWDEyMCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9JbXBvc3RlX09OKCkgKiAodGhpcy5Eb3JtYW50X0ltcG9zdGVfWDIwKCkgKyAodGhpcy5Eb3JtYW50X0hHX09OKCkgKyB0aGlzLkNpbnRyYWdlSEhfT04oKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0ltcG9zdGVfWTAoKSA8ICh0aGlzLkRvcm1hbnRfSEdfWTEoKSArIHRoaXMuQ2ludHJhZ2VISF9PTigpICogdGhpcy5Eb3JtYW50X0hNX1kxKCkpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMigpID4gKHRoaXMuRG9ybWFudF9IR19ZMSgpICsgdGhpcy5DaW50cmFnZUhIX09OKCkgKiB0aGlzLkRvcm1hbnRfSE1fWTEoKSkpICogKHRoaXMuRG9ybWFudF9IR19YMSgpICsgdGhpcy5DaW50cmFnZUhIX09OKCkgKiB0aGlzLkRvcm1hbnRfSE1fWDEoKSAtIHRoaXMuRG9ybWFudF9JbXBvc3RlX1gyMCgpKSlcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0ltcG9zdGVfWTEyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfT04oKSAqICh0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMigpICsgKHRoaXMuRG9ybWFudF9IR19PTigpICsgdGhpcy5DaW50cmFnZUhIX09OKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9JbXBvc3RlX1kwKCkgPCAodGhpcy5Eb3JtYW50X0hHX1kyKCkgKyB0aGlzLkNpbnRyYWdlSEhfT04oKSAqIHRoaXMuRG9ybWFudF9ITV9ZMigpKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0ltcG9zdGVfWTIoKSA+ICh0aGlzLkRvcm1hbnRfSEdfWTIoKSArIHRoaXMuQ2ludHJhZ2VISF9PTigpICogdGhpcy5Eb3JtYW50X0hNX1kyKCkpKSAqICh0aGlzLkRvcm1hbnRfSEdfWTIoKSArIHRoaXMuQ2ludHJhZ2VISF9PTigpICogdGhpcy5Eb3JtYW50X0hNX1kyKCkgLSB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMigpKSApXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9JbXBvc3RlX1kxMjAoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9PTigpICogKHRoaXMuRG9ybWFudF9JbXBvc3RlX1kyKCkgKyAodGhpcy5Eb3JtYW50X0hHX09OKCkgKyB0aGlzLkNpbnRyYWdlSEhfT04oKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0ltcG9zdGVfWTAoKSA8ICh0aGlzLkRvcm1hbnRfSEdfWTEoKSArIHRoaXMuQ2ludHJhZ2VISF9PTigpICogdGhpcy5Eb3JtYW50X0hNX1kxKCkpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMigpID4gKHRoaXMuRG9ybWFudF9IR19ZMSgpICsgdGhpcy5DaW50cmFnZUhIX09OKCkgKiB0aGlzLkRvcm1hbnRfSE1fWTEoKSkpICogKHRoaXMuRG9ybWFudF9IR19ZMSgpICsgdGhpcy5DaW50cmFnZUhIX09OKCkgKiB0aGlzLkRvcm1hbnRfSE1fWTEoKSAtIHRoaXMuRG9ybWFudF9JbXBvc3RlX1kyKCkpIClcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0ltcG9zdGVfWDMoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9PTigpICogKCB0aGlzLlRvdGFsX0xhcmdfUHJvZmlsZSgpICsgdGhpcy5Eb3JtYW50X0hEX09OKCkgKiAoMSAtIHRoaXMuQ2ludHJhZ2VISF9PTigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMigpIDwgdGhpcy5Eb3JtYW50X0hEX1kzKCkpICogKHRoaXMuRG9ybWFudF9IRF9YMigpIC0gdGhpcy5Ub3RhbF9MYXJnX1Byb2ZpbGUoKSArICh0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMigpIC0gdGhpcy5Eb3JtYW50X0hEX1kyKCkpICogTWF0aC50YW4odGhpcy5Eb3JtYW50X0hEX0FuZ2xlKCkgKiBNYXRoLlBJIC8gMTgwKSkgKyAodGhpcy5DaW50cmFnZUhIX09OKCkgLSB0aGlzLl9DZXJjbGVfUXVhcnRHX09OIC0gdGhpcy5fQ2VyY2xlSF9RdWFydEdfT04gLSB0aGlzLl9FbGxpcHNlX1F1YXJ0R19PTiAtIHRoaXMuX0VsbGlwc2VIX1F1YXJ0R19PTikgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0ltcG9zdGVfWTIoKSA8ICh0aGlzLkRvcm1hbnRfSERfWTMoKSArIHRoaXMuRG9ybWFudF9ITV9ZMygpKSkgKiAodGhpcy5fUHJvZmlsZV9FeHRfTGFyZyAtIHRoaXMuVG90YWxfTGFyZzIoKSAqICgxICsgdGhpcy5fQ2VyY2xlX1F1YXJ0RF9PTiArIHRoaXMuX0NlcmNsZUhfUXVhcnREX09OICsgdGhpcy5Hb3RoaXFfT04oKSArIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OICsgdGhpcy5fRWxsaXBzZUhfUXVhcnREX09OKSArIHRoaXMuRG9ybWFudF9IX1JheW9uWDIoKSAqIE1hdGguc3FydCgxIC0gdGhpcy5DaW50cmFnZUhIX09OKCkgKiBNYXRoLnBvdyh0aGlzLkRvcm1hbnRfSW1wb3N0ZV9PTigpICogdGhpcy5Eb3JtYW50X0hfUmF5b25ZMSgpICogKDEgLSAwLjEzNCAqIHRoaXMuR290aGlxX09OKCkpIC0gdGhpcy5Eb3JtYW50X0ltcG9zdGVfWTIoKSwgMikgLyAodGhpcy5Eb3JtYW50X0hfUmF5b25ZMigpICogdGhpcy5Eb3JtYW50X0hfUmF5b25ZMigpICsgMSAtIHRoaXMuQ2ludHJhZ2VISF9PTigpKSkpIClcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0ltcG9zdGVfWDMwKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfT04oKSAqICggdGhpcy5Ub3RhbF9MYXJnKCkgKyB0aGlzLkRvcm1hbnRfSERfT04oKSAqICgxIC0gdGhpcy5DaW50cmFnZUhIX09OKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9JbXBvc3RlX1kyKCkgPCB0aGlzLkRvcm1hbnRfSERfWTAoKSkgKiAodGhpcy5Eb3JtYW50X0hEX1gxKCkgLSB0aGlzLlRvdGFsX0xhcmcoKSArICh0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMigpIC0gdGhpcy5Eb3JtYW50X0hEX1kxKCkpICogTWF0aC50YW4odGhpcy5Eb3JtYW50X0hEX0FuZ2xlKCkgKiBNYXRoLlBJIC8gMTgwKSkgKyAodGhpcy5DaW50cmFnZUhIX09OKCkgLSB0aGlzLl9DZXJjbGVfUXVhcnRHX09OIC0gdGhpcy5fQ2VyY2xlSF9RdWFydEdfT04gLSB0aGlzLl9FbGxpcHNlX1F1YXJ0R19PTiAtIHRoaXMuX0VsbGlwc2VIX1F1YXJ0R19PTikgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0ltcG9zdGVfWTIoKSA8ICh0aGlzLkRvcm1hbnRfSERfWTAoKSArIHRoaXMuRG9ybWFudF9ITV9ZMCgpKSkgKiAoLXRoaXMuVG90YWxfTGFyZzIoKSAqICgxICsgdGhpcy5fQ2VyY2xlX1F1YXJ0RF9PTiArIHRoaXMuX0NlcmNsZUhfUXVhcnREX09OICsgdGhpcy5Hb3RoaXFfT04oKSArIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OICsgdGhpcy5fRWxsaXBzZUhfUXVhcnREX09OKSArIHRoaXMuRG9ybWFudF9IX1JheW9uWDEoKSAqIE1hdGguc3FydCgxIC0gdGhpcy5DaW50cmFnZUhIX09OKCkgKiBNYXRoLnBvdyh0aGlzLkRvcm1hbnRfSF9SYXlvblkxKCkgKiAoMSAtIDAuMTM0ICogdGhpcy5Hb3RoaXFfT04oKSkgLSB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMigpLCAyKSAvICh0aGlzLkRvcm1hbnRfSF9SYXlvblkxKCkgKiB0aGlzLkRvcm1hbnRfSF9SYXlvblkxKCkgKyAxIC0gdGhpcy5DaW50cmFnZUhIX09OKCkpKSkgKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfSW1wb3N0ZV9YMDMoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9PTigpICogKHRoaXMuRG9ybWFudF9JbXBvc3RlX1gzKCkgKyAodGhpcy5Eb3JtYW50X0hEX09OKCkgKyB0aGlzLkNpbnRyYWdlSEhfT04oKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0ltcG9zdGVfWTAoKSA8ICh0aGlzLkRvcm1hbnRfSERfWTMoKSArIHRoaXMuQ2ludHJhZ2VISF9PTigpICogdGhpcy5Eb3JtYW50X0hNX1kzKCkpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMigpID4gKHRoaXMuRG9ybWFudF9IRF9ZMygpICsgdGhpcy5DaW50cmFnZUhIX09OKCkgKiB0aGlzLkRvcm1hbnRfSE1fWTMoKSkpICogKHRoaXMuRG9ybWFudF9IRF9YMygpICsgdGhpcy5DaW50cmFnZUhIX09OKCkgKiB0aGlzLkRvcm1hbnRfSE1fWDMoKSAtIHRoaXMuRG9ybWFudF9JbXBvc3RlX1gzKCkpKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfSW1wb3N0ZV9YMDMwKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfT04oKSAqICh0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMzAoKSArICh0aGlzLkRvcm1hbnRfSERfT04oKSArIHRoaXMuQ2ludHJhZ2VISF9PTigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMCgpIDwgKHRoaXMuRG9ybWFudF9IRF9ZMCgpICsgdGhpcy5DaW50cmFnZUhIX09OKCkgKiB0aGlzLkRvcm1hbnRfSE1fWTAoKSkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9JbXBvc3RlX1kyKCkgPiAodGhpcy5Eb3JtYW50X0hEX1kwKCkgKyB0aGlzLkNpbnRyYWdlSEhfT04oKSAqIHRoaXMuRG9ybWFudF9ITV9ZMCgpKSkgKiAodGhpcy5Eb3JtYW50X0hEX1gwKCkgKyB0aGlzLkNpbnRyYWdlSEhfT04oKSAqIHRoaXMuRG9ybWFudF9ITV9YMCgpIC0gdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDMwKCkpKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfSW1wb3N0ZV9ZMDMoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9PTigpICogKHRoaXMuRG9ybWFudF9JbXBvc3RlX1kyKCkgKyAodGhpcy5Eb3JtYW50X0hEX09OKCkgKyB0aGlzLkNpbnRyYWdlSEhfT04oKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0ltcG9zdGVfWTAoKSA8ICh0aGlzLkRvcm1hbnRfSERfWTMoKSArIHRoaXMuQ2ludHJhZ2VISF9PTigpICogdGhpcy5Eb3JtYW50X0hNX1kzKCkpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMigpID4gKHRoaXMuRG9ybWFudF9IRF9ZMygpICsgdGhpcy5DaW50cmFnZUhIX09OKCkgKiB0aGlzLkRvcm1hbnRfSE1fWTMoKSkpICogKHRoaXMuRG9ybWFudF9IRF9ZMygpICsgdGhpcy5DaW50cmFnZUhIX09OKCkgKiB0aGlzLkRvcm1hbnRfSE1fWTMoKSAtIHRoaXMuRG9ybWFudF9JbXBvc3RlX1kyKCkpKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfSW1wb3N0ZV9ZMDMwKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfT04oKSAqICh0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMigpICsgKHRoaXMuRG9ybWFudF9IRF9PTigpICsgdGhpcy5DaW50cmFnZUhIX09OKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9JbXBvc3RlX1kwKCkgPCAodGhpcy5Eb3JtYW50X0hEX1kwKCkgKyB0aGlzLkNpbnRyYWdlSEhfT04oKSAqIHRoaXMuRG9ybWFudF9ITV9ZMCgpKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0ltcG9zdGVfWTIoKSA+ICh0aGlzLkRvcm1hbnRfSERfWTAoKSArIHRoaXMuQ2ludHJhZ2VISF9PTigpICogdGhpcy5Eb3JtYW50X0hNX1kwKCkpKSAqICh0aGlzLkRvcm1hbnRfSERfWTAoKSArIHRoaXMuQ2ludHJhZ2VISF9PTigpICogdGhpcy5Eb3JtYW50X0hNX1kwKCkgLSB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMigpKSlcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0ltcG9zdGVfRFkxKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDAoKSAtIHRoaXMuRG9ybWFudF9JbXBvc3RlX1gxKClcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0ltcG9zdGVfTFgxKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfWTEyKCkgLSB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMCgpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9JbXBvc3RlX0xZMSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9JbXBvc3RlX1gxKCkgLSB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMTIoKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfSW1wb3N0ZV9MWDIoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9ZMigpIC0gdGhpcy5Eb3JtYW50X0ltcG9zdGVfWTEyKClcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0ltcG9zdGVfTFkyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDIoKSAtIHRoaXMuRG9ybWFudF9JbXBvc3RlX1gxMigpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9JbXBvc3RlX0RZMigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9JbXBvc3RlX1gyKCkgLSB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMygpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9JbXBvc3RlX0xYMygpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9JbXBvc3RlX1kwMygpIC0gdGhpcy5Eb3JtYW50X0ltcG9zdGVfWTIoKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfSW1wb3N0ZV9MWTMoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfSW1wb3N0ZV9YMDMoKSAtIHRoaXMuRG9ybWFudF9JbXBvc3RlX1gzKClcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0ltcG9zdGVfTFg0KCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfWTAoKSAtIHRoaXMuRG9ybWFudF9JbXBvc3RlX1kwMygpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9JbXBvc3RlX0xZNCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9JbXBvc3RlX1gwMygpIC0gdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDAoKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfSW1wb3N0ZV9UcmFuc19YKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfWDAoKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfSW1wb3N0ZV9UcmFuc19ZKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0ltcG9zdGVfWTAoKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfSW1wb3N0ZV9Sb3RhdGUoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiA5MCAqIHRoaXMuRG9ybWFudF9JbXBvc3RlX09OKClcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0FsbGVnZV9PTigpOm51bWJlciB7XHJcbiAgICAgLy8gICBjb25zb2xlLmxvZyggXCJBbGxlZ2UgT04gICBcIit0aGlzLl9BbGxlZ2VfT04gKiB0aGlzLmJvb2wodGhpcy5BbGxlZ2VfSGF1dCgpID4gKHRoaXMuX0FsbGVnZV9taW4gKiB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnKSkpO1xyXG4gICAgICAgIHJldHVybiAgdGhpcy5fQWxsZWdlX09OICogdGhpcy5ib29sKHRoaXMuQWxsZWdlX0hhdXQoKSA+ICh0aGlzLl9BbGxlZ2VfbWluICogdGhpcy5fUHJvZmlsZV9FeHRfTGFyZykpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9BbGxlZ2VfWDAoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfQWxsZWdlX09OKCkgKiAodGhpcy5fUHJvZmlsZV9FeHRfTGFyZyArIHRoaXMuRG9ybWFudF9CR19PTigpICogdGhpcy5ib29sKCh0aGlzLlRvdGFsX0hhdXQoKSAtIHRoaXMuQWxsZWdlX0hhdXQoKSkgPiB0aGlzLkRvcm1hbnRfQkdfWTMoKSkgKiAoIHRoaXMuRG9ybWFudF9CR19YMigpIC0gdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyAtICh0aGlzLkRvcm1hbnRfQkdfWTIoKSAtIHRoaXMuVG90YWxfSGF1dCgpICsgdGhpcy5BbGxlZ2VfSGF1dCgpKSAqIE1hdGgudGFuKCh0aGlzLkRvcm1hbnRfQkdfQW5nbGUoKSkgKiBNYXRoLlBJIC8gMTgwKSApICsgKHRoaXMuX0NoYW5mcmVpbkdfT04gKyB0aGlzLl9UcmlhbmdsZUdfT04gKyB0aGlzLl9UcmlhbmdsZUdfSF9PTiArIHRoaXMuX0RlbWlPY3RvZ29uZV9PTiArIHRoaXMuX0RlbWlIZXhhZ19PTiArIHRoaXMuX1RyaWFuZ2xlX09OKSAqIHRoaXMuYm9vbCgodGhpcy5Ub3RhbF9IYXV0KCkgLSB0aGlzLkFsbGVnZV9IYXV0KCkpIDwgdGhpcy5Eb3JtYW50X0hHX1kyKCkpICogKHRoaXMuRG9ybWFudF9IR19YMigpIC0gdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyArICh0aGlzLkRvcm1hbnRfSEdfWTIoKSAtIHRoaXMuRG9ybWFudF9BbGxlZ2VfWTAoKSkgKiBNYXRoLnRhbigodGhpcy5Eb3JtYW50X0hHX0FuZ2xlKCkpICogTWF0aC5QSSAvIDE4MCkgKSArIHRoaXMuQ2ludHJhZ2VCX09OKCkgKiB0aGlzLmJvb2woKHRoaXMuVG90YWxfSGF1dCgpIC0gdGhpcy5BbGxlZ2VfSGF1dCgpKSA+IHRoaXMuRG9ybWFudF9CTV9ZMygpKSAqICh0aGlzLlRvdGFsX0xhcmcyKCkgLSB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnIC0gdGhpcy5Eb3JtYW50X0JfUmF5b25YMigpICogTWF0aC5zcXJ0KDEgLSB0aGlzLkNpbnRyYWdlQl9PTigpICogdGhpcy5Eb3JtYW50X0FsbGVnZV9PTigpICogKHRoaXMuRG9ybWFudF9CX1JheW9uWTEoKSAtIHRoaXMuQWxsZWdlX0hhdXQoKSkgKiAodGhpcy5Eb3JtYW50X0JfUmF5b25ZMSgpIC0gdGhpcy5BbGxlZ2VfSGF1dCgpKSAvICh0aGlzLkRvcm1hbnRfQl9SYXlvblkyKCkgKiB0aGlzLkRvcm1hbnRfQl9SYXlvblkyKCkgKyAxIC0gdGhpcy5DaW50cmFnZUJfT04oKSkpKSArICh0aGlzLl9DZXJjbGVfRGVtaV9PTiArIHRoaXMuX0NlcmNsZV9RdWFydEdfT04gKyB0aGlzLl9DZXJjbGVIX1F1YXJ0R19PTiArIHRoaXMuR290aGlxX09OKCkgKyB0aGlzLl9FbGxpcHNlX0RlbWlfT04gKyB0aGlzLl9FbGxpcHNlX1F1YXJ0R19PTiArIHRoaXMuX0VsbGlwc2VIX1F1YXJ0R19PTikgKiB0aGlzLmJvb2woKHRoaXMuVG90YWxfSGF1dCgpIC0gdGhpcy5BbGxlZ2VfSGF1dCgpKSA8ICh0aGlzLkRvcm1hbnRfSE1fWTIoKSArIHRoaXMuRG9ybWFudF9IR19ZMigpKSkgKiAodGhpcy5Ub3RhbF9MYXJnMigpICogKDEgKyB0aGlzLl9DZXJjbGVfUXVhcnRHX09OICsgdGhpcy5fQ2VyY2xlSF9RdWFydEdfT04gKyB0aGlzLkdvdGhpcV9PTigpICsgdGhpcy5fRWxsaXBzZV9RdWFydEdfT04gKyB0aGlzLl9FbGxpcHNlSF9RdWFydEdfT04pIC0gdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyAtIHRoaXMuRG9ybWFudF9IX1JheW9uWDIoKSAqIE1hdGguc3FydCgxIC0gdGhpcy5DaW50cmFnZUhIX09OKCkgKiB0aGlzLmJvb2woKHRoaXMuVG90YWxfSGF1dCgpIC0gdGhpcy5BbGxlZ2VfSGF1dCgpKSA8ICh0aGlzLkRvcm1hbnRfSE1fWTIoKSArIHRoaXMuRG9ybWFudF9IR19ZMigpKSkgKiBNYXRoLnBvdyh0aGlzLkRvcm1hbnRfSF9SYXlvblkxKCkgKiAoMSAtIDAuMTM0ICogdGhpcy5Hb3RoaXFfT04oKSkgLSB0aGlzLlRvdGFsX0hhdXQoKSArIHRoaXMuQWxsZWdlX0hhdXQoKSwgMikgLyAodGhpcy5Eb3JtYW50X0hfUmF5b25ZMigpICogdGhpcy5Eb3JtYW50X0hfUmF5b25ZMigpICsgMSAtIHRoaXMuQ2ludHJhZ2VISF9PTigpKSkpKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfQWxsZWdlX1gwMCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9BbGxlZ2VfT04oKSAqICh0aGlzLkRvcm1hbnRfQkdfT04oKSAqIHRoaXMuYm9vbCgodGhpcy5Ub3RhbF9IYXV0KCkgLSB0aGlzLkFsbGVnZV9IYXV0KCkpID4gdGhpcy5Eb3JtYW50X0JHX1kwKCkpICogKCB0aGlzLkRvcm1hbnRfQkdfWDEoKSAtICh0aGlzLkRvcm1hbnRfQkdfWTEoKSAtIHRoaXMuVG90YWxfSGF1dCgpICsgdGhpcy5BbGxlZ2VfSGF1dCgpKSAqIE1hdGgudGFuKCh0aGlzLkRvcm1hbnRfQkdfQW5nbGUoKSkgKiBNYXRoLlBJIC8gMTgwKSApICsgKHRoaXMuX0NoYW5mcmVpbkdfT04gKyB0aGlzLl9UcmlhbmdsZUdfT04gKyB0aGlzLl9UcmlhbmdsZUdfSF9PTiArIHRoaXMuX0RlbWlPY3RvZ29uZV9PTiArIHRoaXMuX0RlbWlIZXhhZ19PTiArIHRoaXMuX1RyaWFuZ2xlX09OKSAqIHRoaXMuYm9vbCgodGhpcy5Ub3RhbF9IYXV0KCkgLSB0aGlzLkFsbGVnZV9IYXV0KCkpIDwgdGhpcy5Eb3JtYW50X0hHX1kxKCkpICogKHRoaXMuRG9ybWFudF9IR19YMSgpICsgKHRoaXMuRG9ybWFudF9IR19ZMSgpIC0gdGhpcy5Eb3JtYW50X0FsbGVnZV9ZMCgpKSAqIE1hdGgudGFuKCh0aGlzLkRvcm1hbnRfSEdfQW5nbGUoKSkgKiBNYXRoLlBJIC8gMTgwKSApICsgdGhpcy5DaW50cmFnZUJfT04oKSAqIHRoaXMuYm9vbCgodGhpcy5Ub3RhbF9IYXV0KCkgLSB0aGlzLkFsbGVnZV9IYXV0KCkpID4gdGhpcy5Eb3JtYW50X0JNX1kwKCkpICogKHRoaXMuVG90YWxfTGFyZzIoKSAtIHRoaXMuRG9ybWFudF9CX1JheW9uWDEoKSAqIE1hdGguc3FydCgxIC0gdGhpcy5DaW50cmFnZUJfT04oKSAqIHRoaXMuRG9ybWFudF9BbGxlZ2VfT04oKSAqIE1hdGgucG93KHRoaXMuRG9ybWFudF9CX1JheW9uWTEoKSAtIHRoaXMuQWxsZWdlX0hhdXQoKSwgMikgLyAodGhpcy5Eb3JtYW50X0JfUmF5b25ZMSgpICogdGhpcy5Eb3JtYW50X0JfUmF5b25ZMSgpICsgMSAtIHRoaXMuQ2ludHJhZ2VCX09OKCkpKSkgKyAodGhpcy5fQ2VyY2xlX0RlbWlfT04gKyB0aGlzLl9DZXJjbGVfUXVhcnRHX09OICsgdGhpcy5fQ2VyY2xlSF9RdWFydEdfT04gKyB0aGlzLkdvdGhpcV9PTigpICsgdGhpcy5fRWxsaXBzZV9EZW1pX09OICsgdGhpcy5fRWxsaXBzZV9RdWFydEdfT04gKyB0aGlzLl9FbGxpcHNlSF9RdWFydEdfT04pICogdGhpcy5ib29sKCh0aGlzLlRvdGFsX0hhdXQoKSAtIHRoaXMuQWxsZWdlX0hhdXQoKSkgPCAodGhpcy5Eb3JtYW50X0hNX1kxKCkgKyB0aGlzLkRvcm1hbnRfSEdfWTEoKSkpICogKHRoaXMuVG90YWxfTGFyZzIoKSAqICgxICsgdGhpcy5fQ2VyY2xlX1F1YXJ0R19PTiArIHRoaXMuX0NlcmNsZUhfUXVhcnRHX09OICsgdGhpcy5Hb3RoaXFfT04oKSArIHRoaXMuX0VsbGlwc2VfUXVhcnRHX09OICsgdGhpcy5fRWxsaXBzZUhfUXVhcnRHX09OKSAtIHRoaXMuRG9ybWFudF9IX1JheW9uWDEoKSAqIE1hdGguc3FydCgxIC0gdGhpcy5DaW50cmFnZUhIX09OKCkgKiB0aGlzLmJvb2woKHRoaXMuVG90YWxfSGF1dCgpIC0gdGhpcy5BbGxlZ2VfSGF1dCgpKSA8ICh0aGlzLkRvcm1hbnRfSE1fWTEoKSArIHRoaXMuRG9ybWFudF9IR19ZMSgpKSkgKiBNYXRoLnBvdyh0aGlzLkRvcm1hbnRfSF9SYXlvblkxKCkgKiAoMSAtIDAuMTM0ICogdGhpcy5Hb3RoaXFfT04oKSkgLSB0aGlzLlRvdGFsX0hhdXQoKSArIHRoaXMuQWxsZWdlX0hhdXQoKSwgMikgLyAodGhpcy5Eb3JtYW50X0hfUmF5b25ZMSgpICogdGhpcy5Eb3JtYW50X0hfUmF5b25ZMSgpICsgMSAtIHRoaXMuQ2ludHJhZ2VISF9PTigpKSkpKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfQWxsZWdlX1kwKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0FsbGVnZV9PTigpICogKHRoaXMuVG90YWxfSGF1dCgpIC0gdGhpcy5BbGxlZ2VfSGF1dCgpKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfQWxsZWdlX1gxKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0FsbGVnZV9PTigpICogKHRoaXMuVG90YWxfTGFyZ19Qcm9maWxlKCkgKyAodGhpcy5fQ2hhbmZyZWluRF9PTiArIHRoaXMuX1RyaWFuZ2xlRF9PTiArIHRoaXMuX1RyaWFuZ2xlRF9IX09OKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfQWxsZWdlX1kwKCkgPCB0aGlzLkRvcm1hbnRfSERfWTMoKSkgKiAodGhpcy5Eb3JtYW50X0hEX1gyKCkgLSB0aGlzLlRvdGFsX0xhcmdfUHJvZmlsZSgpICsgKHRoaXMuRG9ybWFudF9BbGxlZ2VfWTAoKSAtIHRoaXMuRG9ybWFudF9IRF9ZMigpKSAqIE1hdGgudGFuKCh0aGlzLkRvcm1hbnRfSERfQW5nbGUoKSkgKiBNYXRoLlBJIC8gMTgwKSApICsgKHRoaXMuX0RlbWlPY3RvZ29uZV9PTiArIHRoaXMuX09jdG9nb25lX09OICsgdGhpcy5fRGVtaUhleGFnX09OICsgdGhpcy5fSGV4YWdvbmVfT04gKyB0aGlzLl9UcmlhbmdsZV9PTiArIHRoaXMuX0xvc2FuZ2VfT04gKyB0aGlzLkNpbnRyYWdlSF9PTigpICsgdGhpcy5DaW50cmFnZUJfT04oKSkgKiAodGhpcy5fUHJvZmlsZV9FeHRfTGFyZyAtIHRoaXMuRG9ybWFudF9BbGxlZ2VfWDAoKSkgKyAodGhpcy5fQ2VyY2xlX0RlbWlfT04gKyB0aGlzLl9DZXJjbGVfUXVhcnREX09OICsgdGhpcy5fQ2VyY2xlSF9RdWFydERfT04gKyB0aGlzLkdvdGhpcV9PTigpICsgdGhpcy5fRWxsaXBzZV9EZW1pX09OICsgdGhpcy5fRWxsaXBzZV9RdWFydERfT04gKyB0aGlzLl9FbGxpcHNlSF9RdWFydERfT04pICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9BbGxlZ2VfWTAoKSA8ICh0aGlzLkRvcm1hbnRfSERfWTMoKSArIHRoaXMuRG9ybWFudF9ITV9ZMygpKSkgKiAodGhpcy5fUHJvZmlsZV9FeHRfTGFyZyAtIHRoaXMuVG90YWxfTGFyZzIoKSAqICgxICsgdGhpcy5fQ2VyY2xlX1F1YXJ0RF9PTiArIHRoaXMuX0NlcmNsZUhfUXVhcnREX09OICsgdGhpcy5Hb3RoaXFfT04oKSArIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OICsgdGhpcy5fRWxsaXBzZUhfUXVhcnREX09OKSArIHRoaXMuRG9ybWFudF9IX1JheW9uWDIoKSAqIE1hdGguc3FydCgxIC0gKHRoaXMuX0NlcmNsZV9EZW1pX09OICsgdGhpcy5fQ2VyY2xlX1F1YXJ0RF9PTiArIHRoaXMuX0NlcmNsZUhfUXVhcnREX09OICsgdGhpcy5Hb3RoaXFfT04oKSArIHRoaXMuX0VsbGlwc2VfRGVtaV9PTiArIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OICsgdGhpcy5fRWxsaXBzZUhfUXVhcnREX09OKSAqIE1hdGgucG93KHRoaXMuRG9ybWFudF9IX1JheW9uWTEoKSAqICgxIC0gMC4xMzQgKiB0aGlzLkdvdGhpcV9PTigpKSAtIHRoaXMuRG9ybWFudF9BbGxlZ2VfWTAoKSwgMikgLyAodGhpcy5Eb3JtYW50X0hfUmF5b25ZMigpICogdGhpcy5Eb3JtYW50X0hfUmF5b25ZMigpICsgMSAtIHRoaXMuQ2ludHJhZ2VISF9PTigpKSkpKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfQWxsZWdlX1gxMCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9BbGxlZ2VfT04oKSAqICggdGhpcy5Ub3RhbF9MYXJnKCkgKyAodGhpcy5fQ2hhbmZyZWluRF9PTiArIHRoaXMuX1RyaWFuZ2xlRF9PTiArIHRoaXMuX1RyaWFuZ2xlRF9IX09OKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfQWxsZWdlX1kwKCkgPCB0aGlzLkRvcm1hbnRfSERfWTAoKSkgKiAodGhpcy5Eb3JtYW50X0hEX1gxKCkgLSB0aGlzLlRvdGFsX0xhcmcoKSArICh0aGlzLkRvcm1hbnRfQWxsZWdlX1kwKCkgLSB0aGlzLkRvcm1hbnRfSERfWTEoKSkgKiBNYXRoLnRhbigodGhpcy5Eb3JtYW50X0hEX0FuZ2xlKCkpICogTWF0aC5QSSAvIDE4MCkgKSAtICh0aGlzLl9EZW1pT2N0b2dvbmVfT04gKyB0aGlzLl9PY3RvZ29uZV9PTiArIHRoaXMuX0RlbWlIZXhhZ19PTiArIHRoaXMuX0hleGFnb25lX09OICsgdGhpcy5fVHJpYW5nbGVfT04gKyB0aGlzLl9Mb3NhbmdlX09OICsgdGhpcy5DaW50cmFnZUhfT04oKSArIHRoaXMuQ2ludHJhZ2VCX09OKCkpICogdGhpcy5Eb3JtYW50X0FsbGVnZV9YMDAoKSArICh0aGlzLl9DZXJjbGVfRGVtaV9PTiArIHRoaXMuX0NlcmNsZV9RdWFydERfT04gKyB0aGlzLl9DZXJjbGVIX1F1YXJ0RF9PTiArIHRoaXMuR290aGlxX09OKCkgKyB0aGlzLl9FbGxpcHNlX0RlbWlfT04gKyB0aGlzLl9FbGxpcHNlX1F1YXJ0RF9PTiArIHRoaXMuX0VsbGlwc2VIX1F1YXJ0RF9PTikgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0FsbGVnZV9ZMCgpIDwgKHRoaXMuRG9ybWFudF9IRF9ZMCgpICsgdGhpcy5Eb3JtYW50X0hNX1kwKCkpKSAqICgtdGhpcy5Ub3RhbF9MYXJnMigpICogKDEgKyB0aGlzLl9DZXJjbGVfUXVhcnREX09OICsgdGhpcy5fQ2VyY2xlSF9RdWFydERfT04gKyB0aGlzLkdvdGhpcV9PTigpICsgdGhpcy5fRWxsaXBzZV9RdWFydERfT04gKyB0aGlzLl9FbGxpcHNlSF9RdWFydERfT04pICsgdGhpcy5Eb3JtYW50X0hfUmF5b25YMSgpICogTWF0aC5zcXJ0KDEgLSB0aGlzLkNpbnRyYWdlSEhfT04oKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfQWxsZWdlX1kwKCkgPCAodGhpcy5Eb3JtYW50X0hEX1kwKCkgKyB0aGlzLkRvcm1hbnRfSE1fWTAoKSkpICogTWF0aC5wb3codGhpcy5Eb3JtYW50X0hfUmF5b25ZMSgpICogKDEgLSAwLjEzNCAqIHRoaXMuR290aGlxX09OKCkpIC0gdGhpcy5Eb3JtYW50X0FsbGVnZV9ZMCgpLCAyKSAvICh0aGlzLkRvcm1hbnRfSF9SYXlvblkxKCkgKiB0aGlzLkRvcm1hbnRfSF9SYXlvblkxKCkgKyAxIC0gdGhpcy5DaW50cmFnZUhIX09OKCkpKSkpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9BbGxlZ2VfWDIoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfQWxsZWdlX09OKCkgKiAodGhpcy5Ub3RhbF9MYXJnX1Byb2ZpbGUoKSArIHRoaXMuRG9ybWFudF9CRF9PTigpICogdGhpcy5ib29sKCh0aGlzLkRvcm1hbnRfQWxsZWdlX1kwKCkgLSB0aGlzLl9Qcm9maWxlX0ludF9MYXJnKSA+IHRoaXMuRG9ybWFudF9CRF9ZMigpKSAqICggdGhpcy5Eb3JtYW50X0JEX1gzKCkgLSB0aGlzLlRvdGFsX0xhcmdfUHJvZmlsZSgpICsgKHRoaXMuRG9ybWFudF9CRF9ZMygpIC0gdGhpcy5Eb3JtYW50X0FsbGVnZV9ZMCgpICsgdGhpcy5fUHJvZmlsZV9JbnRfTGFyZykgKiBNYXRoLnRhbigodGhpcy5Eb3JtYW50X0JEX0FuZ2xlKCkpICogTWF0aC5QSSAvIDE4MCkpICsgKHRoaXMuX0NoYW5mcmVpbkRfT04gKyB0aGlzLl9UcmlhbmdsZURfT04gKyB0aGlzLl9UcmlhbmdsZURfSF9PTiArIHRoaXMuX0RlbWlPY3RvZ29uZV9PTiArIHRoaXMuX0RlbWlIZXhhZ19PTiArIHRoaXMuX1RyaWFuZ2xlX09OKSAqIHRoaXMuYm9vbCgodGhpcy5Eb3JtYW50X0FsbGVnZV9ZMCgpIC0gdGhpcy5fUHJvZmlsZV9JbnRfTGFyZykgPCB0aGlzLkRvcm1hbnRfSERfWTMoKSkgKiAodGhpcy5Eb3JtYW50X0hEX1gyKCkgLSB0aGlzLlRvdGFsX0xhcmdfUHJvZmlsZSgpICsgKHRoaXMuRG9ybWFudF9BbGxlZ2VfWTAoKSAtIHRoaXMuX1Byb2ZpbGVfSW50X0xhcmcgLSB0aGlzLkRvcm1hbnRfSERfWTIoKSkgKiBNYXRoLnRhbigodGhpcy5Eb3JtYW50X0hEX0FuZ2xlKCkpICogTWF0aC5QSSAvIDE4MCkgKSArIHRoaXMuQ2ludHJhZ2VCX09OKCkgKiB0aGlzLmJvb2woKHRoaXMuRG9ybWFudF9BbGxlZ2VfWTAoKSAtIHRoaXMuX1Byb2ZpbGVfSW50X0xhcmcpID4gdGhpcy5Eb3JtYW50X0JNX1kzKCkpICogKHRoaXMuX1Byb2ZpbGVfRXh0X0xhcmcgLSB0aGlzLlRvdGFsX0xhcmcyKCkgKyB0aGlzLkRvcm1hbnRfQl9SYXlvblgyKCkgKiBNYXRoLnNxcnQoMSAtIHRoaXMuQ2ludHJhZ2VCX09OKCkgKiBNYXRoLnBvdyh0aGlzLkRvcm1hbnRfQl9SYXlvblkxKCkgLSB0aGlzLkFsbGVnZV9IYXV0KCkgLSB0aGlzLl9Qcm9maWxlX0ludF9MYXJnLCAyKSAvICh0aGlzLkRvcm1hbnRfQl9SYXlvblkyKCkgKiB0aGlzLkRvcm1hbnRfQl9SYXlvblkyKCkgKyAxIC0gdGhpcy5DaW50cmFnZUJfT04oKSkpKSArICh0aGlzLl9DZXJjbGVfRGVtaV9PTiArIHRoaXMuX0NlcmNsZV9RdWFydERfT04gKyB0aGlzLl9DZXJjbGVIX1F1YXJ0RF9PTiArIHRoaXMuR290aGlxX09OKCkgKyB0aGlzLl9FbGxpcHNlX0RlbWlfT04gKyB0aGlzLl9FbGxpcHNlX1F1YXJ0RF9PTiArIHRoaXMuX0VsbGlwc2VIX1F1YXJ0RF9PTikgKiB0aGlzLmJvb2woKHRoaXMuRG9ybWFudF9BbGxlZ2VfWTAoKSAtIHRoaXMuX1Byb2ZpbGVfSW50X0xhcmcpIDwgKHRoaXMuRG9ybWFudF9IRF9ZMygpICsgdGhpcy5Eb3JtYW50X0hNX1kzKCkpKSAqICh0aGlzLl9Qcm9maWxlX0V4dF9MYXJnIC0gdGhpcy5Ub3RhbF9MYXJnMigpICogKDEgKyB0aGlzLl9DZXJjbGVfUXVhcnREX09OICsgdGhpcy5fQ2VyY2xlSF9RdWFydERfT04gKyB0aGlzLkdvdGhpcV9PTigpICsgdGhpcy5fRWxsaXBzZV9RdWFydERfT04gKyB0aGlzLl9FbGxpcHNlSF9RdWFydERfT04pICsgdGhpcy5Eb3JtYW50X0hfUmF5b25YMigpICogTWF0aC5zcXJ0KDEgLSB0aGlzLkNpbnRyYWdlSEhfT04oKSAqIHRoaXMuYm9vbCgodGhpcy5Eb3JtYW50X0FsbGVnZV9ZMCgpIC0gdGhpcy5fUHJvZmlsZV9JbnRfTGFyZykgPCAodGhpcy5Eb3JtYW50X0hEX1kzKCkgKyB0aGlzLkRvcm1hbnRfSE1fWTMoKSkpICogTWF0aC5wb3codGhpcy5Eb3JtYW50X0FsbGVnZV9PTigpICogdGhpcy5Eb3JtYW50X0hfUmF5b25ZMSgpICogKDEgLSAwLjEzNCAqIHRoaXMuR290aGlxX09OKCkpICsgdGhpcy5fUHJvZmlsZV9JbnRfTGFyZyAtIHRoaXMuRG9ybWFudF9BbGxlZ2VfWTAoKSwgMikgLyAodGhpcy5Eb3JtYW50X0hfUmF5b25ZMigpICogdGhpcy5Eb3JtYW50X0hfUmF5b25ZMigpICsgMSAtIHRoaXMuQ2ludHJhZ2VISF9PTigpKSkpKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfQWxsZWdlX1gyMCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9BbGxlZ2VfT04oKSAqICh0aGlzLlRvdGFsX0xhcmcoKSArIHRoaXMuRG9ybWFudF9CRF9PTigpICogdGhpcy5ib29sKCh0aGlzLkRvcm1hbnRfQWxsZWdlX1kwKCkgLSB0aGlzLl9Qcm9maWxlX0ludF9MYXJnKSA+IHRoaXMuRG9ybWFudF9CRF9ZMSgpKSAqICggdGhpcy5Eb3JtYW50X0JEX1gwKCkgLSB0aGlzLlRvdGFsX0xhcmcoKSArICh0aGlzLkRvcm1hbnRfQkRfWTAoKSAtIHRoaXMuRG9ybWFudF9BbGxlZ2VfWTAoKSArIHRoaXMuX1Byb2ZpbGVfSW50X0xhcmcpICogTWF0aC50YW4oKHRoaXMuRG9ybWFudF9CRF9BbmdsZSgpKSAqIE1hdGguUEkgLyAxODApICkgKyAodGhpcy5fQ2hhbmZyZWluRF9PTiArIHRoaXMuX1RyaWFuZ2xlRF9PTiArIHRoaXMuX1RyaWFuZ2xlRF9IX09OICsgdGhpcy5fRGVtaU9jdG9nb25lX09OICsgdGhpcy5fRGVtaUhleGFnX09OICsgdGhpcy5fVHJpYW5nbGVfT04pICogdGhpcy5ib29sKCh0aGlzLkRvcm1hbnRfQWxsZWdlX1kwKCkgLSB0aGlzLl9Qcm9maWxlX0ludF9MYXJnKSA8IHRoaXMuRG9ybWFudF9IRF9ZMCgpKSAqICh0aGlzLkRvcm1hbnRfSERfWDEoKSAtIHRoaXMuVG90YWxfTGFyZygpICsgKHRoaXMuRG9ybWFudF9BbGxlZ2VfWTAoKSAtIHRoaXMuX1Byb2ZpbGVfSW50X0xhcmcgLSB0aGlzLkRvcm1hbnRfSERfWTEoKSkgKiBNYXRoLnRhbigodGhpcy5Eb3JtYW50X0hEX0FuZ2xlKCkpICogTWF0aC5QSSAvIDE4MCkgKSAtIHRoaXMuQ2ludHJhZ2VCX09OKCkgKiB0aGlzLmJvb2woKHRoaXMuRG9ybWFudF9BbGxlZ2VfWTAoKSAtIHRoaXMuX1Byb2ZpbGVfSW50X0xhcmcpID4gdGhpcy5Eb3JtYW50X0JNX1kwKCkpICogKHRoaXMuVG90YWxfTGFyZzIoKSAtIHRoaXMuRG9ybWFudF9CX1JheW9uWDEoKSAqIE1hdGguc3FydCgxIC0gdGhpcy5DaW50cmFnZUJfT04oKSAqIE1hdGgucG93KHRoaXMuRG9ybWFudF9CX1JheW9uWTEoKSAtIHRoaXMuQWxsZWdlX0hhdXQoKSAtIHRoaXMuX1Byb2ZpbGVfSW50X0xhcmcsIDIpIC8gKHRoaXMuRG9ybWFudF9CX1JheW9uWTEoKSAqIHRoaXMuRG9ybWFudF9CX1JheW9uWTEoKSArIDEgLSB0aGlzLkNpbnRyYWdlQl9PTigpKSkpICsgKHRoaXMuX0NlcmNsZV9EZW1pX09OICsgdGhpcy5fQ2VyY2xlX1F1YXJ0RF9PTiArIHRoaXMuX0NlcmNsZUhfUXVhcnREX09OICsgdGhpcy5Hb3RoaXFfT04oKSArIHRoaXMuX0VsbGlwc2VfRGVtaV9PTiArIHRoaXMuX0VsbGlwc2VfUXVhcnREX09OICsgdGhpcy5fRWxsaXBzZUhfUXVhcnREX09OKSAqIHRoaXMuYm9vbCgodGhpcy5Eb3JtYW50X0FsbGVnZV9ZMCgpIC0gdGhpcy5fUHJvZmlsZV9JbnRfTGFyZykgPCAodGhpcy5Eb3JtYW50X0hEX1kwKCkgKyB0aGlzLkRvcm1hbnRfSE1fWTAoKSkpICogKC10aGlzLlRvdGFsX0xhcmcyKCkgKiAoMSArIHRoaXMuX0NlcmNsZV9RdWFydERfT04gKyB0aGlzLl9DZXJjbGVIX1F1YXJ0RF9PTiArIHRoaXMuR290aGlxX09OKCkgKyB0aGlzLl9FbGxpcHNlX1F1YXJ0RF9PTiArIHRoaXMuX0VsbGlwc2VIX1F1YXJ0RF9PTikgKyB0aGlzLkRvcm1hbnRfSF9SYXlvblgxKCkgKiBNYXRoLnNxcnQoMSAtIHRoaXMuQ2ludHJhZ2VISF9PTigpICogdGhpcy5ib29sKCh0aGlzLkRvcm1hbnRfQWxsZWdlX1kwKCkgLSB0aGlzLl9Qcm9maWxlX0ludF9MYXJnKSA8ICh0aGlzLkRvcm1hbnRfSERfWTAoKSArIHRoaXMuRG9ybWFudF9ITV9ZMCgpKSkgKiBNYXRoLnBvdyh0aGlzLkRvcm1hbnRfQWxsZWdlX09OKCkgKiB0aGlzLkRvcm1hbnRfSF9SYXlvblkxKCkgKiAoMSAtIDAuMTM0ICogdGhpcy5Hb3RoaXFfT04oKSkgLSB0aGlzLkRvcm1hbnRfQWxsZWdlX1kwKCkgKyB0aGlzLl9Qcm9maWxlX0ludF9MYXJnLCAyKSAvICh0aGlzLkRvcm1hbnRfSF9SYXlvblkxKCkgKiB0aGlzLkRvcm1hbnRfSF9SYXlvblkxKCkgKyAxIC0gdGhpcy5DaW50cmFnZUhIX09OKCkpKSkpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9BbGxlZ2VfWTIoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfQWxsZWdlX09OKCkgKiAodGhpcy5Eb3JtYW50X0FsbGVnZV9ZMCgpIC0gdGhpcy5fUHJvZmlsZV9JbnRfTGFyZylcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0FsbGVnZV9YMTIoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfQWxsZWdlX09OKCkgKiAodGhpcy5Eb3JtYW50X0FsbGVnZV9YMigpICsgdGhpcy5Eb3JtYW50X0JEX09OKCkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0FsbGVnZV9ZMigpIDwgdGhpcy5Eb3JtYW50X0JEX1kyKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9BbGxlZ2VfWTAoKSA+IHRoaXMuRG9ybWFudF9CRF9ZMigpKSAqICh0aGlzLkRvcm1hbnRfQkRfWDIoKSAtIHRoaXMuRG9ybWFudF9BbGxlZ2VfWDIoKSkgKyB0aGlzLkRvcm1hbnRfSERfT04oKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfQWxsZWdlX1kyKCkgPCB0aGlzLkRvcm1hbnRfSERfWTMoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0FsbGVnZV9ZMCgpID4gdGhpcy5Eb3JtYW50X0hEX1kzKCkpICogKHRoaXMuRG9ybWFudF9IRF9YMygpIC0gdGhpcy5Eb3JtYW50X0FsbGVnZV9YMigpKSlcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0FsbGVnZV9YMTIwKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0FsbGVnZV9PTigpICogKHRoaXMuRG9ybWFudF9BbGxlZ2VfWDIwKCkgKyB0aGlzLkRvcm1hbnRfQkRfT04oKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfQWxsZWdlX1kyKCkgPCB0aGlzLkRvcm1hbnRfQkRfWTEoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0FsbGVnZV9ZMCgpID4gdGhpcy5Eb3JtYW50X0JEX1kxKCkpICogKHRoaXMuRG9ybWFudF9CRF9YMSgpIC0gdGhpcy5Eb3JtYW50X0FsbGVnZV9YMjAoKSkgKyB0aGlzLkRvcm1hbnRfSERfT04oKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfQWxsZWdlX1kyKCkgPCB0aGlzLkRvcm1hbnRfSERfWTAoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0FsbGVnZV9ZMCgpID4gdGhpcy5Eb3JtYW50X0hEX1kwKCkpICogKHRoaXMuRG9ybWFudF9IRF9YMCgpIC0gdGhpcy5Eb3JtYW50X0FsbGVnZV9YMjAoKSkpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9BbGxlZ2VfWTEyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0FsbGVnZV9PTigpICogKHRoaXMuRG9ybWFudF9BbGxlZ2VfWTIoKSArIHRoaXMuRG9ybWFudF9CRF9PTigpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9BbGxlZ2VfWTIoKSA8IHRoaXMuRG9ybWFudF9CRF9ZMigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfQWxsZWdlX1kwKCkgPiB0aGlzLkRvcm1hbnRfQkRfWTIoKSkgKiAodGhpcy5Eb3JtYW50X0JEX1kyKCkgLSB0aGlzLkRvcm1hbnRfQWxsZWdlX1kyKCkpICsgdGhpcy5Eb3JtYW50X0hEX09OKCkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0FsbGVnZV9ZMigpIDwgdGhpcy5Eb3JtYW50X0hEX1kzKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9BbGxlZ2VfWTAoKSA+IHRoaXMuRG9ybWFudF9IRF9ZMygpKSAqICh0aGlzLkRvcm1hbnRfSERfWTMoKSAtIHRoaXMuRG9ybWFudF9BbGxlZ2VfWTIoKSkpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9BbGxlZ2VfWTEyMCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9BbGxlZ2VfT04oKSAqICh0aGlzLkRvcm1hbnRfQWxsZWdlX1kyKCkgKyB0aGlzLkRvcm1hbnRfQkRfT04oKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfQWxsZWdlX1kyKCkgPCB0aGlzLkRvcm1hbnRfQkRfWTEoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0FsbGVnZV9ZMCgpID4gdGhpcy5Eb3JtYW50X0JEX1kxKCkpICogKHRoaXMuRG9ybWFudF9CRF9ZMSgpIC0gdGhpcy5Eb3JtYW50X0FsbGVnZV9ZMigpKSArIHRoaXMuRG9ybWFudF9IRF9PTigpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9BbGxlZ2VfWTIoKSA8IHRoaXMuRG9ybWFudF9IRF9ZMCgpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfQWxsZWdlX1kwKCkgPiB0aGlzLkRvcm1hbnRfSERfWTAoKSkgKiAodGhpcy5Eb3JtYW50X0hEX1kwKCkgLSB0aGlzLkRvcm1hbnRfQWxsZWdlX1kyKCkpKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfQWxsZWdlX1gzKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0FsbGVnZV9PTigpICogKCB0aGlzLl9Qcm9maWxlX0V4dF9MYXJnICsgKHRoaXMuX0NoYW5mcmVpbkdfT04gKyB0aGlzLl9UcmlhbmdsZUdfT04gKyB0aGlzLl9UcmlhbmdsZUdfSF9PTikgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0FsbGVnZV9ZMigpIDwgdGhpcy5Eb3JtYW50X0hHX1kyKCkpICogKHRoaXMuRG9ybWFudF9IR19YMigpIC0gdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyArICh0aGlzLkRvcm1hbnRfSEdfWTIoKSAtIHRoaXMuRG9ybWFudF9BbGxlZ2VfWTIoKSkgKiBNYXRoLnRhbigodGhpcy5Eb3JtYW50X0hHX0FuZ2xlKCkpICogTWF0aC5QSSAvIDE4MCkgKSArICh0aGlzLl9EZW1pT2N0b2dvbmVfT04gKyB0aGlzLl9PY3RvZ29uZV9PTiArIHRoaXMuX0RlbWlIZXhhZ19PTiArIHRoaXMuX0hleGFnb25lX09OICsgdGhpcy5fVHJpYW5nbGVfT04gKyB0aGlzLl9Mb3NhbmdlX09OICsgdGhpcy5DaW50cmFnZUhfT04oKSArIHRoaXMuQ2ludHJhZ2VCX09OKCkpICogKHRoaXMuVG90YWxfTGFyZ19Qcm9maWxlKCkgLSB0aGlzLkRvcm1hbnRfQWxsZWdlX1gyKCkpICsgKHRoaXMuX0NlcmNsZV9EZW1pX09OICsgdGhpcy5fQ2VyY2xlX1F1YXJ0R19PTiArIHRoaXMuX0NlcmNsZUhfUXVhcnRHX09OICsgdGhpcy5fR290aGlxdWVfT04gKyB0aGlzLl9Hb3RoaXF1ZV9IX09OICsgdGhpcy5fRWxsaXBzZV9EZW1pX09OICsgdGhpcy5fRWxsaXBzZV9RdWFydEdfT04gKyB0aGlzLl9FbGxpcHNlSF9RdWFydEdfT04pICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9BbGxlZ2VfWTIoKSA8ICh0aGlzLkRvcm1hbnRfSE1fWTIoKSArIHRoaXMuRG9ybWFudF9IR19ZMigpKSkgKiAodGhpcy5Ub3RhbF9MYXJnMigpICogKDEgKyB0aGlzLl9DZXJjbGVfUXVhcnRHX09OICsgdGhpcy5fQ2VyY2xlSF9RdWFydEdfT04gKyB0aGlzLkdvdGhpcV9PTigpICsgdGhpcy5fRWxsaXBzZV9RdWFydEdfT04gKyB0aGlzLl9FbGxpcHNlSF9RdWFydEdfT04pIC0gdGhpcy5fUHJvZmlsZV9FeHRfTGFyZyAtIHRoaXMuRG9ybWFudF9IX1JheW9uWDIoKSAqIE1hdGguc3FydCgxIC0gdGhpcy5DaW50cmFnZUhIX09OKCkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0FsbGVnZV9ZMigpIDwgKHRoaXMuRG9ybWFudF9ITV9ZMigpICsgdGhpcy5Eb3JtYW50X0hHX1kyKCkpKSAqIE1hdGgucG93KHRoaXMuRG9ybWFudF9BbGxlZ2VfT04oKSAqIHRoaXMuRG9ybWFudF9IX1JheW9uWTEoKSAqICgxIC0gMC4xMzQgKiB0aGlzLkdvdGhpcV9PTigpKSAtIHRoaXMuRG9ybWFudF9BbGxlZ2VfWTIoKSwgMikgLyAodGhpcy5Eb3JtYW50X0hfUmF5b25ZMigpICogdGhpcy5Eb3JtYW50X0hfUmF5b25ZMigpICsgMSAtIHRoaXMuQ2ludHJhZ2VISF9PTigpKSkpKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfQWxsZWdlX1gzMCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9BbGxlZ2VfT04oKSAqICgodGhpcy5fQ2hhbmZyZWluR19PTiArIHRoaXMuX1RyaWFuZ2xlR19PTiArIHRoaXMuX1RyaWFuZ2xlR19IX09OKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfQWxsZWdlX1kyKCkgPCB0aGlzLkRvcm1hbnRfSEdfWTEoKSkgKiAodGhpcy5Eb3JtYW50X0hHX1gxKCkgKyAodGhpcy5Eb3JtYW50X0hHX1kxKCkgLSB0aGlzLkRvcm1hbnRfQWxsZWdlX1kyKCkpICogTWF0aC50YW4oKHRoaXMuRG9ybWFudF9IR19BbmdsZSgpKSAqIE1hdGguUEkgLyAxODApICkgKyAodGhpcy5fRGVtaU9jdG9nb25lX09OICsgdGhpcy5fT2N0b2dvbmVfT04gKyB0aGlzLl9EZW1pSGV4YWdfT04gKyB0aGlzLl9IZXhhZ29uZV9PTiArIHRoaXMuX1RyaWFuZ2xlX09OICsgdGhpcy5fTG9zYW5nZV9PTiArIHRoaXMuQ2ludHJhZ2VIX09OKCkgKyB0aGlzLkNpbnRyYWdlQl9PTigpKSAqICh0aGlzLlRvdGFsX0xhcmcoKSAtIHRoaXMuRG9ybWFudF9BbGxlZ2VfWDIwKCkpICsgKHRoaXMuX0NlcmNsZV9EZW1pX09OICsgdGhpcy5fQ2VyY2xlX1F1YXJ0R19PTiArIHRoaXMuX0NlcmNsZUhfUXVhcnRHX09OICsgdGhpcy5fR290aGlxdWVfT04gKyB0aGlzLl9Hb3RoaXF1ZV9IX09OICsgdGhpcy5fRWxsaXBzZV9EZW1pX09OICsgdGhpcy5fRWxsaXBzZV9RdWFydEdfT04gKyB0aGlzLl9FbGxpcHNlSF9RdWFydEdfT04pICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9BbGxlZ2VfWTIoKSA8ICh0aGlzLkRvcm1hbnRfSE1fWTEoKSArIHRoaXMuRG9ybWFudF9IR19ZMSgpKSkgKiAodGhpcy5Ub3RhbF9MYXJnMigpICogKDEgKyB0aGlzLl9DZXJjbGVfUXVhcnRHX09OICsgdGhpcy5fQ2VyY2xlSF9RdWFydEdfT04gKyB0aGlzLkdvdGhpcV9PTigpICsgdGhpcy5fRWxsaXBzZV9RdWFydEdfT04gKyB0aGlzLl9FbGxpcHNlSF9RdWFydEdfT04pIC0gdGhpcy5Eb3JtYW50X0hfUmF5b25YMSgpICogTWF0aC5zcXJ0KDEgLSB0aGlzLkNpbnRyYWdlSEhfT04oKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfQWxsZWdlX1kyKCkgPCAodGhpcy5Eb3JtYW50X0hNX1kxKCkgKyB0aGlzLkRvcm1hbnRfSEdfWTEoKSkpICogTWF0aC5wb3codGhpcy5Eb3JtYW50X0hfUmF5b25ZMSgpICogKDEgLSAwLjEzNCAqIHRoaXMuR290aGlxX09OKCkpIC0gdGhpcy5Eb3JtYW50X0FsbGVnZV9ZMigpLCAyKSAvICh0aGlzLkRvcm1hbnRfSF9SYXlvblkxKCkgKiB0aGlzLkRvcm1hbnRfSF9SYXlvblkxKCkgKyAxIC0gdGhpcy5DaW50cmFnZUhIX09OKCkpKSkpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9BbGxlZ2VfWDAzKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0FsbGVnZV9PTigpICogKHRoaXMuRG9ybWFudF9BbGxlZ2VfWDMoKSArIHRoaXMuRG9ybWFudF9CR19PTigpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9BbGxlZ2VfWTIoKSA8IHRoaXMuRG9ybWFudF9CR19ZMygpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfQWxsZWdlX1kwKCkgPiB0aGlzLkRvcm1hbnRfQkdfWTMoKSkgKiAodGhpcy5Eb3JtYW50X0JHX1gzKCkgLSB0aGlzLkRvcm1hbnRfQWxsZWdlX1gzKCkpICsgdGhpcy5Eb3JtYW50X0hHX09OKCkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0FsbGVnZV9ZMigpIDwgdGhpcy5Eb3JtYW50X0hHX1kyKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9BbGxlZ2VfWTAoKSA+IHRoaXMuRG9ybWFudF9IR19ZMigpKSAqICh0aGlzLkRvcm1hbnRfSEdfWDIoKSAtIHRoaXMuRG9ybWFudF9BbGxlZ2VfWDMoKSkpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9BbGxlZ2VfWDAzMCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9BbGxlZ2VfT04oKSAqICh0aGlzLkRvcm1hbnRfQWxsZWdlX1gzMCgpICsgdGhpcy5Eb3JtYW50X0JHX09OKCkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0FsbGVnZV9ZMigpIDwgdGhpcy5Eb3JtYW50X0JHX1kwKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9BbGxlZ2VfWTAoKSA+IHRoaXMuRG9ybWFudF9CR19ZMCgpKSAqICh0aGlzLkRvcm1hbnRfQkdfWDAoKSAtIHRoaXMuRG9ybWFudF9BbGxlZ2VfWDMwKCkpICsgdGhpcy5Eb3JtYW50X0hHX09OKCkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0FsbGVnZV9ZMigpIDwgdGhpcy5Eb3JtYW50X0hHX1kxKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9BbGxlZ2VfWTAoKSA+IHRoaXMuRG9ybWFudF9IR19ZMSgpKSAqICh0aGlzLkRvcm1hbnRfSEdfWDEoKSAtIHRoaXMuRG9ybWFudF9BbGxlZ2VfWDMwKCkpKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfQWxsZWdlX1kwMygpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9BbGxlZ2VfT04oKSAqICh0aGlzLkRvcm1hbnRfQWxsZWdlX1kyKCkgKyB0aGlzLkRvcm1hbnRfQkdfT04oKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfQWxsZWdlX1kyKCkgPCB0aGlzLkRvcm1hbnRfQkdfWTMoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0FsbGVnZV9ZMCgpID4gdGhpcy5Eb3JtYW50X0JHX1kzKCkpICogKHRoaXMuRG9ybWFudF9CR19ZMygpIC0gdGhpcy5Eb3JtYW50X0FsbGVnZV9ZMigpKSArIHRoaXMuRG9ybWFudF9IR19PTigpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9BbGxlZ2VfWTIoKSA8IHRoaXMuRG9ybWFudF9IR19ZMigpKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfQWxsZWdlX1kwKCkgPiB0aGlzLkRvcm1hbnRfSEdfWTIoKSkgKiAodGhpcy5Eb3JtYW50X0hHX1kyKCkgLSB0aGlzLkRvcm1hbnRfQWxsZWdlX1kyKCkpKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfQWxsZWdlX1kwMzAoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfQWxsZWdlX09OKCkgKiAodGhpcy5Eb3JtYW50X0FsbGVnZV9ZMigpICsgdGhpcy5Eb3JtYW50X0JHX09OKCkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0FsbGVnZV9ZMigpIDwgdGhpcy5Eb3JtYW50X0JHX1kwKCkpICogdGhpcy5ib29sKHRoaXMuRG9ybWFudF9BbGxlZ2VfWTAoKSA+IHRoaXMuRG9ybWFudF9CR19ZMCgpKSAqICh0aGlzLkRvcm1hbnRfQkdfWTAoKSAtIHRoaXMuRG9ybWFudF9BbGxlZ2VfWTIoKSkgKyB0aGlzLkRvcm1hbnRfSEdfT04oKSAqIHRoaXMuYm9vbCh0aGlzLkRvcm1hbnRfQWxsZWdlX1kyKCkgPCB0aGlzLkRvcm1hbnRfSEdfWTEoKSkgKiB0aGlzLmJvb2wodGhpcy5Eb3JtYW50X0FsbGVnZV9ZMCgpID4gdGhpcy5Eb3JtYW50X0hHX1kxKCkpICogKHRoaXMuRG9ybWFudF9IR19ZMSgpIC0gdGhpcy5Eb3JtYW50X0FsbGVnZV9ZMigpKSlcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0FsbGVnZV9EWTEoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfQWxsZWdlX1gxKCkgLSB0aGlzLkRvcm1hbnRfQWxsZWdlX1gwKClcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0FsbGVnZV9MWDEoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfQWxsZWdlX1kwKCkgLSB0aGlzLkRvcm1hbnRfQWxsZWdlX1kxMigpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9BbGxlZ2VfTFkxKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0FsbGVnZV9YMTIoKSAtIHRoaXMuRG9ybWFudF9BbGxlZ2VfWDEoKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfQWxsZWdlX0xYMigpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9BbGxlZ2VfWTEyKCkgLSB0aGlzLkRvcm1hbnRfQWxsZWdlX1kyKClcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0FsbGVnZV9MWTIoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfQWxsZWdlX1gyKCkgLSB0aGlzLkRvcm1hbnRfQWxsZWdlX1gxMigpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9BbGxlZ2VfRFkyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0FsbGVnZV9YMygpIC0gdGhpcy5Eb3JtYW50X0FsbGVnZV9YMigpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9BbGxlZ2VfTFgzKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0FsbGVnZV9ZMigpIC0gdGhpcy5Eb3JtYW50X0FsbGVnZV9ZMDMoKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfQWxsZWdlX0xZMygpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRG9ybWFudF9BbGxlZ2VfWDMoKSAtIHRoaXMuRG9ybWFudF9BbGxlZ2VfWDAzKClcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0FsbGVnZV9MWDQoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfQWxsZWdlX1kwMygpIC0gdGhpcy5Eb3JtYW50X0FsbGVnZV9ZMCgpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9BbGxlZ2VfTFk0KCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0FsbGVnZV9YMCgpIC0gdGhpcy5Eb3JtYW50X0FsbGVnZV9YMDMoKVxyXG4gICAgfVxyXG5cclxuICAgIERvcm1hbnRfQWxsZWdlX1RyYW5zX1goKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRvcm1hbnRfQWxsZWdlX1gwKClcclxuICAgIH1cclxuXHJcbiAgICBEb3JtYW50X0FsbGVnZV9UcmFuc19ZKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5Eb3JtYW50X0FsbGVnZV9ZMCgpXHJcbiAgICB9XHJcblxyXG4gICAgRG9ybWFudF9BbGxlZ2VfUm90YXRlKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gLTkwICogdGhpcy5Eb3JtYW50X0FsbGVnZV9PTigpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgVnVlRXh0X09OKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fVnVlRXh0X09OTlxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgVnVlRXh0X1gwKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5WdWVFeHRfT04oKSAqICh0aGlzLkRvcm1hbnRfSE1fT04oKSAqIHRoaXMuRG9ybWFudF9ITV9YMCgpICsgKDEgLSB0aGlzLkRvcm1hbnRfSE1fT04oKSkgKiB0aGlzLkRvcm1hbnRfSEdfT04oKSAqIHRoaXMuRG9ybWFudF9IR19YMCgpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgVnVlRXh0X1kwKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5WdWVFeHRfT04oKSAqICh0aGlzLkRvcm1hbnRfSE1fT04oKSAqIHRoaXMuRG9ybWFudF9ITV9ZMCgpICsgKDEgLSB0aGlzLkRvcm1hbnRfSE1fT04oKSkgKiB0aGlzLkRvcm1hbnRfSEdfT04oKSAqIHRoaXMuRG9ybWFudF9IR19ZMCgpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgVnVlRXh0X1gxKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5WdWVFeHRfT04oKSAqICh0aGlzLkRvcm1hbnRfSE1fT04oKSAqIHRoaXMuRG9ybWFudF9ITV9YMSgpICsgKDEgLSB0aGlzLkRvcm1hbnRfSE1fT04oKSkgKiB0aGlzLkRvcm1hbnRfSEdfT04oKSAqIHRoaXMuRG9ybWFudF9IR19YMSgpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgVnVlRXh0X1kxKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5WdWVFeHRfT04oKSAqICh0aGlzLkRvcm1hbnRfSE1fT04oKSAqIHRoaXMuRG9ybWFudF9ITV9ZMSgpICsgKDEgLSB0aGlzLkRvcm1hbnRfSE1fT04oKSkgKiB0aGlzLkRvcm1hbnRfSEdfT04oKSAqIHRoaXMuRG9ybWFudF9IR19ZMSgpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgVnVlRXh0X1gyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5WdWVFeHRfT04oKSAqICh0aGlzLkRvcm1hbnRfSEdfT04oKSAqIHRoaXMuRG9ybWFudF9IR19YMSgpICsgKDEgLSB0aGlzLkRvcm1hbnRfSEdfT04oKSkgKiB0aGlzLlZ1ZUV4dF9YMSgpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgVnVlRXh0X1kyKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5WdWVFeHRfT04oKSAqICh0aGlzLkRvcm1hbnRfSEdfT04oKSAqIHRoaXMuRG9ybWFudF9IR19ZMSgpICsgKDEgLSB0aGlzLkRvcm1hbnRfSEdfT04oKSkgKiB0aGlzLlZ1ZUV4dF9ZMSgpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgVnVlRXh0X1gzKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5WdWVFeHRfT04oKSAqICh0aGlzLkRvcm1hbnRfR0dfT04oKSAqIHRoaXMuRG9ybWFudF9HR19YMSgpICsgKDEgLSB0aGlzLkRvcm1hbnRfR0dfT04oKSkgKiB0aGlzLlZ1ZUV4dF9YMigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgVnVlRXh0X1kzKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5WdWVFeHRfT04oKSAqICh0aGlzLkRvcm1hbnRfR0dfT04oKSAqIHRoaXMuRG9ybWFudF9HR19ZMSgpICsgKDEgLSB0aGlzLkRvcm1hbnRfR0dfT04oKSkgKiB0aGlzLlZ1ZUV4dF9ZMigpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgVnVlRXh0X1g0KCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5WdWVFeHRfT04oKSAqICh0aGlzLkRvcm1hbnRfQkdfT04oKSAqIHRoaXMuRG9ybWFudF9CR19YMSgpICsgKDEgLSB0aGlzLkRvcm1hbnRfQkdfT04oKSkgKiB0aGlzLlZ1ZUV4dF9YMygpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgVnVlRXh0X1k0KCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5WdWVFeHRfT04oKSAqICh0aGlzLkRvcm1hbnRfQkdfT04oKSAqIHRoaXMuRG9ybWFudF9CR19ZMSgpICsgKDEgLSB0aGlzLkRvcm1hbnRfQkdfT04oKSkgKiB0aGlzLlZ1ZUV4dF9ZMygpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgVnVlRXh0X1g1KCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5WdWVFeHRfT04oKSAqICh0aGlzLkRvcm1hbnRfQk1fT04oKSAqIHRoaXMuRG9ybWFudF9CTV9YMSgpICsgKDEgLSB0aGlzLkRvcm1hbnRfQk1fT04oKSkgKiB0aGlzLlZ1ZUV4dF9YNCgpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgVnVlRXh0X1k1KCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5WdWVFeHRfT04oKSAqICh0aGlzLkRvcm1hbnRfQk1fT04oKSAqIHRoaXMuRG9ybWFudF9CTV9ZMSgpICsgKDEgLSB0aGlzLkRvcm1hbnRfQk1fT04oKSkgKiB0aGlzLlZ1ZUV4dF9ZNCgpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgVnVlRXh0X1g2KCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5WdWVFeHRfT04oKSAqIHRoaXMuVG90YWxfTGFyZygpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBWdWVFeHRfWTYoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLlZ1ZUV4dF9PTigpICogKCgxIC0gdGhpcy5fUG9ydGVfT04pICogKHRoaXMuRG9ybWFudF9CRF9PTigpICogdGhpcy5Eb3JtYW50X0JEX1kxKCkgKyAoMSAtIHRoaXMuRG9ybWFudF9CRF9PTigpKSAqIHRoaXMuVnVlRXh0X1k1KCkpICsgdGhpcy5fUG9ydGVfT04gKiB0aGlzLlRvdGFsX0hhdXQoKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIFZ1ZUV4dF9YNygpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuVnVlRXh0X09OKCkgKiAodGhpcy5Eb3JtYW50X0REX09OKCkgKiB0aGlzLkRvcm1hbnRfRERfWDEoKSArICgxIC0gdGhpcy5Eb3JtYW50X0REX09OKCkpICogdGhpcy5WdWVFeHRfWDYoKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIFZ1ZUV4dF9ZNygpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuVnVlRXh0X09OKCkgKiAodGhpcy5Eb3JtYW50X0REX09OKCkgKiB0aGlzLkRvcm1hbnRfRERfWTEoKSArICgxIC0gdGhpcy5Eb3JtYW50X0REX09OKCkpICogdGhpcy5WdWVFeHRfWTYoKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIFZ1ZUV4dF9YOCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuVnVlRXh0X09OKCkgKiAodGhpcy5Eb3JtYW50X0hEX09OKCkgKiB0aGlzLkRvcm1hbnRfSERfWDEoKSArICgxIC0gdGhpcy5Eb3JtYW50X0hEX09OKCkpICogdGhpcy5WdWVFeHRfWDcoKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIFZ1ZUV4dF9ZOCgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuVnVlRXh0X09OKCkgKiAodGhpcy5Eb3JtYW50X0hEX09OKCkgKiB0aGlzLkRvcm1hbnRfSERfWTEoKSArICgxIC0gdGhpcy5Eb3JtYW50X0hEX09OKCkpICogdGhpcy5WdWVFeHRfWTcoKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFR5cGUyKHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuQWxsZWdlX09OID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5JbXBvc3RlX09OID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5MRF9PTiA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuTEdfT04gPSB2YWx1ZTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBiXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBib29sKGI6Ym9vbGVhbik6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gYiA/IDEgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtEb3JtYW50fVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0T2JqZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0U1RhdHVzKCk6Ym9vbGVhbiB7XHJcblxyXG4gICAgICAgIHJldHVybiAodGhpcy5FbGxpcHNlSF9RdWFydERfT04gKyB0aGlzLkVsbGlwc2VIX1F1YXJ0R19PTiArIHRoaXMuRWxsaXBzZV9RdWFydEdfT04gKyB0aGlzLkVsbGlwc2VfUXVhcnREX09OID4gMCk7XHJcblxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
