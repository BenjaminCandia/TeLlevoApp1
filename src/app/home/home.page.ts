import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import type { Animation } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private animation!:Animation;

  constructor(private rutaActiva: ActivatedRoute,private animationCtrl: AnimationController) {}



  ionViewWillEnter() {
   
    this.playAnimation();
  }
  playAnimation() {
    const animation = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll("ion-item"))
      .fill('none')
      .iterations(1)
      .duration(400)
      .fromTo('opacity', '0', '1')
      .fromTo('transform', 'translateX(100%)', 'translateX(0)');
    animation.play();
  }
}
