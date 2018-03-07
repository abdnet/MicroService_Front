import { Component, OnInit } from '@angular/core';
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent implements OnInit {
  public tableData: TableData;
  constructor() { }


  ngOnInit(){
  this.tableData = {
      headerRow: [ '#ID','Nom/prénom','département','Statut','Heures à faire','Heures faites','Bilan'],
      dataRows: [
          ['1',  'Stephane Lopes','Informatique', 'Responsable','200','300','+100'],
          ['2',  'Yehia Yaher','Informatique', 'Enseignant','300','100','-200'],
         
      ]
  };
 

  }
}