System.register(['angular2/core', "./switchAction/switchaction.component"], function(exports_1, context_1) {
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
    var core_1, switchaction_component_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (switchaction_component_1_1) {
                switchaction_component_1 = switchaction_component_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                }
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'header',
                        templateUrl: '../dev/header/header.component.html',
                        styleUrls: ['../dev/header/header.component.css'],
                        directives: [switchaction_component_1.SwitchActionComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUFBO2dCQUVBLENBQUM7Z0JBVEQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsV0FBVyxFQUFFLHFDQUFxQzt3QkFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7d0JBQ2pELFVBQVUsRUFBQyxDQUFDLDhDQUFxQixDQUFDO3FCQUVyQyxDQUFDOzttQ0FBQTtnQkFHRixzQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsNkNBRUMsQ0FBQSIsImZpbGUiOiJoZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSByb290IG9uIDIzLzAyLzE2LlxuICovXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge1N3aXRjaEFjdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vc3dpdGNoQWN0aW9uL3N3aXRjaGFjdGlvbi5jb21wb25lbnRcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hlYWRlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuLi9kZXYvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4uL2Rldi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MnXSxcbiAgICBkaXJlY3RpdmVzOltTd2l0Y2hBY3Rpb25Db21wb25lbnRdXG5cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
