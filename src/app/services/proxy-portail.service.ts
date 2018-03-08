import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { ServiceService } from 'app/services/service.service';
import { EnseignantService } from 'app/services/enseignant.service';
import { DiplomeService } from 'app/services/diplome.service';

@Injectable()
export class ProxyPortailService {

  constructor(private http:Http,private _services:ServiceService,_enseignant:EnseignantService,_diplome:DiplomeService ) { }

  serviceAllinfoDiplay: Array<{codeue: string,titreUE:string,maquette:string,hAFaire:number,hFaites:number,hBilan:number,responsableUE:string,verrouUE:boolean}> = []; 

  allservice(){
  

    /*return this.http.post('http://localhost:9999/addServiceProxy',JSON.stringify({
      "ueId": "Service31",
      "realise": false,
      "previsionel": "prov1",
      "etat": "etat1",
      "idEnseignant": 1
    })).map(resp=>resp.json()); */
    //return this.http.get('http://localhost:9999/diplomes').map(resp=>resp.json()); 
    //marche pas     
//  return this.http.get('http://localhost:9999/services-service/serviceByEnseignant/1').map(resp=>resp.json()); 
    
    //marche pas 
    //return this.http.get('http://localhost:9999/services-service/serviceByDiplome/dip1').map(resp=>resp.json()); 
    //marche pas 
// return this.http.get('http://localhost:9999/services-service/serviceByEnseignant/1    ').map(resp=>resp.json());
   return this.http.get('http://localhost:3333/').map(resp=>resp.json());
  //  return this.http.get("http://localhost:9999/enseignantProxy/1").map(resp=>resp.json());
    //return this.http.post("http://localhost:9999/addDiplomeProxy",this.testadd).map(resp=>resp.json());
}

  addDiplome(v){
    return this.http.post("http://localhost:9999/addDiplomeProxy",v).map(resp=>resp.json());
  }


allDiplome(){
  
  return this.http.get("http://localhost:9999/diplomes").map(resp=>resp.json());
}

allServicesByEnseignant(id){
   console.log(this.http.get('http://localhost:9999/services').map(resp=>resp.json()).subscribe(
    data=>{
        this.allservice=data;
          console.log(data);
       
    },err=>{
          console.log(err);
        }))
  return "ok";

}



}
