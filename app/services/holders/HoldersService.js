System.register(['angular2/core', "angular2/http", 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var HoldersService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            HoldersService = (function () {
                //////////////////////////////////////
                function HoldersService(http) {
                    var _this = this;
                    this.http = http;
                    this.http = http;
                    this.http.get('dev/JsonData/couleurs.json').map(function (res) { return res.json(); }).subscribe(function (holder) { return _this.holders_list = holder; });
                }
                /*parsing  */
                HoldersService.prototype.getjson = function () {
                    return this.http.get('dev/JsonData/holders.json')
                        .map(function (res) { return res.json(); });
                };
                HoldersService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HoldersService);
                return HoldersService;
            }());
            exports_1("HoldersService", HoldersService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2hvbGRlcnMvSG9sZGVyc1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBTUksc0NBQXNDO2dCQUV0Qyx3QkFBbUIsSUFBUztvQkFSaEMsaUJBc0JDO29CQWRzQixTQUFJLEdBQUosSUFBSSxDQUFLO29CQUV4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBRyxNQUFNLEVBQTFCLENBQTBCLENBQUMsQ0FBQTtnQkFFdEgsQ0FBQztnQkFFRCxhQUFhO2dCQUNiLGdDQUFPLEdBQVA7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDO3lCQUM1QyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUE7Z0JBQy9CLENBQUM7Z0JBcEJMO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQXVCYixxQkFBQztZQUFELENBdEJBLEFBc0JDLElBQUE7WUF0QkQsMkNBc0JDLENBQUEiLCJmaWxlIjoic2VydmljZXMvaG9sZGVycy9Ib2xkZXJzU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBmaXJhcyBvbiAyMS8wNC8xNi5cbiAqL1xuaW1wb3J0IHtJbmplY3RhYmxlLEV2ZW50RW1pdHRlcixPdXRwdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tIFwicnhqcy9TdWJqZWN0XCI7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSBcInJ4anMvUnhcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSG9sZGVyc1NlcnZpY2Uge1xuXG4gICAgcHVibGljIGhvbGRlcnNfbGlzdDtcblxuXG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6SHR0cCkge1xuXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gICAgICAgIHRoaXMuaHR0cC5nZXQoJ2Rldi9Kc29uRGF0YS9jb3VsZXVycy5qc29uJykubWFwKHJlcyA9PiByZXMuanNvbigpKS5zdWJzY3JpYmUoaG9sZGVyID0+IHRoaXMuaG9sZGVyc19saXN0ID0gaG9sZGVyKVxuXG4gICAgfVxuXG4gICAgLypwYXJzaW5nICAqL1xuICAgIGdldGpzb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdkZXYvSnNvbkRhdGEvaG9sZGVycy5qc29uJylcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgfVxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
