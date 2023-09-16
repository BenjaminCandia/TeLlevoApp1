import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
  usuario:string="";
  contrasena:string="";

  constructor(private router: Router,private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
  }

  registrarse() {
    this.router.navigate(['/login']);
  }



}
