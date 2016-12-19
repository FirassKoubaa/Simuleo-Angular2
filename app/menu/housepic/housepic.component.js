System.register(['angular2/core', "../../services/background/BackgroundService", "../../simulation/content.component/content.component", "angular2/http", 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, BackgroundService_1, content_component_1, http_1;
    var HousepicComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (BackgroundService_1_1) {
                BackgroundService_1 = BackgroundService_1_1;
            },
            function (content_component_1_1) {
                content_component_1 = content_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            HousepicComponent = (function () {
                function HousepicComponent(BackService) {
                    var _this = this;
                    this.BackService = BackService;
                    //chargement de l'etat du switch vue
                    this.BackService.vue.subscribe(function (vue) { return _this.VueChoisie = vue; });
                }
                HousepicComponent.prototype.onSelectImage = function (lien) {
                    console.log("housepic" + lien.toString());
                    this.BackService.imageChange(lien);
                };
                HousepicComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.BackService.getjson().subscribe(function (people) { return _this.images_list = people; });
                };
                HousepicComponent.prototype.ngOnDestroy = function () {
                };
                HousepicComponent = __decorate([
                    core_1.Component({
                        selector: 'housepic',
                        templateUrl: '../dev/menu/housepic/housepic.component.html',
                        styleUrls: ['../dev/menu/housepic/housepic.component.css'],
                        /*providers:[BackgroundService],*/
                        viewProviders: [http_1.HTTP_PROVIDERS],
                        directives: [content_component_1.ContentComponent]
                    }), 
                    __metadata('design:paramtypes', [BackgroundService_1.BackgroundService])
                ], HousepicComponent);
                return HousepicComponent;
            }());
            exports_1("HousepicComponent", HousepicComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUvaG91c2VwaWMvaG91c2VwaWMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNCQTtnQkFLSSwyQkFBbUIsV0FBNkI7b0JBTHBELGlCQXdCQztvQkFuQnNCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtvQkFDNUMsb0NBQW9DO29CQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBckIsQ0FBcUIsQ0FBQyxDQUFBO2dCQUVoRSxDQUFDO2dCQUVELHlDQUFhLEdBQWIsVUFBYyxJQUFJO29CQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkMsQ0FBQztnQkFFRCxvQ0FBUSxHQUFSO29CQUFBLGlCQUVDO29CQURHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLEVBQXpCLENBQXlCLENBQUMsQ0FBQztnQkFDOUUsQ0FBQztnQkFFRCx1Q0FBVyxHQUFYO2dCQUVBLENBQUM7Z0JBL0JMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFdBQVcsRUFBRSw4Q0FBOEM7d0JBQzNELFNBQVMsRUFBRSxDQUFDLDZDQUE2QyxDQUFDO3dCQUMxRCxrQ0FBa0M7d0JBQ2xDLGFBQWEsRUFBRSxDQUFDLHFCQUFjLENBQUM7d0JBQy9CLFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO3FCQUVqQyxDQUFDOztxQ0FBQTtnQkF5QkYsd0JBQUM7WUFBRCxDQXhCQSxBQXdCQyxJQUFBO1lBeEJELGlEQXdCQyxDQUFBIiwiZmlsZSI6Im1lbnUvaG91c2VwaWMvaG91c2VwaWMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuXG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge0JhY2tncm91bmRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYmFja2dyb3VuZC9CYWNrZ3JvdW5kU2VydmljZVwiO1xuaW1wb3J0IHtDb250ZW50Q29tcG9uZW50fSBmcm9tIFwiLi4vLi4vc2ltdWxhdGlvbi9jb250ZW50LmNvbXBvbmVudC9jb250ZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge09uRGVzdHJveX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7SHR0cH0gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdob3VzZXBpYycsXG4gICAgdGVtcGxhdGVVcmw6ICcuLi9kZXYvbWVudS9ob3VzZXBpYy9ob3VzZXBpYy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4uL2Rldi9tZW51L2hvdXNlcGljL2hvdXNlcGljLmNvbXBvbmVudC5jc3MnXSxcbiAgICAvKnByb3ZpZGVyczpbQmFja2dyb3VuZFNlcnZpY2VdLCovXG4gICAgdmlld1Byb3ZpZGVyczogW0hUVFBfUFJPVklERVJTXSxcbiAgICBkaXJlY3RpdmVzOiBbQ29udGVudENvbXBvbmVudF1cblxufSlcbmV4cG9ydCBjbGFzcyBIb3VzZXBpY0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGltYWdlc19saXN0O1xuICAgIFZ1ZUNob2lzaWU6YW55O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIEJhY2tTZXJ2aWNlOkJhY2tncm91bmRTZXJ2aWNlKSB7XG4gICAgICAgIC8vY2hhcmdlbWVudCBkZSBsJ2V0YXQgZHUgc3dpdGNoIHZ1ZVxuICAgICAgICB0aGlzLkJhY2tTZXJ2aWNlLnZ1ZS5zdWJzY3JpYmUodnVlID0+IHRoaXMuVnVlQ2hvaXNpZSA9IHZ1ZSlcblxuICAgIH1cblxuICAgIG9uU2VsZWN0SW1hZ2UobGllbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhvdXNlcGljXCIgKyBsaWVuLnRvU3RyaW5nKCkpO1xuICAgICAgICB0aGlzLkJhY2tTZXJ2aWNlLmltYWdlQ2hhbmdlKGxpZW4pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLkJhY2tTZXJ2aWNlLmdldGpzb24oKS5zdWJzY3JpYmUocGVvcGxlID0+IHRoaXMuaW1hZ2VzX2xpc3QgPSBwZW9wbGUpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuXG4gICAgfVxuXG59XG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
