///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {ROUTER_PROVIDERS} from "angular2/router";
//import {MATERIAL_PROVIDERS} from 'ng2-material/all';
import {BackgroundService} from "./services/background/BackgroundService";
import {LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from "angular2/http";
import {provide} from "angular2/core";
import {FormeService} from "./services/menu/FormeService";
import {CouleursService} from "./services/couleurs/CouleursService";
import {ParametragesService} from "./services/parametrages/parametragesService";
import {SidebarMenuService} from "./services/menu/SidebarMenuService";
import {APP_BASE_HREF} from "angular2/router";
import {MATERIAL_PROVIDERS} from "ng2-material/all";
import {HoldersService} from "./services/holders/HoldersService";




bootstrap(AppComponent,[ROUTER_PROVIDERS,HTTP_PROVIDERS,
    BackgroundService,FormeService,CouleursService,ParametragesService,SidebarMenuService,HoldersService,MATERIAL_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    provide(APP_BASE_HREF, {useValue : '/' })
]);
