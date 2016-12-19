/**
 * Created by firas on 21/04/16.
 */
import {Injectable,EventEmitter,Output} from 'angular2/core';
import {Http} from "angular2/http";
import 'rxjs/add/operator/map';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/Rx";


@Injectable()
export class HoldersService {

    public holders_list;



    //////////////////////////////////////

    constructor(public http:Http) {

        this.http = http;
        this.http.get('dev/JsonData/couleurs.json').map(res => res.json()).subscribe(holder => this.holders_list = holder)

    }

    /*parsing  */
    getjson() {
        return this.http.get('dev/JsonData/holders.json')
            .map(res => res.json())
    }


}
