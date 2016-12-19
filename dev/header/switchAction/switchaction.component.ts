/**
 * Created by root on 14/03/16.
 */
import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES,MATERIAL_PROVIDERS} from 'ng2-material/all';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {OnDestroy} from "angular2/core";
import {OnInit} from "angular2/core";
import {BackgroundService} from "../../services/background/BackgroundService";
import {MdSwitch} from "ng2-material/components/switcher/switch";


@Component({
    selector: 'switch',
    templateUrl: '../dev/header/switchAction/switchaction.component.html',
    styleUrls: ['../dev/header/switchAction/switchaction.component.css'],
    directives:[MdSwitch]

})
export class SwitchActionComponent implements OnInit, OnDestroy{

    public data: any = {
        sw: true,

    };
    public message = 'false';
    public onChange(cbState) {
        this.message = cbState;
    };

    constructor(public BackService: BackgroundService) {    }

    ngOnInit(){
    }

    ngOnDestroy(){

    }

    //transfert de l etait de vue ext ou int au service background
    public onSwitch(selected:any){
        this.BackService.vue.next(selected);
        if (selected==true){
        this.BackService.imageChange('../../../dev/backgrounds/int4.png')
        }
        else {
            this.BackService.imageChange('../../../dev/backgrounds/ext1.jpg')
        }

    };



}