System.register(['angular2/core', "../../services/background/BackgroundService", "ng2-material/components/switcher/switch"], function(exports_1, context_1) {
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
    var core_1, BackgroundService_1, switch_1;
    var SwitchActionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (BackgroundService_1_1) {
                BackgroundService_1 = BackgroundService_1_1;
            },
            function (switch_1_1) {
                switch_1 = switch_1_1;
            }],
        execute: function() {
            SwitchActionComponent = (function () {
                function SwitchActionComponent(BackService) {
                    this.BackService = BackService;
                    this.data = {
                        sw: true,
                    };
                    this.message = 'false';
                }
                SwitchActionComponent.prototype.onChange = function (cbState) {
                    this.message = cbState;
                };
                ;
                SwitchActionComponent.prototype.ngOnInit = function () {
                };
                SwitchActionComponent.prototype.ngOnDestroy = function () {
                };
                //transfert de l etait de vue ext ou int au service background
                SwitchActionComponent.prototype.onSwitch = function (selected) {
                    this.BackService.vue.next(selected);
                    if (selected == true) {
                        this.BackService.imageChange('../../../dev/backgrounds/int4.png');
                    }
                    else {
                        this.BackService.imageChange('../../../dev/backgrounds/ext1.jpg');
                    }
                };
                ;
                SwitchActionComponent = __decorate([
                    core_1.Component({
                        selector: 'switch',
                        templateUrl: '../dev/header/switchAction/switchaction.component.html',
                        styleUrls: ['../dev/header/switchAction/switchaction.component.css'],
                        directives: [switch_1.MdSwitch]
                    }), 
                    __metadata('design:paramtypes', [BackgroundService_1.BackgroundService])
                ], SwitchActionComponent);
                return SwitchActionComponent;
            }());
            exports_1("SwitchActionComponent", SwitchActionComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9zd2l0Y2hBY3Rpb24vc3dpdGNoYWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CQTtnQkFXSSwrQkFBbUIsV0FBOEI7b0JBQTlCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtvQkFUMUMsU0FBSSxHQUFRO3dCQUNmLEVBQUUsRUFBRSxJQUFJO3FCQUVYLENBQUM7b0JBQ0ssWUFBTyxHQUFHLE9BQU8sQ0FBQztnQkFLK0IsQ0FBQztnQkFKbEQsd0NBQVEsR0FBZixVQUFnQixPQUFPO29CQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDM0IsQ0FBQzs7Z0JBSUQsd0NBQVEsR0FBUjtnQkFDQSxDQUFDO2dCQUVELDJDQUFXLEdBQVg7Z0JBRUEsQ0FBQztnQkFFRCw4REFBOEQ7Z0JBQ3ZELHdDQUFRLEdBQWYsVUFBZ0IsUUFBWTtvQkFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNwQyxFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQzt3QkFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsbUNBQW1DLENBQUMsQ0FBQTtvQkFDakUsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFBO29CQUNyRSxDQUFDO2dCQUVMLENBQUM7O2dCQXJDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixXQUFXLEVBQUUsd0RBQXdEO3dCQUNyRSxTQUFTLEVBQUUsQ0FBQyx1REFBdUQsQ0FBQzt3QkFDcEUsVUFBVSxFQUFDLENBQUMsaUJBQVEsQ0FBQztxQkFFeEIsQ0FBQzs7eUNBQUE7Z0JBbUNGLDRCQUFDO1lBQUQsQ0FsQ0EsQUFrQ0MsSUFBQTtZQWxDRCx5REFrQ0MsQ0FBQSIsImZpbGUiOiJoZWFkZXIvc3dpdGNoQWN0aW9uL3N3aXRjaGFjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcm9vdCBvbiAxNC8wMy8xNi5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTLE1BVEVSSUFMX1BST1ZJREVSU30gZnJvbSAnbmcyLW1hdGVyaWFsL2FsbCc7XG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge09uRGVzdHJveX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7T25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtCYWNrZ3JvdW5kU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2JhY2tncm91bmQvQmFja2dyb3VuZFNlcnZpY2VcIjtcbmltcG9ydCB7TWRTd2l0Y2h9IGZyb20gXCJuZzItbWF0ZXJpYWwvY29tcG9uZW50cy9zd2l0Y2hlci9zd2l0Y2hcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3N3aXRjaCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuLi9kZXYvaGVhZGVyL3N3aXRjaEFjdGlvbi9zd2l0Y2hhY3Rpb24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuLi9kZXYvaGVhZGVyL3N3aXRjaEFjdGlvbi9zd2l0Y2hhY3Rpb24uY29tcG9uZW50LmNzcyddLFxuICAgIGRpcmVjdGl2ZXM6W01kU3dpdGNoXVxuXG59KVxuZXhwb3J0IGNsYXNzIFN3aXRjaEFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95e1xuXG4gICAgcHVibGljIGRhdGE6IGFueSA9IHtcbiAgICAgICAgc3c6IHRydWUsXG5cbiAgICB9O1xuICAgIHB1YmxpYyBtZXNzYWdlID0gJ2ZhbHNlJztcbiAgICBwdWJsaWMgb25DaGFuZ2UoY2JTdGF0ZSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBjYlN0YXRlO1xuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgQmFja1NlcnZpY2U6IEJhY2tncm91bmRTZXJ2aWNlKSB7ICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKXtcblxuICAgIH1cblxuICAgIC8vdHJhbnNmZXJ0IGRlIGwgZXRhaXQgZGUgdnVlIGV4dCBvdSBpbnQgYXUgc2VydmljZSBiYWNrZ3JvdW5kXG4gICAgcHVibGljIG9uU3dpdGNoKHNlbGVjdGVkOmFueSl7XG4gICAgICAgIHRoaXMuQmFja1NlcnZpY2UudnVlLm5leHQoc2VsZWN0ZWQpO1xuICAgICAgICBpZiAoc2VsZWN0ZWQ9PXRydWUpe1xuICAgICAgICB0aGlzLkJhY2tTZXJ2aWNlLmltYWdlQ2hhbmdlKCcuLi8uLi8uLi9kZXYvYmFja2dyb3VuZHMvaW50NC5wbmcnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5CYWNrU2VydmljZS5pbWFnZUNoYW5nZSgnLi4vLi4vLi4vZGV2L2JhY2tncm91bmRzL2V4dDEuanBnJylcbiAgICAgICAgfVxuXG4gICAgfTtcblxuXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
