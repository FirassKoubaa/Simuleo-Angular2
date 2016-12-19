System.register(['angular2/core', './header/header.component', "./menu/sidebar/sidebar.component", "./contact.component/contact.component", "./simulation/content.component/content.component", "./menu/couleurs/couleurs.component/couleurs.component", "./menu/couleurs/defs.component/defs.component"], function(exports_1, context_1) {
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
    var core_1, header_component_1, sidebar_component_1, contact_component_1, content_component_1, couleurs_component_1, defs_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (content_component_1_1) {
                content_component_1 = content_component_1_1;
            },
            function (couleurs_component_1_1) {
                couleurs_component_1 = couleurs_component_1_1;
            },
            function (defs_component_1_1) {
                defs_component_1 = defs_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: '../dev/app.component.html',
                        styleUrls: ['../dev/app.component.css'],
                        directives: [header_component_1.HeaderComponent, sidebar_component_1.SidebarComponent, content_component_1.ContentComponent, contact_component_1.ContactComponent, couleurs_component_1.CouleursComponent, defs_component_1.DefsComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBQUE7Z0JBSUEsQ0FBQztnQkFYRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxLQUFLO3dCQUNmLFdBQVcsRUFBRSwyQkFBMkI7d0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO3dCQUN2QyxVQUFVLEVBQUMsQ0FBQyxrQ0FBZSxFQUFDLG9DQUFnQixFQUFDLG9DQUFnQixFQUFDLG9DQUFnQixFQUFDLHNDQUFpQixFQUFDLDhCQUFhLENBQUM7cUJBRWxILENBQUM7O2dDQUFBO2dCQUtGLG1CQUFDO1lBQUQsQ0FKQSxBQUlDLElBQUE7WUFKRCx1Q0FJQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCdcbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICcuLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlci5kJztcbmltcG9ydCB7U2lkZWJhckNvbXBvbmVudH0gZnJvbSBcIi4vbWVudS9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbnRhY3RDb21wb25lbnR9IGZyb20gXCIuL2NvbnRhY3QuY29tcG9uZW50L2NvbnRhY3QuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbnRlbnRDb21wb25lbnR9IGZyb20gXCIuL3NpbXVsYXRpb24vY29udGVudC5jb21wb25lbnQvY29udGVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7Q291bGV1cnNDb21wb25lbnR9IGZyb20gXCIuL21lbnUvY291bGV1cnMvY291bGV1cnMuY29tcG9uZW50L2NvdWxldXJzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtEZWZzQ29tcG9uZW50fSBmcm9tIFwiLi9tZW51L2NvdWxldXJzL2RlZnMuY29tcG9uZW50L2RlZnMuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4uL2Rldi9hcHAuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuLi9kZXYvYXBwLmNvbXBvbmVudC5jc3MnXSxcbiAgICBkaXJlY3RpdmVzOltIZWFkZXJDb21wb25lbnQsU2lkZWJhckNvbXBvbmVudCxDb250ZW50Q29tcG9uZW50LENvbnRhY3RDb21wb25lbnQsQ291bGV1cnNDb21wb25lbnQsRGVmc0NvbXBvbmVudF1cblxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
