///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
System.register(['angular2/platform/browser', "./app.component", "angular2/router", "./services/background/BackgroundService", "angular2/http", "angular2/core", "./services/menu/FormeService", "./services/couleurs/CouleursService", "./services/parametrages/parametragesService", "./services/menu/SidebarMenuService", "ng2-material/all", "./services/holders/HoldersService"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, router_1, BackgroundService_1, router_2, http_1, core_1, FormeService_1, CouleursService_1, parametragesService_1, SidebarMenuService_1, router_3, all_1, HoldersService_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
                router_3 = router_1_1;
            },
            function (BackgroundService_1_1) {
                BackgroundService_1 = BackgroundService_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
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
            function (SidebarMenuService_1_1) {
                SidebarMenuService_1 = SidebarMenuService_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (HoldersService_1_1) {
                HoldersService_1 = HoldersService_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS,
                BackgroundService_1.BackgroundService, FormeService_1.FormeService, CouleursService_1.CouleursService, parametragesService_1.ParametragesService, SidebarMenuService_1.SidebarMenuService, HoldersService_1.HoldersService, all_1.MATERIAL_PROVIDERS,
                core_1.provide(router_2.LocationStrategy, { useClass: router_2.HashLocationStrategy }),
                core_1.provide(router_3.APP_BASE_HREF, { useValue: '/' })
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0VBQW9FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJwRSxtQkFBUyxDQUFDLDRCQUFZLEVBQUMsQ0FBQyx5QkFBZ0IsRUFBQyxxQkFBYztnQkFDbkQscUNBQWlCLEVBQUMsMkJBQVksRUFBQyxpQ0FBZSxFQUFDLHlDQUFtQixFQUFDLHVDQUFrQixFQUFDLCtCQUFjLEVBQUMsd0JBQWtCO2dCQUN2SCxjQUFPLENBQUMseUJBQWdCLEVBQUUsRUFBRSxRQUFRLEVBQUUsNkJBQW9CLEVBQUUsQ0FBQztnQkFDN0QsY0FBTyxDQUFDLHNCQUFhLEVBQUUsRUFBQyxRQUFRLEVBQUcsR0FBRyxFQUFFLENBQUM7YUFDNUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XG5cbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge1JPVVRFUl9QUk9WSURFUlN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbi8vaW1wb3J0IHtNQVRFUklBTF9QUk9WSURFUlN9IGZyb20gJ25nMi1tYXRlcmlhbC9hbGwnO1xuaW1wb3J0IHtCYWNrZ3JvdW5kU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvYmFja2dyb3VuZC9CYWNrZ3JvdW5kU2VydmljZVwiO1xuaW1wb3J0IHtMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneX0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQge3Byb3ZpZGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0Zvcm1lU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvbWVudS9Gb3JtZVNlcnZpY2VcIjtcbmltcG9ydCB7Q291bGV1cnNTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9jb3VsZXVycy9Db3VsZXVyc1NlcnZpY2VcIjtcbmltcG9ydCB7UGFyYW1ldHJhZ2VzU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvcGFyYW1ldHJhZ2VzL3BhcmFtZXRyYWdlc1NlcnZpY2VcIjtcbmltcG9ydCB7U2lkZWJhck1lbnVTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9tZW51L1NpZGViYXJNZW51U2VydmljZVwiO1xuaW1wb3J0IHtBUFBfQkFTRV9IUkVGfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge01BVEVSSUFMX1BST1ZJREVSU30gZnJvbSBcIm5nMi1tYXRlcmlhbC9hbGxcIjtcbmltcG9ydCB7SG9sZGVyc1NlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2hvbGRlcnMvSG9sZGVyc1NlcnZpY2VcIjtcblxuXG5cblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCxbUk9VVEVSX1BST1ZJREVSUyxIVFRQX1BST1ZJREVSUyxcbiAgICBCYWNrZ3JvdW5kU2VydmljZSxGb3JtZVNlcnZpY2UsQ291bGV1cnNTZXJ2aWNlLFBhcmFtZXRyYWdlc1NlcnZpY2UsU2lkZWJhck1lbnVTZXJ2aWNlLEhvbGRlcnNTZXJ2aWNlLE1BVEVSSUFMX1BST1ZJREVSUyxcbiAgICBwcm92aWRlKExvY2F0aW9uU3RyYXRlZ3ksIHsgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0pLFxuICAgIHByb3ZpZGUoQVBQX0JBU0VfSFJFRiwge3VzZVZhbHVlIDogJy8nIH0pXG5dKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
