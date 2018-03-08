import { Component, OnInit } from '@angular/core';
import {ProxyPortailService} from '../services/proxy-portail.service';
import { forEach } from '@angular/router/src/utils/collection';
import { ServiceService } from 'app/services/service.service';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  allservice :any;
  v:number;
  constructor(private proxy:ProxyPortailService,private  _services:ServiceService) { }

  ngOnInit() {
   this.proxy.allservice().subscribe(
      data=>{
          this.allservice=data;
          for(let i=0;i<data.length;i++){
            console.log(data[i]);
          }
         
      },err=>{
            console.log(err);
          });

//this.proxy.allServicesByEnseignant(1);
//this._services.getServiceByEnseignant(1);
  }
  }


