import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}
@Component({
    selector: 'formation-cmp',
    moduleId: module.id,
    templateUrl: 'formation.component.html',
    styleUrls: ['./formation.component.css']

})


export class FormationComponent implements OnInit{
    public tableData: TableData;
    constructor() { }

  
    ngOnInit(){
    this.tableData = {
        headerRow: [ '#ID','Département','Maquette',  'Titre UE','Responsable','Volume horaire','Verrou'],
        dataRows: [
            ['INFO120',  'informatique','L1S1', 'Algorithme 1','Lopes stephane','200','Oui'],
            ['INFO120',  'informatique','L1S2', 'Algorithme 2','Lopes stephane', '200','Oui'],
            ['INFO120',  'informatique', 'L2S1','Algorithme 1', 'Lopes stephane','200','Oui'],
        ]
    };
   

    }
}
