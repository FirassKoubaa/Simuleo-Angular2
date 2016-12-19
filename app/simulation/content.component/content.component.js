System.register(['angular2/core', '../../services/background/BackgroundService', "angular2/common", "../../menu/radioFormesType1/radioFormesType1.component", "../../services/menu/FormeService", "../../services/couleurs/CouleursService", "../../services/parametrages/parametragesService", "../../menu/couleurs/defs.component/defs.component", "../../menu/couleurs/couleurs.component/couleurs.component", "../../services/holders/HoldersService"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, BackgroundService_1, common_1, radioFormesType1_component_1, FormeService_1, CouleursService_1, parametragesService_1, defs_component_1, couleurs_component_1, HoldersService_1;
    var ContentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (BackgroundService_1_1) {
                BackgroundService_1 = BackgroundService_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (radioFormesType1_component_1_1) {
                radioFormesType1_component_1 = radioFormesType1_component_1_1;
            },
            function (FormeService_1_1) {
                FormeService_1 = FormeService_1_1;
            },
            function (CouleursService_1_1) {
                CouleursService_1 = CouleursService_1_1;
            },
            function (parametragesService_1_1) {
                parametragesService_1 = parametragesService_1_1;
            },
            function (defs_component_1_1) {
                defs_component_1 = defs_component_1_1;
            },
            function (couleurs_component_1_1) {
                couleurs_component_1 = couleurs_component_1_1;
            },
            function (HoldersService_1_1) {
                HoldersService_1 = HoldersService_1_1;
            }],
        execute: function() {
            ContentComponent = (function () {
                function ContentComponent(BackService, formeService, couleursService, ParamService, holdersService, el) {
                    var _this = this;
                    this.BackService = BackService;
                    this.formeService = formeService;
                    this.couleursService = couleursService;
                    this.ParamService = ParamService;
                    this.holdersService = holdersService;
                    this.el = el;
                    //variable checkbox (type2)
                    this.ImposteFChoisi = false;
                    this.AllegeFChoisi = false;
                    this.LgFChoisi = false;
                    this.LdFChoisi = false;
                    this.ImpostePFChoisi = false;
                    this.LgPFChoisi = false;
                    this.LdPFChoisi = false;
                    //chargement RAPIDE (METHODE SUBJECT) du type1 dans type1Choisi
                    //this.formeService._type1.subscribe(type1 => this.type1Choisi = type1); (si c est declarè subject)
                    this.formeService.type1S$.subscribe(function (val) {
                        _this.type1Choisi = val;
                        //---> application sur simulation
                        if (_this.type1Choisi == 102) {
                            _this.ParamService.dormant.Porte_ON = 1.00;
                            _this.ParamService.dormant.Imposte_ON = 0.00;
                            _this.ParamService.dormant.LG_ON = 0.00;
                            _this.ParamService.dormant.LD_ON = 0.00;
                            _this.ParamService.dormant.Allege_ON = 0.00;
                            _this.ParamService.dormant.Rect_ON = 1.00;
                        }
                        if (_this.type1Choisi == 101) {
                            _this.ParamService.dormant.Porte_ON = 0.00;
                            _this.ParamService.dormant.Imposte_ON = 0.00;
                            _this.ParamService.dormant.LG_ON = 0.00;
                            _this.ParamService.dormant.LD_ON = 0.00;
                            _this.ParamService.dormant.Allege_ON = 0.00;
                            _this.ParamService.dormant.Rect_ON = 1.00;
                        }
                    });
                    //chargement RAPIDE (METHODE SUBJECT) du formeGeo dans formeGeoChoisi
                    this.formeService.formeGeo.subscribe(function (formeGeo) {
                        _this.formeGeoChoisi = formeGeo;
                        // chargement dynamique de la forme Gèo choisie (avec la variable correspondante au dormant)
                        _this.ParamService.dormant[_this.formeGeoChoisi] = 1.00;
                    });
                    //chargement RAPIDE (METHODE SUBJECT) des valeur du type2:
                    this.formeService.ImposteF.subscribe(function (type2) {
                        _this.ImposteFChoisi = type2;
                        //---> application sur simulation
                        // Imposte sur fenetre
                        if (_this.ImposteFChoisi == true) {
                            _this.ParamService.dormant.Imposte_ON = 1.00;
                        }
                        if (_this.ImposteFChoisi == false) {
                            _this.ParamService.dormant.Imposte_ON = 0.00;
                        }
                    });
                    this.formeService.AllegeF.subscribe(function (type2) {
                        _this.AllegeFChoisi = type2;
                        // allege sur fenetre
                        if (_this.AllegeFChoisi == true) {
                            _this.ParamService.dormant.Allege_ON = 1.00;
                        }
                        if (_this.AllegeFChoisi == false) {
                            _this.ParamService.dormant.Allege_ON = 0.00;
                        }
                    });
                    this.formeService.LgF.subscribe(function (type2) {
                        _this.LgFChoisi = type2;
                        // Lateral gauche sur fenetre
                        if (_this.LgFChoisi == true) {
                            _this.ParamService.dormant.LG_ON = 1.00;
                        }
                        if (_this.LgFChoisi == false) {
                            _this.ParamService.dormant.LG_ON = 0.00;
                        }
                    });
                    this.formeService.LdF.subscribe(function (type2) {
                        _this.LdFChoisi = type2;
                        // Lateral droite sur fenetre
                        if (_this.LdFChoisi == true) {
                            _this.ParamService.dormant.LD_ON = 1.00;
                        }
                        if (_this.LdFChoisi == false) {
                            _this.ParamService.dormant.LD_ON = 0.00;
                        }
                    });
                    this.formeService.ImpostePF.subscribe(function (type2) {
                        _this.ImpostePFChoisi = type2;
                        // imposte sur porte fenetre
                        if (_this.ImpostePFChoisi == true) {
                            _this.ParamService.dormant.Imposte_ON = 1.00;
                        }
                        if (_this.ImpostePFChoisi == false) {
                            _this.ParamService.dormant.Imposte_ON = 0.00;
                        }
                    });
                    this.formeService.LgPF.subscribe(function (type2) {
                        _this.LgPFChoisi = type2;
                        // Lateral gauche sur porte fenetre
                        if (_this.LgPFChoisi == true) {
                            _this.ParamService.dormant.LG_ON = 1.00;
                        }
                        if (_this.LgPFChoisi == false) {
                            _this.ParamService.dormant.LG_ON = 0.00;
                        }
                    });
                    this.formeService.LdPF.subscribe(function (type2) {
                        _this.LdPFChoisi = type2;
                        // Lateral droite sur porte fentre
                        if (_this.LdPFChoisi == true) {
                            _this.ParamService.dormant.LD_ON = 1.00;
                        }
                        if (_this.LdPFChoisi == false) {
                            _this.ParamService.dormant.LD_ON = 0.00;
                        }
                    });
                    //chargement RAPIDE (METHODE SUBJECT) du submenu choisi et la teinteOrColor
                    this.couleursService.submenuCourant.subscribe(function (sb) { return _this.submenuRecu = sb; });
                    this.couleursService.teinteOrColor.subscribe(function (color) {
                        _this.teinteOrColorRecu = color;
                        _this.ParamService.dormant.Couleur_Fill = _this.teinteOrColorRecu;
                    });
                }
                //DFEINITION DES ACTIONS DEPLACEMENT & DIMENSIONNEMENT
                ContentComponent.prototype.ngAfterViewInit = function () {
                    ///////EVENEMENT DRAG OBJET (fenetre /porte fenetre)
                    var _this = this;
                    var myElement = document.getElementById('mobilite');
                    var actionHammer = new Hammer(myElement);
                    var actualX = this.ParamService.dormant.X0;
                    var actualY = this.ParamService.dormant.Y0;
                    //action pan
                    actionHammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });
                    //actionHammer.on("panleft panright panup pandown tap press",hammer);
                    //actionHammer.on('pan',hammer);
                    actionHammer.on('pan', function (ev) {
                        //console.log(ev);
                        _this.ParamService.dormant.X0 = actualX + ev.deltaX;
                        _this.ParamService.dormant.Y0 = actualY + ev.deltaY;
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
                    actionGH.get('pan').set({ direction: Hammer.DIRECTION_ALL });
                    actionGH.on('pan', function (gh) {
                        _this.ParamService.dormant.Centre_Larg = actualLarg - gh.deltaX;
                        _this.ParamService.dormant.Centre_Haut = actualHaut - gh.deltaY;
                        _this.ParamService.dormant.Y0 = actualY + gh.deltaY;
                        _this.ParamService.dormant.X0 = actualX + gh.deltaX;
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
                    actionDH.get('pan').set({ direction: Hammer.DIRECTION_ALL });
                    actionDH.on('pan', function (dh) {
                        _this.ParamService.dormant.Centre_Larg = actualLarg + dh.deltaX;
                        _this.ParamService.dormant.Centre_Haut = actualHaut - dh.deltaY;
                        _this.ParamService.dormant.Y0 = actualY + dh.deltaY;
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
                    actionGB.get('pan').set({ direction: Hammer.DIRECTION_ALL });
                    actionGB.on('pan', function (gb) {
                        _this.ParamService.dormant.Centre_Larg = actualLarg - gb.deltaX;
                        _this.ParamService.dormant.Centre_Haut = actualHaut + gb.deltaY;
                        _this.ParamService.dormant.X0 = actualX + gb.deltaX;
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
                    actionDB.get('pan').set({ direction: Hammer.DIRECTION_ALL });
                    actionDB.on('pan', function (db) {
                        _this.ParamService.dormant.Centre_Larg = actualLarg + db.deltaX;
                        _this.ParamService.dormant.Centre_Haut = actualHaut + db.deltaY;
                    });
                    actionDB.on("panend", function (db) {
                        actualLarg = actualLarg + db.deltaX;
                        actualHaut = actualHaut + db.deltaY;
                    });
                    ///////EVENEMNT RESIZE SUR RECT MILIEU HAUT
                    var holderMH = document.getElementById('milieuHaut');
                    var actionMH = new Hammer(holderMH);
                    //action pan
                    actionMH.get('pan').set({ direction: Hammer.DIRECTION_ALL });
                    actionMH.on('pan', function (mh) {
                        _this.ParamService.dormant.Centre_Haut = actualHaut - mh.deltaY;
                        _this.ParamService.dormant.Y0 = actualY + mh.deltaY;
                    });
                    actionMH.on("panend", function (mh) {
                        actualHaut = actualHaut - mh.deltaY;
                        actualY = actualY + mh.deltaY;
                    });
                    ///////EVENEMNT RESIZE SUR RECT MILIEU GAUCHE
                    var holderMG = document.getElementById('milieuGauche');
                    var actionMG = new Hammer(holderMG);
                    //action pan
                    actionMG.get('pan').set({ direction: Hammer.DIRECTION_ALL });
                    actionMG.on('pan', function (mg) {
                        _this.ParamService.dormant.Centre_Larg = actualLarg - mg.deltaX;
                        _this.ParamService.dormant.X0 = actualX + mg.deltaX;
                    });
                    actionMG.on("panend", function (mg) {
                        actualLarg = actualLarg - mg.deltaX;
                        actualX = actualX + mg.deltaX;
                    });
                    ///////EVENEMNT RESIZE SUR RECT MILIEU DROITE
                    var holderMD = document.getElementById('milieuDroite');
                    var actionMD = new Hammer(holderMD);
                    //action pan
                    actionMD.get('pan').set({ direction: Hammer.DIRECTION_ALL });
                    actionMD.on('pan', function (md) {
                        _this.ParamService.dormant.Centre_Larg = actualLarg + md.deltaX;
                    });
                    actionMD.on("panend", function (md) {
                        actualLarg = actualLarg + md.deltaX;
                    });
                    ///////EVENEMNT RESIZE SUR RECT MILIEU BAS
                    var holderMB = document.getElementById('milieuBas');
                    var actionMB = new Hammer(holderMB);
                    //action pan
                    actionMB.get('pan').set({ direction: Hammer.DIRECTION_ALL });
                    actionMB.on('pan', function (mb) {
                        _this.ParamService.dormant.Centre_Haut = actualHaut + mb.deltaY;
                    });
                    actionMB.on("panend", function (mb) {
                        actualHaut = actualHaut + mb.deltaY;
                    });
                    ///////EVENEMNT RESIZE SUR HOLDER CIRCLE ROTATION
                    var holderCIRCLE = document.getElementById('rotation');
                    var actionCIRCLE = new Hammer(holderCIRCLE);
                    //action pan
                    actionCIRCLE.get('pan').set({ direction: Hammer.DIRECTION_ALL });
                    actionCIRCLE.on('pan', function (circ) {
                        console.log(circ);
                        if (circ.angle < 30 && circ.angle > -31)
                            _this.ParamService.angle = circ.angle;
                    });
                    actionCIRCLE.on("panend", function (circ) {
                        //this.ParamService.angle = circ.angle;
                    });
                };
                ContentComponent.hammerInitialized = false;
                ContentComponent = __decorate([
                    core_1.Component({
                        selector: 'content',
                        templateUrl: '../../../dev/simulation/content.component/content.component.html',
                        styleUrls: ['../../../dev/simulation/content.component/content.component.css'],
                        /*providers:[BackgroundService],*/
                        directives: [common_1.FORM_DIRECTIVES, radioFormesType1_component_1.RadioFormesType1Component, defs_component_1.DefsComponent, couleurs_component_1.CouleursComponent],
                    }), 
                    __metadata('design:paramtypes', [BackgroundService_1.BackgroundService, FormeService_1.FormeService, CouleursService_1.CouleursService, parametragesService_1.ParametragesService, HoldersService_1.HoldersService, core_1.ElementRef])
                ], ContentComponent);
                return ContentComponent;
            }());
            exports_1("ContentComponent", ContentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbXVsYXRpb24vY29udGVudC5jb21wb25lbnQvY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQ0E7Z0JBNkJJLDBCQUFtQixXQUE2QixFQUM3QixZQUF5QixFQUN6QixlQUErQixFQUMvQixZQUFnQyxFQUNoQyxjQUE2QixFQUM1QixFQUFhO29CQWxDckMsaUJBdWFDO29CQTFZc0IsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO29CQUM3QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDekIsb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7b0JBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUM1QixPQUFFLEdBQUYsRUFBRSxDQUFXO29CQXhCakMsMkJBQTJCO29CQUNwQixtQkFBYyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsa0JBQWEsR0FBRyxLQUFLLENBQUM7b0JBQ3RCLGNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ2xCLGNBQVMsR0FBRyxLQUFLLENBQUM7b0JBRWxCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO29CQUN4QixlQUFVLEdBQUcsS0FBSyxDQUFDO29CQUNuQixlQUFVLEdBQUcsS0FBSyxDQUFDO29CQW9CdEIsK0RBQStEO29CQUMvRCxtR0FBbUc7b0JBQ25HLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FDbEMsVUFBQSxHQUFHO3dCQUNBLEtBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO3dCQUV2QixpQ0FBaUM7d0JBR2pDLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDMUIsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzs0QkFFMUMsS0FBSSxDQUFDLFlB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LEVBQUUsa0VBQWtFO3dCQUMvRSxTQUFTLEVBQUUsQ0FBQyxpRUFBaUUsQ0FBQzt3QkFDOUUsa0NBQWtDO3dCQUNsQyxVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLHNEQUF5QixFQUFFLDhCQUFhLEVBQUUsc0NBQWlCLENBQUM7cUJBRzdGLENBQUM7O29DQUFBO2dCQXdhRix1QkFBQztZQUFELENBdmFBLEFBdWFDLElBQUE7WUF2YUQsK0NBdWFDLENBQUEiLCJmaWxlIjoic2ltdWxhdGlvbi9jb250ZW50LmNvbXBvbmVudC9jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSByb290IG9uIDE3LzAzLzE2LlxuICovXG5pbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtCYWNrZ3JvdW5kU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvYmFja2dyb3VuZC9CYWNrZ3JvdW5kU2VydmljZSdcbmltcG9ydCB7SG91c2VwaWNDb21wb25lbnR9IGZyb20gXCIuLi8uLi9tZW51L2hvdXNlcGljL2hvdXNlcGljLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtGT1JNX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcbmltcG9ydCB7UmFkaW9Gb3JtZXNUeXBlMUNvbXBvbmVudH0gZnJvbSBcIi4uLy4uL21lbnUvcmFkaW9Gb3JtZXNUeXBlMS9yYWRpb0Zvcm1lc1R5cGUxLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtGb3JtZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9tZW51L0Zvcm1lU2VydmljZVwiO1xuaW1wb3J0IHtDb3VsZXVyc1NlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb3VsZXVycy9Db3VsZXVyc1NlcnZpY2VcIjtcbmltcG9ydCB7UGFyYW1ldHJhZ2VzU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3BhcmFtZXRyYWdlcy9wYXJhbWV0cmFnZXNTZXJ2aWNlXCI7XG5pbXBvcnQge0Rvcm1hbnR9IGZyb20gXCIuLi8uLi9tb2RlbGVzL2Rvcm1hbnQvRG9ybWFudFwiO1xuaW1wb3J0IHtEZWZzQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vbWVudS9jb3VsZXVycy9kZWZzLmNvbXBvbmVudC9kZWZzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb3VsZXVyc0NvbXBvbmVudH0gZnJvbSBcIi4uLy4uL21lbnUvY291bGV1cnMvY291bGV1cnMuY29tcG9uZW50L2NvdWxldXJzLmNvbXBvbmVudFwiO1xuXG5cbi8vaW1wb3J0IHtIYW1tZXJHZXN0dXJlc1BsdWdpbkNvbW1vbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9ldmVudHMvaGFtbWVyX2NvbW1vbic7XG4vL2ltcG9ydCB7SGFtbWVyR2VzdHVyZXNQbHVnaW59IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vZXZlbnRzL2hhbW1lcl9nZXN0dXJlcydcbmltcG9ydCB7aXNQcmVzZW50LCBDT05TVF9FWFBSfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9uLCBXcmFwcGVkRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3QsIE9wYXF1ZVRva2VufSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SG9sZGVyc1NlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9ob2xkZXJzL0hvbGRlcnNTZXJ2aWNlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb250ZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4uLy4uLy4uL2Rldi9zaW11bGF0aW9uL2NvbnRlbnQuY29tcG9uZW50L2NvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuLi8uLi8uLi9kZXYvc2ltdWxhdGlvbi9jb250ZW50LmNvbXBvbmVudC9jb250ZW50LmNvbXBvbmVudC5jc3MnXSxcbiAgICAvKnByb3ZpZGVyczpbQmFja2dyb3VuZFNlcnZpY2VdLCovXG4gICAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFUywgUmFkaW9Gb3JtZXNUeXBlMUNvbXBvbmVudCwgRGVmc0NvbXBvbmVudCwgQ291bGV1cnNDb21wb25lbnRdLFxuXG5cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgc3RhdGljIGhhbW1lckluaXRpYWxpemVkID0gZmFsc2U7XG5cbiAgICAvL3R5cGUxXG4gICAgcHVibGljICB0eXBlMUNob2lzaTpudW1iZXI7XG5cbiAgICAvL2Zvcm1lIEfDqG9cbiAgICBwdWJsaWMgZm9ybWVHZW9DaG9pc2k6YW55O1xuXG4gICAgLy92YXJpYWJsZSBjaGVja2JveCAodHlwZTIpXG4gICAgcHVibGljIEltcG9zdGVGQ2hvaXNpID0gZmFsc2U7XG4gICAgcHVibGljIEFsbGVnZUZDaG9pc2kgPSBmYWxzZTtcbiAgICBwdWJsaWMgTGdGQ2hvaXNpID0gZmFsc2U7XG4gICAgcHVibGljIExkRkNob2lzaSA9IGZhbHNlO1xuXG4gICAgcHVibGljIEltcG9zdGVQRkNob2lzaSA9IGZhbHNlO1xuICAgIHB1YmxpYyBMZ1BGQ2hvaXNpID0gZmFsc2U7XG4gICAgcHVibGljIExkUEZDaG9pc2kgPSBmYWxzZTtcblxuICAgIC8vY291bGV1ciBjaG9pc2lcbiAgICBwdWJsaWMgc3VibWVudVJlY3U6YW55O1xuICAgIHB1YmxpYyB0ZWludGVPckNvbG9yUmVjdTphbnk7XG5cbiAgICAvL29wYWNpdMOoIGNob2lzaVxuICAgIHB1YmxpYyBvcGFjaXRlQ2hvaXNpOmFueTtcbiAgICBwdWJsaWMgcHZSZWN1OmFueTtcblxuXG4gICAgY29uc3RydWN0b3IocHVibGljIEJhY2tTZXJ2aWNlOkJhY2tncm91bmRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBmb3JtZVNlcnZpY2U6Rm9ybWVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBjb3VsZXVyc1NlcnZpY2U6Q291bGV1cnNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBQYXJhbVNlcnZpY2U6UGFyYW1ldHJhZ2VzU2VydmljZSxcbiAgICAgICAgICAgICAgICBwdWJsaWMgaG9sZGVyc1NlcnZpY2U6SG9sZGVyc1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBlbDpFbGVtZW50UmVmKSB7XG5cblxuXG4gICAgICAgIC8vY2hhcmdlbWVudCBSQVBJREUgKE1FVEhPREUgU1VCSkVDVCkgZHUgdHlwZTEgZGFucyB0eXBlMUNob2lzaVxuICAgICAgICAvL3RoaXMuZm9ybWVTZXJ2aWNlLl90eXBlMS5zdWJzY3JpYmUodHlwZTEgPT4gdGhpcy50eXBlMUNob2lzaSA9IHR5cGUxKTsgKHNpIGMgZXN0IGRlY2xhcsOoIHN1YmplY3QpXG4gICAgICAgIHRoaXMuZm9ybWVTZXJ2aWNlLnR5cGUxUyQuc3Vic2NyaWJlXG4gICAgICAgICh2YWwgPT4ge1xuICAgICAgICAgICAgdGhpcy50eXBlMUNob2lzaSA9IHZhbDtcblxuICAgICAgICAgICAgLy8tLS0+IGFwcGxpY2F0aW9uIHN1ciBzaW11bGF0aW9uXG5cblxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZTFDaG9pc2kgPT0gMTAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QYXJhbVNlcnZpY2UuZG9ybWFudC5Qb3J0ZV9PTiA9IDEuMDA7XG5cbiAgICAgICAgICAgICAgICB0aGlzLlBhcmFtU2VydmljZS5kb3JtYW50LkltcG9zdGVfT04gPSAwLjAwO1xuICAgICAgICAgICAgICAgIHRoaXMuUGFyYW1TZXJ2aWNlLmRvcm1hbnQuTEdfT04gPSAwLjAwO1xuICAgICAgICAgICAgICAgIHRoaXMuUGFyYW1TZXJ2aWNlLmRvcm1hbnQuTERfT04gPSAwLjAwO1xuICAgICAgICAgICAgICAgIHRoaXMuUGFyYW1TZXJ2aWNlLmRvcm1hbnQuQWxsZWdlX09OID0gMC4wMDtcbiAgICAgICAgICAgICAgICB0aGlzLlBhcmFtU2VydmljZS5kb3JtYW50LlJlY3RfT04gPSAxLjAwXG5cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZTFDaG9pc2kgPT0gMTAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QYXJhbVNlcnZpY2UuZG9ybWFudC5Qb3J0ZV9PTiA9IDAuMDA7XG4gICAgICAgICAgICAgICAgdGhpcy5QYXJhbVNlcnZpY2UuZG9ybWFudC5JbXBvc3RlX09OID0gMC4wMDtcbiAgICAgICAgICAgICAgICB0aGlzLlBhcmFtU2VydmljZS5kb3JtYW50LkxHX09OID0gMC4wMDtcbiAgICAgICAgICAgICAgICB0aGlzLlBhcmFtU2VydmljZS5kb3JtYW50LkxEX09OID0gMC4wMDtcbiAgICAgICAgICAgICAgICB0aGlzLlBhcmFtU2VydmljZS5kb3JtYW50LkFsbGVnZV9PTiA9IDAuMDA7XG4gICAgICAgICAgICAgICAgdGhpcy5QYXJhbVNlcnZpY2UuZG9ybWFudC5SZWN0X09OID0gMS4wMFxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgLy9jaGFyZ2VtZW50IFJBUElERSAoTUVUSE9ERSBTVUJKRUNUKSBkdSBmb3JtZUdlbyBkYW5zIGZvcm1lR2VvQ2hvaXNpXG5cbiAgICAgICAgdGhpcy5mb3JtZVNlcnZpY2UuZm9ybWVHZW8uc3Vic2NyaWJlXG4gICAgICAgIChmb3JtZUdlbyA9PiB7ICAgICAgICAgICAgICAgLy8tLS0+IGFwcGxpY2F0aW9uIHN1ciBzaW11bGF0aW9uXG5cbiAgICAgICAgICAgIHRoaXMuZm9ybWVHZW9DaG9pc2kgPSBmb3JtZUdlbztcblxuICAgICAgICAgICAgLy8gY2hhcmdlbWVudCBkeW5hbWlxdWUgZGUgbGEgZm9ybWUgR8OobyBjaG9pc2llIChhdmVjIGxhIHZhcmlhYmxlIGNvcnJlc3BvbmRhbnRlIGF1IGRvcm1hbnQpXG4gICAgICAgICAgICB0aGlzLlBhcmFtU2VydmljZS5kb3JtYW50W3RoaXMuZm9ybWVHZW9DaG9pc2ldID0gMS4wMFxuXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9jaGFyZ2VtZW50IFJBUElERSAoTUVUSE9ERSBTVUJKRUNUKSBkZXMgdmFsZXVyIGR1IHR5cGUyOlxuXG5cbiAgICAgICAgdGhpcy5mb3JtZVNlcnZpY2UuSW1wb3N0ZUYuc3Vic2NyaWJlXG4gICAgICAgICh0eXBlMiA9PiB7XG4gICAgICAgICAgICB0aGlzLkltcG9zdGVGQ2hvaXNpID0gdHlwZTI7XG4gICAgICAgICAgICAvLy0tLT4gYXBwbGljYXRpb24gc3VyIHNpbXVsYXRpb25cblxuICAgICAgICAgICAgLy8gSW1wb3N0ZSBzdXIgZmVuZXRyZVxuICAgICAgICAgICAgaWYgKHRoaXMuSW1wb3N0ZUZDaG9pc2kgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuUGFyYW1TZXJ2aWNlLmRvcm1hbnQuSW1wb3N0ZV9PTiA9IDEuMDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLkltcG9zdGVGQ2hvaXNpID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QYXJhbVNlcnZpY2UuZG9ybWFudC5JbXBvc3RlX09OID0gMC4wMFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZm9ybWVTZXJ2aWNlLkFsbGVnZUYuc3Vic2NyaWJlXG4gICAgICAgICh0eXBlMiA9PiB7XG4gICAgICAgICAgICB0aGlzLkFsbGVnZUZDaG9pc2kgPSB0eXBlMjtcblxuICAgICAgICAgICAgLy8gYWxsZWdlIHN1ciBmZW5ldHJlXG4gICAgICAgICAgICBpZiAodGhpcy5BbGxlZ2VGQ2hvaXNpID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBhcmFtU2VydmljZS5kb3JtYW50LkFsbGVnZV9PTiA9IDEuMDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLkFsbGVnZUZDaG9pc2kgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBhcmFtU2VydmljZS5kb3JtYW50LkFsbGVnZV9PTiA9IDAuMDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICB0aGlzLmZvcm1lU2VydmljZS5MZ0Yuc3Vic2NyaWJlXG4gICAgICAgICh0eXBlMiA9PiB7XG4gICAgICAgICAgICB0aGlzLkxnRkNob2lzaSA9IHR5cGUyO1xuXG4gICAgICAgICAgICAvLyBMYXRlcmFsIGdhdWNoZSBzdXIgZmVuZXRyZVxuICAgICAgICAgICAgaWYgKHRoaXMuTGdGQ2hvaXNpID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBhcmFtU2VydmljZS5kb3JtYW50LkxHX09OID0gMS4wMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuTGdGQ2hvaXNpID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QYXJhbVNlcnZpY2UuZG9ybWFudC5MR19PTiA9IDAuMDBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHRoaXMuZm9ybWVTZXJ2aWNlLkxkRi5zdWJzY3JpYmVcbiAgICAgICAgKHR5cGUyID0+IHtcbiAgICAgICAgICAgIHRoaXMuTGRGQ2hvaXNpID0gdHlwZTI7XG5cbiAgICAgICAgICAgIC8vIExhdGVyYWwgZHJvaXRlIHN1ciBmZW5ldHJlXG4gICAgICAgICAgICBpZiAodGhpcy5MZEZDaG9pc2kgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuUGFyYW1TZXJ2aWNlLmRvcm1hbnQuTERfT04gPSAxLjAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5MZEZDaG9pc2kgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBhcmFtU2VydmljZS5kb3JtYW50LkxEX09OID0gMC4wMFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZvcm1lU2VydmljZS5JbXBvc3RlUEYuc3Vic2NyaWJlXG4gICAgICAgICh0eXBlMiA9PiB7XG4gICAgICAgICAgICB0aGlzLkltcG9zdGVQRkNob2lzaSA9IHR5cGUyO1xuXG4gICAgICAgICAgICAvLyBpbXBvc3RlIHN1ciBwb3J0ZSBmZW5ldHJlXG4gICAgICAgICAgICBpZiAodGhpcy5JbXBvc3RlUEZDaG9pc2kgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuUGFyYW1TZXJ2aWNlLmRvcm1hbnQuSW1wb3N0ZV9PTiA9IDEuMDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLkltcG9zdGVQRkNob2lzaSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuUGFyYW1TZXJ2aWNlLmRvcm1hbnQuSW1wb3N0ZV9PTiA9IDAuMDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mb3JtZVNlcnZpY2UuTGdQRi5zdWJzY3JpYmVcbiAgICAgICAgKHR5cGUyID0+IHtcbiAgICAgICAgICAgIHRoaXMuTGdQRkNob2lzaSA9IHR5cGUyO1xuXG4gICAgICAgICAgICAvLyBMYXRlcmFsIGdhdWNoZSBzdXIgcG9ydGUgZmVuZXRyZVxuICAgICAgICAgICAgaWYgKHRoaXMuTGdQRkNob2lzaSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QYXJhbVNlcnZpY2UuZG9ybWFudC5MR19PTiA9IDEuMDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLkxnUEZDaG9pc2kgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBhcmFtU2VydmljZS5kb3JtYW50LkxHX09OID0gMC4wMFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZvcm1lU2VydmljZS5MZFBGLnN1YnNjcmliZVxuICAgICAgICAodHlwZTIgPT4ge1xuICAgICAgICAgICAgdGhpcy5MZFBGQ2hvaXNpID0gdHlwZTI7XG5cbiAgICAgICAgICAgIC8vIExhdGVyYWwgZHJvaXRlIHN1ciBwb3J0ZSBmZW50cmVcbiAgICAgICAgICAgIGlmICh0aGlzLkxkUEZDaG9pc2kgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuUGFyYW1TZXJ2aWNlLmRvcm1hbnQuTERfT04gPSAxLjAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5MZFBGQ2hvaXNpID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QYXJhbVNlcnZpY2UuZG9ybWFudC5MRF9PTiA9IDAuMDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvL2NoYXJnZW1lbnQgUkFQSURFIChNRVRIT0RFIFNVQkpFQ1QpIGR1IHN1Ym1lbnUgY2hvaXNpIGV0IGxhIHRlaW50ZU9yQ29sb3JcbiAgICAgICAgdGhpcy5jb3VsZXVyc1NlcnZpY2Uuc3VibWVudUNvdXJhbnQuc3Vic2NyaWJlKHNiID0+IHRoaXMuc3VibWVudVJlY3UgPSBzYik7XG5cbiAgICAgICAgdGhpcy5jb3VsZXVyc1NlcnZpY2UudGVpbnRlT3JDb2xvci5zdWJzY3JpYmVcbiAgICAgICAgKGNvbG9yID0+IHtcbiAgICAgICAgICAgIHRoaXMudGVpbnRlT3JDb2xvclJlY3UgPSBjb2xvcjtcbiAgICAgICAgICAgIHRoaXMuUGFyYW1TZXJ2aWNlLmRvcm1hbnQuQ291bGV1cl9GaWxsID0gdGhpcy50ZWludGVPckNvbG9yUmVjdTtcblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvL0RGRUlOSVRJT04gREVTIEFDVElPTlMgREVQTEFDRU1FTlQgJiBESU1FTlNJT05ORU1FTlRcblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgICAgICAvLy8vLy8vRVZFTkVNRU5UIERSQUcgT0JKRVQgKGZlbmV0cmUgL3BvcnRlIGZlbmV0cmUpXG5cbiAgICAgICAgdmFyIG15RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JpbGl0ZScpO1xuICAgICAgICB2YXIgYWN0aW9uSGFtbWVyID0gbmV3IEhhbW1lcihteUVsZW1lbnQpO1xuICAgICAgICB2YXIgYWN0dWFsWCA9IHRoaXMuUGFyYW1TZXJ2aWNlLmRvcm1hbnQuWDA7XG4gICAgICAgIHZhciBhY3R1YWxZID0gdGhpcy5QYXJhbVNlcnZpY2UuZG9ybWFudC5ZMDtcblxuICAgICAgICAvL2FjdGlvbiBwYW5cbiAgICAgICAgYWN0aW9uSGFtbWVyLmdldCgncGFuJykuc2V0KHtkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMfSk7XG4gICAgICAgIC8vYWN0aW9uSGFtbWVyLm9uKFwicGFubGVmdCBwYW5yaWdodCBwYW51cCBwYW5kb3duIHRhcCBwcmVzc1wiLGhhbW1lcik7XG4gICAgICAgIC8vYWN0aW9uSGFtbWVyLm9uKCdwYW4nLGhhbW1lcik7XG4gICAgICAgIGFjdGlvbkhhbW1lci5vbigncGFuJywgZXYgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhldik7XG5cbiAgICAgICAgICAgIHRoaXMuUGFyYW1TZXJ2aWNlLmRvcm1hbnQuWDAgPSBhY3R1YWxYICsgZXYuZGVsdGFYO1xuICAgICAgICAgICAgdGhpcy5QYXJhbVNlcnZpY2UuZG9ybWFudC5ZMCA9IGFjdHVhbFkgKyBldi5kZWx0YVk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWN0aW9uSGFtbWVyLm9uKFwicGFuZW5kXCIsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgYWN0dWFsWCA9IGFjdHVhbFggKyBldi5kZWx0YVg7XG4gICAgICAgICAgICBhY3R1YWxZID0gYWN0dWFsWSArIGV2LmRlbHRhWTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9ERUZJTklUSU9OXG4gICAgICAgIHZhciBhY3R1YWxMYXJnID0gdGhpcy5QYXJhbVNlcnZpY2UuZG9ybWFudC5DZW50cmVfTGFyZztcbiAgICAgICAgdmFyIGFjdHVhbEhhdXQgPSB0aGlzLlBhcmFtU2VydmljZS5kb3JtYW50LkNlbnRyZV9IYXV0O1xuXG4gICAgICAgIC8vLy8vLy9FVkVORU1OVCBSRVNJWkUgU1VSIFJFQ1QgR0FVQ0hFIEhBVVRcblxuICAgICAgICB2YXIgaG9sZGVyR0ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2F1Y2hlSGF1dCcpO1xuICAgICAgICB2YXIgYWN0aW9uR0ggPSBuZXcgSGFtbWVyKGhvbGRlckdIKTtcblxuICAgICAgICAvL2FjdGlvbiBwYW5cbiAgICAgICAgYWN0aW9uR0guZ2V0KCdwYW4nKS5zZXQoe2RpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9BTEx9KTtcblxuICAgICAgICBhY3Rpb25HSC5vbigncGFuJywgZ2ggPT4ge1xuXG4gICAgICAgICAgICB0aGlzLlBhcmFtU2VydmljZS5kb3JtYW50LkNlbnRyZV9MYXJnID0gYWN0dWFsTGFyZyAtIGdoLmRlbHRhWDtcbiAgICAgICAgICAgIHRoaXMuUGFyYW1TZXJ2aWNlLmRvcm1hbnQuQ2VudHJlX0hhdXQgPSBhY3R1YWxIYXV0IC0gZ2guZGVsdGFZO1xuICAgICAgICAgICAgdGhpcy5QYXJhbVNlcnZpY2UuZG9ybWFudC5ZMCA9IGFjdHVhbFkgKyBnaC5kZWx0YVk7XG4gICAgICAgICAgICB0aGlzLlBhcmFtU2VydmljZS5kb3JtYW50LlgwID0gYWN0dWFsWCArIGdoLmRlbHRhWDtcblxuICAgICAgICB9KTtcblxuICAgICAgICBhY3Rpb25HSC5vbihcInBhbmVuZFwiLCBmdW5jdGlvbiAoZ2gpIHtcbiAgICAgICAgICAgIGFjdHVhbExhcmcgPSBhY3R1YWxMYXJnIC0gZ2guZGVsdGFYO1xuICAgICAgICAgICAgYWN0dWFsSGF1dCA9IGFjdHVhbEhhdXQgLSBnaC5kZWx0YVk7XG4gICAgICAgICAgICBhY3R1YWxZID0gYWN0dWFsWSArIGdoLmRlbHRhWTtcbiAgICAgICAgICAgIGFjdHVhbFggPSBhY3R1YWxYICsgZ2guZGVsdGFYO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLy8vLy8vRVZFTkVNTlQgUkVTSVpFIFNVUiBSRUNUIERST0lURSBIQVVUXG5cbiAgICAgICAgdmFyIGhvbGRlckRIID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb2l0ZUhhdXQnKTtcbiAgICAgICAgdmFyIGFjdGlvbkRIID0gbmV3IEhhbW1lcihob2xkZXJESCk7XG5cblxuICAgICAgICAvL2FjdGlvbiBwYW5cbiAgICAgICAgYWN0aW9uREguZ2V0KCdwYW4nKS5zZXQoe2RpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9BTEx9KTtcblxuICAgICAgICBhY3Rpb25ESC5vbigncGFuJywgZGggPT4ge1xuICAgICAgICAgICAgdGhpcy5QYXJhbVNlcnZpY2UuZG9ybWFudC5DZW50cmVfTGFyZyA9IGFjdHVhbExhcmcgKyBkaC5kZWx0YVg7XG4gICAgICAgICAgICB0aGlzLlBhcmFtU2VydmljZS5kb3JtYW50LkNlbnRyZV9IYXV0ID0gYWN0dWFsSGF1dCAtIGRoLmRlbHRhWTtcbiAgICAgICAgICAgIHRoaXMuUGFyYW1TZXJ2aWNlLmRvcm1hbnQuWTAgPSBhY3R1YWxZICsgZGguZGVsdGFZO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFjdGlvbkRILm9uKFwicGFuZW5kXCIsIGZ1bmN0aW9uIChkaCkge1xuICAgICAgICAgICAgYWN0dWFsTGFyZyA9IGFjdHVhbExhcmcgKyBkaC5kZWx0YVg7XG4gICAgICAgICAgICBhY3R1YWxIYXV0ID0gYWN0dWFsSGF1dCAtIGRoLmRlbHRhWTtcbiAgICAgICAgICAgIGFjdHVhbFkgPSBhY3R1YWxZICsgZGguZGVsdGFZO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vLy8vLy9FVkVORU1OVCBSRVNJWkUgU1VSIFJFQ1QgR0FVQ0hFIEJBU1xuXG4gICAgICAgIHZhciBob2xkZXJHQiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYXVjaGVCYXMnKTtcbiAgICAgICAgdmFyIGFjdGlvbkdCID0gbmV3IEhhbW1lcihob2xkZXJHQik7XG5cbiAgICAgICAgLy9hY3Rpb24gcGFuXG4gICAgICAgIGFjdGlvbkdCLmdldCgncGFuJykuc2V0KHtkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMfSk7XG5cbiAgICAgICAgYWN0aW9uR0Iub24oJ3BhbicsIGdiID0+IHtcblxuICAgICAgICAgICAgdGhpcy5QYXJhbVNlcnZpY2UuZG9ybWFudC5DZW50cmVfTGFyZyA9IGFjdHVhbExhcmcgLSBnYi5kZWx0YVg7XG4gICAgICAgICAgICB0aGlzLlBhcmFtU2VydmljZS5kb3JtYW50LkNlbnRyZV9IYXV0ID0gYWN0dWFsSGF1dCArIGdiLmRlbHRhWTtcbiAgICAgICAgICAgIHRoaXMuUGFyYW1TZXJ2aWNlLmRvcm1hbnQuWDAgPSBhY3R1YWxYICsgZ2IuZGVsdGFYO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFjdGlvbkdCLm9uKFwicGFuZW5kXCIsIGZ1bmN0aW9uIChnYikge1xuICAgICAgICAgICAgYWN0dWFsTGFyZyA9IGFjdHVhbExhcmcgLSBnYi5kZWx0YVg7XG4gICAgICAgICAgICBhY3R1YWxIYXV0ID0gYWN0dWFsSGF1dCArIGdiLmRlbHRhWTtcbiAgICAgICAgICAgIGFjdHVhbFggPSBhY3R1YWxYICsgZ2IuZGVsdGFYO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vLy8vLy9FVkVORU1OVCBSRVNJWkUgU1VSIFJFQ1QgRFJPSVRFIEJBU1xuXG4gICAgICAgIHZhciBob2xkZXJEQiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9pdGVCYXMnKTtcbiAgICAgICAgdmFyIGFjdGlvbkRCID0gbmV3IEhhbW1lcihob2xkZXJEQik7XG5cblxuICAgICAgICAvL2FjdGlvbiBwYW5cbiAgICAgICAgYWN0aW9uREIuZ2V0KCdwYW4nKS5zZXQoe2RpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9BTEx9KTtcblxuICAgICAgICBhY3Rpb25EQi5vbigncGFuJywgZGIgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLlBhcmFtU2VydmljZS5kb3JtYW50LkNlbnRyZV9MYXJnID0gYWN0dWFsTGFyZyArIGRiLmRlbHRhWDtcbiAgICAgICAgICAgIHRoaXMuUGFyYW1TZXJ2aWNlLmRvcm1hbnQuQ2VudHJlX0hhdXQgPSBhY3R1YWxIYXV0ICsgZGIuZGVsdGFZO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFjdGlvbkRCLm9uKFwicGFuZW5kXCIsIGZ1bmN0aW9uIChkYikge1xuICAgICAgICAgICAgYWN0dWFsTGFyZyA9IGFjdHVhbExhcmcgKyBkYi5kZWx0YVg7XG4gICAgICAgICAgICBhY3R1YWxIYXV0ID0gYWN0dWFsSGF1dCArIGRiLmRlbHRhWTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8vLy8vL0VWRU5FTU5UIFJFU0laRSBTVVIgUkVDVCBNSUxJRVUgSEFVVFxuXG4gICAgICAgIHZhciBob2xkZXJNSCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaWxpZXVIYXV0Jyk7XG4gICAgICAgIHZhciBhY3Rpb25NSCA9IG5ldyBIYW1tZXIoaG9sZGVyTUgpO1xuXG4gICAgICAgIC8vYWN0aW9uIHBhblxuICAgICAgICBhY3Rpb25NSC5nZXQoJ3BhbicpLnNldCh7ZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX0FMTH0pO1xuXG4gICAgICAgIGFjdGlvbk1ILm9uKCdwYW4nLCBtaCA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuUGFyYW1TZXJ2aWNlLmRvcm1hbnQuQ2VudHJlX0hhdXQgPSBhY3R1YWxIYXV0IC0gbWguZGVsdGFZO1xuICAgICAgICAgICAgdGhpcy5QYXJhbVNlcnZpY2UuZG9ybWFudC5ZMCA9IGFjdHVhbFkgKyBtaC5kZWx0YVk7XG5cbiAgICAgICAgfSk7XG4gICAgICAgIGFjdGlvbk1ILm9uKFwicGFuZW5kXCIsIGZ1bmN0aW9uIChtaCkge1xuICAgICAgICAgICAgYWN0dWFsSGF1dCA9IGFjdHVhbEhhdXQgLSBtaC5kZWx0YVk7XG4gICAgICAgICAgICBhY3R1YWxZID0gYWN0dWFsWSArIG1oLmRlbHRhWTtcblxuICAgICAgICB9KTtcblxuICAgICAgICAvLy8vLy8vRVZFTkVNTlQgUkVTSVpFIFNVUiBSRUNUIE1JTElFVSBHQVVDSEVcblxuICAgICAgICB2YXIgaG9sZGVyTUcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlsaWV1R2F1Y2hlJyk7XG4gICAgICAgIHZhciBhY3Rpb25NRyA9IG5ldyBIYW1tZXIoaG9sZGVyTUcpO1xuXG4gICAgICAgIC8vYWN0aW9uIHBhblxuICAgICAgICBhY3Rpb25NRy5nZXQoJ3BhbicpLnNldCh7ZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX0FMTH0pO1xuXG4gICAgICAgIGFjdGlvbk1HLm9uKCdwYW4nLCBtZyA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuUGFyYW1TZXJ2aWNlLmRvcm1hbnQuQ2VudHJlX0xhcmcgPSBhY3R1YWxMYXJnIC0gbWcuZGVsdGFYO1xuICAgICAgICAgICAgdGhpcy5QYXJhbVNlcnZpY2UuZG9ybWFudC5YMCA9IGFjdHVhbFggKyBtZy5kZWx0YVg7XG5cblxuICAgICAgICB9KTtcblxuICAgICAgICBhY3Rpb25NRy5vbihcInBhbmVuZFwiLCBmdW5jdGlvbiAobWcpIHtcbiAgICAgICAgICAgIGFjdHVhbExhcmcgPSBhY3R1YWxMYXJnIC0gbWcuZGVsdGFYO1xuICAgICAgICAgICAgYWN0dWFsWCA9IGFjdHVhbFggKyBtZy5kZWx0YVg7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8vLy8vL0VWRU5FTU5UIFJFU0laRSBTVVIgUkVDVCBNSUxJRVUgRFJPSVRFXG5cbiAgICAgICAgdmFyIGhvbGRlck1EID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbGlldURyb2l0ZScpO1xuICAgICAgICB2YXIgYWN0aW9uTUQgPSBuZXcgSGFtbWVyKGhvbGRlck1EKTtcblxuICAgICAgICAvL2FjdGlvbiBwYW5cbiAgICAgICAgYWN0aW9uTUQuZ2V0KCdwYW4nKS5zZXQoe2RpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9BTEx9KTtcblxuICAgICAgICBhY3Rpb25NRC5vbigncGFuJywgbWQgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLlBhcmFtU2VydmljZS5kb3JtYW50LkNlbnRyZV9MYXJnID0gYWN0dWFsTGFyZyArIG1kLmRlbHRhWDtcblxuICAgICAgICB9KTtcblxuICAgICAgICBhY3Rpb25NRC5vbihcInBhbmVuZFwiLCBmdW5jdGlvbiAobWQpIHtcbiAgICAgICAgICAgIGFjdHVhbExhcmcgPSBhY3R1YWxMYXJnICsgbWQuZGVsdGFYO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLy8vLy8vRVZFTkVNTlQgUkVTSVpFIFNVUiBSRUNUIE1JTElFVSBCQVNcblxuICAgICAgICB2YXIgaG9sZGVyTUIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlsaWV1QmFzJyk7XG4gICAgICAgIHZhciBhY3Rpb25NQiA9IG5ldyBIYW1tZXIoaG9sZGVyTUIpO1xuXG4gICAgICAgIC8vYWN0aW9uIHBhblxuICAgICAgICBhY3Rpb25NQi5nZXQoJ3BhbicpLnNldCh7ZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX0FMTH0pO1xuXG4gICAgICAgIGFjdGlvbk1CLm9uKCdwYW4nLCBtYiA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuUGFyYW1TZXJ2aWNlLmRvcm1hbnQuQ2VudHJlX0hhdXQgPSBhY3R1YWxIYXV0ICsgbWIuZGVsdGFZO1xuICAgICAgICB9KTtcblxuICAgICAgICBhY3Rpb25NQi5vbihcInBhbmVuZFwiLCBmdW5jdGlvbiAobWIpIHtcbiAgICAgICAgICAgIGFjdHVhbEhhdXQgPSBhY3R1YWxIYXV0ICsgbWIuZGVsdGFZO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIC8vLy8vLy9FVkVORU1OVCBSRVNJWkUgU1VSIEhPTERFUiBDSVJDTEUgUk9UQVRJT05cblxuICAgICAgICB2YXIgaG9sZGVyQ0lSQ0xFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uJyk7XG4gICAgICAgIHZhciBhY3Rpb25DSVJDTEUgPSBuZXcgSGFtbWVyKGhvbGRlckNJUkNMRSk7XG5cblxuXG4gICAgICAgIC8vYWN0aW9uIHBhblxuICAgICAgICBhY3Rpb25DSVJDTEUuZ2V0KCdwYW4nKS5zZXQoe2RpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9BTEx9KTtcblxuICAgICAgICBhY3Rpb25DSVJDTEUub24oJ3BhbicsIGNpcmMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coIGNpcmMpO1xuICAgICAgICAgICAgaWYgKGNpcmMuYW5nbGUgPCAzMCAmJiBjaXJjLmFuZ2xlID4gLTMxKVxuICAgICAgICAgICAgICAgIHRoaXMuUGFyYW1TZXJ2aWNlLmFuZ2xlID0gY2lyYy5hbmdsZTsgXG5cblxuICAgICAgICB9KTtcblxuICAgICAgICBhY3Rpb25DSVJDTEUub24oXCJwYW5lbmRcIiwgZnVuY3Rpb24gKGNpcmMpIHtcbiAgICAgICAgICAgIC8vdGhpcy5QYXJhbVNlcnZpY2UuYW5nbGUgPSBjaXJjLmFuZ2xlO1xuXG5cbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
