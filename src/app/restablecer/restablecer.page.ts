import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  constructor(private router: Router,private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
  }

  restablecer() {
    this.router.navigate(['/login']);
  }
}
