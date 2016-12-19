/**
 * Created by root on 23/02/16.
 */
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {SwitchActionComponent} from "./switchAction/switchaction.component";


@Component({
    selector: 'header',
    templateUrl: '../dev/header/header.component.html',
    styleUrls: ['../dev/header/header.component.css'],
    directives:[SwitchActionComponent]

})
export class HeaderComponent {

}
