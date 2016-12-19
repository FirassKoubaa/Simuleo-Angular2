import {Component} from 'angular2/core';
import {HeaderComponent} from './header/header.component'
import {bootstrap} from '../node_modules/angular2/platform/browser.d';
import {SidebarComponent} from "./menu/sidebar/sidebar.component";
import {ContactComponent} from "./contact.component/contact.component";
import {ContentComponent} from "./simulation/content.component/content.component";
import {CouleursComponent} from "./menu/couleurs/couleurs.component/couleurs.component";
import {DefsComponent} from "./menu/couleurs/defs.component/defs.component";

@Component({
    selector: 'app',
    templateUrl: '../dev/app.component.html',
    styleUrls: ['../dev/app.component.css'],
    directives:[HeaderComponent,SidebarComponent,ContentComponent,ContactComponent,CouleursComponent,DefsComponent]

})
export class AppComponent {



}
