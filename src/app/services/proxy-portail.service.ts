import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProxyPortailService {

  constructor(private http:Http ) { }



  allservice(){
    return this.http.get("http://localhost:3333/diplomes/jlong").map(resp=>resp.json());
}
}
