System.register(['angular2/core', "angular2/http", 'rxjs/add/operator/map', "rxjs/Subject", "rxjs/Rx"], function(exports_1, context_1) {
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
    var core_1, http_1, Subject_1, Rx_1;
    var CouleursService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            CouleursService = (function () {
                //////////////////////////////////////
                function CouleursService(http) {
                    var _this = this;
                    this.http = http;
                    /* METHODE RAPIDE DE RECUPERATION du Sous Menu Couleurs (SUBJECT ) selectionnè */
                    this.menuCouleursChoisi = new Subject_1.Subject();
                    /* Recuperer le couleur selectionne */
                    //public couleurChoisi = new Subject();
                    this.submenuCourant = new Subject_1.Subject();
                    //public teinteOrColor=new Subject();
                    this.teinteOrColor = new Rx_1.BehaviorSubject("#3C599B");
                    this.compteur = 2;
                    this.http = http;
                    this.http.get('dev/JsonData/couleurs.json').map(function (res) { return res.json(); }).subscribe(function (couleurs) { return _this.colors_list = couleurs; });
                }
                /*parsing  */
                CouleursService.prototype.getjson = function () {
                    return this.http.get('dev/JsonData/couleurs.json')
                        .map(function (res) { return res.json(); });
                };
                CouleursService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CouleursService);
                return CouleursService;
            }());
            exports_1("CouleursService", CouleursService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NvdWxldXJzL0NvdWxldXJzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFxQkksc0NBQXNDO2dCQUV0Qyx5QkFBbUIsSUFBUztvQkF2QmhDLGlCQXdDQztvQkFqQnNCLFNBQUksR0FBSixJQUFJLENBQUs7b0JBbkI1QixpRkFBaUY7b0JBRTFFLHVCQUFrQixHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO29CQUUxQyxzQ0FBc0M7b0JBRXRDLHVDQUF1QztvQkFDaEMsbUJBQWMsR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztvQkFFdEMscUNBQXFDO29CQUM5QixrQkFBYSxHQUEyQixJQUFJLG9CQUFlLENBQVMsU0FBUyxDQUFDLENBQUM7b0JBRy9FLGFBQVEsR0FBVSxDQUFDLENBQUM7b0JBUXZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFBO2dCQUV6SCxDQUFDO2dCQUVELGFBQWE7Z0JBQ2IsaUNBQU8sR0FBUDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUM7eUJBQzdDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQTtnQkFDL0IsQ0FBQztnQkFuQ0w7b0JBQUMsaUJBQVUsRUFBRTs7bUNBQUE7Z0JBeUNiLHNCQUFDO1lBQUQsQ0F4Q0EsQUF3Q0MsSUFBQTtZQXhDRCw2Q0F3Q0MsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9jb3VsZXVycy9Db3VsZXVyc1NlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcm9vdCBvbiAwMS8wNC8xNi5cbiAqL1xuaW1wb3J0IHtJbmplY3RhYmxlLEV2ZW50RW1pdHRlcixPdXRwdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tIFwicnhqcy9TdWJqZWN0XCI7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSBcInJ4anMvUnhcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ291bGV1cnNTZXJ2aWNlIHtcblxuXG5cbiAgICAvKiBNRVRIT0RFIFJBUElERSBERSBSRUNVUEVSQVRJT04gZHUgU291cyBNZW51IENvdWxldXJzIChTVUJKRUNUICkgc2VsZWN0aW9ubsOoICovXG5cbiAgICBwdWJsaWMgbWVudUNvdWxldXJzQ2hvaXNpID0gbmV3IFN1YmplY3QoKTtcblxuICAgIC8qIFJlY3VwZXJlciBsZSBjb3VsZXVyIHNlbGVjdGlvbm5lICovXG5cbiAgICAvL3B1YmxpYyBjb3VsZXVyQ2hvaXNpID0gbmV3IFN1YmplY3QoKTtcbiAgICBwdWJsaWMgc3VibWVudUNvdXJhbnQgPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgLy9wdWJsaWMgdGVpbnRlT3JDb2xvcj1uZXcgU3ViamVjdCgpO1xuICAgIHB1YmxpYyB0ZWludGVPckNvbG9yOkJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KFwiIzNDNTk5QlwiKTtcblxuXG4gICAgcHVibGljIGNvbXB0ZXVyOm51bWJlciA9IDI7XG4gICAgcHVibGljIGNvbG9yc19saXN0O1xuXG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6SHR0cCkge1xuXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gICAgICAgIHRoaXMuaHR0cC5nZXQoJ2Rldi9Kc29uRGF0YS9jb3VsZXVycy5qc29uJykubWFwKHJlcyA9PiByZXMuanNvbigpKS5zdWJzY3JpYmUoY291bGV1cnMgPT4gdGhpcy5jb2xvcnNfbGlzdCA9IGNvdWxldXJzKVxuXG4gICAgfVxuXG4gICAgLypwYXJzaW5nICAqL1xuICAgIGdldGpzb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdkZXYvSnNvbkRhdGEvY291bGV1cnMuanNvbicpXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgIH1cblxuXG4gICAgLyphY3Rpb25zKi9cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
