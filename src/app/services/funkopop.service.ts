import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "./global";
import { funkopop } from "../models/funkopop";

@Injectable()
export class FunkopopService {
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = Global.url;
    }

    getFunkoPop(id: string):Observable<any> {
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'funkopop/'+id, {headers: headers});
    }

    getFunkoPops():Observable<any> {
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'all', {headers: headers});
    }

    getSagaFunkoPop(saga: string):Observable<any> {
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+saga,{headers: headers});
    }

    saveFunko(funko: funkopop):Observable<any> {
        var params = JSON.stringify(funko);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'saveFunko',params,{headers: headers});
    }

    updateFunko(funko: funkopop):Observable<any> {
        var params = JSON.stringify(funko);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'/funkopop/'+funko._id,params,{headers: headers});
    }

    getUser(date:string){
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'getUser/'+date, {headers: headers});
    }
}