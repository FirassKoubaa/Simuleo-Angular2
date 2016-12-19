System.register(['angular2/core', "../../../services/couleurs/CouleursService"], function(exports_1, context_1) {
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
    var core_1, CouleursService_1;
    var CouleursComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CouleursService_1_1) {
                CouleursService_1 = CouleursService_1_1;
            }],
        execute: function() {
            CouleursComponent = (function () {
                function CouleursComponent(CouleurService) {
                    var _this = this;
                    this.CouleurService = CouleurService;
                    //charger le nombre du menu couleur selectionne - ceci pourrait etre place dans ngOnInit()
                    this.CouleurService.menuCouleursChoisi.subscribe(function (color) { return _this.menuCouleursRecu = color; });
                }
                CouleursComponent.prototype.ngOnInit = function () {
                };
                CouleursComponent.prototype.ngOnDestroy = function () {
                };
                //envoie du couleur (teinte) selectionnee
                CouleursComponent.prototype.onSelectColor = function (submenu, selected) {
                    this.CouleurService.submenuCourant.next(submenu);
                    this.CouleurService.teinteOrColor.next(selected);
                    console.log("couleur comp ts " + selected);
                };
                CouleursComponent = __decorate([
                    core_1.Component({
                        selector: 'couleurs',
                        templateUrl: '../../dev/menu/couleurs/couleurs.component/couleurs.component.html',
                        styleUrls: ['../../dev/menu/couleurs/couleurs.component/couleurs.component.css'],
                    }), 
                    __metadata('design:paramtypes', [CouleursService_1.CouleursService])
                ], CouleursComponent);
                return CouleursComponent;
            }());
            exports_1("CouleursComponent", CouleursComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUvY291bGV1cnMvY291bGV1cnMuY29tcG9uZW50L2NvdWxldXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFNSSwyQkFBbUIsY0FBOEI7b0JBTnJELGlCQTRCQztvQkF0QnNCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtvQkFFN0MsMEZBQTBGO29CQUMxRixJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLEVBQTdCLENBQTZCLENBQUMsQ0FBQztnQkFFN0YsQ0FBQztnQkFFRCxvQ0FBUSxHQUFSO2dCQUNBLENBQUM7Z0JBRUQsdUNBQVcsR0FBWDtnQkFFQSxDQUFDO2dCQUVELHlDQUF5QztnQkFDekMseUNBQWEsR0FBYixVQUFjLE9BQVcsRUFBRSxRQUFZO29CQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2pELElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFFakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsQ0FBQztnQkFDL0MsQ0FBQztnQkFsQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsV0FBVyxFQUFFLG9FQUFvRTt3QkFDakYsU0FBUyxFQUFFLENBQUMsbUVBQW1FLENBQUM7cUJBSW5GLENBQUM7O3FDQUFBO2dCQTZCRix3QkFBQztZQUFELENBNUJBLEFBNEJDLElBQUE7WUE1QkQsaURBNEJDLENBQUEiLCJmaWxlIjoibWVudS9jb3VsZXVycy9jb3VsZXVycy5jb21wb25lbnQvY291bGV1cnMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHJvb3Qgb24gMTYvMDMvMTYuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcblxuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtDb3VsZXVyc1NlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9jb3VsZXVycy9Db3VsZXVyc1NlcnZpY2VcIjtcbmltcG9ydCB7RGVmc0NvbXBvbmVudH0gZnJvbSBcIi4uL2RlZnMuY29tcG9uZW50L2RlZnMuY29tcG9uZW50XCI7XG5pbXBvcnQge1NpZGViYXJDb21wb25lbnR9IGZyb20gXCIuLi8uLi9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbnRlbnRDb21wb25lbnR9IGZyb20gXCIuLi8uLi8uLi9zaW11bGF0aW9uL2NvbnRlbnQuY29tcG9uZW50L2NvbnRlbnQuY29tcG9uZW50XCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb3VsZXVycycsXG4gICAgdGVtcGxhdGVVcmw6ICcuLi8uLi9kZXYvbWVudS9jb3VsZXVycy9jb3VsZXVycy5jb21wb25lbnQvY291bGV1cnMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuLi8uLi9kZXYvbWVudS9jb3VsZXVycy9jb3VsZXVycy5jb21wb25lbnQvY291bGV1cnMuY29tcG9uZW50LmNzcyddLFxuICAgIC8vZGlyZWN0aXZlczogW0RlZnNDb21wb25lbnRdXG5cblxufSlcbmV4cG9ydCBjbGFzcyBDb3VsZXVyc0NvbXBvbmVudCB7XG5cblxuICAgIC8vbWVudSBjb3VsZXVyIHNlbGVjdGlvbm5lXG4gICAgbWVudUNvdWxldXJzUmVjdTphbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgQ291bGV1clNlcnZpY2U6Q291bGV1cnNTZXJ2aWNlKSB7XG5cbiAgICAgICAgLy9jaGFyZ2VyIGxlIG5vbWJyZSBkdSBtZW51IGNvdWxldXIgc2VsZWN0aW9ubmUgLSBjZWNpIHBvdXJyYWl0IGV0cmUgcGxhY2UgZGFucyBuZ09uSW5pdCgpXG4gICAgICAgIHRoaXMuQ291bGV1clNlcnZpY2UubWVudUNvdWxldXJzQ2hvaXNpLnN1YnNjcmliZShjb2xvciA9PiB0aGlzLm1lbnVDb3VsZXVyc1JlY3UgPSBjb2xvcik7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcblxuICAgIH1cblxuICAgIC8vZW52b2llIGR1IGNvdWxldXIgKHRlaW50ZSkgc2VsZWN0aW9ubmVlXG4gICAgb25TZWxlY3RDb2xvcihzdWJtZW51OmFueSwgc2VsZWN0ZWQ6YW55KSB7XG4gICAgICAgIHRoaXMuQ291bGV1clNlcnZpY2Uuc3VibWVudUNvdXJhbnQubmV4dChzdWJtZW51KTtcbiAgICAgICAgdGhpcy5Db3VsZXVyU2VydmljZS50ZWludGVPckNvbG9yLm5leHQoc2VsZWN0ZWQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY291bGV1ciBjb21wIHRzIFwiICsgc2VsZWN0ZWQpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
