import { Component, OnInit } from '@angular/core';
import {ProxyPortailService} from '../services/proxy-portail.service';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  allservice :any;
  constructor(private proxy:ProxyPortailService) { }

  ngOnInit() {
    this.proxy.allservice().subscribe(
      data=>{
          this.allservice=data;
          console.log(data);
      },err=>{
            console.log(err);
          });

  }
  }


