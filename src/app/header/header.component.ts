import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router
    ) { }

  usuario: String;

  contrasena:String;

  roles:String[] = ["Cliente","Trabajador","Admin"];

  role:String;

  loggearse():void{
    if(this.role == "Cliente")
    {
      this.role = "clientes";
    }
    else if(this.role == "Trabajador")
    {
      this.role = "trabajadores";
    }
    this.router.navigate(['/'+ this.role + '/' + this.usuario + '/' + this.contrasena ])
  }

  ngOnInit() {
  }

}