import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { ServiceService } from 'app/services/service.service';
import { EnseignantService } from 'app/services/enseignant.service';
import { DiplomeService } from 'app/services/diplome.service';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class ProxyPortailService {

  constructor(private http:Http,private _services:ServiceService,private _enseignant:EnseignantService,private _diplome:DiplomeService ) { }
  public myDiplomes:any;
  serviceAllinfoDiplay: Array<{codeue: string,titreUE:string,maquette:string,hAFaire:number,hFaites:number,hBilan:number,responsableUE:string,verrouUE:boolean}> = []; 
  
  allservice(){
    /*return this.http.post('http://localhost:9999/addServiceProxy',
    {
      "ueId": "Service1243",
      "realise": false,
      "previsionel": "prov2",
      "etat": "etat2",
      "idEnseignant": 2
    }
  ).map(resp=>resp.json());
*/
    /*return this.http.post('http://localhost:9999/addDiplomeProxy',
      {
        "idDiplome": "dipZab",
        "semestre": "Semestre1",
        "volumehoraire": "VH3",
        "codeUe": "code1",
        "ueId": "Service12",
        "idEnseignant": 1
      }
    ).map(resp=>resp.json()); */
    //return this.http.get('http://localhost:9999/diplomes').map(resp=>resp.json()); 
    //marche pas     
//  return this.http.get('http://localhost:9999/services-service/serviceByEnseignant/1').map(resp=>resp.json()); 
    
    //marche pas 
    return this.http.get('http://localhost:3333/diplomeByidEnseignant/1').map(resp=>resp.json()); 
    //marche pas 
//return this.http.get('http://localhost:9999/services-service/serviceByEnseignant/1    ').map(resp=>resp.json());
   //return this.http.get('http://localhost:3333/').map(resp=>resp.json());
   //return this.http.get("http://localhost:9999/enseignants").map(resp=>resp.json());
    //return this.http.post("http://localhost:9999/addDiplomeProxy",this.testadd).map(resp=>resp.json());
    //return this.http.delete('http://localhost:9999/deleteDiplomesProxy/dip2').map(resp=>resp.json());

  }

  addDiplome(v){
    return this.http.post("http://localhost:9999/addDiplomeProxy",v).map(resp=>resp.json());
  }


allDiplome(){
  return this._diplome.getAlldiplome();  
}

allServicesByEnseignant(id){
   console.log(this.http.get('http://localhost:9999/services'));
  return "ok";

}

/*
  Mapping tableau d'accueil
*/
getDiplomeByEns(idEns){

   return this._diplome.getDiplomeByEns(idEns);

}

getAllEnseignant(){
  let Allens:any[];
  let a =0;
  let enseignants:any=[]; 
  var name:string;
 var  statut:string;
  var hAFaire:number;
 var hfaites:number;
 var bilan:number;
  this._enseignant.getAllEnseignant().subscribe(
    data=>{
      for(let i=0;i<data.length;i++){
        hAFaire=0;
        hfaites=0;
        bilan=0;
        name=data[i].nom+' '+data[i].prenom;
        this._services.getServiceByEnseignant(data[i].idEnseignant).subscribe(
          services=>{
            if(services.length>0){
            for(let j=0;j<services.length;j++){
              
                hAFaire=hAFaire+services[j].previsionel;
                hfaites=hfaites+services[j].realise;
                bilan=bilan+services[j].bilan;
            }}
            enseignants.push({id:data[i].idEnseignant,nomComplet:data[i].nom+" "+data[i].prenom,statut:data[i].statut,hFaire:hAFaire,hfaites:hfaites,bilan:bilan});
            hAFaire=0;
            hfaites=0;
            bilan=0;

        },err=>{
          console.log(err);          
        }
      );

      }
    },err=>{
          console.log(err);
        }
      );  
      return enseignants;

}

getAllheure(){
  var heuresfaites:number;
 
  
      for(let i=0;i< this._services.getAllservice().length;i++){
              heuresfaites+= this._services.getAllservice()[i].realise;
              console.log(heuresfaites);

      }
  

    return heuresfaites;

}

}
