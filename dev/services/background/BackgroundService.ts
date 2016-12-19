/**
 * Created by root on 21/03/16.
 */
import {Injectable,EventEmitter,Output} from 'angular2/core';
import {Http} from "angular2/http";
import 'rxjs/add/operator/map';
import {Subject} from "rxjs/Subject";


@Injectable()
export class BackgroundService {

    public vue = new Subject();

    constructor(public http:Http) {

        this.http = http;
        this.imageChange('../../../dev/backgrounds/int4.png');
    }

    /*background variable link*/
    public _imageLink:string;


    get imageLink():string {
        return this._imageLink;
    }

    set imageLink(value:string) {
        this._imageLink = value;
    }

    /*parsing des images temoins */
    getjson() {
        return this.http.get('dev/JsonData/maisonsImages.json')
            .map(res => res.json())
    }

    /*action de changement de l image */

    public imageChange(lien:string):void {

        this._imageLink = lien;
    }

    /*recuperer l image selectionne */
    getImage() {
        return this._imageLink;
    }


}