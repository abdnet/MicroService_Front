import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ProxyPortailService } from 'app/services/proxy-portail.service';

declare var $:any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{
    constructor(private _proxy:ProxyPortailService) { }
    public enseignant:number;
    public uniteEnseignement:number;
    public heurefaites:number;

    ngOnInit(){
            this.enseignant=1;
            this.heurefaites=this._proxy.getAllheure();
            this.uniteEnseignement=3;
       
}
}
